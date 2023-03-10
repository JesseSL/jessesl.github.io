function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


window.onscroll = function() {
  myFunction1()
};

function myFunction1() {
  if (document.documentElement.scrollTop > 250) {
    document.getElementById("myImg").className = "slideUp";
  }
}