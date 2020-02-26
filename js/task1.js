"use strict";


const categories = document.querySelector('ul#categories')
console.log(categories.children.length)
const lists = document.querySelectorAll('li.item')
lists.forEach(list => console.log(list.firstElementChild.innerText))
lists.forEach(list => console.log(list.lastElementChild.children.length))