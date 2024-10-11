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

//fazendo lógica do carrossel
const carrossel = document.querySelector(".swipper-wrapper");

let isDragStart = false, prevPageX, prevScrollLeft;

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carrossel.scrollLeft;
}

const dragging = (e) => {
  if(!isDragStart) return;
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  carrossel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
  isDragStart = false;
}

carrossel.addEventListener("mousedown", dragStart);
carrossel.addEventListener("mousemove", dragging);
carrossel.addEventListener("mouseup", dragStop);