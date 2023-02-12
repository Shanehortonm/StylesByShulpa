/*
==============================================
Start of Nav
==============================================
*/

window.onscroll = function() {stickyNav()};

const navbar = document.getElementById("navBar");
const sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/*
==============================================
Start of Logo
==============================================
*/