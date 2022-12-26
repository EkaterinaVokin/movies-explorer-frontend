import React, { useContext } from 'react';
import { SearchForm }  from '../SearchForm/SearchForm.js';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList.js';
import { Preloader } from '../Preloader/Preloader.js';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';
import './SavedMovies.css';

export function SavedMovies(props) {

  const {saveMovies} = useContext(SavedMoviesContext); // Подписываемся на контекст

  const { isLoading, onDeleteMovie, onSearch, onFilter } = props;

  return(
    <>
    <SearchForm name="search-save-movies" onSearch={onSearch} onFilter={onFilter}/>
    {isLoading && <Preloader />}
    <MoviesCardList favorite={true} movies={saveMovies} onDeleteMovie={onDeleteMovie}/>
    </>
  )
}