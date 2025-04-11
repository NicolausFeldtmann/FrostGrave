let lostSound = new Audio('audio/backgroundAudio.mp3');
let winSound = new  Audio('audio/winMusic.mp3');

function gameOver() {
    lostSound.play();
}

function win() {
    let contentRef = document.getElementById('gameScreen');
    contentRef.innerHTML += getWinTemplate();
    winSound.play();
}

function toTitle() {
    window.location = 'index.html';
}

