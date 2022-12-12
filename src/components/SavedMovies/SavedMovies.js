import { SearchForm }  from '../SearchForm/SearchForm.js';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList.js';
import './SavedMovies.css';

export function SavedMovies() {
  return(
    <>
    <SearchForm />
    <MoviesCardList favorite={true}/>
    </>
  )
}