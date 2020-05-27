"use strict";


const categories = document.querySelector('ul#categories')
console.log(categories.children.length)
const lists = document.querySelectorAll('li.item')
lists.forEach(list => console.log(list.firstElementChild.innerText))
lists.forEach(list => console.log(list.lastElementChild.children.length))

// const categories = document.querySelectorAll('.item')

// categories.forEach(category => {
//     const cat = category.firstElementChild.textContent
//     const LM = category.lastElementChild.children.length
    
//     console.log(`${cat} and ${LM}`)
// })
