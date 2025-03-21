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
    initLevel();
    startGame();
    backGrndSound.play();
}

function startGame() {
    clearInterval(this.setInterval);
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

function palySound() {
    this.SoundInterval = setInterval(() => {
        backGrndSound.play();
    }, 100);
}

window.addEventListener('keydown', (e) => {
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
    
})

window.addEventListener('keyup', (e) => {
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
})