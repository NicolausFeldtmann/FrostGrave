
/**
 * starts game over event
 */
function gameOver() {
    let contentRef = document.getElementById('endScreenArea');
    contentRef.innerHTML += getLostTemplate();
    world.lostSound.play();
}

/**
 * start beat game event
 */
function win() {
    let contentRef = document.getElementById('endScreenArea');
    contentRef.innerHTML += getWinTemplate();
    world.winSound.play();
}

/**
 * back to tiel screen
 */
function backToStart() {
    location.reload();
}

/**
 * restart the game
 */
function runAgain() {
    if (world) {
        world.endGame();
        world.lostSound.pause();
        world.winSound.pause(); 
        world = null;    
    }
    addLoadingScreen();
    clearCanvas();
    initLevel();

    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard); 
    setTimeout(() => {
        let animation = document.getElementById('animation');
        animation.innerHTML ="";
    }, 5000);
}

/**
 * clears canvas for restart
 */
function clearCanvas() {
    let canvas = document.getElementById('canvas');
    canvas.innerHTML = "";
    let endScreen = document.getElementById('endScreenArea');
    endScreen.innerHTML = "";
}



