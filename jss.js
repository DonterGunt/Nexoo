// Obtén el elemento del slider y sus diapositivas por clase
const sliders = document.querySelectorAll('.slider-gallery_component');
const slides = document.querySelectorAll('.slider-gallery_bottom-wrapper .swiper-slide');

// Lleva un registro de la diapositiva actual para cada slider
const currentSlides = Array(sliders.length).fill(0);

// Detecta el evento de desplazamiento hacia abajo en dispositivos móviles para cada slider
sliders.forEach((slider, index) => {
  slider.addEventListener('touchstart', (event) => handleTouchStart(event, index), false);
  slider.addEventListener('touchend', (event) => handleTouchEnd(event, index), false);
});

let y1 = null;

function handleTouchStart(event, index) {
  y1 = event.touches[0].clientY;
}

function handleTouchEnd(event, index) {
  if (!y1) return;
  const y2 = event.changedTouches[0].clientY;
  const deltaY = y2 - y1;

  // Establece una distancia mínima para considerar el desplazamiento hacia abajo
  if (deltaY > 50 && currentSlides[index] < slides.length - 1) {
    currentSlides[index]++;
  } else if (deltaY < -50 && currentSlides[index] > 0) {
    currentSlides[index]--;
  }

  // Aplica el desplazamiento vertical al slider correspondiente
  const slideHeight = slides[currentSlides[index]].offsetHeight;
  sliders[index].scrollTop = currentSlides[index] * slideHeight;

  y1 = null; // Restablece la posición inicial
}
