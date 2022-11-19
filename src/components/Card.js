import React from "react";

function Card(props) {
  const { card } = props;

  return (
    <div key={card.id} className="card">
      <img src={card.image} alt={`character ${card.id}`} />
      <p>Charater {card.id}</p>
    </div>
  );
}

export default Card;
