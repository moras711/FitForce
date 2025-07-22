let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;
let executed = false; // Para que solo se ejecute una vez

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !executed) {
            executed = true; // Marcar como ejecutado para evitar múltiples llamadas

            valueDisplays.forEach((valueDisplay) => {
                let startValue = 0;
                let endValue = parseInt(valueDisplay.getAttribute("data-val"));
                let duration = Math.floor(interval / endValue);
                let counter = setInterval(() => {
                    startValue += 1;
                    valueDisplay.textContent = startValue;
                    if (startValue === endValue) {
                        clearInterval(counter);
                    }
                }, duration);
            });

            observer.disconnect(); // Opcional: detener el observador después de ejecutarse una vez
        }
    });
}, {
    threshold: 0.5 // 50% del elemento visible en pantalla
});

// Apuntar al primer .num (uno es suficiente para detectar la sección)
if (valueDisplays.length > 0) {
    observer.observe(valueDisplays[0]);
}
