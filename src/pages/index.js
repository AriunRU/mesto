import './index.css';
import {Card} from '../components/Card.js';
import {initialCards} from '../utils/cards.js';
import {FormValidator} from '../components/FormValidator.js';
import {PopupWithImage} from '../components/PopopWithImage.js';
import {PopupWithForm} from '../components/PopopWithForm.js';
import {Section} from '../components/Section.js';
import {UserInfo} from '../components/UserInfo.js';
import * as constants from '../utils/constants.js';

const userInfo = new UserInfo(constants.userNameSelector, constants.userAboutSelector)
const imageViewPopup = new PopupWithImage(constants.imagePopupSelector)
const profileEditFormPopup = new PopupWithForm(constants.profileEditPopupSelector, handleProfileEditFormSubmitData)
const newCardPopup = new PopupWithForm(constants.newCardPopupSelector, handleSubmitAddCardForm)
const profileFormValidation = new FormValidator(constants.enableValidation, constants.profileEditForm);
const newCardFormValidation = new FormValidator(constants.enableValidation, constants.newCardForm);
const cardSection = new Section({items: initialCards, renderer: renderCard}, constants.cardsSection)

function renderCard(cardData) {
  cardSection.addCard(createCard(cardData))
}

const createCard = (cardData) => {
  return new Card(cardData, constants.cardTemplateSelector, handleCardClick).generateCard()
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

function handleSubmitAddCardForm(cardData) {
  renderCard(cardData)
  newCardPopup.close()
}

const handleCardClick = (link, name) => imageViewPopup.open(link, name)

profileFormValidation.enableValidation()
newCardFormValidation.enableValidation()
profileEditFormPopup.setEventsListeners()
cardSection.renderItems();
newCardPopup.setEventsListeners()
imageViewPopup.setEventsListeners()

constants.buttonNewCard.addEventListener('click', handleNewCardFormOpen)
constants.profileButton.addEventListener('click', handleProfileEditFormOpen)

export {handleCardClick}
