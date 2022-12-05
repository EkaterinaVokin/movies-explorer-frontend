import { Container } from '../Container/Container.js';
import mainImg from '../../images/landing-logo.svg';
import './Promo.css';

export function Promo() {
  return(
    <section className="promo">
      <Container main={true}>
        <div className="promo__content">
          <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
          <img className="promo__img" src={mainImg} alt="спираль"/>
        </div>
      </Container>
    </section>
  )
}