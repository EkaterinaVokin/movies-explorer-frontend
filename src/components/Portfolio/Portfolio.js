import { Line } from '../Line/Line.js';
import { Container } from '../Container/Container.js';
import arrow from '../../images/strelka.svg';
import './Portfolio.css';

export function Portfolio() {
  return(
    <section className="portfolio">
      <Container type="main">
        <h3 className="portfolio__title">Портфолио</h3>
        <ul className="portfolio__items">
          <li className="portfolio__item">Статичный сайт
            <img className="portfolio__img" src={arrow} alt="стрелка"/>
          </li>
          <Line light={true}/>
          <li className="portfolio__item">Адаптивный сайт
            <img className="portfolio__img" src={arrow} alt="стрелка"/>
          </li>
          <Line light={true}/>
          <li className="portfolio__item">Одностраничное приложение
            <img className="portfolio__img" src={arrow} alt="стрелка"/>
          </li>
        </ul>
      </Container>
    </section>
  ) 
}