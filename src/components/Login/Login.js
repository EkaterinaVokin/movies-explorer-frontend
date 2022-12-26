import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { Container } from '../Container/Container.js';
import '../AuthForm/AuthForm.css';
import { useFormValidator } from '../../hooks/useFormValidator.js';

export function Login({ onSubmit }) {
  const { values, errors, isValid, handleInputChange, resetForm, errorMessage, setErrorMessage} = useFormValidator({ defaultIsValid: false });

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({
      email: values.email,
      password: values.password,
    }) // отправляем данные которые ввел пользователь
      .then(() => {
        resetForm(); // очищаем поля
      })
      .catch((exception) => {
        let { data, error } = exception;
        if (error) {
          return Promise.reject(error);
        }
        setErrorMessage(data.message);
        return Promise.reject(exception);
      });
  }

  return (
    <section className="form">
      <Container type="form">
        <div className="form__content">
          <Link to="/" className="form__link-header">
            <img className="form__logo" src={logo} alt="Логотип" />
          </Link>
          <h2 className="form__title">Рады видеть!</h2>
          <form className="form__auth form__auth_login" name="form-login" action="#" onSubmit={handleSubmit} noValidate>
            <div className="form__block">
              <label>
                <p className="form__label">E-mail</p>
                <input
                  className="form__input"
                  name="email"
                  type="email"
                  minLength="4"
                  maxLength="40"
                  placeholder="Email"
                  required
                  pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{1,3}$"
                  value={values.email || ''}
                  onChange={handleInputChange}
                />
                <span className={errors.email ? 'form__error' : 'form__error'}>{errors.email}</span>
              </label>
            </div>
            <div className="form__block">
              <label>
                <p className="form__label">Пароль</p>
                <input
                  className="form__input form__input_color"
                  name="password"
                  type="password"
                  minLength="8"
                  maxLength="40"
                  placeholder="Пароль"
                  required
                  value={values.password || ''}
                  onChange={handleInputChange}
                />
                <span className={errors.password ? 'form__error' : 'form__error'}>{errors.password}</span>
              </label>
            </div>
            <span
              className={`form__error form__error_server form__error_margin_login ${
                !errorMessage ? 'form__error_hidden' : ''
              }`}
            >
              {errorMessage}
            </span>
            <button
              className={isValid ? 'form__button' : 'form__button form__button_disabled'}
              type="submit"
              disabled={isValid ? false : true}
            >
              Войти
            </button>
          </form>
          <p className="form__text">
            Ещё не зарегистрированы?
            <Link to="/signup" className="form__link-footer">
              Регистрация
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
