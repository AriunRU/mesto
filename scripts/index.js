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
const elemTemp = document.querySelector(".element-sample").content;
const listElement = massElements.querySelector(".element"); //Один эл. масс.
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
const popupFormAdd = document.querySelector("#popup__form_add"); // строка с внесением ссылки на картинку
const popupFormEdit = document.querySelector("#popup__form_edit"); // Измениние профиля

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
});

function editPopupValue() {
  nameInput.value = username.textContent;
  jobInput.value = job.textContent;
}

// Сохранение новой записи с закрытием
function editElement(evt) {
  evt.preventDefault();
  username.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup(popupEdit);
}

// Функция удаления карточки
function deleteCard(evt) {
  evt.target.closest(".element__item").remove();
}

// Функция Лайка карточки
function elementLikeActive(evt) {
  evt.target.classList.toggle("element__heart_active");
}

// Функция увеличения карточки
function openPopupImage(evt) {
  popupImage.src = `${evt.target.src}`;
  popupCaption.textContent = `${evt.target.alt}`;
  popupImage.alt = `${evt.target.alt}`;
  openPopup(popupImg);
}

function addElement(evt) {
  evt.preventDefault();
  const info = {
    name: titleInput.value,
    link: linkInput.value,
  };
  const inputList = Array.from(popupAdd.querySelectorAll('.popup__input'));
  const buttonElement = popupAdd.querySelector('.popup__button'); 

  popupFormAdd.reset();
  renderCard(info);
  closePopup(popupAdd);
  toggleButtonState(inputList, buttonElement, { disabledButtonClass: "popup__button_disabled" });
}

// создание новой карточки
function createCard(info) {
  const itemElem = elemTemp.querySelector(".element__item");
  const clonedElem = itemElem.cloneNode(true);
  const imageElement = clonedElem.querySelector(".element__img");
  const titleElement = clonedElem.querySelector(".element__title");
  const btnRemoveElement = clonedElem.querySelector(".element__remove");
  const likeElement = clonedElem.querySelector(".element__heart");
  imageElement.src = info.link;
  imageElement.alt = info.name;
  titleElement.textContent = info.name;

  btnRemoveElement.addEventListener("click", deleteCard);

  likeElement.addEventListener("click", elementLikeActive);

  imageElement.addEventListener("click", openPopupImage);

  return clonedElem;
}

initialCards.forEach(renderCard);

function renderCard(info) {
  const newCard = createCard(info);
  listElement.prepend(newCard);
}

popupFormAdd.addEventListener("submit", addElement);
popupFormEdit.addEventListener("submit", editElement);
