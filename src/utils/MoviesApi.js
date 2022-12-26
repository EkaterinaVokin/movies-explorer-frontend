class MoviesApi {
  constructor({url, headers}) {
    this._url = url;
    this._headers = headers;
  }
  _request(url, options) {
    return fetch(url, {
      ...options,
    }).then((res) => {
      return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    });
  }
  getMovies() {
    // возвращает все фильмы по ключевому слову которое вводится в поисковик
    return this._request(`${this._url}/beatfilm-movies`, { headers: this._headers }); 
  }
}

const config = {
  url: 'https://api.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const moviesApi = new MoviesApi(config);
