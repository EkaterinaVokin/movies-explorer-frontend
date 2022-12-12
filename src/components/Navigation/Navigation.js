import { Link, NavLink } from 'react-router-dom';
import logoAccount from '../../images/account.svg';
import './Navigation.css';

export function Navigation({onClose}) {

  return(
    <nav className="navigation">
      <ul className="navigation__items">
        <li className="navigation__item">
          <NavLink exact className="navigation__item-link navigation__item-link_hidden" to="/" activeClassName="navigation__item-link_active" onClick={onClose}>Главная</NavLink>
        </li>
        <li className="navigation__item">
          <NavLink className="navigation__item-link" activeClassName="navigation__item-link_active" to="/movies" onClick={onClose}>Фильмы</NavLink>
        </li>
        <li className="navigation__item">
          <NavLink className="navigation__item-link" activeClassName="navigation__item-link_active" to="/saved-movies" onClick={onClose}>Сохранённые фильмы</NavLink>
        </li>
      </ul>
      <Link to="/profile" className="navigation__account" onClick={onClose}>Аккаунт
        <span className="navigation__account-border">
          <img src={logoAccount} alt="вход в профиль"/>
        </span>
      </Link>
    </nav>
  )
}