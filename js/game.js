let canvas;
let world; 
let keyboard = new Keyboard();
backGrndMusic = new Audio('audio/backgroundMusic.mp3');
//backGrndSound = new Audio('audio/backgroundAudio.mp3');

function init() {
    hideStartScreen();
    initLevel();
    startGame();
}

function startGame() {
    playAudio();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    showCanvas();
    //showMobileBtn();
}

function showCanvas() {
    let x = document.getElementById('canvas');
    x.classList.toggle('showCanvas');
}

function showMobileBtn() {
    let x = document.getElementById('btnArea');
    x.classList.toggle('showBtn');
}

function hideStartScreen() {
    let x = document.getElementById('startScreen');
    x.classList.toggle('hideStart');
}

function showGameOver() {
    let x = document.getElementById('gameOverScreen');
    x.classList.toggle('showGameOver');
}

function playAudio() {
    setTimeout(() => {
        //backGrndMusic.play();
        //backGrndSound.play();
    }, 500);
}

function fullscreen() {
    let fullScreen = document.getElementById('fullscreen');
    showFullscreen(fullScreen);
}

function showFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
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