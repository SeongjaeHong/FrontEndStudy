'use strict'

// Project filtering
const categories = document.querySelector('.categories');
categories.addEventListener('click', (event)=>{
    console.log(event.target.dataset);
    console.log(event.target.dataset['category']);
});