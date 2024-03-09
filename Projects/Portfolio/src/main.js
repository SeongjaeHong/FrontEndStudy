// Apply dark mode when scrolloing.
const header = document.body.getElementsByClassName('header')[0];
const headerHeight = header.getBoundingClientRect().height;
window.addEventListener('scroll', ()=> {
    if (window.scrollY > headerHeight) {
        header.classList.add('header--dark');
    }
    else{
        header.classList.remove('header--dark');
    }
});