/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/components/Card.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Card = /*#__PURE__*/function () {
  function Card(_ref, templateSelector) {
    var config = _ref.config,
      userId = _ref.userId,
      handleCardClick = _ref.handleCardClick,
      handleDeleteClick = _ref.handleDeleteClick,
      handleLikeClick = _ref.handleLikeClick,
      handleLikeDelete = _ref.handleLikeDelete;
    _classCallCheck(this, Card);
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
  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardElement = document.querySelector(this._templateSelector).content.querySelector(".element__item").cloneNode(true);
      return cardElement;
    }
  }, {
    key: "makingCard",
    value: function makingCard() {
      var _this = this;
      this._element = this._getTemplate();
      this._сardImage = this._element.querySelector(".element__img");
      this._сardImage.src = this._link;
      this._element.querySelector(".element__title").textContent = this._name;
      this._сardImage.alt = this._name;
      this._heartSum = this._element.querySelector(".element__heart-counter");
      this._heartButton = this._element.querySelector(".element__heart");
      this._removeButton = this._element.querySelector(".element__remove");
      this._getLikeSum();
      this._checkOwner();
      this._setEventListeners();
      this._likes.forEach(function (like) {
        if (like._id == _this._userId) {
          _this._heartButton.classList.add("element__heart_active");
        }
      });
      return this._element;
    }
  }, {
    key: "handleLikeCard",
    value: function handleLikeCard(evt) {
      this._heartButton.classList.toggle("element__heart_active");
      this._likes = evt.likes;
      this._getLikeSum();
    }
  }, {
    key: "handleDeleteCard",
    value: function handleDeleteCard() {
      this._element.remove();
    }
  }, {
    key: "_checkOwner",
    value: function _checkOwner() {
      if (this._id !== this._userId) {
        this._removeButton.remove();
      }
    }
  }, {
    key: "_getLikeSum",
    value: function _getLikeSum() {
      this._heartSum.textContent = this._likes.length;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this2 = this;
      this._heartButton.addEventListener("click", function () {
        if (_this2._heartButton.classList.contains("element__heart_active")) {
          _this2._handleLikeDelete(_this2._cardId);
        } else {
          _this2._handleLikeClick(_this2._cardId);
        }
      });
      this._removeButton.addEventListener("click", function () {
        _this2._handleDeleteClick(_this2._cardId);
      });
      this._сardImage.addEventListener("click", function () {
        _this2._handleCardClick(_this2._name, _this2._link);
      });
    }
  }]);
  return Card;
}();
;// CONCATENATED MODULE: ./src/components/FormValidator.js
function FormValidator_typeof(obj) { "@babel/helpers - typeof"; return FormValidator_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, FormValidator_typeof(obj); }
function FormValidator_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function FormValidator_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, FormValidator_toPropertyKey(descriptor.key), descriptor); } }
function FormValidator_createClass(Constructor, protoProps, staticProps) { if (protoProps) FormValidator_defineProperties(Constructor.prototype, protoProps); if (staticProps) FormValidator_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function FormValidator_toPropertyKey(arg) { var key = FormValidator_toPrimitive(arg, "string"); return FormValidator_typeof(key) === "symbol" ? key : String(key); }
function FormValidator_toPrimitive(input, hint) { if (FormValidator_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (FormValidator_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FormValidator = /*#__PURE__*/function () {
  function FormValidator(config, formElement) {
    FormValidator_classCallCheck(this, FormValidator);
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._disabledButtonClass = config.disabledButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }
  FormValidator_createClass(FormValidator, [{
    key: "_showInputError",
    value: function _showInputError(inputElement) {
      inputElement.classList.add(this._inputErrorClass);
      var errorElement = this._formElement.querySelector("#".concat(inputElement.id, "-error"));
      errorElement.textContent = inputElement.validationMessage;
      errorElement.classList.add(this._errorClass);
    }
  }, {
    key: "_hideInputError",
    value: function _hideInputError(inputElement) {
      var errorElement = this._formElement.querySelector("#".concat(inputElement.id, "-error"));
      inputElement.classList.remove(this._inputErrorClass);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = '';
    }
  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState() {
      if (this._hasInvalidInput(this._inputList)) {
        this._buttonElement.classList.add(this._disabledButtonClass);
        this._buttonElement.disabled = true;
      } else {
        this._buttonElement.classList.remove(this._disabledButtonClass);
        this._buttonElement.disabled = false;
      }
    }
  }, {
    key: "_hasInvalidInput",
    value: function _hasInvalidInput(inputs) {
      return inputs.some(function (input) {
        return !input.validity.valid;
      });
    }
  }, {
    key: "_checkInputValidity",
    value: function _checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement);
      } else {
        this._hideInputError(inputElement);
      }
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;
      this._inputList.forEach(function (inputElement) {
        inputElement.addEventListener('input', function () {
          _this._checkInputValidity(inputElement);
          _this._toggleButtonState();
        });
      });
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      this._setEventListeners();
    }
  }, {
    key: "resetValidation",
    value: function resetValidation() {
      var _this2 = this;
      this._inputList.forEach(function (input) {
        _this2._hideInputError(input);
      });
      this._toggleButtonState();
    }
  }]);
  return FormValidator;
}();
;// CONCATENATED MODULE: ./src/components/Popup.js
function Popup_typeof(obj) { "@babel/helpers - typeof"; return Popup_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Popup_typeof(obj); }
function Popup_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Popup_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Popup_toPropertyKey(descriptor.key), descriptor); } }
function Popup_createClass(Constructor, protoProps, staticProps) { if (protoProps) Popup_defineProperties(Constructor.prototype, protoProps); if (staticProps) Popup_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Popup_toPropertyKey(arg) { var key = Popup_toPrimitive(arg, "string"); return Popup_typeof(key) === "symbol" ? key : String(key); }
function Popup_toPrimitive(input, hint) { if (Popup_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Popup_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    Popup_classCallCheck(this, Popup);
    this._popup = popupSelector;
    this._closeEsc = this._closeEsc.bind(this);
  }
  Popup_createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popup.classList.add('popup_opened');
      document.addEventListener('keydown', this._closeEsc);
    }
  }, {
    key: "close",
    value: function close() {
      this._popup.classList.remove('popup_opened');
      document.removeEventListener('keydown', this._closeEsc);
    }
  }, {
    key: "_closeEsc",
    value: function _closeEsc(evt) {
      if (evt.code === 'Escape') {
        this.close();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;
      this._popup.addEventListener('mousedown', function (evt) {
        if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')) {
          _this.close();
        }
      });
    }
  }]);
  return Popup;
}();
;// CONCATENATED MODULE: ./src/components/PopupWithImage.js
function PopupWithImage_typeof(obj) { "@babel/helpers - typeof"; return PopupWithImage_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, PopupWithImage_typeof(obj); }
function PopupWithImage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function PopupWithImage_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, PopupWithImage_toPropertyKey(descriptor.key), descriptor); } }
function PopupWithImage_createClass(Constructor, protoProps, staticProps) { if (protoProps) PopupWithImage_defineProperties(Constructor.prototype, protoProps); if (staticProps) PopupWithImage_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function PopupWithImage_toPropertyKey(arg) { var key = PopupWithImage_toPrimitive(arg, "string"); return PopupWithImage_typeof(key) === "symbol" ? key : String(key); }
function PopupWithImage_toPrimitive(input, hint) { if (PopupWithImage_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (PopupWithImage_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (PopupWithImage_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);
  var _super = _createSuper(PopupWithImage);
  function PopupWithImage(popup) {
    var _this;
    PopupWithImage_classCallCheck(this, PopupWithImage);
    _this = _super.call(this, popup);
    _this._imgElem = _this._popup.querySelector('.popup__image');
    _this._imgTitleElem = _this._popup.querySelector('.popup__caption');
    return _this;
  }
  PopupWithImage_createClass(PopupWithImage, [{
    key: "open",
    value: function open(link, name) {
      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
      this._imgElem.src = link;
      this._imgElem.alt = name;
      this._imgTitleElem.textContent = name;
    }
  }]);
  return PopupWithImage;
}(Popup);
;// CONCATENATED MODULE: ./src/components/PopupWithForm.js
function PopupWithForm_typeof(obj) { "@babel/helpers - typeof"; return PopupWithForm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, PopupWithForm_typeof(obj); }
function PopupWithForm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function PopupWithForm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, PopupWithForm_toPropertyKey(descriptor.key), descriptor); } }
function PopupWithForm_createClass(Constructor, protoProps, staticProps) { if (protoProps) PopupWithForm_defineProperties(Constructor.prototype, protoProps); if (staticProps) PopupWithForm_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function PopupWithForm_toPropertyKey(arg) { var key = PopupWithForm_toPrimitive(arg, "string"); return PopupWithForm_typeof(key) === "symbol" ? key : String(key); }
function PopupWithForm_toPrimitive(input, hint) { if (PopupWithForm_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (PopupWithForm_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function PopupWithForm_get() { if (typeof Reflect !== "undefined" && Reflect.get) { PopupWithForm_get = Reflect.get.bind(); } else { PopupWithForm_get = function _get(target, property, receiver) { var base = PopupWithForm_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return PopupWithForm_get.apply(this, arguments); }
function PopupWithForm_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = PopupWithForm_getPrototypeOf(object); if (object === null) break; } return object; }
function PopupWithForm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) PopupWithForm_setPrototypeOf(subClass, superClass); }
function PopupWithForm_setPrototypeOf(o, p) { PopupWithForm_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PopupWithForm_setPrototypeOf(o, p); }
function PopupWithForm_createSuper(Derived) { var hasNativeReflectConstruct = PopupWithForm_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = PopupWithForm_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = PopupWithForm_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return PopupWithForm_possibleConstructorReturn(this, result); }; }
function PopupWithForm_possibleConstructorReturn(self, call) { if (call && (PopupWithForm_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return PopupWithForm_assertThisInitialized(self); }
function PopupWithForm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function PopupWithForm_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function PopupWithForm_getPrototypeOf(o) { PopupWithForm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PopupWithForm_getPrototypeOf(o); }

var PopupWithForm = /*#__PURE__*/function (_Popup) {
  PopupWithForm_inherits(PopupWithForm, _Popup);
  var _super = PopupWithForm_createSuper(PopupWithForm);
  function PopupWithForm(popup, submitForm) {
    var _this;
    PopupWithForm_classCallCheck(this, PopupWithForm);
    _this = _super.call(this, popup);
    _this._submitForm = submitForm;
    _this._formInputs = Array.from(_this._popup.querySelectorAll(".popup__input"));
    _this._popupForm = _this._popup.querySelector(".popup__form");
    _this._buttonSave = _this._popup.querySelector('.popup__button');
    _this._buttonSaveLoading = _this._buttonSave.textContent;
    return _this;
  }
  PopupWithForm_createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var _this2 = this;
      this._formInputValues = {};
      this._formInputs.forEach(function (input) {
        _this2._formInputValues[input.name] = input.value;
      });
      return this._formInputValues;
    }
  }, {
    key: "renderLoading",
    value: function renderLoading(isLoading) {
      var loadingText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Сохранение...';
      if (isLoading) {
        this._buttonSave.textContent = loadingText;
      } else {
        this._buttonSave.textContent = this._buttonSaveLoading;
      }
    }
  }, {
    key: "close",
    value: function close() {
      PopupWithForm_get(PopupWithForm_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
      this._popupForm.reset();
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this3 = this;
      PopupWithForm_get(PopupWithForm_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
      this._popupForm.addEventListener("submit", function (evt) {
        evt.preventDefault();
        _this3._submitForm(_this3._getInputValues());
      });
    }
  }]);
  return PopupWithForm;
}(Popup);
;// CONCATENATED MODULE: ./src/components/PopupWithSubmit.js
function PopupWithSubmit_typeof(obj) { "@babel/helpers - typeof"; return PopupWithSubmit_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, PopupWithSubmit_typeof(obj); }
function PopupWithSubmit_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function PopupWithSubmit_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, PopupWithSubmit_toPropertyKey(descriptor.key), descriptor); } }
function PopupWithSubmit_createClass(Constructor, protoProps, staticProps) { if (protoProps) PopupWithSubmit_defineProperties(Constructor.prototype, protoProps); if (staticProps) PopupWithSubmit_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function PopupWithSubmit_toPropertyKey(arg) { var key = PopupWithSubmit_toPrimitive(arg, "string"); return PopupWithSubmit_typeof(key) === "symbol" ? key : String(key); }
function PopupWithSubmit_toPrimitive(input, hint) { if (PopupWithSubmit_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (PopupWithSubmit_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function PopupWithSubmit_get() { if (typeof Reflect !== "undefined" && Reflect.get) { PopupWithSubmit_get = Reflect.get.bind(); } else { PopupWithSubmit_get = function _get(target, property, receiver) { var base = PopupWithSubmit_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return PopupWithSubmit_get.apply(this, arguments); }
function PopupWithSubmit_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = PopupWithSubmit_getPrototypeOf(object); if (object === null) break; } return object; }
function PopupWithSubmit_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) PopupWithSubmit_setPrototypeOf(subClass, superClass); }
function PopupWithSubmit_setPrototypeOf(o, p) { PopupWithSubmit_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PopupWithSubmit_setPrototypeOf(o, p); }
function PopupWithSubmit_createSuper(Derived) { var hasNativeReflectConstruct = PopupWithSubmit_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = PopupWithSubmit_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = PopupWithSubmit_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return PopupWithSubmit_possibleConstructorReturn(this, result); }; }
function PopupWithSubmit_possibleConstructorReturn(self, call) { if (call && (PopupWithSubmit_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return PopupWithSubmit_assertThisInitialized(self); }
function PopupWithSubmit_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function PopupWithSubmit_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function PopupWithSubmit_getPrototypeOf(o) { PopupWithSubmit_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PopupWithSubmit_getPrototypeOf(o); }

var PopupWithSubmit = /*#__PURE__*/function (_Popup) {
  PopupWithSubmit_inherits(PopupWithSubmit, _Popup);
  var _super = PopupWithSubmit_createSuper(PopupWithSubmit);
  function PopupWithSubmit(popup) {
    var _this;
    PopupWithSubmit_classCallCheck(this, PopupWithSubmit);
    _this = _super.call(this, popup);
    _this._popupForm = _this._popup.querySelector(".popup__form");
    return _this;
  }
  PopupWithSubmit_createClass(PopupWithSubmit, [{
    key: "letSubmit",
    value: function letSubmit(handleDelete) {
      this.submitForm = handleDelete;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;
      PopupWithSubmit_get(PopupWithSubmit_getPrototypeOf(PopupWithSubmit.prototype), "setEventListeners", this).call(this);
      this._popupForm.addEventListener("submit", function (evt) {
        evt.preventDefault();
        _this2.submitForm(_this2);
      });
    }
  }]);
  return PopupWithSubmit;
}(Popup);
;// CONCATENATED MODULE: ./src/components/Section.js
function Section_typeof(obj) { "@babel/helpers - typeof"; return Section_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Section_typeof(obj); }
function Section_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Section_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Section_toPropertyKey(descriptor.key), descriptor); } }
function Section_createClass(Constructor, protoProps, staticProps) { if (protoProps) Section_defineProperties(Constructor.prototype, protoProps); if (staticProps) Section_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Section_toPropertyKey(arg) { var key = Section_toPrimitive(arg, "string"); return Section_typeof(key) === "symbol" ? key : String(key); }
function Section_toPrimitive(input, hint) { if (Section_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Section_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var items = _ref.items,
      renderer = _ref.renderer;
    Section_classCallCheck(this, Section);
    this._items = items;
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }
  Section_createClass(Section, [{
    key: "renderItems",
    value: function renderItems(items) {
      var _this = this;
      items.forEach(function (item) {
        _this._renderer(item);
      });
    }
  }, {
    key: "addItemPrep",
    value: function addItemPrep(element) {
      this._container.prepend(element);
    }
  }, {
    key: "addItem",
    value: function addItem(element) {
      this._container.append(element);
    }
  }]);
  return Section;
}();
;// CONCATENATED MODULE: ./src/components/UserInfo.js
function UserInfo_typeof(obj) { "@babel/helpers - typeof"; return UserInfo_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, UserInfo_typeof(obj); }
function UserInfo_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function UserInfo_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, UserInfo_toPropertyKey(descriptor.key), descriptor); } }
function UserInfo_createClass(Constructor, protoProps, staticProps) { if (protoProps) UserInfo_defineProperties(Constructor.prototype, protoProps); if (staticProps) UserInfo_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function UserInfo_toPropertyKey(arg) { var key = UserInfo_toPrimitive(arg, "string"); return UserInfo_typeof(key) === "symbol" ? key : String(key); }
function UserInfo_toPrimitive(input, hint) { if (UserInfo_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (UserInfo_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var name = _ref.name,
      job = _ref.job,
      avatar = _ref.avatar;
    UserInfo_classCallCheck(this, UserInfo);
    this._name = document.querySelector(name);
    this.job = document.querySelector(job);
    this._avatar = document.querySelector(avatar);
  }
  UserInfo_createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        name: this._name.textContent,
        job: this.job.textContent
      };
    }
  }, {
    key: "letUserInfo",
    value: function letUserInfo(name, job) {
      this._name.textContent = name;
      this.job.textContent = job;
    }
  }, {
    key: "letUserAvatar",
    value: function letUserAvatar(avatar) {
      this._avatar.src = avatar;
    }
  }]);
  return UserInfo;
}();
;// CONCATENATED MODULE: ./src/components/Api.js
function Api_typeof(obj) { "@babel/helpers - typeof"; return Api_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Api_typeof(obj); }
function Api_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Api_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Api_toPropertyKey(descriptor.key), descriptor); } }
function Api_createClass(Constructor, protoProps, staticProps) { if (protoProps) Api_defineProperties(Constructor.prototype, protoProps); if (staticProps) Api_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Api_toPropertyKey(arg) { var key = Api_toPrimitive(arg, "string"); return Api_typeof(key) === "symbol" ? key : String(key); }
function Api_toPrimitive(input, hint) { if (Api_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Api_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Api = /*#__PURE__*/function () {
  function Api(_ref) {
    var url = _ref.url,
      headers = _ref.headers;
    Api_classCallCheck(this, Api);
    this._url = url;
    this._headers = headers;
    this.__checkResponse = function (res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status));
    };
  }
  Api_createClass(Api, [{
    key: "getUsersApi",
    value: function getUsersApi() {
      return fetch(this._url + "/users/me", {
        method: "GET",
        headers: this._headers
      }).then(this.__checkResponse);
    }
  }, {
    key: "getInitialCards",
    value: function getInitialCards() {
      return fetch(this._url + "/cards", {
        method: 'GET',
        headers: this._headers
      }).then(this.__checkResponse);
    }
  }, {
    key: "infoNewUser",
    value: function infoNewUser(name, about) {
      return fetch(this._url + '/users/me', {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          about: about
        })
      }).then(this.__checkResponse);
    }
  }, {
    key: "avatarNewUser",
    value: function avatarNewUser(avatar) {
      return fetch(this._url + '/users/me/avatar', {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          avatar: avatar
        })
      }).then(this.__checkResponse);
    }
  }, {
    key: "newCard",
    value: function newCard(name, link) {
      return fetch(this._url + '/cards', {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          link: link
        })
      }).then(this.__checkResponse);
    }
  }, {
    key: "removeCard",
    value: function removeCard(cardId) {
      return fetch(this._url + '/cards/' + cardId, {
        method: 'DELETE',
        headers: this._headers
      }).then(this.__checkResponse);
    }
  }, {
    key: "likeCard",
    value: function likeCard(cardId) {
      return fetch(this._url + '/cards/' + cardId + '/likes', {
        method: 'PUT',
        headers: this._headers
      }).then(this.__checkResponse);
    }
  }, {
    key: "deleteLike",
    value: function deleteLike(cardId) {
      return fetch(this._url + '/cards/' + cardId + '/likes', {
        method: 'DELETE',
        headers: this._headers
      }).then(this.__checkResponse);
    }
  }]);
  return Api;
}();
;// CONCATENATED MODULE: ./src/utils/constants.js
var popupAddCard = document.querySelector(".popup_type_add"),
  popupProfile = document.querySelector(".popup_type_edit"),
  formProfile = document.querySelector(".popup__form_edit"),
  nameInput = formProfile.querySelector("#popup__type_name"),
  jobInput = formProfile.querySelector("#popup__type_job"),
  profile = document.querySelector(".profile"),
  openAddCardPopup = profile.querySelector(".profile__add-button"),
  openEditProfilePopup = profile.querySelector(".profile__edit-button"),
  popupConfirmRemove = document.querySelector('.popup_type_confirm'),
  popupImage = document.querySelector(".popup_image"),
  popupAvatar = document.querySelector('.popup_type_avatar'),
  openPopupAvatar = document.querySelector('.profile__image-button'),
  formNewCard = document.querySelector(".popup__form_add"),
  formAvatar = document.querySelector(".popup__form_avatar");
