import './Card.css';

export default function Card(props) {
  const cardStyle = {
    backgroundColor: props.backgroundColor
  };
  return <div className="Card" style={cardStyle}>{props.children}</div>;
}
