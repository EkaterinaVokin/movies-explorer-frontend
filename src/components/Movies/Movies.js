import { SearchForm }  from '../SearchForm/SearchForm.js';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList.js';
import { Preloader } from '../Preloader/Preloader.js';
import './Movies.css';
import { useEffect, useState } from 'react';

export function Movies(props) {
  const { movies, isLoading, onLikeMovie,onDeleteMovie, onSearch, onFilter } = props;

  const [values, setValues] = useState(JSON.parse(localStorage.getItem('search-movies')) || {
    search: '',
    shorts: false,
  });

  function search(values) {
    return onSearch(values)
      .then(() => {
        setValues(values);
      });
  }

  function filter(_values) {
    const newValues = {
      ...values,
      shorts: _values.shorts,
    };

    onFilter(newValues);
    setValues(newValues);
  }

  useEffect(() => {
    localStorage.setItem('search-movies', JSON.stringify(values))
  }, [values]);

  return(
    <>
      <SearchForm name="search-movies" onSearch={search} onFilter={filter} defaultValues={values} isLoading={isLoading}/>
      {isLoading
        ? <Preloader />
        : <MoviesCardList movies={movies} onDeleteMovie={onDeleteMovie} onLikeMovie={onLikeMovie}/>
      }
    </>
  )
}