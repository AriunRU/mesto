import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup)
    this._imgElem = this._popup.querySelector('.popup__image')
    this._imgTitleElem = this._popup.querySelector('.popup__caption')
  }

  open(link, name) {
    super.open()
    this._imgElem.src = link
    this._imgElem.alt = name
    this._imgTitleElem.textContent = name
  }
}
