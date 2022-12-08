import React, { useState } from 'react';
import { Container } from '../Container/Container.js';
import { Line } from '../Line/Line.js';
import './Profile.css';

export function Profile({onClick}) {

  const [isValid ,setIsValid] = useState(false) // временно


    return(
      <section className="profile">
        <Container type="profile">
          <div className="profile__content">
            <form className="profile__form" name="form-profile">
              <h3 className="profile__title">Привет, Екатерина!</h3>
              <div className="profile__block">
                <label className="profile__label">Имя</label>
                <input 
                  className="profile__input"
                  type="text"
                  placeholder="Имя"
                />
              </div>
              <Line light={true}/>
              <div className="profile__block">
                <label className="profile__label">E-mail</label>
                <input 
                  className="profile__input"
                  type="email"
                  placeholder="E-mail"
                />
              </div>
              <div className="profile__buttons">
                {isValid ? 
                  (<button className="profile__button profile__button_type_save" type="submit">
                    Сохранить
                  </button>)
                    :
                  (<>
                  <button className="profile__button profile__button_type_edit" type="submit">
                    Редактировать
                  </button>
                  <button className="profile__button profile__button_type_exit" type="button" onClick={onClick}>
                    Выйти из аккаунта
                  </button>
                  </>)
                }
              </div>
            </form>
          </div>
        </Container>
      </section>
    )
}