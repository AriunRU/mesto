import './index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithSubmit } from '../components/PopupWithSubmit.js';
import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';
import { configValidation } from '../utils/constants';
import * as constants from '../utils/constants.js';
let userId

const popupProfileForm = new PopupWithForm(constants.popupProfile, submitPopupProfile);
const popupWithImage = new PopupWithImage(constants.popupImage);
const popupCard = new PopupWithForm(constants.popupAddCard, submitPopupCard);
const popupConfirm = new PopupWithSubmit(constants.popupConfirmRemove);
const popupAvatarForm = new PopupWithForm(constants.popupAvatar, submitPopupAvatar);
const configValidator = new FormValidator(configValidation, constants.formProfile);
const cardValidator = new FormValidator(configValidation, constants.formNewCard);
const avatarValidator = new FormValidator(configValidation, constants.formAvatar);

const api = new Api({
  url: 'https://nomoreparties.co/v1/cohort-58',
  headers: {
    authorization: '2e4da387-210d-4156-b421-ffadc6c7daf6',
    'Content-Type': 'application/json'
  }
});

Promise.all([api.getUsersApi(), api.getInitialCards()])
  .then(([user, cards]) => {
    userId = user._id;
    userInfo.letUserInfo(user.name, user.about);
    userInfo.letUserAvatar(user.avatar);
    cardList.renderItems(cards);
  })
  .catch(err => {
    console.log(err);
  });

const userInfo = new UserInfo({
  name: ".profile__name",
  job: ".profile__job",
  avatar: ".profile__image"
});

function submitPopupAvatar(value) {
  popupAvatarForm.renderLoading(true)
  api.avatarNewUser(value.avatar)
    .then(user => {
      userInfo.letUserAvatar(user.avatar);
      popupAvatarForm.close()
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAvatarForm.renderLoading(false)
    });
}

function submitPopupProfile(value) {
  popupProfileForm.renderLoading(true)
  api.infoNewUser(value.name, value.job)
    .then(user => {
      userInfo.letUserInfo(user.name, user.about);
      popupProfileForm.close()
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupProfileForm.renderLoading(false)
    });
}

function createCard(item) {
  const card = new Card({
    config: item, userId: userId,
    handleCardClick: (name, link) => {
      popupWithImage.open(link, name);
    },
    handleDeleteClick: (cardId) => {
      popupConfirm.open()
      popupConfirm.letSubmit(() => {
        api.removeCard(cardId)
          .then(() => {
            card.handleDeleteCard()
            popupConfirm.close()
          })
          .catch((err) => {
            console.log(err);
          });
      })
    },
    handleLikeClick: (cardId) => {
      api.likeCard(cardId)
        .then((evt) => {
          card.handleLikeCard(evt)
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleLikeDelete: (cardId) => {
      api.deleteLike(cardId)
        .then((evt) => {
          card.handleLikeCard(evt)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, ".element");

  const cardItem = card.makingCard();
  return cardItem;
}

function submitPopupCard(config) {
  popupCard.renderLoading(true)
  api.newCard(config.place, config.link)
    .then((e) => {
      cardList.addItemPrep(createCard(e));
      popupCard.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupCard.renderLoading(false)
    });
}

constants.openPopupAvatar.addEventListener("click", () => {
  popupAvatarForm.open();
  avatarValidator.resetValidation();
});

constants.openEditProfilePopup.addEventListener("click", () => {
  popupProfileForm.open();
  const input = userInfo.getUserInfo();
  constants.nameInput.value = input.name;
  constants.jobInput.value = input.job;
  configValidator.resetValidation();
});

constants.openAddCardPopup.addEventListener("click", () => {
  popupCard.open()
  cardValidator.resetValidation();
});

const cardList = new Section(
  {
    renderer: (item) => {
      cardList.addItem(createCard(item));
    },
  }, ".elements"
);

cardValidator.enableValidation()
configValidator.enableValidation()
avatarValidator.enableValidation()
popupWithImage.setEventListeners();
popupCard.setEventListeners();
popupProfileForm.setEventListeners();
popupConfirm.setEventListeners();
popupAvatarForm.setEventListeners();