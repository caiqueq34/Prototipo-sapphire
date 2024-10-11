var navheader = document.getElementById('nav-header');
var mostraNavbar = false;

function abrirNavbar()
{
  mostraNavbar = !mostraNavbar;
  if(mostraNavbar){
    navheader.style.marginRight ='-70vw';
    navheader.style.animationName = 'mostraNavbar';
    navheader.style.display = 'flex';
    navheader.style.position = 'fixed';
  }
  else{
    navheader.style.marginRight='-140vw';
    navheader.style.animationName = '';
    navheader.style.display = 'none';
  }
}
window.addEventListener('resize', function(event) {
  if(window.innerWidth > 768 && mostraNavbar)
  {
    abrirNavbar();
  }
});