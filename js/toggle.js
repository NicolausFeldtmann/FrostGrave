
/**
 * shows hidden canvas, the game is drawn in
 */
function showCanvas() {
    let x = document.getElementById('canvas');
    x.classList.toggle('show');
}

/**
 * shows or hide buttons, depending on if mobile device is used or not
 */
function showMobileBtn() {
    let x = document.getElementById('btnArea');
    x.classList.toggle('show');
}

/**
 * hide start screen after game is startet
 */
function hideStartScreen() {
    let x = document.getElementById('startScreen');
    let y = document.getElementById('gameScreen');
    x.classList.toggle('hideStart');
    y.classList.toggle('show');
}

/**
 * chanches th buttons for choosen screen mode
 */
function toggleBtn() {
    let x = document.getElementById('btnFullStart');
    let y = document.getElementById('btnSmallStart');
    let i = document.getElementById('btnFullGame');
    let e = document.getElementById('btnSmallGame');
    x.classList.toggle('btnHide');
    y.classList.toggle('show');
    i.classList.toggle('btnHide');
    e.classList.toggle('show');
}

/**
 * start fullscreen mode
 */
function fullscreen() {
    let fullScreen = document.getElementById('fullscreen');
    showFullscreen(fullScreen);
    toggleBtn();
}

/**
 * back to smallscreen mode
 */
function smallscreen() {
    let smallscreen = document.getElementById('fullscreen');
    showSmallscreen(smallscreen);
    toggleBtn();
}

/**
 * exicute return to smallscreen
 */
function showSmallscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscree) {
        document.msExitFullscree();
    }
}

/**
 * exicute fullscreen
 */
function showFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
}

/**
 * made "Game Over" screen visible
 */
function showGameOver() {
    let x = document.getElementById('gameOverScreen');
    x.classList.toggle('show');
}

/**
 * made "Winning Game" screen visible
 */
function showWinScreen() {
    let x = document.getElementById('winScreen');
    x.classList.toggle('show');
}

function showOptBtn() {
    let x = document.getElementById('optBtn');
    x.classList.toggle('show');
}

/**
 * toggle mute button activ/inactiv display
 */
function showActiveBtn() {
    let x = document.getElementById('btnBoxTop');
    x.classList.toggle('btnBoxTopActive');
}

