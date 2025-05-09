
/**
 * dectect if used device is a mobile device 
 */
function detectMob() {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;
    let datectMob = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return detectMob || screenWidth <= 768;
}

/**
 * shows or hide buttons, depending on if mobile device is used or not
 */
function decideControls() {

    if (detectMob()) {
        mobileControll.style.display = 'flex';
        console.log('is mobile');
    } else {
        mobileControll.style.display = 'none';
        console.log('is nich Mobile');
        
    }
}

/**
 * eventlistner for butttons on mobile device
 */
function mobileBtnEventListner() {
    let handleTouchStart = (key) => {
        keyboard[key] = true;
    };
    
    let handleTouchEnd = (key) => {
        keyboard[key] = false;
    };

    document.getElementById('btnLeft').addEventListener('touchstart', (event) => (event.preventDefault(), handleTouchStart('LEFT')));
    document.getElementById('btnRight').addEventListener('touchstart', (event) => (event.preventDefault(), handleTouchStart('RIGHT')));
    document.getElementById('btnFire').addEventListener('touchstart', (event) => (event.preventDefault(), handleTouchStart('THROW')));
    document.getElementById('btnJump').addEventListener('touchstart', (event) => (event.preventDefault(), handleTouchStart('SPACE')));
    document.getElementById('btnSlash').addEventListener('touchstart', (event) => (event.preventDefault(), handleTouchStart('SLASH')));
    document.getElementById('btnOverkill').addEventListener('touchstart', (event) => (event.preventDefault(), handleTouchStart('OVERKILL')));

    document.getElementById('btnLeft').addEventListener('touchend', (event) => (event.preventDefault(), handleTouchEnd('LEFT')));
    document.getElementById('btnRight').addEventListener('touchend', (event) => (event.preventDefault(), handleTouchEnd('RIGHT')));
    document.getElementById('btnFire').addEventListener('touchend', (event) => (event.preventDefault(), handleTouchEnd('THROW')));
    document.getElementById('btnJump').addEventListener('touchend', (event) => (event.preventDefault(), handleTouchEnd('SPACE')));
    document.getElementById('btnSlash').addEventListener('touchend', (event) => (event.preventDefault(), handleTouchEnd('SLASH')));
    document.getElementById('btnOverkill').addEventListener('touchend', (event) => (event.preventDefault(), handleTouchEnd('OVERKILL')));
}