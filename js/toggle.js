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
    y.classList.toggle('showGame');
}

function toggleBtn() {
    let x = document.getElementById('btnFullStart');
    let y = document.getElementById('btnSmallStart');
    let i = document.getElementById('btnFullGame');
    let e = document.getElementById('btnSmallGame');
    x.classList.toggle('btnHide');
    y.classList.toggle('btnShow');
    i.classList.toggle('btnHide');
    e.classList.toggle('btnShow');
}

function fullscreen() {
    let fullScreen = document.getElementById('fullscreen');
    showFullscreen(fullScreen);
    toggleBtn();
}

function smallscreen() {
    let smallscreen = document.getElementById('fullscreen');
    showSmallscreen(smallscreen);
    toggleBtn();
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