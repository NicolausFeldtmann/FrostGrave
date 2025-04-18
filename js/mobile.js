
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
    let mobileBtn = document.getElementById('btnArea');

    if (detectMob()) {
        mobileBtn.style.display = 'flex';
        fullscreen();
    } else {
        mobileBtn.style.display = 'none';
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

    let btnLeft = document.getElementById('btnLeft');
    let btnRight = document.getElementById('btnRight');
    let btnFire = document.getElementById('btnFire');
    let btnJump = document.getElementById('btnJump');
    let btnSlash = document.getElementById('btnSlash');

    btnLeft.addEventListener('touchstart', (event) => (event.preventDefault(), handleTouchStart('LEFT')));
    btnLeft.addEventListener('touchend', (event) => (event.preventDefault(), handleTouchEnd('LEFT')));

    btnRight.addEventListener('touchstart', (event) => (event.preventDefault(), handleTouchStart('RIGHT')));
    btnRight.addEventListener('touchend', (event) => (event.preventDefault(), handleTouchEnd('RIGHT')));

    btnFire.addEventListener('touchstart', (event) => (event.preventDefault(), handleTouchStart('THROW')));
    btnFire.addEventListener('touchend', (event) => (event.preventDefault(), handleTouchEnd('THROW')));

    btnJump.addEventListener('touchstart', (event) => (event.preventDefault(), handleTouchStart('SPACE')));
    btnJump.addEventListener('touchend', (event) => (event.preventDefault(), handleTouchEnd('SPACE')));

    btnSlash.addEventListener('touchstart', (event) => (event.preventDefault(), handleTouchStart('SLASH')));
    btnSlash.addEventListener('touchend', (event) => (event.preventDefault(), handleTouchEnd('SLASH')));
}