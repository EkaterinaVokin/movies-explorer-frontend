import { useLocation } from 'react-router-dom';
import { MoviesCard } from '../MoviesCard/MoviesCard';
import { Container } from '../Container/Container.js';
import './MoviesCardList.css';
import Card1 from '../../images/card1.jpg';
import Card2 from '../../images/card2.jpg';
import Card3 from '../../images/card3.jpg';

export function MoviesCardList(props) {
  const { favorite } = props;

  const { pathname } = useLocation();

  const list = [
    {title: 'В погоне за Бенкси', time: '27 минут', image: Card1},
    {title: 'В погоне за Бенкси', time: '13 минут', image: Card2},
    {title: 'В погоне за Бенкси', time: '89 минут', image: Card3},
    {title: 'В погоне за Бенкси', time: '43 минут', image: Card1},
  ]

  return(
    <section className={`movies ${pathname !== '/saved-movies' ? '' : 'movies_type_padding'}`}>
      <Container type="movie">
        {list.length > 0 ? 
        (<ul className="movies__items">
          {list.map((item,index) => (
            <li className="movies__item" key={index}>
              <MoviesCard 
                movie={item}
                removable={favorite}
              />
            </li>
          ))}
        </ul>)
        : 
        (<div className="movies__text">Ничего не найдено</div>)}
        {list.length > 0 && pathname !== '/saved-movies' && (<button className="movies__button" type="button">Ещё</button>)}
      </Container>
    </section>
  )
}