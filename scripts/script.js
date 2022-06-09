const popup = document.querySelector('.popup'),
popupToggle = document.querySelector('.profile__edit-button'),
popupClose = document.querySelector('.popup__closed'),
popupName = document.querySelector('.popup__input_name'),
popupProfession = document.querySelector('.popup__input_profession'),
popupSubmit = document.querySelector('.popup__submit-btn');

const popupTitle = document.querySelector('.profile__name'),
popupSubtitle = document.querySelector('.profile__text');
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
