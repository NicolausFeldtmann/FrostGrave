function showCanvas() {
    let x = document.getElementById('canvas');
    x.classList.toggle('showCanvas');
}

function showMobileBtn() {
    let x = document.getElementById('btnArea');
    x.classList.toggle('showBtn');
}

function hideStartScreen() {
    let x = document.getElementById('startScreen');
    let y = document.getElementById('gameScreen');
    x.classList.toggle('hideStart');
    x.classList.toggle('showGame');
}

function toggleBtn() {
    let x = document.getElementsByClassName('btnSmallScreen');
    x.classList.toggle('btnShow');
}

function fullscreen() {
    let fullScreen = document.getElementById('fullscreen');
    showFullscreen(fullScreen);
}

function smallscreen() {
    let smallscreen = document.getElementById('fullscreen');
    showSmallscreen(smallscreen);
}

function showSmallscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscree) {
        document.msExitFullscree();
    }
}

function showFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
}