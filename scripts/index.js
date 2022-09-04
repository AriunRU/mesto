//Создание переменных из профиля
const buttonEdit = document.querySelector(".profile__edit-button"); // кнопка карандашик
const buttonAdd = document.querySelector(".profile__add-button"); // кнопка плюсик
const username = document.querySelector(".profile__title"); // Имя
const job = document.querySelector(".profile__description"); // Проффессия
//Создание переменных из карточек
const MassElements = document.querySelector(".elements"); // Массив картинок
const listElement = MassElements.querySelector(".element"); // одна из картинок
//Создание переменных из попапа
const buttonsClose = document.querySelectorAll(".popup__close"); //Кнопка крестик
const popupProfile = document.querySelector(".popup_edit-profile"); // попап с инфой
const userNameInput = document.querySelector(".popup__input_username"); // строка с изменением имени
const jobInput = document.querySelector(".popup__input_job"); // строка с изменением проффессии
const editAvatar = document.querySelector(".popup__edit_avatar"); // Измениние профиля
const popupImage = document.querySelector(".popup__image"); // секция с увеличением картинки
const popupCaption = document.querySelector(".popup__caption"); // название под фото при увеличении
const popupImgZoom = document.querySelector(".popup_image_zoom"); // увеличение фото
const popupAddElement = document.querySelector(".popup_add_element"); // добавление элемента
const titleInput = document.querySelector(".popup__input_title"); // строка с внесением названия
const linkInput = document.querySelector(".popup__input_link"); // строка с внесением ссылки на картинку
const popupFormAdd = document.querySelector(".popup__form_add"); // строка с внесением ссылки на картинку

const elemTemp = document.querySelector("element-template");

function createCard(data) {
  const cardTemplate = document.querySelector(".element-template").content;
  const itemElement = cardTemplate.querySelector(".element__item");
  const cardElement = itemElement.cloneNode(true);
  const imageElement = cardElement.querySelector(".element__image");
  const titleElement = cardElement.querySelector(".element__title");
  const buttonDeleteElement = cardElement.querySelector(".element__delete");
  imageElement.src = data.link;
  imageElement.alt = data.name;
  titleElement.textContent = data.name;

  buttonDeleteElement.addEventListener("click", deleteCard);

  const likeElement = cardElement.querySelector(".element__like");
  likeElement.addEventListener("click", elementLikeActive);

  imageElement.addEventListener("click", openPopupImage);

  return cardElement;

  const clonedElement = elemTemp.cloneNode(true);
  const elementCaption = clonedElement.querySelector(".element__title");
  const elemImg = clonedElement.querySelector(".element__image");
  const trashBtn = clonedElement.querySelector(".element__delete");
  const likeBtn = clonedElement.querySelector(".element__like");

  elemImg.src = cardData.link;
  elemImg.alt = `${cardData.name}, фото`;
  elementCaption.textContent = cardData.name;

  elemImg.addEventListener("click", () => viewImg(cardData));

  trashBtn.addEventListener("click", removeCard);
  likeBtn.addEventListener("click", doLike);
  
  return clonedElement;
}

function openPopup(popup) {
  // Функция открития попапа
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeOnEscape); // закрытие при помощи ескп
  document.addEventListener("mousedown", closeOnOverlay); // закрытие при помощи мыши
}

function openPopupProfile(evt) {
  // Открытие попапа с профилем
  addPopupValue(evt); // сохранение предыдущей записи
  openPopup(popupProfile);
}

function addPopupValue() {
  userNameInput.value = username.textContent;
  jobInput.value = job.textContent;
}

function closePopup(popup) {
  // Закрытие попапа
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeOnEscape);
  document.removeEventListener("mousedown", closeOnOverlay);
}
function handleSavePopup(evt) {
  // Сохранение новой записи с закрытием
  e.preventDefault();
  username.textContent = userNameInput.value;
  job.textContent = jobInput.value;
  closePopup(evt);
}

buttonEdit.addEventListener("click", openPopupProfile); // включение кнопки для редактирование
editAvatar.addEventListener("submit", handleSavePopup); // редактирование профиля

buttonsClose.forEach((item) => {
  // кнопка закрытия (крестик) //
  item.addEventListener("click", (evt) =>
    evt.target.closest(".popup").classList.remove("popup_opened")
  );
});

function renderList(data) {
  // Проверка массива
  data.forEach((item) => renderCard(item));
}

function renderCard(data) {
  // проверка карточки отдельно
  const newCard = createCard(data); // Создание новой карточки
  listElement.prepend(newCard);
}

renderList(initialCards); // Проверка нового массива

function deleteCard(evt) {
  // Функция удаления карточки
  evt.target.closest(".element__item").remove();
}

function elementLikeActive(evt) {
  // Функция Лайка карточки
  evt.target.classList.toggle("element__like_active");
}

function openPopupImage(evt) {
  // Функция увеличения карточки
  openPopup(popupImgZoom);
  popupImage.src = `${evt.target.src}`;
  popupImage.alt = `${evt.target.alt}`;
  popupCaption.textContent = `${evt.target.alt}`;
}

function openPopupAddElement() {
  openPopup(popupAddElement);
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

buttonAdd.addEventListener("click", openPopupAddElement);
popupFormAdd.addEventListener("submit", addElement);

function closeOnEscape(evt) {
  // закрытие через esc
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
