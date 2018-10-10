function toggleHeaderRightMenu() {
  var x = document.getElementById("my-header-right");
  if (x.className === "header-right") {
      x.className += " responsive";
  } else {
      x.className = "header-right";
  }
}
