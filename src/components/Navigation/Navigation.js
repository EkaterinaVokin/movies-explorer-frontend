import { Link, NavLink } from 'react-router-dom';
import logoAccount from '../../images/account.svg';
import './Navigation.css';

export function Navigation() {
  return(
    <nav className="navigation">
      <ul className="navigation__items">
        <li className="navigation__item">
          <NavLink className="navigation__item-link navigation__item-link_hidden" activeClassName="navigation__item-link-active" to="/">Главная</NavLink>
        </li>
        <li className="navigation__item">
          <NavLink className="navigation__item-link" activeClassName="navigation__item-link-active" to="/movies">Фильмы</NavLink>
        </li>
        <li className="navigation__item">
          <NavLink className="navigation__item-link" activeClassName="navigation__item-link-active" to="/saved-movies">Сохранённые фильмы</NavLink>
        </li>
      </ul>
      <Link to="/profile" className="navigation__account">Аккаунт
        <span className="navigation__account-border">
          <img src={logoAccount} alt="вход в профиль"/>
        </span>
      </Link>
    </nav>
  )
}