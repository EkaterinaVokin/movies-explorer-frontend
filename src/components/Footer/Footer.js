import './Footer.css';

export function Footer() {
  return (
    <div className="container">
      <footer className="footer">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <hr className="footer__border"></hr>
        <div className="footer__content">
          <p className="footer__content-copyright">&copy; {new Date().getFullYear()}</p>
          <a className="footer__content-link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">
            Яндекс.Практикум
          </a>
          <a className="footer__content-link" href="https://github.com/EkaterinaVokin" target="_blank" rel="noreferrer">
            Github
          </a>
        </div>
      </footer>
    </div>
  );
}
