let lostSound = new Audio('audio/backgroundAudio.mp3');
let winSound = new  Audio('audio/winMusic.mp3');

function gameOver() {
    let contentRef = document.getElementById('gameScreen');
    contentRef.innerHTML += getLostTemplate();
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

function restart() {
    world.ctx.clearRect(0, 0, world.canvas.width, world.canvas.height);
}

