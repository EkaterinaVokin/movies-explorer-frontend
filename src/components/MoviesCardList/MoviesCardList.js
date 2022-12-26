import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MoviesCard } from '../MoviesCard/MoviesCard';
import { Container } from '../Container/Container.js';
import './MoviesCardList.css';


export function MoviesCardList(props) {
  const { favorite, movies, onDeleteMovie, onLikeMovie } = props;

  const { pathname } = useLocation();

  const [displayedMovies, setDisplayedMovies] = useState([]); // фильмы, которые будут показаны

  const [hiddenMovies, setHiddenMovies] = useState([]) // скрытые фильмы

  const [count, setCount] = useState(12);
  const [moreCount, setMoreCount] = useState(3);

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
      if(width > 992){
        setCount(12)
        setMoreCount(3)
      } else if(width > 576) {
        setCount(8)
        setMoreCount(2)
      } else {
        setCount(5)
        setMoreCount(2)
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