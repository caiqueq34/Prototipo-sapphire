var navheader = document.getElementById('nav-header');
var mostraNavbar = false;

function abrirNavbar()
{
  mostraNavbar = !mostraNavbar;
  if(mostraNavbar){
    navheader.style.marginRight ='-60vw';
    navheader.style.animationName = 'mostraNavbar';
  }
  else{
    navheader.style.marginRight='-140vw';
    navheader.style.animationName = '';
  }
}
window.addEventListener('resize', function(event) {
  if(window.innerWidth > 768 && mostraNavbar)
  {
    abrirNavbar();
  }
});