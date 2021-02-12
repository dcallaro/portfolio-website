console.log ("Welcome to my portflio site!")

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
}

const ScrollReveal = require('scrollreveal')
ScrollReveal().reveal('.section')
