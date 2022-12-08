import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { Container } from '../Container/Container.js';
import '../AuthForm/AuthForm.css';

export function Login() {
  return(
    <section className="form">
      <Container type="form">
        <div className="form__content">
          <Link to="/" className="form__link-header">
            <img className="form__logo" src={logo} alt="Логотип"/>
          </Link>
          <h2 className="form__title">Рады видеть!</h2>
          <form className="form__auth form__auth_login" name="form-login" action="#">
            <div className="form__block">
              <label>
                <p className="form__label">E-mail</p>
                <input
                  className="form__input"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                />
                <span className='form__error'></span>
              </label>
            </div>
            <div className="form__block">
              <label>
                <p className="form__label">Пароль</p>
                <input
                  className='form__input form__input_color'
                  name="password"
                  type="password"
                  minLength="8"
                  placeholder="Пароль"
                  required
                />
                <span className='form__error'></span>
              </label>
            </div>
            <button className="form__button form__button_login_margin" type="submit">Войти</button> 
          </form>
          <p className="form__text">Ещё не зарегистрированы?
            <Link to="/signup" className="form__link-footer">Регистрация</Link>
          </p>
        </div>
      </Container>  
    </section>
  )
}