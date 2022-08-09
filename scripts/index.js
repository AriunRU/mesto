const popup = document.querySelector('.popup');
const popupToggle = document.querySelector('.profile__edit-button');
const popupClose = document.querySelector('.popup__close');
const popupName = document.querySelector('.popup__input_type_name');
const popupProfession = document.querySelector('.popup__input_type_profession');

const popupTitle = document.querySelector('.profile__name');
const popupSubtitle = document.querySelector('.profile__text');
//открыть
function openPopup() {
    popup.classList.add('popup_opened');
    popupName.value = popupTitle.textContent;
    popupProfession.value = popupSubtitle.textContent;
};

//закрть
function closePopup() {
    popup.classList.remove('popup_opened');
};

let popupForm = document.querySelector('.popup__form');

function formSubmitHandler (evt) {
evt.preventDefault();
popupTitle.textContent = popupName.value;
popupSubtitle.textContent = popupProfession.value;
closePopup();
};

popupForm.addEventListener('submit', formSubmitHandler);
popupClose.addEventListener('click', closePopup);
popupToggle.addEventListener('click', openPopup);
