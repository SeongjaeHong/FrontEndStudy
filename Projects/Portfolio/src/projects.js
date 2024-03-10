'use strict'


// Show projects correspond to the clicked category
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');
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

    // Project filtering
    projectsContainer.classList.add('anim-out');
    setTimeout(() => {
        new Promise(function(resolve) {
            projectFiltering(category);
            resolve;
        }).then(projectsContainer.classList.remove('anim-out'));
    }, 250);  // animation time is 250ms in CSS
});

function projectFiltering(category){
    projects.forEach(project => {
        if (project.dataset.type == category || category == 'all') {
            project.style.display = 'block';
        }
        else {
            project.style.display = 'none';
        }
    });
}