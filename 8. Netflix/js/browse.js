import * as browse_header from './browse_header.js';
// export {browse_header};
// export * as browse_header from './browse_header.js';

window.addEventListener('scroll', () => {
    browse_header.changeBackground();    
}, true);
