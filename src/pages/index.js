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
const imageViewPopup = new PopupWithImage(constants.popupImg)
const profileEditFormPopup = new PopupWithForm(constants.popupEdit, handleProfileEditFormSubmitData)
const newCardPopup = new PopupWithForm(constants.popupAdd, handleSubmitAddCardForm)
const profileFormValidation = new FormValidator(constants.configValidation, constants.popupEditForm);
const newCardFormValidation = new FormValidator(constants.configValidation, constants.addCardForm);
const cardSection = new Section({item: initialCards, renderer: renderCard}, constants.massElements)

function renderCard(data) {
  cardSection.addCard(createCard(data))
}

const createCard = (data) => {
  return new Card(data, constants.cardElement, handleClickCard).generateCard()
}

function handleProfileEditFormOpen() {
  const userData = userInfo.getUserInfo()
  constants.nameInput.value = userData.name
  constants.jobInput.value = userData.job
  profileFormValidation.resetValidation()
  profileEditFormPopup.open()
}

function handleProfileEditFormSubmitData(formData) {
  userInfo.setUserInfo(formData);
  profileEditFormPopup.close()
}

function handleNewCardFormOpen() {
  newCardFormValidation.resetValidation();
  newCardPopup.open()
}

function handleSubmitAddCardForm(data) {
  renderCard(data)
  newCardPopup.close()
}

const handleClickCard = (link, name) => imageViewPopup.open(link, name)

profileFormValidation.enableValidation()
newCardFormValidation.enableValidation()
profileEditFormPopup.setEventsListeners()
cardSection.renderItems();
newCardPopup.setEventsListeners()
imageViewPopup.setEventsListeners()

constants.buttonAddCard.addEventListener('click', handleNewCardFormOpen)
constants.profileButton.addEventListener('click', handleProfileEditFormOpen)

export {handleClickCard}
