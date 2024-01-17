function showDescription(img) {
    var desc_id = document.getElementById('desc_' + img.id)
    desc_id.style.opacity = '1';
    desc_id.style.transition = '1s';
    desc_id.style.top = '0px'
    console.log('show')
}

function hideDescription(img) {
    var desc_id = document.getElementById('desc_' + img.id)
    desc_id.style.opacity = '0';
    desc_id.style.transition = '.5s';
    desc_id.style.top = '50px'
    console.log('hide')
}