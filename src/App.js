import React, { useState } from "react";
import Card from "./components/Card";
import "./App.css";

const initialCards = [];
for (let i = 1; i <= 12; i++) {
  let url = `/images/char${i}`;
  if ([1, 6, 8, 11].includes(i)) {
    url += ".jpg";
  } else {
    url += ".png";
  }
  initialCards.push({ id: i, image: url });
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

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [chosenCards, setChosenCards] = useState([]);
  const [cards, setCards] = useState(initialCards);

  const handleClick = (cardID) => {
    if (!chosenCards.includes(cardID)) {
      setChosenCards((prevChosenCards) => [...prevChosenCards, cardID]);
      setScore((prevScore) => prevScore + 1);
    } else {
      setBestScore(score);
      // Reset game
      setScore(0);
      setChosenCards([]);
    }
    // Shuffle the cards
    setCards(shuffleArray(initialCards));
  };

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
          return (
            <Card
              key={card.id}
              card={card}
              handleClick={() => handleClick(card.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
