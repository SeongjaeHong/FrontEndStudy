function muteVideo() {
    return 1;
}

export function runContent(container, img_path, video_path) {
    console.log('bbp on2');
    const img = document.createElement('img');
    const video = document.createElement('video');

    img.style.width = '100%';
    img.src = img_path;
    
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