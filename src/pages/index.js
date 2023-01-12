import './index.css';

import Card from './components/Card.js';
import {initialCards} from './components/cards.js';
import FormValidator from './components/FormValidator.js';
import Popup from './components/Popup.js';
import PopopWithForm from './components/PopopWithForm.js';
import PopopWithImage from './components/PopopWithImage.js';
import Section from './components/Section.js';
import UserInfo from './components/UserInfo.js';

const fullElementCard = {
  card: '.element__item',
  img: '.element__img',
  text: '.element__title',
  like: '.element__heart',
  deleteBtn: '.element__remove',
  popupPhoto: '.popup_image',
  popupPhotoImg: '.popup__image',
  popupPhotoText: '.popup__caption',
  popupPhotoCloseBtn: '.popup__close'
};

const enableValidation = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  disabledButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_error",
  errorClass: "popup__error_visible",
};

//Создание переменных из профиля
const btnEdit = document.querySelector(".profile__edit-button"); // кнопка карандашик
const btnAdd = document.querySelector(".profile__add-button"); // кнопка плюсик
const buttonCloseEdit = document.querySelector("#popup__close_edit");
const buttonCloseAdd = document.querySelector("#popup__close_add");
const buttonCloseImg = document.querySelector("#popup__close_img");

const username = document.querySelector(".profile__name"); // Имя
const job = document.querySelector(".profile__job"); // Проффессия
//Создание переменных из карточек
const massElements = document.querySelector(".elements");
const cardElement = document.querySelector(".element").content;
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




function editPopupValue() {
  nameInput.value = username.textContent;
  jobInput.value = job.textContent;
}

function handleEditSubmit(evt) {
  evt.preventDefault();
  const profileNameInput = nameInput.value;
  const profileJobInput = jobInput.value
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

function createCard(data) {
  const card = new Card(data, cardElement, fullElementCard, openPopupImage);
  const element = card.createCard();
  return element;
}

function addNewCard() {
  const name = titleInput.value;
  const link = linkInput.value;
  const cardItem = createCard({name, link});
  massElements.prepend(cardItem);
}

const handleAddSubmit = function (evt) {
  evt.preventDefault();
  addNewCard();
  evt.target.reset();
  closePopup(popupAdd);
};

initialCards.forEach(function (evt) {
  const card = createCard(evt);
  massElements.append(card);
});

popupEditContent.addEventListener('submit', handleEditSubmit);
popupAddContent.addEventListener('submit', handleAddSubmit);

const validEdit = new FormValidator(enableValidation, popupEdit);
const validAdd = new FormValidator(enableValidation, popupAdd);
validEdit.enableValidation();
validAdd.enableValidation();