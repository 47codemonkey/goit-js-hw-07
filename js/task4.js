"use strict";

const value = document.querySelector("#value");

let counterValue = 0;

const increment = () => {
    counterValue = counterValue + 1;
    value.textContent = counterValue;
};

const decrement = () => {
    counterValue = counterValue - 1;
    value.textContent = counterValue;
};

const plus = document.querySelector("[data-action='increment']")
plus.addEventListener("click", increment);

const minus = document.querySelector("[data-action='decrement']")
minus.addEventListener("click", decrement);


/*

document
  .querySelector("[data-action='increment']")
  .addEventListener("click", increment);

document
  .querySelector("[data-action='decrement']")
  .addEventListener("click", decrement);


  */