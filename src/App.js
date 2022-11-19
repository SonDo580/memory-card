import React, { useState } from "react";

const cards = [];
for (let i = 0; i < 12; i++) {
  const url = `./images/char${i}`;
  cards.push({ id: i, image: url });
}

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div>
      <h1>Memory Card Game</h1>
      <p>
        Get 1 point when clicking 1 card. But don't click any card more than 1
      </p>
      <p>
        <span>Score: {score}</span>
        <span>Best score: {bestScore}</span>
      </p>
    </div>
  );
}

export default App;
