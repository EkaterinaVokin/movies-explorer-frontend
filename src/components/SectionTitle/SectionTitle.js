import './SectionTitle.css';

export function SectionTitle(props) {
  const { title } = props;
  
  return(
    <h2 className="section-title">{title}</h2>
  )
}