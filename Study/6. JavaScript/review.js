let elem = document.getElementById("contents");

elem.addEventListener("click", function (event) {
  function handleLink(href) {
    let isLeaving = confirm(`Leave for ${href}?`);
    if (!isLeaving) {
      event.preventDefault();
    }
  }

  let target = event.target.closest("a");
  if (target && this.contains(target)) {
    handleLink(target.getAttribute("href"));
  }
});
