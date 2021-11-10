/* eslint-disable */
import "./style.css";

window.onload = function() {
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "10", "J", "Q", "k"];
  const suits = ["Hearts", "Diamons", "Spades", "Clubs"];

  function randomCard() {
    const randomValue = Math.floor(Math.random() * values.length);
    const randomSuit = Math.floor(Math.random() * suits.length);
    const cardValue = values[randomValue];
    const cardSuit = suits[randomSuit];

    let entity;
    if (cardSuit === "Diamonds") {
      entity = "&diams;";
    } else {
      entity = "&" + cardSuit.toLowerCase() + ";";
    }

    const top = document.querySelector(".top");
    top.innerHTML = `<span>${cardValue} </span><span>${entity} </span>`;
    const middle = document.querySelector(".middle");
    middle.innerHTML = `<h1>${entity}</h1>`;
    const bottom = document.querySelector(".bottom");
    bottom.innerHTML = `<span>${entity} </span><span>${cardValue}</span>`;
  }

  //write your code here
  randomCard();
};
