import * as browse_header from './browse_header.js';
import * as browse_body from './browse_body.js';
import { getSvgPath } from './svg_table.js';

function setSVG() {
    /*
    Draw SVGs according to each class name.
    */
    const svgEls = document.getElementsByTagName('svg');
    for (let svgEl of svgEls) {
        let pathEl = svgEl.getElementsByTagName('path')[0];
        let value = svgEl.closest('button').attributes['data-uia'].value
        pathEl.setAttribute('d', getSvgPath(value));
    }
}

if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
        browse_header.changeBackground();
    }, true);
}

// Play main video
browse_body.content_manager.video = '../files/Bridgerton/Bridgerton_video.mp4';
browse_body.content_manager.img = '../files/Bridgerton/Bridgerton_stop.webp';
browse_body.content_manager.runContents();

setSVG();