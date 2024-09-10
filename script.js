const dice = document.getElementById('dice');
const rollButton = document.getElementById('rollButton');
const messageModal = document.getElementById('messageModal');
const closeModal = document.getElementById('closeModal');
const modalMessage = document.getElementById('modalMessage');

const messages = [
    "¡Eres mi todo!",
    "Te quiero más que nunca.",
    "Siempre en mi corazón.",
    "Eres mi mayor alegría.",
    "Mi amor por ti es infinito.",
    "Gracias por ser tú."
];

function rollDice() {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    let rotateX, rotateY;

    switch(randomNum) {
        case 1: rotateX = 0; rotateY = 0; break;
        case 2: rotateX = 0; rotateY = 90; break;
        case 3: rotateX = 0; rotateY = 180; break;
        case 4: rotateX = 0; rotateY = -90; break;
        case 5: rotateX = 90; rotateY = 0; break;
        case 6: rotateX = -90; rotateY = 0; break;
    }

    // Aplicar la rotación del dado
    dice.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    // Mostrar el mensaje después de que el dado haya terminado de girar
    dice.addEventListener('transitionend', function handleTransitionEnd() {
        dice.removeEventListener('transitionend', handleTransitionEnd);
        modalMessage.textContent = messages[randomNum - 1];
        messageModal.classList.add('show'); // Mostrar el modal
    });
}

// Cerrar el modal
closeModal.onclick = function() {
    messageModal.classList.remove('show'); // Quitar la clase para ocultar el modal
}

// Cuando se hace clic en cualquier parte fuera del modal, se cierra
window.onclick = function(event) {
    if (event.target === messageModal) {
        messageModal.classList.remove('show'); // Quitar la clase para ocultar el modal
    }
}

// Evento para lanzar el dado
rollButton.addEventListener('click', rollDice);

// Crear las estrellas fugaces
function createStars() {
    const numStars = 100; // Número de estrellas fugaces
    const starsContainer = document.querySelector('.stars');
    
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Posiciona las estrellas fugaces en lugares aleatorios
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        
        // Ajusta la animación para que tenga una duración aleatoria
        star.style.animationDuration = `${Math.random() * 4 + 4}s`; // Ajusta la duración
        star.style.animationDelay = `${Math.random() * 4}s`;
        
        starsContainer.appendChild(star);
    }
}

createStars();
