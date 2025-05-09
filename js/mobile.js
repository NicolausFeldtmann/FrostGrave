
/**
 * dectect if used device is a mobile device 
 */
function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    }
    );
}

/**
 * shows or hide buttons, depending on if mobile device is used or not
 */
function decideControls() {

    if (detectMob()) {
        mobileControll.style.display = 'flex';
    } else {
        mobileControll.style.display = 'none';
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