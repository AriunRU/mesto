export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector)
  }

  open() {
    this._popup.classList.add('popup_opened');
    this._closeOnEsc = this._closeOnEsc.bind(this)
    document.addEventListener('keydown', this._closeOnEsc)
  }

  close() {
    this._popup.classList.remove('popup_opened')
    document.removeEventListener('keydown', this._closeOnEsc)
  }

  _closeOnEsc(evt) {
    if (evt.code === 'Escape') {
      this.close()
    }
  }

  setEventsListeners() {
    this._popup.addEventListener('click', (evt) => {
      if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')) {
        this.close();
      }
    })
  }
}


