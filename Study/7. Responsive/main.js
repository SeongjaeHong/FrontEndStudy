const toggleBtn = document.getElementsByClassName('navbar__toggleBtn')[0];
const menu = document.getElementsByClassName('navbar__menu')[0];
const icons = document.getElementsByClassName('navbar__icons')[0];

toggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});