import { Line } from '../Line/Line.js';
import { SectionTitle } from '../SectionTitle/SectionTitle.js';
import { Container } from '../Container/Container.js';
import photo from '../../images/photo.jpg';
import './AboutMe.css';

export function AboutMe() {
  return(
    <section className="about">
      <Container main={true}>
        <SectionTitle title="Студент" />
        <Line />
        <div className="about__content">
          <div className="about__life">
            <h2 className="about__life-name">Екатерина</h2>
            <p className="about__life-me">Фронтенд-разработчик, 26 лет</p>
            <p className="about__life-description">Я родилась и живу в Красноярске, закончила факультет экономики СибГУ им. М.Ф. Решетнева. Я люблю путешествовать, а ещё увлекаюсь йогой. В 2021 году начала верстать свой первый проект, так же изучаю профильные материалы через книги и статьи. С 2018 года работала в компании АО «Кредит Европа Банк». После решила изменить свою жизнь и пойти на курсы Веб-разработчика.</p>
            <a className="about__life-github" href="https://github.com/EkaterinaVokin" target="_blank" rel="noreferrer">Github</a>
          </div>
          <img className="about__photo" src={photo} alt="фотография студента"/>
        </div>
      </Container>
    </section>
  )
}