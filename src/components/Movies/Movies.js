import { SearchForm }  from '../SearchForm/SearchForm.js';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList.js';
import { Preloader } from '../Preloader/Preloader.js';
import './Movies.css';

export function Movies(props) {
  const { movies, isLoading, onLikeMovie,onDeleteMovie, onSearch, onFilter } = props;
  return(
    <>
      <SearchForm name="search-movies" onSearch={onSearch} onFilter={onFilter}/>
      {isLoading && <Preloader />}
      <MoviesCardList movies={movies} onDeleteMovie={onDeleteMovie} onLikeMovie={onLikeMovie}/>
    </>
  )
}