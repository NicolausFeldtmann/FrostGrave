

function gameOver() {
    let contentRef = document.getElementById('endScreenArea');
    contentRef.innerHTML += getLostTemplate();
    world.lostSound.play();
}

function win() {
    let contentRef = document.getElementById('endScreenArea');
    contentRef.innerHTML += getWinTemplate();
    world.winSound.play();
}

function backToStart() {
    location.reload();
}

function runAgain() {
    if (world) {
        world.endGame();
        world.lostSound.pause(); 
        world = null;    
    }

    addLoadingScreen();

    let canvas = document.getElementById('canvas');
    canvas.innerHTML = "";
    let endScreen = document.getElementById('endScreenArea');
    endScreen.innerHTML = "";

    initLevel();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard); 
    setTimeout(() => {
        let animation = document.getElementById('animation');
        animation.innerHTML ="";
    }, 5000);
}

function removeCanvas() {
    let canvas = document.getElementById('canvas');
    canvas.remove();
}

