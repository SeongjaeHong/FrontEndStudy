import * as browse_header from './browse_header.js';
// export {browse_header};
// export * as browse_header from './browse_header.js';
import * as browse_body from './browse_body.js';

window.addEventListener('scroll', () => {
    browse_header.changeBackground();
}, true);

browse_body.runContent(document.body.getElementsByClassName('ptrack-container')[0],
    '../files/Bridgerton/Bridgerton_stop.webp',
    '../files/Bridgerton/Bridgerton_video.mp4');