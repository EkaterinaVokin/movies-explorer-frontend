import { Line } from '../Line/Line.js';
import { SectionTitle } from '../SectionTitle/SectionTitle.js';
import { Container } from '../Container/Container.js';
import './Techs.css';

export function Techs() {
  return (
    <section className="techs">
      <Container type="main">
        <SectionTitle title="Технологии"/>
        <Line/>
        <div className="techs__section">
          <h3 className="techs__section-title">7 технологий</h3>
          <p className="techs__section-text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </div>
        <ul className="techs__items">
          <li className="techs__item">HTML</li>
          <li className="techs__item">CSS</li>
          <li className="techs__item">JS</li>
          <li className="techs__item">React</li>
          <li className="techs__item">Git</li>
          <li className="techs__item">Express.js</li>
          <li className="techs__item">mongoDB</li>
        </ul>
      </Container>
    </section>
  )
}