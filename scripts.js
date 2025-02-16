const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

let angle = 0;
const angleStep = 360 / items.length;

// Função para adicionar transição suave à rotação
function applySmoothTransition() {
    carousel.style.transition = 'transform 1s ease';  // Tempo de 1 segundo para suavizar a rotação
}

prevBtn.addEventListener('click', () => {
    angle += angleStep;
    applySmoothTransition();  // Aplicar a transição suave ao girar
    carousel.style.transform = `rotateY(${angle}deg)`;
});

nextBtn.addEventListener('click', () => {
    angle -= angleStep;
    applySmoothTransition();  // Aplicar a transição suave ao girar
    carousel.style.transform = `rotateY(${angle}deg)`;
});

// Remover a transição após a rotação para evitar o efeito na próxima rotação
carousel.addEventListener('transitionend', () => {
    carousel.style.transition = 'none';
});



    



