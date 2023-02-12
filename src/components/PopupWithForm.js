import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popup, submitForm) {
    super(popup);
    this._submitForm = submitForm;
    this._formInputs = Array.from(this._popup.querySelectorAll(".popup__input"));
    this._popupForm = this._popup.querySelector(".popup__form");
    this._buttonSave = this._popup.querySelector('.popup__button');
    this._buttonSaveLoading = this._buttonSave.textContent;
  }

  _getInputValues() {
    this._formInputValues = {};
    this._formInputs.forEach((input) => {
      this._formInputValues[input.name] = input.value;
    });
    return this._formInputValues;
  }

  renderLoading(isLoading, loadingText = 'Сохранение...') {
    if (isLoading) {
      this._buttonSave.textContent = loadingText
    } else {
      this._buttonSave.textContent = this._buttonSaveLoading;
    }
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
    });
  }
}
