"use strict";

const inputNumber = document.querySelector(".js_input");
const inputBtn = document.querySelector(".js_btn");
const eraseBtn = document.querySelector(".js_eraseBtn");
const clue = document.querySelector(".js_clue");
const attemptsMsg = document.querySelector(".js_attempts");
const resetBtn = document.querySelector(".js_resetBtn");

function clueMsg(msg) {
  clue.innerHTML = msg;
}

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);
console.log(randomNumber);

const numberGame = () => {
  const playerNumber = parseInt(inputNumber.value);
  console.log(playerNumber);

  if (playerNumber === randomNumber) {
    clueMsg("Has ganado campeona!!! Recarga la página para volver a jugar!");
    clue.classList.add("colorGreen");
  } else if (playerNumber < randomNumber) {
    clueMsg("Pista: demasiado bajo");
    clue.classList.add("colorRedLow");
  } else if (playerNumber > randomNumber && playerNumber < 100) {
    clueMsg("Pista: demasiado alto");
    clue.classList.remove("colorRedLow");
    clue.classList.add("colorRedHigh");
  } else if (playerNumber > 100) {
    clueMsg("El número debe estar entre 1 y 100");
    clue.classList.remove("colorRedLow");
    clue.classList.add("colorRedHigh");
  } else if (inputNumber.value === "") {
    clueMsg("Debes introducir un número para jugar.");
    clue.classList.remove("colorRedLow");
    clue.classList.add("colorRedHigh");
  }
};

let attempt = 0;

const attemptNumber = () => {
  attempt += 1;
};

function handleClick(ev) {
  ev.preventDefault();
  numberGame();
  attemptNumber();
  attemptsMsg.innerHTML = `Número de intentos: ${attempt}`;
}

inputBtn.addEventListener("click", handleClick);

function handleClickErase(ev) {
  ev.preventDefault();
  inputNumber.value = "";
}

eraseBtn.addEventListener("click", handleClickErase);

function handleClickReset(ev) {
  ev.preventDefault();
  clue.classList.remove("colorRedLow");
  clue.classList.remove("colorRedHigh");
  clue.classList.remove("colorGreen");
  inputNumber.value = "";
  clueMsg("Pista: Escribe el número y dale a Prueba");
  attemptNumber();
  attempt = 0;
  attemptsMsg.innerHTML = `Número de intentos: ${attempt}`;
}

resetBtn.addEventListener("click", handleClickReset);
