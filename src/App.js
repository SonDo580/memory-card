import React, { useState } from "react";

const cards = [];
for (let i = 1; i <= 12; i++) {
  const url = `./images/char${i}`;
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
      <div className="cards"></div>
    </div>
  );
}

export default App;
