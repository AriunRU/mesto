import './index.css';
import {Card} from '../components/Card.js';
import {initialCards} from '../utils/cards.js';
import {FormValidator} from '../components/FormValidator.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {Section} from '../components/Section.js';
import {UserInfo} from '../components/UserInfo.js';
import * as constants from '../utils/constants.js';

const userInfo = new UserInfo(constants.userName, constants.job)
const imageZoomPopup = new PopupWithImage(constants.popupImg)
const profileEditForm = new PopupWithForm(constants.popupEdit, editFormSubmitData)
const cardPopup = new PopupWithForm(constants.popupAdd, addCardForm)
const popupFormValidation = new FormValidator(constants.configValidation, constants.popupEditForm);
const cardFormValidation = new FormValidator(constants.configValidation, constants.addCardForm);
const cardSection = new Section({item: initialCards, renderer: renderCard}, constants.massElements)

function renderCard(data) {
  cardSection.addCard(createCard(data))
}

const createCard = (data) => {
  return new Card(data, constants.cardElement, handleClickCard).generateCard()
}

function profileEditFormOpen() {
  const data = userInfo.getUserInfo()
  constants.nameInput.value = data.name
  constants.jobInput.value = data.job
  popupFormValidation.resetValidation()
  profileEditForm.open()
}

function editFormSubmitData(formData) {
  userInfo.setUserInfo(formData);
  profileEditForm.close()
}

function cardFormOpen() {
  cardFormValidation.resetValidation();
  cardPopup.open()
}

function addCardForm(data) {
  renderCard(data)
  cardPopup.close()
}

const handleClickCard = (link, name) => imageZoomPopup.open(link, name)

popupFormValidation.enableValidation()
cardFormValidation.enableValidation()
profileEditForm.setEventsListeners()
cardSection.renderItems();
cardPopup.setEventsListeners()
imageZoomPopup.setEventsListeners()

constants.buttonAddCard.addEventListener('click', cardFormOpen)
constants.profileButton.addEventListener('click', profileEditFormOpen)

export {handleClickCard}
