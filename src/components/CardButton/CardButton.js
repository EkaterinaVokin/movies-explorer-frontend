import './CardButton.css';

export function CardButton({children,colored, onClick}) {
  const classNames = ['card-button'];

  if(colored) {
    classNames.push('card-button_colored')
  }

  return (
    <button className={classNames.join(' ')} type="button" onClick={onClick}>{children}</button>
  )
}