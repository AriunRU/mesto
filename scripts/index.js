//Создание переменных из профиля
const btnEdit = document.querySelector(".profile__edit-button"); // кнопка карандашик
const btnAdd = document.querySelector(".profile__add-button"); // кнопка плюсик
const buttonClose = document.querySelector(".popup__close"); //Кнопка крестик
const buttonCloseEdit = document.querySelector("#popup__close_edit");
const buttonCloseAdd = document.querySelector("#popup__close_add");
const buttonCloseImg = document.querySelector("#popup__close_img");

const username = document.querySelector(".profile__name"); // Имя
const job = document.querySelector(".profile__job"); // Проффессия
//Создание переменных из карточек
const massElements = document.querySelector(".elements"); // Массив
const elemTemp = document.querySelector(".element-sample").content;
const listElement = massElements.querySelector(".element"); //Один эл. масс.
//Создание переменных из попапа
const nameInput = document.querySelector("#popup__type_name"); // строка с изменением имени
const jobInput = document.querySelector("#popup__type_job"); // строка с изменением проффессии
const titleInput = document.querySelector("#popup__type_title"); // строка с внесением названия
const linkInput = document.querySelector("#popup__type_link"); // строка с внесением ссылки на картинку
const popupImage = document.querySelector(".popup__image"); // секция с увеличением картинки
const popupCaption = document.querySelector(".popup__caption"); // название под фото при увеличении
const popupImg = document.querySelector(".popup_image"); // увеличение фото
const popupAddSubject = document.querySelector(".popup_type_add"); // попап с добавлением элемента
const popupProfile = document.querySelector(".popup_type_edit"); // попап с инфой
const popupFormAdd = document.querySelector("#popup__form_add"); // строка с внесением ссылки на картинку
const editSample = document.querySelector("#popup__form_edit"); // Измениние профиля

function renderList(info) {
  info.forEach((item) => renderCard(item));
}

function renderCard(info) {
  const newCard = createCard(info);
  listElement.prepend(newCard);
}
  
function createCard(info) { // создание новой карточки
  const itemElem = elemTemp.querySelector(".element__item");
  const clonedElem = itemElem.cloneNode(true);
  const imageElement = clonedElem.querySelector(".element__img");
  const titleElement = clonedElem.querySelector(".element__title");
  const btnRemoveElement = clonedElem.querySelector(".element__remove");
  const likeElement = clonedElem.querySelector(".element__heart");
  imageElement.src = info.link;
  imageElement.alt = info.name;
  titleElement.textContent = info.name;

  btnRemoveElement.addEventListener("click", deleteCard);

  likeElement.addEventListener("click", elementLikeActive);

  imageElement.addEventListener("click", openPopupImage);

  return clonedElem;
}
renderList(initialCards);

function openPopup(popup) { // Функция открытия попапа
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeOnEscape);
  popup.addEventListener('click', clickOverlayPopup);
}

function openPopupProfile(evt) {
  addPopupValue(evt);
  openPopup(popupProfile);
}

function addPopupValue() {
  nameInput.value = username.textContent;
  jobInput.value = job.textContent;
}

function handleSavePopup(evt) { // Сохранение новой записи с закрытием
  evt.preventDefault();
  username.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup(popupProfile);
}

function deleteCard(evt) { // Функция удаления карточки
  evt.target.closest(".element__item").remove();
}

function elementLikeActive(evt) { // Функция Лайка карточки
  evt.target.classList.toggle("element__heart_active");
}

function openPopupImage(evt) { // Функция увеличения карточки
  openPopup(popupImg);
  popupImage.src = `${evt.target.src}`;
  popupCaption.textContent = `${evt.target.alt}`;
  popupImage.alt = `${evt.target.alt}`;
}

function openPopupAddSubject() {
  openPopup(popupAddSubject);
  titleInput.value = "";
  linkInput.value = "";
}

function addElement(evt) {
  evt.preventDefault();
  let name = titleInput.value;
  let link = linkInput.value;
  renderCard({ name, link });
  closePopup(popupAddSubject);
}

function closePopup(popup) { // Закрытие попапа
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeOnEscape);
  popup.removeEventListener('click', clickOverlayPopup);
}

function clickOverlayPopup(evt) { //закрытие попапа через оверлей
  if (evt.target.closest('.popup')) {
      closePopup(evt.target);
  }
}

function closeOnEscape(evt) { // закрытие через esc
  let popup;
  if (evt.key === "Escape") {
    popup = document.querySelector(".popup_opened");
    closePopup(popup);
  }
}

buttonCloseEdit.addEventListener('click', function () {
  closePopup(popupProfile);
});

buttonCloseAdd.addEventListener('click', function () {
  closePopup(popupAddSubject);
});

buttonCloseImg.addEventListener('click', function () {
  closePopup(popupImg);
});

btnEdit.addEventListener("click", openPopupProfile);
editSample.addEventListener("submit", handleSavePopup); 

btnAdd.addEventListener("click", openPopupAddSubject);
popupFormAdd.addEventListener("submit", addElement);