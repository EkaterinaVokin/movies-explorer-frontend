import React, { useState } from 'react';
import { Container } from '../Container/Container.js';
import { Line } from '../Line/Line.js';
import searchButton from '../../images/search.svg';
import './SearchForm.css';

export function SearchForm(props) {
  const { name, onSearch, onFilter, defaultValues, isLoading } = props;

  const [error, setError] = useState(''); // вывод ошибки

  const [values, setValues] = useState(defaultValues); // ввод значения в инпуте

  function handleShortsChange(event) {
    const newValues = {
      ...values,
      shorts: event.target.checked,
    }
    setValues(newValues)
    onFilter(newValues)
  }

  function handleSearchChange(event) {
    setError('') // очищаем поле от ошибок
    setValues({
      ...values,
      search: event.target.value,
    })
  }

  function search() {
    setError('')

    onSearch(values)
      .catch((exception) => {
        setError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        return Promise.reject(exception);
      })
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (values.search.trim() === '') {
      setError('Нужно ввести ключевое слово')
      return
    }

    search()
  }

  return(
    <section className="search">
      <Container type="main">
        <form className="search__form" name={name} onSubmit={handleSubmit} noValidate>
          <div className="search__row">
            <input 
              className="search__input" 
              placeholder="Фильм"
              type="text"
              name="search"
              value={values.search}
              required
              onChange={handleSearchChange}
            />
            <button className="search__button" type="submit" disabled={isLoading}>
              <img className="search__button-image" src={searchButton} alt="кнопка поиска"/>
            </button>
          </div>
          <span className={error ? "search__error" : "search__error_hidden"}>{error}</span>
          <div className="search__checkbox">
            <p className="search__checkbox-text">Короткометражки</p>
            <label className="search__checkbox-switch">
              <input 
                className="search__checkbox-input" 
                type="checkbox" 
                name="shorts"
                checked={values.shorts}
                onChange={handleShortsChange}
                />
              <span className="search__checkbox-slider"></span>
            </label>
          </div>
        </form>
      <Line light={true}/>  
      </Container>
    </section>
  )
}