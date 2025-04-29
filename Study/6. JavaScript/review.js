let largeImg = document.getElementById("largeImg");
let thumbs = document.getElementById("thumbs");

thumbs.onclick = function (event) {
  let target = event.target.closest("a");
  if (target && thumbs.contains(target)) {
    largeImg.setAttribute("src", target.getAttribute("href"));
    event.preventDefault();
  }
};
