import { MoviesCard } from '../MoviesCard/MoviesCard';
import { Container } from '../Container/Container.js';
import './MoviesCardList.css';
import Card1 from '../../images/card1.jpg';
import Card2 from '../../images/card2.jpg';
import Card3 from '../../images/card3.jpg';

export function MoviesCardList() {

  const list = [
    {title: 'В погоне за Бенкси', time: '27 минут', image: Card1},
    {title: 'В погоне за Бенкси', time: '13 минут', image: Card2},
    {title: 'В погоне за Бенкси', time: '89 минут', image: Card3},
    {title: 'В погоне за Бенкси', time: '43 минут', image: Card1}
  ]

  return(
    <section className="movies">
      <Container type="movie">
        {list.length > 0 ? 
        (<ul className="movies__items">
          {list.map((item,i) => (
            <li className="movies__item">
              <MoviesCard 
                key={i}
                movie={item}
              />
            </li>
          ))}
        </ul>)
        : 
        (<div className="movies__text">Ничего не найдено</div>)}
        <button className="movies__button" type="button">Ещё</button>
      </Container>
    </section>
  )

}