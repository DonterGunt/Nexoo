window.addEventListener("DOMContentLoaded", function () {
    var sliderContainer = document.querySelector(".slider-gallery_bottom-wrapper .swiper-slide");

    // Detectar el ancho de la pantalla
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Valor de referencia para el cambio al desplazamiento vertical (ajústalo según tus necesidades)
    var mobileScreenWidth = 768;

    if (windowWidth < mobileScreenWidth) {
        // Cambiar al desplazamiento vertical
        sliderContainer.style.overflowX = "hidden"; // Deshabilitar desplazamiento horizontal
        sliderContainer.style.overflowY = "scroll"; // Habilitar desplazamiento vertical
    }
});