var configValidation = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  disabledButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_error",
  errorClass: "popup__error_visible"
};
;// CONCATENATED MODULE: ./src/pages/index.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var userId;
var popupProfileForm = new PopupWithForm(popupProfile, submitPopupProfile);
var popupWithImage = new PopupWithImage(popupImage);
var popupCard = new PopupWithForm(popupAddCard, submitPopupCard);
var popupConfirm = new PopupWithSubmit(popupConfirmRemove);
var popupAvatarForm = new PopupWithForm(popupAvatar, submitPopupAvatar);
var configValidator = new FormValidator(configValidation, formProfile);
var cardValidator = new FormValidator(configValidation, formNewCard);
var avatarValidator = new FormValidator(configValidation, formAvatar);
var api = new Api({
  url: 'https://nomoreparties.co/v1/cohort-58',
  headers: {
    authorization: '2e4da387-210d-4156-b421-ffadc6c7daf6',
    'Content-Type': 'application/json'
  }
});
Promise.all([api.getUsersApi(), api.getInitialCards()]).then(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    user = _ref2[0],
    cards = _ref2[1];
  userId = user._id;
  userInfo.letUserInfo(user.name, user.about);
  userInfo.letUserAvatar(user.avatar);
  cardList.renderItems(cards);
}).catch(function (err) {
  console.log(err);
});
var userInfo = new UserInfo({
  name: ".profile__name",
  job: ".profile__job",
  avatar: ".profile__image"
});
function submitPopupAvatar(value) {
  popupAvatarForm.renderLoading(true);
  api.avatarNewUser(value.avatar).then(function (user) {
    userInfo.letUserAvatar(user.avatar);
    popupAvatarForm.close();
  }).catch(function (err) {
    console.log(err);
  }).finally(function () {
    popupAvatarForm.renderLoading(false);
  });
}
function submitPopupProfile(value) {
  popupProfileForm.renderLoading(true);
  api.infoNewUser(value.name, value.job).then(function (user) {
    userInfo.letUserInfo(user.name, user.about);
    popupProfileForm.close();
  }).catch(function (err) {
    console.log(err);
  }).finally(function () {
    popupProfileForm.renderLoading(false);
  });
}
function createCard(item) {
  var card = new Card({
    config: item,
    userId: userId,
    handleCardClick: function handleCardClick(name, link) {
      popupWithImage.open(link, name);
    },
    handleDeleteClick: function handleDeleteClick(cardId) {
      popupConfirm.open();
      popupConfirm.letSubmit(function () {
        api.removeCard(cardId).then(function () {
          card.handleDeleteCard();
          popupConfirm.close();
        }).catch(function (err) {
          console.log(err);
        });
      });
    },
    handleLikeClick: function handleLikeClick(cardId) {
      api.likeCard(cardId).then(function (evt) {
        card.handleLikeCard(evt);
      }).catch(function (err) {
        console.log(err);
      });
    },
    handleLikeDelete: function handleLikeDelete(cardId) {
      api.deleteLike(cardId).then(function (evt) {
        card.handleLikeCard(evt);
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, ".element");
  var cardItem = card.makingCard();
  return cardItem;
}
function submitPopupCard(config) {
  popupCard.renderLoading(true);
  api.newCard(config.place, config.link).then(function (e) {
    cardList.addItemPrep(createCard(e));
    popupCard.close();
  }).catch(function (err) {
    console.log(err);
  }).finally(function () {
    popupCard.renderLoading(false);
  });
}
openPopupAvatar.addEventListener("click", function () {
  popupAvatarForm.open();
  avatarValidator.resetValidation();
});
openEditProfilePopup.addEventListener("click", function () {
  popupProfileForm.open();
  var input = userInfo.getUserInfo();
  nameInput.value = input.name;
  jobInput.value = input.job;
  configValidator.resetValidation();
});
openAddCardPopup.addEventListener("click", function () {
  popupCard.open();
  cardValidator.resetValidation();
});
var cardList = new Section({
  renderer: function renderer(item) {
    cardList.addItem(createCard(item));
  }
}, ".elements");
cardValidator.enableValidation();
configValidator.enableValidation();
avatarValidator.enableValidation();
popupWithImage.setEventListeners();
popupCard.setEventListeners();
popupProfileForm.setEventListeners();
popupConfirm.setEventListeners();
popupAvatarForm.setEventListeners();
/******/ })()
;