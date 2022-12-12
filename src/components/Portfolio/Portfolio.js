import { Line } from '../Line/Line.js';
import { Container } from '../Container/Container.js';
import './Portfolio.css';

export function Portfolio() {
  return(
    <section className="portfolio">
      <Container type="main">
        <h3 className="portfolio__title">Портфолио</h3>
        <ul className="portfolio__items">
          <li className="portfolio__item">
            <a className="portfolio__item-link" href="https://code.s3.yandex.net/web-developer/final-projects/project-1/index.html" target="_blank" rel="noreferrer">Статичный сайт
            </a>  
          </li>
          <Line light={true}/>
          <li className="portfolio__item">
            <a className="portfolio__item-link" href="https://ekaterinavokin.github.io/russian-travel/index.html" target="_blank" rel="noreferrer">Адаптивный сайт</a>
          </li>
          <Line light={true}/>
          <li className="portfolio__item">
            <a className="portfolio__item-link" href="https://mesto.vokin.nomoredomains.icu/" target="_blank" rel="noreferrer">Одностраничное приложение</a>
          </li>
        </ul>
      </Container>
    </section>
  ) 
}