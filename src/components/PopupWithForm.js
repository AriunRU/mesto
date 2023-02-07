import {Popup} from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector)
    this._handleSubmitForm = handleSubmitForm
    this._formElement = this._popup.querySelector('.popup__form')
    this._forminput = Array.from(this._popup.querySelectorAll(".popup__input"))
  }

  _getInputValues() {
    this._inputValues = {}
    this._forminput.forEach((input) => {
      this._inputValues[input.name] = input.value;
    })
    return this._inputValues
  }

  setEventsListeners() {
    super.setEventsListeners()
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._getInputValues()
      this._handleSubmitForm(this._inputValues)
    })
  }

  close() {
    this._formElement.reset()
    super.close()
  }
}
