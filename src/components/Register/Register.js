import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { Container } from '../Container/Container.js';
import '../AuthForm/AuthForm.css';


export function Register() {
  return(
    <section className="form">
      <Container type="form">
        <div className="form__content">
          <Link to="/" className="form__link-header">
            <img className="form__logo" src={logo} alt="Логотип"/>
          </Link>
          <h2 className="form__title">Добро пожаловать!</h2>
          <form className="form__auth form__auth_register" name="form-registration" action="#">
            <div className="form__block">
              <label>
                <p className="form__label">Имя</p>
                <input
                  className="form__input"
                  name="name"
                  placeholder="Имя"
                  required
                />
                <span className='form__error'></span>
              </label>
            </div>
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
            <button className="form__button form__button_register_margin" type="submit">Зарегистрироваться</button> 
          </form>
          <p className="form__text">Уже зарегистрированы?
            <Link to="/signin" className="form__link-footer">Войти</Link>
          </p>
        </div>
      </Container>  
    </section>
  )
}