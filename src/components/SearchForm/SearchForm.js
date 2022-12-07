import { Container } from '../Container/Container.js';
import { Line } from '../Line/Line.js';
import searchButton from '../../images/search.svg';
import './SearchForm.css';

export function SearchForm() {
  return(
    <section className="search">
      <Container main={true}>
        <form className="search__form" name="form-search">
          <div className="search__row">
            <input 
              className="search__input" 
              placeholder="Фильм"
              type="text"
              required
            />
            <button className="search__button" type="submit">
              <img className="search__button-image" src={searchButton} alt="кнопка поиска"/>
            </button>
          </div>
          <div className="search__checkbox">
            <p className="search__checkbox-text">Короткометражки</p>
            <label className="search__checkbox-switch">
              <input className="search__checkbox-input" type="checkbox" />
              <span className="search__checkbox-slider"></span>
            </label>
          </div>
        </form>
      <Line light={true}/>  
      </Container>
    </section>
  )
}