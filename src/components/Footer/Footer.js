import { Line } from '../Line/Line.js';
import { Container } from '../Container/Container.js';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <Line light={true}/>
        <div className="footer__content">
          <p className="footer__content-copyright">&copy; {new Date().getFullYear()}</p>
          <a className="footer__content-link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">
            Яндекс.Практикум
          </a>
          <a className="footer__content-link" href="https://github.com/EkaterinaVokin" target="_blank" rel="noreferrer">
            Github
          </a>
        </div>
      </Container>
    </footer>
  );
}
