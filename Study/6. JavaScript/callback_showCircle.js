function showCircle(cx = 0, cy = 0, radius, callback) {
    let circle_div = document.createElement('div');
    circle_div.style.width = 0;
    circle_div.style.height = 0;
    circle_div.style.top = 0;
    circle_div.style.left = cx + 'px';
    circle_div.style.top = cy + 'px';
    circle_div.className = 'circle';
    document.body.append(circle_div);

    setTimeout(() => {
        circle_div.style.width = 2 * radius + 'px';
        circle_div.style.height = 2 * radius + 'px';

        circle_div.addEventListener('transitionend', function handler() {
            circle_div.removeEventListener('transitionend', handler);
            callback(circle_div);
        });

    }, 0)
}

function go() {
    showCircle(150, 150, 100, t => {
        t.classList.add('message-ball');
        t.append("Hello!");
    });
}

const btnEl = document.querySelector('.btn');
btnEl.addEventListener('click', go);