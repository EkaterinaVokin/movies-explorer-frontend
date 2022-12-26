import React, { useState, useContext } from 'react';
import { CardButton } from '../CardButton/CardButton';
import { ReactComponent as IconCheck } from '../../images/icon_check.svg';
import { ReactComponent as IconRemove } from '../../images/icon_remove.svg';
import { SavedMoviesContext } from '../../contexts/SavedMoviesContext';
import './MoviesCard.css';

export function MoviesCard(props) {

  const { movie, favorite, onDeleteMovie, onLikeMovie } = props;
  
  const {saveMovies} = useContext(SavedMoviesContext); // Подписываемся на контекст

  const isLiked = saveMovies.some((item) => {
    return movie.id === item.movieId
  });

  // удалить сохраненный фильм
  const saveItemMovie = favorite ?  movie : saveMovies.find((item) => {
    return movie.id === item.movieId
  });

  // console.log(movie)
  // console.log(saveMovies)
  // console.log(saveItemMovie)

  // добавить фильм в сохраненные
  function handleLike() {
    onLikeMovie(movie)
  }

  // удалить фильм из сохраненных
  function handleRemoveMovie() {
    onDeleteMovie(saveItemMovie._id)
  }

  function getButton() {
    if(favorite) {
      return (
        <CardButton onClick={handleRemoveMovie}>
          <IconRemove />
        </CardButton>
      )
    }
    else if(isLiked) {
      return (
        <CardButton colored={true} onClick={handleRemoveMovie}>
          <IconCheck />
        </CardButton>
      )
    } else {
      return <CardButton onClick={handleLike}>Сохранить</CardButton>
    }
  }

  return (
    <article className="article">
      <div className="article__description">
        <h3 className="article__title">{movie.nameRU}</h3>
        <span className="article__time">{`${movie.duration} минут`}</span>
      </div>
      <a className="article__container" href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img className="article__image" src={favorite ? `${movie.image}` : `https://api.nomoreparties.co/${movie.image.url}` } alt={movie.nameRU}/>
      </a>
      {getButton()}
    </article>
  )
}