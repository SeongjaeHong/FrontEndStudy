const expBtn = document.getElementsByClassName('main__meta__title-expansion')[0];
const title = document.querySelector('.main__meta__title-container .title');

expBtn.addEventListener('click', (event)=>{
    console.log(event.target);
    expBtn.classList.toggle('clicked');
    title.classList.toggle('line-clamp')
});
