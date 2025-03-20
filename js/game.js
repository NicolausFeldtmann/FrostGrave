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

function showGameOver() {
    let x = document.getElementById('gameOverScreen');
    x.classList.toggle('showGameOver');
}

function playAudio() {
    setTimeout(() => {
        backGrndMusic.play();
        //backGrndSound.play();
    }, 500);
}

    document.getElementById('btnLeft').addEventListener('touchstart' , (e) => {
        e.preventDefault();
        this.LEFT = true;
    });

    document.getElementById('btnLeft').addEventListener('touchend', (e) => {
        e.preventDefault();
        this.LEFT = false;
    })

    document.getElementById('btnRight').addEventListener('touchstart', (e) => {
        e.preventDefault();
        this.RIGHT = true;
    });

    document.getElementById('btnRight').addEventListener('touchend', (e) => {
        e.preventDefault();
        this.RIGHT = false;
    })

    document.getElementById('btnFire').addEventListener('touchstart', (e) => {
        e.preventDefault();
        this.THROW = true;
    });

    document.getElementById('btnFire').addEventListener('touchend', (e) =>  {
        e.preventDefault();
        this.THROW = false;
    });

    document.getElementById('btnJump').addEventListener('touchstart', (e) => {
        e.preventDefault();
        this.SPACE = true;
    });

    document.getElementById('btnJump').addEventListener('touchend', (e) => {
        e.preventDefault();
        this.SPACE = false;
    });

    document.getElementById('btnSlash').addEventListener('touchstart', (e) => {
        e.preventDefault();
        this.SLASH = true;
    });

    document,getElementById('btnSlash').addEventListener('touchend', (e) =>  {
        e.preventDefault();
        this.SLASH = false;
    })

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