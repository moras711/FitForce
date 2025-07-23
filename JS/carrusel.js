const track = document.querySelector('.carrusel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlide = 0;

function updateSlidePosition() {
    track.style.transform = `translateX(-${currentSlide * 100}vw)`;
}

// Función siguiente
function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateSlidePosition();
}

// Función anterior
function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = slides.length - 1;
    }
    updateSlidePosition();
}

// Event Listeners
nextButton.addEventListener('click', () => {
    nextSlide();
    resetInterval();
});

prevButton.addEventListener('click', () => {
    prevSlide();
    resetInterval();
});

// Transición automática cada 5 segundos
let autoSlide = setInterval(nextSlide, 5000);

// Reiniciar cuando el usuario interactúa
function resetInterval() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 5000);
}
