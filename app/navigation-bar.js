const navigationBar = document.getElementById("navigation__bar");

function setNavigationBar(anchorElement) {
  navigationBar.style.left =
    window.scrollX + anchorElement.getBoundingClientRect().x + "px";
  navigationBar.style.width =
    anchorElement.getBoundingClientRect().width + "px";
}

window.addEventListener("resize", () => {
  setNavigationBar(selectedElement);
});
