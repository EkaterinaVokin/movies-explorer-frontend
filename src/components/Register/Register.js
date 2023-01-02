import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { Container } from '../Container/Container.js';
import '../AuthForm/AuthForm.css';
import { useFormValidator } from '../../hooks/useFormValidator.js';

export function Register({ onSubmit }) {
  const { values, errors, isValid, handleInputChange, resetForm, errorMessage, setErrorMessage } = useFormValidator({defaultIsValid: false});

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit({
      name: values.name,
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
      });
  }

  return (
    <section className="form">
      <Container type="form">
        <div className="form__content">
          <Link to="/" className="form__link-header">
            <img className="form__logo" src={logo} alt="Логотип" />
          </Link>
          <h2 className="form__title">Добро пожаловать!</h2>
          <form className="form__auth form__auth_register" name="form-registration" action="#" onSubmit={handleSubmit} noValidate>
            <div className="form__block">
              <label>
                <p className="form__label">Имя</p>
                <input
                  className={errors.name ? 'form__input form__input_type_error' : 'form__input'}
                  name="name"
                  minLength="2"
                  placeholder="Имя"
                  pattern="[а-яА-Яa-zA-ZёË\- ]{1,}"
                  required
                  value={values.name || ''}
                  onChange={handleInputChange}
                />
                <span className={errors.name ? 'form__error' : 'form__error'}>{errors.name}</span>
              </label>
            </div>
            <div className="form__block">
              <label>
                <p className="form__label">E-mail</p>
                <input
                  className={errors.email ? 'form__input form__input_type_error' : 'form__input'}
                  name="email"
                  type="email"
                  placeholder="Email"
                  minLength="4"
                  maxLength="40"
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
                  className={errors.password ? 'form__input form__input_type_color form__input_type_error' : 'form__input form__input_color'}
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
            <span className={`form__error form__error_server form__error_margin_register ${!errorMessage ? 'form__error_hidden' : '' }`}>{errorMessage}</span>
            <button 
              className={isValid ? 'form__button' : 'form__button form__button_disabled'} 
              type="submit" 
              disabled={isValid ? false : true}>
              Зарегистрироваться
            </button>
          </form>
          <p className="form__text">
            Уже зарегистрированы?
            <Link to="/signin" className="form__link-footer">
              Войти
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
