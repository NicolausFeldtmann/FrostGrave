let canvas;
let world; 
let keyboard = new Keyboard();
let backGrndSound = new Audio('audio/backgroundAudio.mp3');


/**
 * functioin to initialize thw game
 */
function init() {
    detectMob();
    decideControls();
    mobileBtnEventListner();
    hideStartScreen();
    startGame();
    //palyTitelSound();
}

/**
 * function to start the actual game
 */
function startGame() {
    initLevel();
    clearInterval(this.soundInterval);
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    showCanvas();
}


/**
 * play background sound startscreen
 */
function palyTitelSound() {
    this.soundInterval = setInterval(() => {
        backGrndSound.play();
    });
}

/**
 * eventlistner for pressed keys on keyboard
 */
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

    if (e.keyCode == 80) {
        keyboard.PAUSE = !keyboard.PAUSE;
        world.stopGame();
    }
    
})

/**
 * eventlistner for unpressed keys on keyboard
 */
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