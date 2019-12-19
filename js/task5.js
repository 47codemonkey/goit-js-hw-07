"use strict";

const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

const checkOutput = e => {
    e.target.value === "" ? output.textContent = "незнакомец" : output.textContent = e.target.value;
};

input.addEventListener("input", checkOutput);