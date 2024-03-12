'use strict'

function handleActiveNav(menu) {
    const activeMenu = document.querySelector('.header__menu__item.active');
    if (menu != activeMenu.id) {
        const target = document.querySelector(`.header__menu__item[data-menu="${menu}"]`);
        activeMenu.classList.remove('active');
        target.classList.add('active');
    }
}

function changeNavbyScroll(entries) {
    let nav;
    let idx;
    for (let entry of entries) {
        idx = sectionIds.indexOf(entry.target.id);
        if (entry.isIntersecting) {
            visibles[idx] = true;
        }
        else{
            visibles[idx] = false;
        }
    }
    if (visibles[visibles.length - 1]) {
        nav = sections[sections.length - 1].id;
    }
    else {
        nav = sections[visibles.indexOf(true)].id;
    }
    if (nav) {
        handleActiveNav(nav);
    }
}
const observerOption = {
    rootMargin: '-20% 0px -10px 0px',
    threshold: [0.3, 0.9]
};
const observer = new IntersectionObserver(changeNavbyScroll, observerOption);
const sections = document.querySelectorAll('.section');
const sectionIds = Array.from(sections).map((section)=>section.id);
const visibles = Array.from(sections).map(() => false);
window.addEventListener('scroll', () => {
    sections.forEach(target => {
        observer.observe(target);
    });
});

const testimonialsBtn = document.querySelector('.header__menu__item[data-menu="testimonials"]');
// Testimonials's located where last section(Contact) is seen.
// Therefore when you click Testimonial, Nav is automatically changed to Contact.
// This function is to highlight the testimonial button when users click it.
testimonialsBtn.addEventListener('click', (event)=>{
    setTimeout(() => {
        handleActiveNav(event.target.dataset.menu);
    }, 10);
});