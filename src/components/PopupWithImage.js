import Popup from './Popup.js'

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._popupImageElement = this._popup.querySelector('.popup__image')
    this._popupImageTitleElement = this._popup.querySelector('.popup__caption')
  }

  open(link, name) {
    super.open()
    this._popupImageElement.src = link
    this._popupImageElement.alt = `Фото: ${name}`
    this._popupImageTitleElement.textContent = name
  }
}
