"use strict";

let count = 20;
let maxScore = 0;
let randomNumber = Math.trunc(Math.random() * 20) + 1;
const message = document.querySelector(".message");
const number = document.querySelector(".number");
const highScore = document.querySelector(".highscore");
const guess = document.querySelector(".guess");
const again = document.querySelector(".again");
const score = document.querySelector(".score");
const body = document.querySelector("body");

again.addEventListener("click", () => {
  message.textContent = "Start guessing";
  guess.value = null;
  number.textContent = "?";
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  body.style.backgroundColor = "#303030";
  number.style.width = "15rem";
  score.textContent = 20;
  count = 20;
});

const handleGuessNumberFunction = () => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (count > 0) {
    if (!guess) {
      message.textContent = "⛔ No Number...";
      count--;
      score.textContent = count;
    } else if (randomNumber > guess) {
      message.textContent = "Your guess is too less";
      count--;
      score.textContent = count;
    } else if (randomNumber < guess) {
      message.textContent = "Your guess is too high";
      count--;
      score.textContent = count;
    } else if (randomNumber === guess) {
      count--;
      message.textContent = "🎉Correct Number!";
      number.textContent = randomNumber;
      number.style.width = "30rem";
      score.textContent = count;
      body.style.backgroundColor = "green";

      if (maxScore < count) {
        maxScore = count;
        highScore.textContent = maxScore;
      }
    } else if (count < 5) {
      message.textContent = "You Lose🥱";
    }
  } else {
    body.style.backgroundColor = "red";
  }
};

document
  .querySelector(".check")
  .addEventListener("click", handleGuessNumberFunction);
