
export const popupAddCard = document.querySelector(".popup_type_add"),
 popupProfile = document.querySelector(".popup_type_edit"),
 formProfile = document.querySelector(".popup__form_edit"),
 nameInput = formProfile.querySelector("#popup__type_name"),
 jobInput = formProfile.querySelector("#popup__type_job"),
 profile = document.querySelector(".profile"),
 openAddCardPopup = profile.querySelector(".profile__add-button"),
 openEditProfilePopup = profile.querySelector(".profile__edit-button"),
 popupConfirmRemove = document.querySelector('.popup_type_confirm'),
 popupImage = document.querySelector(".popup_image"),
 popupAvatar = document.querySelector('.popup_type_avatar'),
 openPopupAvatar = document.querySelector('.profile__image-button'),
 formNewCard = document.querySelector(".popup__form_add"),
 formAvatar = document.querySelector(".popup__form_avatar")

export const configValidation = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  disabledButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_error",
  errorClass: "popup__error_visible",
};
