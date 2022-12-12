import './Line.css';

export function Line(props) {
  const { light } = props;
  const classNames = ['line'];

  if (light) {
    classNames.push('line_light');
  }

  return (
    <hr className={classNames.join(' ')}></hr>
  )
}