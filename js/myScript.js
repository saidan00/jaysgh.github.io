function toggleHeaderRightMenu() {
    var x = document.getElementById("header-right");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}
function showHeaderRightMenu(scrsz) {
  //scrsz: screen size
  var x = document.getElementById("header-right");
  if (scrsz.matches) {
    x.style.display = "none";
  }
  else {
    x.style.display = "block";
  }
}

var scrsz = window.matchMedia("(max-width: 712px)")
showHeaderRightMenu(scrsz)
scrsz.addListener(showHeaderRightMenu)
