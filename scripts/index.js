//Создание переменных из профиля
const buttonEdit = document.querySelector(".profile__edit-button"); // кнопка карандашик
const buttonAdd = document.querySelector(".profile__add-button"); // кнопка плюсик
const buttonsClose = document.querySelectorAll(".popup__close"); //Кнопка крестик

const username = document.querySelector(".profile__title"); // Имя
const job = document.querySelector(".profile__description"); // Проффессия
//Создание переменных из карточек
const MassElements = document.querySelector(".elements"); // Массив картинок
const listElement = MassElements.querySelector(".element"); // одна из картинок
//Создание переменных из попапа
const userNameInput = document.querySelector(".popup__input_name"); // строка с изменением имени
const jobInput = document.querySelector(".popup__input_job"); // строка с изменением проффессии
const editAvatar = document.querySelector(".popup__edit_person"); // Измениние профиля
const titleInput = document.querySelector(".popup__input_title"); // строка с внесением названия
const linkInput = document.querySelector(".popup__input_link"); // строка с внесением ссылки на картинку

const popupImage = document.querySelector(".popup__image"); // секция с увеличением картинки
const popupCaption = document.querySelector(".popup__caption"); // название под фото при увеличении
const popupImgfull = document.querySelector(".popup_image_full"); // увеличение фото
const popupAddsubject = document.querySelector(".popup_add_subject"); // добавление элемента
const popupProfile = document.querySelector(".popup_edit-person"); // попап с инфой
const popupFormAdd = document.querySelector(".popup__form_add"); // строка с внесением ссылки на картинку

function createCard(data) { // создание новой карточки
  const elemTemp = document.querySelector(".element-sample").content;
  const itemElem = elemTemp.querySelector(".element__item");
  const clonedElem = itemElem.cloneNode(true);
  const imageElement = clonedElem.querySelector(".element__img");
  const titleElement = clonedElem.querySelector(".element__title");
  const buttonRemoveElement = clonedElem.querySelector(".element__remove");
  const likeElement = clonedElem.querySelector(".element__heart");
  imageElement.src = data.link;
  imageElement.alt = data.name;
  titleElement.textContent = data.name;

  buttonRemoveElement.addEventListener("click", deleteCard);

  likeElement.addEventListener("click", elementLikeActive);

  imageElement.addEventListener("click", openPopupImage);

  return clonedElem;
}

function openPopup(popup) { // Функция открития попапа
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeOnEscape);
  document.addEventListener("mousedown", closeOnOverlay);
}

function openPopupProfile(evt) {
  addPopupValue(evt);
  openPopup(popupProfile);
}

function addPopupValue() {
  userNameInput.value = username.textContent;
  jobInput.value = job.textContent;
}

function closePopup(popup) { // Закрытие попапа
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeOnEscape);
  document.removeEventListener("mousedown", closeOnOverlay);
}
function handleSavePopup(evt) { // Сохранение новой записи с закрытием
  evt.preventDefault();
  username.textContent = userNameInput.value;
  job.textContent = jobInput.value;
  closePopup(evt);
}

buttonEdit.addEventListener("click", openPopupProfile); // включение кнопки для редактирование
editAvatar.addEventListener("submit", handleSavePopup); // редактирование профиля

buttonsClose.forEach((item) => { // кнопка закрытия (крестик)
  item.addEventListener("click", (evt) =>
    evt.target.closest(".popup").classList.remove("popup_opened")
  );
});

function renderList(data) { // Проверка массива
  data.forEach((item) => renderCard(item));
}

function renderCard(data) { // проверка карточки отдельно
  const newCard = createCard(data);
  listElement.prepend(newCard);
}

renderList(initialCards);

function deleteCard(evt) { // Функция удаления карточки
  evt.target.closest(".element__item").remove();
}

function elementLikeActive(evt) { // Функция Лайка карточки
  evt.target.classList.toggle("element__heart_active");
}

function openPopupImage(evt) { // Функция увеличения карточки
  openPopup(popupImgfull);
  popupImage.src = `${evt.target.src}`;
  popupImage.alt = `${evt.target.alt}`;
  popupCaption.textContent = `${evt.target.alt}`;
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
  closePopup(evt);
}

buttonAdd.addEventListener("click", openPopupAddsubject);
popupFormAdd.addEventListener("submit", addElement);

function closeOnEscape(evt) { // закрытие через esc
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

function closeOnOverlay(evt) {
  const openedPopup = document.querySelector(".popup_opened");
  if (evt.target === openedPopup) {
    closePopup(openedPopup);
  }
}
