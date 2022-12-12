import './InfoTooltip.css';
import closePopup from '../../images/close_popup.svg';

export function InfoTooltip(props) {
 
  const {isOpen, onClose, error} = props;

  const title = error ? 'Что-то пошло не так! Попробуйте ещё раз.' : 'Вы успешно зарегистрировались!';

  return(
    <section className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <div className="popup__content">
          <button className="popup__button-close" type="button" onClick={onClose}>
            <img className="popup__close" src={closePopup} alt="кнопка закрыть" />
          </button>
          <p className="popup__text">{title}</p>
        </div>
      </div>
    </section>
  )
}