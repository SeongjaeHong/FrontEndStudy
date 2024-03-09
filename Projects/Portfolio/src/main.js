class headerManager {
    constructor() {
        this.headerEl = document.body.getElementsByClassName('header')[0];
    }

    // Apply dark mode when scrolloing.
    changeColor(scrollY) {
        if (scrollY > this.headerEl.offsetHeight) {
            this.headerEl.classList.add('header--dark');
        }
        else {
            this.headerEl.classList.remove('header--dark');
        }
    }

    // Open/Close navigation
    // TODO
}

const header_manager = new headerManager();
window.addEventListener('scroll', () => {
    // Apply dark mode when scrolloing.
    header_manager.changeColor(window.scrollY);
});

const home_section = document.getElementById('home');
window.addEventListener('scroll', () => {
    // Change opacity of Home section
    home_section.style.opacity = 1 - window.scrollY / home_section.offsetHeight;
});

const arrowEl = document.getElementsByClassName('scroll-up')[0];
window.addEventListener('scroll', () => {
    // Show/Hide scroll-up button
    if (window.scrollY > home_section.offsetHeight / 2) {
        arrowEl.style.display = 'block';
    }
    else {
        arrowEl.style.display = 'none';
    }
    home_section.style.opacity = 1 - window.scrollY / home_section.offsetHeight;
});