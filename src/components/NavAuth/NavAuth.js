import { Link } from 'react-router-dom';
import './NavAuth.css';

export function NavAuth() {
  return(
    <nav className="nav">
      <ul className="nav__items">
        <li className="nav__item"> 
          <Link className="nav__item-link" to="/signup">Регистрация</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__item-link nav__item-link_button" to="/signin">Войти</Link>
        </li>
      </ul>
    </nav>
  )
}