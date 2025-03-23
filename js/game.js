let canvas;
let world; 
let keyboard = new Keyboard();
backGrndMusic = new Audio('audio/backgroundMusic.mp3');
backGrndSound = new Audio('audio/backgroundAudio.mp3');

function init() {
    detectMob();
    decideControls();
    mobileBtnEventListner();
    hideStartScreen();
    startGame();
    playSound();
}

function startGame() {
    initLevel();
    clearInterval(this.soundInterval);
    playMusic();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    showCanvas();
}

function showGameOver() {
    let x = document.getElementById('gameOverScreen');
    x.classList.toggle('showGameOver');
}

function playMusic() {
    setTimeout(() => {
        backGrndMusic.play();
    }, 500);
}

window.addEventListener('keydown', (e) => {
    if (!world.isRunnig) return;

    if (e.keyCode == 65) {
        keyboard.LEFT = true;
    }

    if (e.keyCode == 68) {
        keyboard.RIGHT = true;
    }

    if (e.keyCode == 87) {
        keyboard.UP = true;
    }

    if (e.keyCode == 83) {
        keyboard.DOWN = true;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }

    if (e.keyCode == 69) {
        keyboard.SLASH = true;
    }
    
    if (e.keyCode == 81) {
        keyboard.THROW = true;
    }

    if (e.keyCode == 80) {  // Taste 'P'
        keyboard.PAUSE = !keyboard.PAUSE;
        world.stopGame();  // Hier wird das Spiel gestoppt/fortgesetzt.
        if (keyboard.PAUSE) {
            console.log('Spiel pausiert');
        } else {
            console.log('Spiel fortgesetzt');
        }
    }
    
})

window.addEventListener('keyup', (e) => {
    if (!world.isRunnig) return;

    if (e.keyCode == 65) {
        keyboard.LEFT = false;
    }

    if (e.keyCode == 68) {
        keyboard.RIGHT = false;
    }

    if (e.keyCode == 87) {
        keyboard.UP = false;
    }

    if (e.keyCode == 83) {
        keyboard.DOWN = false;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }

    if (e.keyCode == 69) {
        keyboard.SLASH = false;
    }

    if (e.keyCode == 81) {
        keyboard.THROW = false;
    }

    if (e.keyCode == 80) {
        keyboard.PAUSE = false;
        }
})