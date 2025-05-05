let canvas;
let world; 
let keyboard = new Keyboard();
let backGrndSound = new Audio('audio/backgroundAudio.mp3');

/**
 * assured correckt display with opera browser
 */
function checkOrientation() {
    if (window.matchMedia("(orientation: landscape)").matches) {
        if (window.innerHeight < 480) {
            newHeight = window.innerHeight;
            document.getElementById('canvas').style.height = `${newHeight}px`;
        }
    }
    else {
        document.getElementById('canvas').style.height = `100%`;
    }
}

/**
 * Shown animation wihle start screen is loading
 */
function loadStart() {
    detectMob();
    decideControls();
    mobileBtnEventListner();
    renderInstructions();
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

/**
 * shows win screen 
 */
function winGame() {
    let contentRef = document.getElementById('gameScreen');
    contentRef.innerHTML = "";
    contentRef.innerHTML += getWinTemplate();
}

/**
 * shows game over screen
 */
function lostGame() {
    let contentRef = document.getElementById('gameScreen');
    contentRef.innerHTML = "";
    contentRef.innerHTML += getLostTemplate();
}

/**
 * shows loading screen
 */
function addLoadingScreen() {
    let contentRef = document.getElementById('animation');
    contentRef.innerHTML += getLoadingScreen();
}

/**
 * shows instructions
 */
function renderInstructions() {
    let contentRef = document.getElementById('instructions');
    contentRef.innerHTML = "";
    contentRef.innerHTML += getInstructions();
}

/**
 * shows game controlls
 */
function renderControlls() {
    let contentRef = document.getElementById('controllContent');
    contentRef.innerHTML = "";
    contentRef.innerHTML += getControllsTemplate();
}

/**
 * mutes the game audios
 */
function mute() {
    if (!world.isMuted) {
        world.backGrndMusic.muted = true;
        world.snow1.muted = true;
        world.snow2.muted = true;
        world.spell.muted = true;
        world.crystal.muted = true;
        world.gameOverSound.muted = true;
        world.winMusic.muted = true;
        world.slashSound.muted = true;
        world.ouch.muted = true;
        world.bossTheme.muted = true;
        world.hurt.muted = true;
        world.stomp.muted = true;
        world.slash.muted = true;
        world.walkerHurt.muted = true;
        world.walkerDying.muted = true;
        world.cast.muted = true;
        world.baam.muted = true
        world.boom.muted = true;
        world.winSound.muted = true;
        world.lostSound.muted = true;
        world.dying.muted = true;
        world.tadaa.muted = true;
        world.isMuted = true;
    } else {
        unmuted();
    }
}

/**
 * unmutes the game audios
 */
function unmuted() {
    if (world.isMuted) {
        world.backGrndMusic.muted = false;
        world.snow1.muted = false;
        world.snow2.muted = false;
        world.spell.muted = false;
        world.crystal.muted = false;
        world.gameOverSound.muted = false;
        world.winGame.muted = false;
        world.slashSound.muted = false;
        world.ouch.muted = false;
        world.bossTheme.muted = false;
        world.hurt.muted = false;
        world.stomp.muted = false;
        world.slash.muted = false;
        world.walkerHurt.muted = false;
        world.walkerDying.muted = false;
        world.cast.muted = false;
        world.baam.muted = false;
        world.boom.muted = false;
        world.winSound.muted = false;
        world.lostSound.muted = false;
        world.dying.muted = false;
        world.tadaa.muted = false;
        world.isMuted = false;
    }
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
    
    if (e.keyCode == 67) {
        keyboard.OVERKILL = true;
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

    if (e.keyCode == 67) {
        keyboard.OVERKILL = false;
    }
})