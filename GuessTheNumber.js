"use strict";

let count = 20;
let maxScore = 0;
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let message = document.querySelector(".message");
let number = document.querySelector(".number");
let highScore = document.querySelector(".highscore");
let guess = document.querySelector(".guess");
let again = document.querySelector(".again");
again.addEventListener("click", () => {
  message.textContent = "Start guessing";
  guess.value = null;
  number.textContent = "?";
  count = 20;
});

const handleGuessNumberFunction = () => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    message.textContent = "⛔ No Number...";
    count--;
  } else if (randomNumber > guess) {
    message.textContent = "Your guess is too less";
    count--;
  } else if (randomNumber < guess) {
    message.textContent = "Your guess is too high";
    count--;
  } else if (randomNumber === guess) {
    count--;
    message.textContent = "🎉Correct Number!";
    number.textContent = count;
    if (maxScore < count) {
      maxScore = count;
      highScore.textContent = maxScore;
    }
  } else if (count < 0) {
    message.textContent = "You Lose🥱";
  } else {
    message.textContent = "Start guessing...";
  }
};

document
  .querySelector(".check")
  .addEventListener("click", handleGuessNumberFunction);
