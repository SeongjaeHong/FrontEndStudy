function search(e) {
    console.log(document.getElementById('search_text').value);
}

function cleartransition(e) {
    e.children[0].style.transition = "none";
}

function settransition(e) {
    e.children[0].style.transition = "opacity 1s step-end";
}