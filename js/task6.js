"use strict";


const validationInput = document.querySelector("#validation-input");
const inputLength = validationInput.getAttribute("data-length");

function val() {
    validationInput.classList.add("invalid");
    if (validationInput.value.length == inputLength) {
        validationInput.classList.add("valid");
        validationInput.classList.remove("invalid");
    }
}

validationInput.addEventListener("blur", val);



// const input = document.getElementById('validation-input')

// input.addEventListener('blur', fn)


// function fn(e) {

//     const six = e.currentTarget.dataset.length
//     const curVal = e.currentTarget.value.length

//     if(curVal < six || curVal > six) {
//         input.style.borderColor = 'red'
//     } else {
//         input.style.borderColor = 'green'

// }

// }

// function fn(e) {

//     const six = e.currentTarget.dataset.length
//     const curVal = e.currentTarget.value.length

//     if(curVal < six || curVal > six) {

//         input.classList.add('invalid')
//     } else {
//         input.classList.add('valid')
//         input.classList.remove('invalid')

// }

// }


// function fn(e) {

//     const six = Number(e.currentTarget.dataset.length)
//     const curVal = e.currentTarget.value.length

//     if (curVal === six) {
//         input.classList.add('valid')
//     } else {
//         input.classList.add('invalid')
//         input.classList.remove('valid')
//     }
// }
