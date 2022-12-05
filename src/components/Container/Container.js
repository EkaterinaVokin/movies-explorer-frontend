import './Container.css';

export function Container(props) {
  const {children, main} = props;

  const classNames = ['container']

  if(main) {
    classNames.push('container_main')
  }

  return(
    <div className={classNames.join(' ')}>{children}</div>
  )
}