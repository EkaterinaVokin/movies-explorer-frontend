class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }
  _request(url, options) {
    // функция запрос которая принимает два аргумента ссылку и объект опций
    return fetch(url, {
      ...options,
      credentials: 'include',
    }).then((res) => {
      return new Promise((resolve, reject) => {
        res
          .json()
          .then((data) => {
            if (res.ok) {
              resolve(data);
            } else {
              reject({ data, status: res.status });
            }
          })
          .catch((error) => {
            reject({ error });
          });
      });
    });
  }
  getMe() {
    // сделать запрос чтобы  получить информацию о пользователе с сервера и токен
    return this._request(`${this._url}/users/me`, { headers: this._headers });
  }
  editProfile({ name, email }) {
    // создать запрос для редактирование профиля
    return this._request(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    });
  }
  getSaveMovies() {
    // возвращает все сохранённые текущим  пользователем фильмы
    return this._request(`${this._url}/movies`, { headers: this._headers });
  }
  addMovies(data) {
    // создать запрос добавить новый фильм
    return this._request(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    });
  }
  deleteMovies(id) {
    // создать запрос чтобы удалить фильм
    return this._request(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    });
  }
  register({ name, email, password }) {
    // регистрация пользователя
    return this._request(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });
  }
  authorize({ email, password }) {
    // авторизация пользователя
    return this._request(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
  }
  logout() {
    // выход пользователя
    return this._request(`${this._url}/signout`, {
      method: 'POST',
      headers: this._headers,
    });
  }
}

const object = {
  url: 'https://api.movies.project.nomoredomains.club',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const api = new Api(object);


// url 'http://localhost:4000'