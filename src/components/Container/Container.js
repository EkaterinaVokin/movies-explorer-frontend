import './Container.css';

export function Container(props) {

  const { children, type } = props;

  const classNames = ['container']

  if(type) {
    classNames.push(`container_type_${type}`)
  } 

  return(
    <div className={classNames.join(' ')}>{children}</div>
  )
}