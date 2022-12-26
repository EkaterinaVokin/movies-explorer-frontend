import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext.js';
import { PageNotFound } from '../PageNotFound/PageNotFound';
import { Main } from '../Main/Main.js';
import { Footer } from '../Footer/Footer.js';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute.js';
import { PublicRoute } from '../PublicRoute/PublicRoute.js';
import { Register } from '../Register/Register.js';
import { Login } from '../Login/Login.js';
import { Header } from '../Header/Header.js';
import { Movies } from '../Movies/Movies.js';
import { SavedMovies } from '../SavedMovies/SavedMovies.js';
import { Profile } from '../Profile/Profile.js';
import { api } from '../../utils/MainApi.js';
import { moviesApi } from '../../utils/MoviesApi.js';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
    _id: null,
  }); // пер.состояния текущего пользователя

  const { pathname } = useLocation();

  const history = useHistory();

  const [stateIsLogin, setStateIsLogin] = useState({ isLoggedIn: false });

  const [movies, setMovies] = useState([]); // пер.состояния получить массив фильмов

  const [saveMovies,setSaveMovies] = useState([]); // пер.состояния сохраненные фильмы

  const [isLoading, setIsLoading] = useState(false); // пер.состояния загрузки

  useEffect(() => {
    if (stateIsLogin.isLoggedIn) {
      api
        .getMe() // получаем ответ с сервера о текущем пользователе
        .then((user) => {
          setCurrentUser(user); //передаем объект о текущем пользователе в переменную состояния
        })

      setIsLoading(true)
      api
        .getSaveMovies()
        .then((saveMovies) => {
          setSaveMovies(saveMovies)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [stateIsLogin.isLoggedIn]);
  
  // Поиск сохраненных фильмов
  function searcSaveMovies(values) {
    const newMovies = JSON.parse(localStorage.getItem('saveMovies')) || [];

    let filteredSaveMovies = fiterMoviesByName(newMovies, values.search);
    localStorage.setItem('filteredSaveMovies', JSON.stringify(filteredSaveMovies));
    filterSaveMovies(values)
   
    return Promise.resolve();
  }

  function filterSaveMovies(values) {
    const filteredSaveMovies = JSON.parse(localStorage.getItem('filteredSaveMovies')) || [];

    const resultSaveMovies = values.shorts
      ? filterMoviesByDuration(filteredSaveMovies)
      : filteredSaveMovies;

    setSaveMovies(resultSaveMovies)
  }

  function filterMovies(values) {
    const filteredMovies = JSON.parse(localStorage.getItem('filteredMovies')) || [];

    const resultMovies = values.shorts
      ? filterMoviesByDuration(filteredMovies)
      : filteredMovies;

    setMovies(resultMovies)
  }

  // Поиск фильмов
  function updateMovies (values) {
    const movies = JSON.parse(localStorage.getItem('allMovies'));
   
    let filteredMovies = fiterMoviesByName(movies, values.search);
    localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
    filterMovies(values)
  }

  // отфильтрованы фильмы
  const fiterMoviesByName = (movies, name) => {
    return movies.filter((item) => {
      return item.nameRU.toLowerCase().includes(name.toLowerCase())
    })
  }

  // фильтрация длительности фильма
  const filterMoviesByDuration = (movies) => {
    return movies.filter((item) => {
      return item.duration <= 40
    })
  }

  // получить все фильмы
  function searchMovies(values) {
    setIsLoading(true)
    return moviesApi
      .getMovies()
      .then((movies) => {
        localStorage.setItem('allMovies', JSON.stringify(movies));
        updateMovies(values)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  // добавить фильм в сохраненные
  function handleMovieLike(movie) {
    api
      .addMovies({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: 'https://api.nomoreparties.co' + movie.image.url,
        trailerLink: movie.trailerLink,
        thumbnail: 'https://api.nomoreparties.co' + movie.image.formats.thumbnail.url,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
      .then((newMovie) => {
        setSaveMovies([newMovie, ...saveMovies])
        localStorage.setItem('saveMovies', JSON.stringify([newMovie, ...saveMovies]))
      })
      .catch((exception) => {
        return Promise.reject(exception);
      })
  }

  // удалить фильм из сохраненных
  function deleteMovie(id) {
    api
    .deleteMovies(id)
    .then(() => {
      setSaveMovies((saveMovies) => {
        return saveMovies.filter((item) => {
          return item._id !== id;
        });
      });
    })
    .catch((exception) => {
      return Promise.reject(exception);
    })
  }
 

  // обновление профиля
  function handleUpdateUser({ name, email }) {
   return api
      .editProfile({ name, email })
      .then(({newUser, message}) => { // получаем обновленные данные
        setCurrentUser({
          name: newUser.name,
          email: newUser.email
        })
        return message;
      })
  }


  // Регистрация
  function handleSubmitRegister({ name, email, password }) {
    return api
      .register({ name, email, password })
      .then(() => {
        handleSubmitLogin({ email, password })
          .catch(() => {
            history.push('/signin'); // отправляет пользователя авторизоваться самостоятельно
          });
      });
  }

  //Авторизация
  function handleSubmitLogin({ email, password }) {
    return api
      .authorize({ email, password })
      .then(() => {
        return checkToken();
      })
      .then(() => {
        history.push('/movies'); // отправляем пользователя на фильмы
      });
  }

  useEffect(() => {
    checkToken();
  }, []);

  // токен
  function checkToken() {
    return api
      .getMe()
      .then((data) => {
        if (data) {
          setStateIsLogin({
            isLoggedIn: true,
          });
          setCurrentUser({
            name: data.name,
            email: data.email,
          });
        }
      })
      .catch((exception) => {
        clearUserData();
        return Promise.reject(exception);
      });
  }

  function clearUserData() {
    setStateIsLogin({
      isLoggedIn: false,
    });
    setCurrentUser({
      name: '',
      email: '',
    });
    localStorage.clear();
  }

  // выход пользователя из системы
  function handleLogout() {
    api.logout()
      .then(() => {
        clearUserData();
        history.push('/');
      });
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <SavedMoviesContext.Provider value={{saveMovies}}>
      {pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile' ? (
        <Header isLoggedIn={stateIsLogin.isLoggedIn} />
      ) : (
        ''
      )}
      <Switch>
        <Route exact path="/">
          <Main />
          <Footer />
        </Route>
        <PublicRoute path="/signup" isLoggedIn={stateIsLogin.isLoggedIn}>
          <Register onSubmit={handleSubmitRegister} />
        </PublicRoute>
        <PublicRoute path="/signin" isLoggedIn={stateIsLogin.isLoggedIn}>
          <Login onSubmit={handleSubmitLogin} />
        </PublicRoute>
        <ProtectedRoute path="/movies" isLoggedIn={stateIsLogin.isLoggedIn}>
          <Movies 
            movies={movies} 
            onSearch={searchMovies}
            onFilter={filterMovies} 
            isLoading={isLoading} 
            onLikeMovie={handleMovieLike} 
            onDeleteMovie={deleteMovie} 
          />
          <Footer />
        </ProtectedRoute>
        <ProtectedRoute path="/saved-movies" isLoggedIn={stateIsLogin.isLoggedIn}>
          <SavedMovies 
            onSearch={searcSaveMovies} 
            onFilter={filterSaveMovies}
            isLoading={isLoading} 
            onDeleteMovie={deleteMovie}
          />
          <Footer />
        </ProtectedRoute>
        <ProtectedRoute path="/profile" isLoggedIn={stateIsLogin.isLoggedIn}>
          <Profile onClick={handleLogout} onSubmit={handleUpdateUser} />
        </ProtectedRoute>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      </SavedMoviesContext.Provider> 
    </CurrentUserContext.Provider>
  );
}

export default App;
