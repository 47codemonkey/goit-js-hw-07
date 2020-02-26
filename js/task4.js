"use strict";

let counterValue = 0;

const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');
const counter = document.getElementById("value");

const plus = () => {
  counter.textContent = counterValue;
  counterValue += 1;
};

const minus = () => {
  counter.textContent = counterValue;
  counterValue -= 1;
};

increment.addEventListener("click", plus);
decrement.addEventListener("click", minus);



/*

document
  .querySelector("[data-action='increment']")
  .addEventListener("click", increment);

document
  .querySelector("[data-action='decrement']")
  .addEventListener("click", decrement);


  */