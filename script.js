const dice = document.getElementById('dice');
const rollButton = document.getElementById('rollButton');
const messageModal = document.getElementById('messageModal');
const closeModal = document.getElementById('closeModal');
const modalMessage = document.getElementById('modalMessage');

const messages = [
"CADA MOMENTO CONTIGO ES UNA BENDICIÓN, Y NO HAY NADA QUE ME HAGA MÁS FELIZ QUE VERTE SONREÍR. TU PRESENCIA ILUMINA MIS DÍAS, Y CADA PALABRA TUYA ES MÚSICA PARA MIS OÍDOS. GRACIAS POR LLENAR MI VIDA DE AMOR, ALEGRÍA, Y SUEÑOS COMPARTIDOS. TE AMO MÁS DE LO QUE LAS PALABRAS PUEDEN EXPRESAR, Y PROMETO QUE SIEMPRE ESTARÉ AQUÍ PARA HACERTE FELIZ.",

"ERES LA RAZÓN POR LA QUE ME DESPIERTO CADA DÍA CON UNA SONRISA, LA PERSONA QUE HACE QUE TODO VALGA LA PENA. NO IMPORTA CUÁNTOS DESAFÍOS ENFRENTEMOS, SIEMPRE SERÁS MI MAYOR FORTALEZA Y MI INSPIRACIÓN. GRACIAS POR SER QUIEN ERES Y POR LLENAR MI VIDA DE TANTO AMOR Y FELICIDAD.",

"CUANDO ESTOY CONTIGO, EL MUNDO ENTERO SE DETIENE, Y SOLO EXISTIMOS NOSOTROS. CADA MINUTO A TU LADO ES UN REGALO QUE VALORO PROFUNDAMENTE. ERES MI REFUGIO, MI CALMA EN MEDIO DE LA TORMENTA, Y JUNTOS, TODO SE VUELVE POSIBLE. NO HAY NADA QUE NO PUEDA HACER SI TENGO TU AMOR.",

"NO HAY PALABRAS SUFICIENTES PARA DESCRIBIR LO MUCHO QUE SIGNIFICAS PARA MÍ. CADA GESTO TUYO, POR PEQUEÑO QUE SEA, ME DEMUESTRA QUE TENGO LA SUERTE DE TENER A LA PERSONA MÁS MARAVILLOSA A MI LADO. TE ADORO MÁS DE LO QUE PUEDES IMAGINAR, Y NUNCA DEJARÉ DE LUCHAR POR NUESTRA FELICIDAD.",

"DESDE EL DÍA EN QUE LLEGASTE A MI VIDA, TODO CAMBIÓ PARA MEJOR. TÚ ERES LA COMPAÑERA PERFECTA, MI CONFIDENTE, Y LA PERSONA CON QUIEN QUIERO COMPARTIR CADA SEGUNDO. NO PUEDO ESPERAR A SEGUIR CONSTRUYENDO RECUERDOS CONTIGO Y CREAR UN FUTURO LLENO DE AMOR Y FELICIDAD.",

"ERES MI MAYOR TESORO, LA PERSONA CON LA QUE QUIERO COMPARTIR CADA MOMENTO, CADA LOGRO Y CADA SUEÑO. TU AMOR ME DA LA FUERZA PARA SEGUIR ADELANTE, Y NUNCA ME CANSARÉ DE DECIRTE LO IMPORTANTE QUE ERES PARA MÍ. SIEMPRE ESTARÉ AQUÍ, APOYÁNDOTE, AMÁNDOTE Y SOÑANDO CONTIGO.",
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
