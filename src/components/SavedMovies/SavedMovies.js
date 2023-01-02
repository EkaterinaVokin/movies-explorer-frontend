import React, { useContext, useEffect, useState } from 'react';
import { SearchForm }  from '../SearchForm/SearchForm.js';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList.js';
import { Preloader } from '../Preloader/Preloader.js';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';
import { filterMoviesByDuration, filterMoviesByName } from '../../utils/filter.js';
import './SavedMovies.css';

export function SavedMovies(props) {
  const { saveMovies } = useContext(SavedMoviesContext); // Подписываемся на контекст
  const { isLoading, onDeleteMovie } = props;

  const [values, setValues] = useState({
    search: '',
    shorts: false,
  });
  const [movies, setMovies] = useState(saveMovies);

  function updateMovies(values) {
    const allMovies = filterMoviesByName(saveMovies, values.search);
    const filteredMovies = values.shorts
      ? filterMoviesByDuration(allMovies)
      : allMovies;

    setMovies(filteredMovies);
  }

  // Поиск сохраненных фильмов
  function search(values) {
    updateMovies(values);
    setValues(values);
    return Promise.resolve();
  }

  function filter(_values) {
    const newValues = {
      ...values,
      shorts: _values.shorts,
    };

    updateMovies(newValues);
    setValues(newValues);
  }

  useEffect(() => {
    updateMovies(values);
  }, [saveMovies]);

  return(
    <>
    <SearchForm name="search-save-movies" onSearch={search} onFilter={filter} defaultValues={values} isLoading={isLoading}/>
    {isLoading
      ? <Preloader />
      : <MoviesCardList favorite={true} movies={movies} onDeleteMovie={onDeleteMovie}/>
    }
    </>
  )
}