import React, { useState } from "react";
import Card from "./components/Card";
import "./App.css";

const cards = [];
for (let i = 1; i <= 12; i++) {
  let url = `/images/char${i}`;
  if ([1, 6, 8, 11].includes(i)) {
    url += ".jpg";
  } else {
    url += ".png";
  }
  cards.push({ id: i, image: url });
}

const shuffleArray = (arr) => {
  let currentIndex = arr.length - 1;
  let randomIndex;

  while (currentIndex !== 0) {
    // Pick a remaining element and swap it with the current element
    randomIndex = Math.floor(Math.random() * currentIndex);

    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ]; // Use destructuring assignment

    currentIndex--;
  }

  return arr;
};

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [chosenCards, setChosenCards] = useState([]);

  const handleClick = () => {};

  return (
    <div className="App">
      <h1>Memory Card Game</h1>
      <p className="instruction">
        Get 1 point when clicking 1 card. But don't click any card more than 1
      </p>
      <p className="scores">
        <span>
          Score: <strong>{score}</strong>
        </span>
        <span>
          Best score: <strong>{bestScore}</strong>
        </span>
      </p>
      <div className="cards">
        {cards.map((card) => {
          return <Card card={card} onClick={handleClick} />;
        })}
      </div>
    </div>
  );
}

export default App;
