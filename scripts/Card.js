export default class Card {
  constructor(data, templateSelector, openPopup) {
    this._templateSelector = templateSelector;
    this._name = data.name;
    this._link = data.link;
    this._openPopup = openPopup;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .cloneNode(true);
    return cardElement;
  }

  addElementCard() { 
    const elementCard = this._getTemplate();
    const elementImage = elementCard.querySelector('.element__img');
    elementImage.src = this._link;
    elementImage.alt = this._name;
    elementCard.querySelector('.element__title').textContent = this._name;
    elementImage.setAttribute('alt', this._name);
    elementImage.addEventListener('click', () => {
    this._openPopup(this._name, this._link);
    });
    //лайк
    const likeElement = elementCard.querySelector('.element__heart');
    function elementLikeActive(evt) {
      evt.target.classList.toggle("element__heart_active");
    }
    likeElement.addEventListener('click', elementLikeActive);
    // корзина
    const deleteCard = elementCard.querySelector('.element__remove');
    function deleteCardItem(evt) {
      evt.target.closest(".element__item").remove();
    }
    deleteCard.addEventListener('click', deleteCardItem);
    return elementCard;
  }
}