import { Popup } from './Popup.js';

export class PopupWithSubmit extends Popup {
  constructor(popup) {
    super(popup);
    this._popupForm = this._popup.querySelector(".popup__form");
  }

  letSubmit(handleDelete) {
    this.submitForm = handleDelete;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.submitForm(this);
    });
  }
}
