// Obtén el elemento del slider y sus diapositivas
const slider = document.getElementById('slider');
const slides = slider.querySelectorAll('.swiper-slide');

// Lleva un registro de la diapositiva actual
let currentSlide = 0;

// Detecta el evento de desplazamiento hacia abajo en dispositivos móviles
window.addEventListener('touchstart', handleTouchStart, false);
window.addEventListener('touchmove', handleTouchMove, false);

let x1 = null;

function handleTouchStart(event) {
  x1 = event.touches[0].clientX;
}

function handleTouchMove(event) {
  if (!x1) return;
  const x2 = event.touches[0].clientX;
  const deltaX = x1 - x2;

  // Establece una distancia mínima para considerar el desplazamiento
  if (Math.abs(deltaX) < 50) return;

  // Mueve el slider hacia la izquierda o la derecha según la dirección del desplazamiento
  if (deltaX > 0 && currentSlide < slides.length - 1) {
    currentSlide++;
  } else if (deltaX < 0 && currentSlide > 0) {
    currentSlide--;
  }

  // Aplica el desplazamiento horizontal al slider
  const slideWidth = slides[currentSlide].offsetWidth;
  slider.scrollLeft = currentSlide * slideWidth;

  x1 = null; // Restablece la posición inicial
}