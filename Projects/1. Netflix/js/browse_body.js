import { getSvgPath } from './svg_table.js';

class contentManager {
    constructor() {
        // Set containers.
        this.ptrack_container = document.body.getElementsByClassName('billboard-presentation ptrack-container')[0];
        this.embedded_container = document.body.getElementsByClassName('embedded-container')[0];
        this.meta_container = document.body.getElementsByClassName('meta-container')[0];

        // Set an image and a video element.
        this.imgEl = document.createElement('img');
        this.videoEl = document.createElement('video');
        this._img_path = '';
        this._video_path = '';

        // Set embedded_button.
        this.embedded_button = this.embedded_container.getElementsByTagName('button')[0];
        this.embedded_button_svg_path = this.embedded_button.getElementsByTagName('path')[0];
        this.embedded_button.setAttribute('data-uia', 'audio-toggle-muted');
        this.embedded_button_svg_path.setAttribute('d', getSvgPath(this.embedded_button.getAttribute('data-uia')));

        // Setting image attributes.
        this.imgEl.style.width = '100%';

        // Setting video attributes.
        this.videoEl.style.width = '100%';
        
        // Event map for handling events.
        this.eventMap = {
            'audioToggle': this.audioToggle.bind(this),
            'convertToReplay': this.convertToReplay.bind(this),
            'convertToAudioToggle': this.convertToAudioToggle.bind(this)
        }

        // Add default event
        this.embedded_button.addEventListener('click', this.eventMap['audioToggle']);
    }

    get img() {
        return this._img_path;
    }

    set img(path) {
        this._img_path = path;
        this.imgEl.src = this._img_path;
    }

    get video() {
        return this._video_path;
    }

    set video(path) {
        this._video_path = path;
        this.videoEl.src = this._video_path;
    }

    runContents = (content = 'video') => {
        if (content == 'image') {
            if (this.ptrack_container.getElementsByTagName('video').length) {
                this.ptrack_container.removeChild(this.videoEl);
            }
            this.ptrack_container.appendChild(this.imgEl);

            // Change audio button to replay button.
            this.convertToReplay();
        }
        else if (content == 'video') {
            if (this.ptrack_container.getElementsByTagName('img').length) {
                this.ptrack_container.removeChild(this.imgEl);
            }
            this.videoEl.currentTime = 0;
            this.videoEl.muted = true;
            this.videoEl.play();
            this.ptrack_container.appendChild(this.videoEl);

            // A representative image will be displayed after video ends.
            this.videoEl.addEventListener('ended', () => this.runContents('image'), { once: true });
        }
        else {
            console.log(`Content keyword is not supported: ${content}`)
        }
    }
}

let embeddedContainerFunc = {
    convertToReplay() {
        // Set SVG to replay.
        this.embedded_button.setAttribute('data-uia', 'replay');
        this.embedded_button_svg_path.setAttribute('d', getSvgPath(this.embedded_button.getAttribute('data-uia')));

        // Remove audio function on click.
        this.embedded_button.removeEventListener('click', this.eventMap['audioToggle']);

        // Add replay function on click.
        this.embedded_button.addEventListener('click', this.eventMap['convertToAudioToggle']);
    },

    convertToAudioToggle() {
        // Play video.
        this.runContents('video');

        // Set SVG to audio (muted)
        this.embedded_button.setAttribute('data-uia', 'audio-toggle-muted');
        this.embedded_button_svg_path.setAttribute('d', getSvgPath(this.embedded_button.getAttribute('data-uia')));

        // Remove replay function on click.
        this.embedded_button.removeEventListener('click', this.eventMap['convertToAudioToggle']);

        // Add audio function on click.        
        this.embedded_button.addEventListener('click', this.eventMap['audioToggle']);
    },

    audioToggle() { // Change audio SVG
        if (this.embedded_button.getAttribute('data-uia') == 'audio-toggle-unmuted') {
            this.embedded_button.setAttribute('data-uia', 'audio-toggle-muted');
            this.videoEl.muted = true;

        }
        else if (this.embedded_button.getAttribute('data-uia') == 'audio-toggle-muted') {
            this.embedded_button.setAttribute('data-uia', 'audio-toggle-unmuted');
            this.videoEl.muted = false;
        }
        this.embedded_button_svg_path.setAttribute('d', getSvgPath(this.embedded_button.getAttribute('data-uia')));
    }
}

Object.assign(contentManager.prototype, embeddedContainerFunc);
export const content_manager = new contentManager();
