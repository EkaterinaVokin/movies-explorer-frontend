import Burger from '../../images/burger.svg';
import './MenuButton.css';

export function MenuButton(props) {
  const { onOpen } = props;

  return (
    <button className="menu-button" type="button" onClick={onOpen}>
      <img className="menu-button__image" src={Burger} alt="кнопка открыть"/>
    </button>
  )
}