export class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._closeEsc = this._closeEsc.bind(this)
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._closeEsc)
  }

  close() {
    this._popup.classList.remove('popup_opened')
    document.removeEventListener('keydown', this._closeEsc)
  }

  _closeEsc(evt) {
    if (evt.code === 'Escape') {
      this.close()
    }
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')) {
        this.close();
      }
    })
  }
}


