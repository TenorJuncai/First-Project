let cards = [];
let sum = 0;
let gameIsOn = false;
let hasBlackJack = false;

const startBtn = document.getElementById("startBtn");
const newCardBtn = document.getElementById("newCardBtn");
const yourCards = document.getElementById("card-el");
const sumEl = document.querySelector("#sum-el");
const gameEl = document.getElementById("game-el");
const resetBtn = document.getElementById("reset");

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

startBtn.addEventListener("click", function () {
  startGame();
});

newCardBtn.addEventListener("click", function () {
  getNewCard();
});

resetBtn.addEventListener("click", function () {
  reset();
});

function startGame() {
  gameIsOn = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  yourCards.textContent = "Your cards :";
  for (let i = 0; i < cards.length; i++) {
    yourCards.textContent += cards[i] + " ";
  }

  if (sum < 21) {
    gameEl.textContent = " Want to add a new card? ";
    sumEl.textContent = "Sum : " + sum;
  } else if (sum === 21) {
    gameEl.textContent = " You've won the game! ";
    sumEl.textContent = "Sum : " + sum;
    hasBlackJack = true;
  } else {
    gameEl.textContent = " You've exploxed! ";
    sumEl.textContent = "Sum : " + sum;
    gameIsOn = false;
  }
}

function getNewCard() {
  if (gameIsOn === true && hasBlackJack === false) {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    renderGame();
  }
}

function reset() {
  cards = [];
  sum = 0;
  gameIsOn = false;
  hasBlackJack = false;
  yourCards.textContent = "Your cards :";
  sumEl.textContent = "Sum : ";
  gameEl.textContent = " Welcome to Black Jack! ";
}
