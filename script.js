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


/* TESTE APP*/
const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)