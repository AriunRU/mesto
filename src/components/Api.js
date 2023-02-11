export class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;

    this.__checkResponse = (res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    };
  }

  getUsersApi() {
    return fetch(this._url + `/users/me`, {
      method: "GET",
      headers: this._headers,
    })
      .then(this.__checkResponse);
  }

  getInitialCards() {
    return fetch(this._url + `/cards`, {
      method: 'GET',
      headers: this._headers,
    })
      .then(this.__checkResponse);
  }

  infoNewUser(name, about) {
    return fetch(this._url + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
      .then(this.__checkResponse);
  }

  avatarNewUser(avatar) {
    return fetch(this._url + '/users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar
      })
    })
      .then(this.__checkResponse);
  }

  newCard(name, link) {
    return fetch(this._url + '/cards', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link,
      })
    })
      .then(this.__checkResponse);
  }

  removeCard(cardId) {
    return fetch(this._url + '/cards/' + cardId, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this.__checkResponse);
  }

  likeCard(cardId) {
    return fetch(this._url + '/cards/' + cardId + '/likes', {
      method: 'PUT',
      headers: this._headers,
    })
      .then(this.__checkResponse);
  }

  deleteLike(cardId) {
    return fetch(this._url + '/cards/' + cardId + '/likes', {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this.__checkResponse);
  }
}