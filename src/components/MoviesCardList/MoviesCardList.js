import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MoviesCard } from '../MoviesCard/MoviesCard';
import { Container } from '../Container/Container.js';
import { 
  MOBILE_RESOLUTION, 
  TABLET_RESOLUTION, 
  DESKTOP_COUNT,
  TABLET_COUNT,
  MOBILE_COUNT,
  DESKTOP_MORE_COUNT,
  TABLET_MORE_COUNT,
  MOBILE_MORE_COUNT
} from '../../utils/constant.js';
import './MoviesCardList.css';


export function MoviesCardList(props) {
  const { favorite, movies, onDeleteMovie, onLikeMovie } = props;

  const { pathname } = useLocation();

  const [displayedMovies, setDisplayedMovies] = useState([]); // фильмы, которые будут показаны

  const [hiddenMovies, setHiddenMovies] = useState([]) // скрытые фильмы

  const [count, setCount] = useState(DESKTOP_COUNT);
  const [moreCount, setMoreCount] = useState(DESKTOP_MORE_COUNT);

  useEffect(() => {
    onResize()
    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, []);

  let timeout = null;

  function onResize() {
    timeout && clearTimeout(timeout);

    timeout = setTimeout(() => {
      const width = window.innerWidth;
      if(width > TABLET_RESOLUTION){
        setCount(DESKTOP_COUNT)
        setMoreCount(DESKTOP_MORE_COUNT)
      } else if(width > MOBILE_RESOLUTION) {
        setCount(TABLET_COUNT)
        setMoreCount(TABLET_MORE_COUNT)
      } else {
        setCount(MOBILE_COUNT)
        setMoreCount(MOBILE_MORE_COUNT)
      }
    }, 100);
  }

  useEffect(() => {
    setDisplayedMovies(movies.slice(0, count))
    setHiddenMovies(movies.slice(count))
  }, [movies, count]);

  function handleMoreClick(){
    const arrMovies = [
      ...displayedMovies,
      ...hiddenMovies.slice(0,moreCount)
    ];
    setDisplayedMovies(arrMovies)
    setHiddenMovies(hiddenMovies.slice(moreCount))

  }

  function getId(movie) {
    return favorite ? movie.movieId : movie.id
  }

  return(
    <section className={`movies ${pathname !== '/saved-movies' ? '' : 'movies_type_padding'}`}>
      <Container type="movie">
        {displayedMovies.length > 0 ? 
        (<ul className="movies__items">
          {displayedMovies.map((movie) => (
            <li className="movies__item" key={getId(movie)}>
              <MoviesCard
                movie={movie}
                favorite={favorite}
                onDeleteMovie={onDeleteMovie}
                onLikeMovie={onLikeMovie}
              />
            </li>
          ))}
        </ul>)
        : 
        (<div className="movies__text">Ничего не найдено</div>)}
        {displayedMovies.length > 0 && hiddenMovies.length > 0  && (<button className="movies__button" type="button" onClick={handleMoreClick}>Ещё</button>)}
      </Container>
    </section>
  )
}