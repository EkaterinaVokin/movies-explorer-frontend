import React, { useState } from 'react';
import { CardButton } from '../CardButton/CardButton';
import { ReactComponent as IconCheck } from '../../images/icon_check.svg';
import { ReactComponent as IconRemove } from '../../images/icon_remove.svg';
import './MoviesCard.css';

export function MoviesCard(props) {

  const { movie, removable } = props;

  const [isLiked, setIsLiked] = useState(false);

  function handleLikeClick() {
    setIsLiked(!isLiked)
  }

  function getButton() {
    if(removable) {
      return (
        <CardButton>
          <IconRemove />
        </CardButton>
      )
    }
    else if(isLiked) {
      return (
        <CardButton colored={true} onClick={handleLikeClick}>
          <IconCheck />
        </CardButton>
      )
    } else {
      return <CardButton onClick={handleLikeClick}>Сохранить</CardButton>
    }
  }

  return (
    <article className="article">
      <div className="article__description">
        <h3 className="article__title">{movie.title}</h3>
        <span className="article__time">{movie.time}</span>
      </div>
      <img className="article__image" src={movie.image} alt={movie.title}/>
      {getButton()}
    </article>
  )
}