import React, { useState, useContext, useEffect } from 'react';
import { Container } from '../Container/Container.js';
import { Line } from '../Line/Line.js';
import './Profile.css';
import { useFormValidator } from '../../hooks/useFormValidator.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

export function Profile({ onClick, onSubmit }) {
  const { currentUser } = useContext(CurrentUserContext); // Подписываемся на контекст

  const { values, errors, isValid, handleInputChange, setValues, errorMessage, successMessage, setErrorMessage, setSuccessMessage } = useFormValidator({ defaultIsValid: false });

  const [isVisible, setIsVisible] = useState(false); // смена кнопок
  const [isDisable, setIsNotDisable] = useState(false); // блокировка кнопки "Сохранить"

  // блокировки кнопки если старые значение пользователя совпадают с новыми
  useEffect(() => {
    if(currentUser.name !== values.name || currentUser.email !== values.email) {
      setIsNotDisable(true)
    } else {
      setIsNotDisable(false)
    }
  },[currentUser.name, currentUser.email,values.name, values.email])
  

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ // отправляем обновленные данные
      name: values.name,
      email: values.email,
    })
    .then((message) => { 
      setSuccessMessage(message) // показываем успешное сообщение
      setIsVisible(false)
    })
    .catch((exception) => {
      let { data, error } = exception;
      if (error) {
        return Promise.reject(error);
      }
      setErrorMessage(data.message); // показываем не успешное сообщение
      return Promise.reject(exception);
    })
  }

  function changeButton() {
    setErrorMessage('') // очищаем не успешное сообщение
    setSuccessMessage('') // очищаем успешное сообщение
    setIsVisible(true)
  }

  // записать данные пользователя в инпуты
  useEffect(() => {
    setValues(currentUser)
  },[setValues,currentUser])

  return (
    <section className="profile">
      <Container type="profile">
        <div className="profile__content">
          <form className="profile__form" name="form-profile" onSubmit={handleSubmit}>
            <h3 className="profile__title">Привет, {currentUser.name}!</h3>
            <div className="profile__block">
              <label className="profile__label">Имя</label>
              <input
                className="profile__input"
                type="text"
                name="name"
                minLength="2"
                maxLength="40"
                placeholder="Имя"
                pattern="[а-яА-Яa-zA-ZёË\- ]{1,}"
                required
                disabled={isVisible ? false : true}
                value={values.name || ''}
                onChange={handleInputChange}
              />
            </div>
            <span className={errors.name ? 'profile__error' : 'profile__error profile__error_type_margin'}>
              {errors.name}
            </span>
            <Line light={true} />
            <div className="profile__block">
              <label className="profile__label">E-mail</label>
              <input
                className="profile__input"
                type="email"
                name="email"
                minLength="4"
                maxLength="40"
                placeholder="E-mail"
                pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{1,3}$"
                required
                disabled={isVisible ? false : true} 
                value={values.email || ''}
                onChange={handleInputChange}
              />
            </div>
            <span className={errors.email ? 'profile__error' : 'profile__error profile__error_type_margin'}>
              {errors.email}
            </span>
            <div className="profile__buttons">
            {isVisible ? 
            (<>
              <span className={`profile__error profile__error_server ${!errorMessage ? 'profile__error_hidden' : ''}`}>
                {errorMessage}
              </span>
              <button
                key="save"
                className={!isValid || !isDisable ? 'profile__button profile__button_type_save profile__button_disabled' : 'profile__button profile__button_type_save'}
                type="submit"
                disabled={isValid && isDisable ? false : true}
              >
                Сохранить
              </button> 
            </>) 
             :  
            (<>
             <span className={`profile__success ${!successMessage ? 'profile__success_hidden' : ''}`}>
              {successMessage}
             </span>
             <button key="edit" className='profile__button profile__button_type_edit' type="button" onClick={changeButton}>
                Редактировать
              </button>
              <button key="exit" className='profile__button profile__button_type_exit' type="button" onClick={onClick}>
                Выйти из аккаунта
              </button>
            </>)
            }
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
