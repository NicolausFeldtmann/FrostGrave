let lostSound = new Audio('audio/backgroundAudio.mp3');
let winSound = new  Audio('audio/winMusic.mp3');

function gameOver() {
    lostSound.play();
}

function winGame() {
    winSound.play();
}

