let canvas;
let world; 
let keyboard = new Keyboard();
let backGrndSound = new Audio('audio/backgroundAudio.mp3');

/**
 * Shown animation wihle start screen is loading
 */
function loadStart() {
    detectMob();
    decideControls();
    mobileBtnEventListner();
}
/**
 * functioin to initialize thw game
 */
function init() {
    hideStartScreen();
    startGame();
}

/**
 * function to start the actual game
 */
function startGame() {
    addLoadingScreen();
    initLevel();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    showCanvas();
    setTimeout(() => {
        let animation = document.getElementById('animation');
        animation.innerHTML = "";
    }, 5000);
}

function winGame() {
    let contentRef = document.getElementById('gameScreen');
    contentRef.innerHTML = "";
    contentRef.innerHTML += getWinTemplate();
}

function lostGame() {
    let contentRef = document.getElementById('gameScreen');
    contentRef.innerHTML = "";
    contentRef.innerHTML += getLostTemplate();
}

function addLoadingScreen() {
    let contentRef = document.getElementById('endScreen');
    contentRef.innerHTML = "";
    contentRef.innerHTML += getLo
}

function addLoadingScreen() {
    let contentRef = document.getElementById('animation');
    contentRef.innerHTML += getLoadingScreen();
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