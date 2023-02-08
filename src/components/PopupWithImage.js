import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._imageElement = this._popup.querySelector('.popup__image')
    this._imageTitleElement = this._popup.querySelector('.popup__caption')
  }

  open(link, name) {
    super.open()
    this._imageElement.src = link
    this._imageElement.alt = `Фото: ${name}`
    this._imageTitleElement.textContent = name
  }
}
