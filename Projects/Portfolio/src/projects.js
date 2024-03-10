'use strict'


// Project filtering
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
categories.addEventListener('click', (event) => {
    let target = event.target;
    if (target.className == 'category__count') {
        target = target.parentElement;  // catrygory button
    }

    const category = target.dataset.category;
    if (category == null) {
        return;
    }

    // Setting active menu
    const active = document.querySelector('.category--selected');
    active.classList.remove('category--selected');
    target.classList.add('category--selected');

    projects.forEach(project => {
        if (project.dataset.type == category || category == 'all') {
            project.style.display = 'block';
        }
        else {
            project.style.display = 'none';
        }
    });
});