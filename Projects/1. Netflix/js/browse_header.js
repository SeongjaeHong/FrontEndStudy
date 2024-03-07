export function changeBackground() {
    let main_header = document.body.getElementsByClassName('main-header')[0];
    if (window.scrollY == 0) main_header.style.backgroundColor = 'transparent';
    else main_header.style.backgroundColor = 'rgb(20, 20, 20)';
}