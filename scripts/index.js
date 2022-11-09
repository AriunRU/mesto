import Card from './Card.js';
import FormValidator from './FormValidator.js';

//Создание переменных из профиля
const btnEdit = document.querySelector(".profile__edit-button"); // кнопка карандашик
const btnAdd = document.querySelector(".profile__add-button"); // кнопка плюсик
const buttonCloseEdit = document.querySelector("#popup__close_edit");
const buttonCloseAdd = document.querySelector("#popup__close_add");
const buttonCloseImg = document.querySelector("#popup__close_img");

const username = document.querySelector(".profile__name"); // Имя
const job = document.querySelector(".profile__job"); // Проффессия
//Создание переменных из карточек
const massElements = document.querySelector(".elements"); // Массив
//Создание переменных из попапа
const nameInput = document.querySelector("#popup__type_name"); // строка с изменением имени
const jobInput = document.querySelector("#popup__type_job"); // строка с изменением проффессии
const titleInput = document.querySelector("#popup__type_title"); // строка с внесением названия
const linkInput = document.querySelector("#popup__type_link"); // строка с внесением ссылки на картинку
const popupImage = document.querySelector(".popup__image"); // секция с увеличением картинки
const popupCaption = document.querySelector(".popup__caption"); // название под фото при увеличении
const popupImg = document.querySelector(".popup_image"); // увеличение фото
const popupAdd = document.querySelector(".popup_type_add"); // попап с добавлением элемента
const buttonAdd = document.querySelector("#buttonAdd");
const popupEdit = document.querySelector(".popup_type_edit"); // попап с инфой
const popupFormAdd = document.querySelector("#popup__form_add");
const popupEditElement = popupEdit.querySelector('.popup__container');
const popupEditContent = popupEditElement.querySelector('.popup__form');
const popupAddElement = popupAdd.querySelector('.popup__container');
const popupAddContent = popupAddElement.querySelector('.popup__form');


// Функция открытия попапа
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeOnEsc);
  popup.addEventListener("click", clickOverlayPopup);
}

// Закрытие попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeOnEsc);
  popup.removeEventListener("click", clickOverlayPopup);
}

//закрытие попапа через оверлей
function clickOverlayPopup(evt) {
  if (evt.target.closest(".popup")) {
    closePopup(evt.target);
  }
}

// закрытие через esc
function closeOnEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

buttonCloseEdit.addEventListener("click", function () {
  closePopup(popupEdit);
});

buttonCloseAdd.addEventListener("click", function () {
  closePopup(popupAdd);
});

buttonCloseImg.addEventListener("click", function () {
  closePopup(popupImg);
});

btnEdit.addEventListener("click", function () {
  openPopup(popupEdit);
  editPopupValue();
});

btnAdd.addEventListener("click", function () {
  openPopup(popupAdd);
  setDefaultPopup();
});

function setDefaultPopup() {
  buttonAdd.classList.add("popup__button_disabled");
  buttonAdd.disabled = true;
  popupFormAdd.reset();
}

const initialCards = [
  {
    name: "Презрение",
    link: "./image/elements/1.jpeg",
  },
  {
    name: "Страх",
    link: "./image/elements/2.jpeg",
  },
  {
    name: "Маленькость",
    link: "./image/elements/3.jpg",
  },
  {
    name: "Голод",
    link: "./image/elements/4.jpg",
  },
  {
    name: "Наглость",
    link: "./image/elements/5.jpg",
  },
  {
    name: "Печаль",
    link: "./image/elements/6.jpg",
  },
];

function editPopupValue() {
  nameInput.value = username.textContent;
  jobInput.value = job.textContent;
}

// сабмит на форму профайла
function handleEditSubmit(evt) {
  evt.preventDefault();

  const profileNameInput = nameInput.value;
  const profileJobInput = jobInput.value;
  
  username.textContent = profileNameInput;
  job.textContent = profileJobInput;
  closePopup(popupEdit);
}

const openPopupImage = (caption, link) => {
  popupImage.src = link;
  popupImage.setAttribute('alt', caption);
  popupCaption.textContent = caption;
  openPopup(popupImg)
};

const handleAddSubmit = function (evt) {
  evt.preventDefault();
  const info = {
    name: titleInput.value,
    link: linkInput.value,
  }
  const card = new Card(info, '.element', openPopupImage)
  massElements.prepend(card.addElementCard());
  evt.target.reset();
  closePopup(popupAdd);
};

initialCards.forEach(element => {
  const card = new Card(element, '.element', openPopupImage)
  massElements.append(card.addElementCard())
});


const enableValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  disabledButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_error",
  errorClass: "popup__error_visible",
};

popupEditContent.addEventListener('submit', handleEditSubmit);
popupAddContent.addEventListener('submit', handleAddSubmit);

const validEdit = new FormValidator(enableValidation, popupEdit);
const validAdd = new FormValidator(enableValidation, popupAdd);
validEdit.enableValidation();
validAdd.enableValidation();