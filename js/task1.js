"use strict";

// const categories = document.querySelectorAll("li.item");

// console.log(`В списке ${categories.length} категории.`);

// for (let i = 0; i < categories.length; i++) {
//     console.log(`Категория: ${categories[i].firstElementChild.innerText}`);
//     console.log(
//         `Количество элементов: ${categories[i].lastElementChild.childElementCount}`
//     );
// }



const categories = document.querySelector('ul#categories')
console.log(categories.children.length)
const lists = document.querySelectorAll('li.item')
lists.forEach(list => console.log(list.firstElementChild.innerText))
lists.forEach(list => console.log(list.lastElementChild.children.length))