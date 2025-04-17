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
        world.endGame(); // Stoppt die alte Welt
        world = null;    // Setzt die Referenz auf null
    }

    let canvas = document.getElementById('canvas');
    canvas.innerHTML = "";
    let endScreen = document.getElementById('endScreenArea');
    endScreen.innerHTML = "";

    initLevel();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard); // Erstellt eine neue Instanz von World
}

function removeCanvas() {
    let canvas = document.getElementById('canvas');
    canvas.remove();
}

