import closeButton from '../../images/button-close.svg';
import { Navigation } from '../Navigation/Navigation.js';
import './Menu.css';

export function Menu(props) {
  const { open, onClose } = props;

  return(
    <section className={`menu ${open ? 'menu_opened' : ''}`}>
      <div className="menu__content">
        <button className="menu__button" type="button" onClick={onClose}>
          <img  className="menu__button-image" src={closeButton} alt="кнопка закрыть"/>
        </button>
        <div className="menu__navigation">
          <Navigation onClose={onClose}/>
        </div>  
      </div>
    </section>
  )
}