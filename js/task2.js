"use strict";

const ingredients = [
    "Картошка",
    "Грибы",
    "Чеснок",
    "Помидоры",
    "Зелень",
    "Приправы"
];


const ingredientItem = document.querySelector('#ingredients');

ingredients.map((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    return ingredientItem.appendChild(listItem);
});