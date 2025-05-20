const gallery = document.querySelector('#gallery');
const viewport = document.querySelector('#viewport');
let output;
for (let i = 0; i < 200; i++) {
  output = '';
  output += 'rotateY(' + i * 20 + 'deg)';
  output += 'translateY(' + i * 5 + 'px)';
  output += 'translateZ(' + 310 + 'px)';
  let image = document.createElement('div');
  image.classList = 'image';
  image.style.width = '100px';
  image.style.height = '60px';
  image.style.transform = output;
  gallery.appendChild(image);
}

let originalPosition = { x: 0, y: 0 };
let originalRotation = { x: 0, y: 0, z: 0 };
let originalScale = 1.0;
const createGalleryPosition = function () {
  let output = '';
  output += 'translateY(' + originalPosition.y + 'px) ';
  output += 'rotateY(' + originalRotation.y + 'deg)';
  console.log(output);
  return output;
};

const createViewportPosition = function () {
  let output = '';
  output += 'rotateX(-10deg) ';
  output += 'scaleX(' + originalScale + ') ';
  output += 'scaleY(' + originalScale + ')';
  return output;
};

isMouseDown = false;
window.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  originalPosition.x = e.screenX;
  e.preventDefault();
});
window.addEventListener('mouseup', (e) => {
  isMouseDown = false;
  e.preventDefault();
});

window.addEventListener('mousemove', (e) => {
  if (isMouseDown) {
    distance = e.screenX - originalPosition.x;
    originalRotation.y += distance;
    originalPosition.y += distance / 3;
    gallery.style.transform = createGalleryPosition();
    viewport.style.transform = createViewportPosition();
    originalPosition.x = e.screenX;
  }
  e.preventDefault();
});
