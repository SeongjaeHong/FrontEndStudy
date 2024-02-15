export function runContent(container, img_path, video_path) {
    const img = document.createElement('img');
    const video = document.createElement('video');

    // will be displayed after video ends.
    img.style.width = '100%';
    img.src = img_path;
    
    // run automatically.
    video.style.width = '100%';
    video.src = video_path;
    video.autoplay = true;
    video.muted = true;
    video.addEventListener('click', ()=>{
        video.muted = false;
    })
    video.addEventListener('ended', () => {
        container.removeChild(video);
        container.appendChild(img);
    })

    container.appendChild(video);
}

