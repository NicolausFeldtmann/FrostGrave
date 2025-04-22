let lostSound = new Audio('audio/backgroundAudio.mp3');
let winSound = new  Audio('audio/winMusic.mp3');

function gameOver() {
    let contentRef = document.getElementById('endScreenArea');
    contentRef.innerHTML += getLostTemplate();
    lostSound.play();
}

function win() {
    let contentRef = document.getElementById('endScreenArea');
    contentRef.innerHTML += getWinTemplate();
    winSound.play();
}

function backToStart() {
    location.reload();
}

function runAgain() {
    if (world) {
        world.endGame(); 
        world = null;    
    }

    addLoadingScreen();
    lostSound.pause();
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

