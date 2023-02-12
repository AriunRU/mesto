export class Card {
  constructor({ config, userId, handleCardClick, handleDeleteClick, handleLikeClick, handleLikeDelete }, templateSelector) {
    this._link = config.link;
    this._name = config.name;
    this._likes = config.likes;
    this._id = config.owner._id;
    this._cardId = config._id;
    this._userId = userId;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    this._handleLikeDelete = handleLikeDelete;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element__item")
      .cloneNode(true);
    return cardElement;
  }

  makingCard() {
    this._element = this._getTemplate();
    this._сardImage = this._element.querySelector(".element__img");

    this._сardImage.src = this._link;
    this._element.querySelector(".element__title").textContent = this._name;
    this._сardImage.alt = this._name;

    this._heartSum = this._element.querySelector(".element__heart-counter");
    this._heartButton = this._element.querySelector(".element__heart");
    this._removeButton = this._element.querySelector(".element__remove");

    this._getLikeSum()
    this._checkOwner()
    this._setEventListeners();

    this._likes.forEach(like => {
      if (like._id == this._userId) {
        this._heartButton.classList.add("element__heart_active")
      }
    })
    return this._element;
  }

  handleLikeCard(evt) {
    this._heartButton.classList.toggle("element__heart_active");
    this._likes = evt.likes;
    this._getLikeSum()
  }

  handleDeleteCard() {
    this._element.remove();
  }

  _checkOwner() {
    if (this._id !== this._userId) {
      this._removeButton.remove();
    }
  }

  _getLikeSum() {
    this._heartSum.textContent = this._likes.length
  }

  _setEventListeners() {
    this._heartButton.addEventListener("click", () => {
      if (this._heartButton.classList.contains("element__heart_active")) {
        this._handleLikeDelete(this._cardId)
      } else {
        this._handleLikeClick(this._cardId)
      }
    });
    this._removeButton.addEventListener("click", () => {
      this._handleDeleteClick(this._cardId)
    });
    this._сardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}