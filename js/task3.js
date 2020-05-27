"use strict";


const images = [{
        url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "White and Black Long Fur Cat"
    },
    {
        url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Orange and White Koi Fish Near Yellow Koi Fish"
    },
    {
        url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Group of Horses Running"
    }
];


const gal = document.getElementById('gallery')

const mockup = images.map(({
    url,
    alt
}) => `<li><img src="${url}" alt="${alt}"/></li>`).join('')

gal.insertAdjacentHTML('afterbegin', mockup)


// another variant

// const galleryElement = document.querySelector('#gallery');

// const createGalleryItem = ({url, alt}) => {
//   const item = document.createElement('li');
//   const image= document.createElement('img');
//   image.classList.add('image');
//   image.src = url;
//   image.alt = alt;
//   item.appendChild(image);
//   return item;
//   }

//   const elements = images.map((e) => createGalleryItem(e));

//   galleryElement.append(...elements);

