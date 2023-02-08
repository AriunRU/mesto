class Card {
  constructor(data, template, handleClickCard) {
    this._template = template
    this._handleCardClick = handleClickCard
    this._place = data.place
    this._link = data.link
  }

  _getTemplate() {
    return document
      .querySelector(this._template)
      .content
      .querySelector('.element__item')
      .cloneNode(true)
  }

  generateCard() {
    this._element = this._getTemplate()
    this._cardImage = this._element.querySelector('.element__img')
    this._cardImage.style.backgroundImage = `url(${this._link}`
    this._element.querySelector('.element__title').textContent = this._place
    this._setEventListeners()
    return this._element
  }

  _handleRemoveItem() {
    this._element.remove()
    this._element = null
  }

  _handleLikeButtonSwitch() {
    this._buttonLike.classList.toggle('element__heart_active')
  }

  _setEventListeners() {
    this._buttonLike = this._element.querySelector('.element__heart')
    this._buttonLike.addEventListener('click', () => this._handleLikeButtonSwitch())
    const buttonDelete = this._element.querySelector('.element__remove')
    buttonDelete.addEventListener('click', () => this._handleRemoveItem())
    this._cardImage.addEventListener('click', () =>
      this._handleCardClick(this._link, this._place))
  }
}

export {Card}

