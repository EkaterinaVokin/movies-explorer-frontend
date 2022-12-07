import React, { useState } from 'react';
import './MoviesCard.css';

export function MoviesCard(props) {

  const { movie } = props;

  const [isLiked, setIsLiked] = useState(false);

  const buttonText = isLiked ? '' : 'Сохранить'

  function handleLikeClick() {
    setIsLiked(!isLiked)
  }

  return (
    <article className="article">
      <div className="article__description">
        <h3 className="article__title">{movie.title}</h3>
        <span className="article__time">{movie.time}</span>
      </div>
      <img className="article__image" src={movie.image} alt={movie.title}/>
      <button className={`article__button ${isLiked ? 'article__button_active' : ''}`} onClick={handleLikeClick} type="button">{buttonText}</button>
    </article>
  )
}