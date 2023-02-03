export default function Card(props) {
  const { card, handleClick } = props;

  return (
    <div className="card" onClick={handleClick}>
      <img src={card.image} alt={`character ${card.id}`} />
      <p>Character {card.id}</p>
    </div>
  );
}
