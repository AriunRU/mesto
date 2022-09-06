//Создание переменных из профиля
const btnEdit = document.querySelector(".profile__edit-button"); // кнопка карандашик
const btnAdd = document.querySelector(".profile__add-button"); // кнопка плюсик
const buttonsClose = document.querySelectorAll(".popup__close"); //Кнопка крестик

const name = document.querySelector(".profile__name"); // Имя
const job = document.querySelector(".profile__job"); // Проффессия
//Создание переменных из карточек
const MassElements = document.querySelector(".elements"); // Массив
const listElement = MassElements.querySelector(".element"); //Один эл. масс.
//Создание переменных из попапа
const nameInput = document.querySelector(".popup__input_name"); // строка с изменением имени
const jobInput = document.querySelector(".popup__input_job"); // строка с изменением проффессии
const editSample = document.querySelector(".popup__edit_sample"); // Измениние профиля
const titleInput = document.querySelector(".popup__input_title"); // строка с внесением названия
const linkInput = document.querySelector(".popup__input_link"); // строка с внесением ссылки на картинку

const popupImage = document.querySelector(".popup__image"); // секция с увеличением картинки
const popupCaption = document.querySelector(".popup__caption"); // название под фото при увеличении
const popupImgfull = document.querySelector(".popup_image_full"); // увеличение фото
const popupAddsubject = document.querySelector(".popup_add_subject"); // добавление элемента
const popupProfile = document.querySelector(".popup_edit"); // попап с инфой
const popupFormAdd = document.querySelector(".popup__form_add"); // строка с внесением ссылки на картинку

function renderList(info) { // Проверка массива
  info.forEach((item) => renderCard(item));
}

function renderCard(info) {
  const newCard = createCard(info);
  listElement.prepend(newCard);
}

function createCard(info) { // создание новой карточки
  const elemTemp = document.querySelector(".element-sample").content;
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
}

function openPopupProfile(evt) {
  addPopupValue(evt);
  openPopup(popupProfile);
}

function addPopupValue() {
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
}

function closePopup(popup) { // Закрытие попапа
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeOnEscape);
  document.removeEventListener("mousedown", closeOnOverlay);
}
function handleSavePopup(evt) { // Сохранение новой записи с закрытием
  evt.preventDefault();
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup(popupProfile);
}

btnEdit.addEventListener("click", openPopupProfile); // включение кнопки для редактирование
editSample.addEventListener("submit", handleSavePopup); // редактирование профиля

buttonsClose.forEach((item) => { // кнопка закрытия (крестик)
  item.addEventListener("click", (evt) =>
    evt.target.closest(".popup").classList.remove("popup_opened")
  );
});

function deleteCard(evt) { // Функция удаления карточки
  evt.target.closest(".element__item").remove();
}

function elementLikeActive(evt) { // Функция Лайка карточки
  evt.target.classList.toggle("element__heart_active");
}

function openPopupImage(evt) { // Функция увеличения карточки
  openPopup(popupImgfull);
  popupImage.src = `${evt.target.src}`;
  popupCaption.textContent = `${evt.target.alt}`;
  popupImage.alt = `${evt.target.alt}`;
}

function openPopupAddsubject() {
  openPopup(popupAddsubject);
  titleInput.value = "";
  linkInput.value = "";
}

function addElement(evt) {
  evt.preventDefault();
  let name = titleInput.value;
  let link = linkInput.value;
  renderCard({ name, link });
  closePopup(popupAddsubject);
}

btnAdd.addEventListener("click", openPopupAddsubject);
popupFormAdd.addEventListener("submit", addElement);

function closeOnEscape(evt) { // закрытие через esc
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}