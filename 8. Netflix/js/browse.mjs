import * as browse_header from './browse_header.mjs';
// export {browse_header};
// export * as browse_header from './browse_header.js';
import * as browse_body from './browse_body.mjs';
import { getSvgPath } from './svg_table.mjs';

if (typeof window !== 'undefined'){
    window.addEventListener('scroll', () => {
        browse_header.changeBackground();
    }, true);
}

// Play main video
browse_body.runContent(document.body.getElementsByClassName('billboard-presentation ptrack-container')[0],
    '../files/Bridgerton/Bridgerton_stop.webp',
    '../files/Bridgerton/Bridgerton_video.mp4');

function setSVG() {
    /*
    Draw SVGs according to each class name.
    */
    const svgEls = document.getElementsByTagName('svg');
    for (let svgEl of svgEls) {
        let pathEl = svgEl.getElementsByTagName('path')[0];
        pathEl.setAttribute('d', getSvgPath(svgEl.classList[0]));
    }
}

setSVG();