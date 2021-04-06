console.log('Welcome to my portflio site!')

function menuToggle () {
  var x = document.getElementById('myNavtoggle')
  if (x.className === 'navtoggle') {
    x.className += ' responsive'
  } else {
    x.className = 'navtoggle'
  }
}

<script>
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("myNavtoggle").style.top = "0";
  } else {
    document.getElementById("myNavtoggle").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
}
</script>
