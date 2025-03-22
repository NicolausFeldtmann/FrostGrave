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

function decideControls() {
    let mobileBtn = document.getElementById('btnArea');

    if (detectMob()) {
        mobileBtn.style.display = 'flex';
        fullscreen();
    } else {
        mobileBtn.style.display = 'none';
    }
}

function mobileBtnEventListner() {
    document.getElementById('btnLeft').addEventListener('touchstart', () => keyboard.LEFT = true);
    document.getElementById('btnLeft').addEventListener('touchend', () => keyboard.LEFT = false);

    document.getElementById('btnRight').addEventListener('touchstart', () => keyboard.RIGHT = true);
    document.getElementById('btnRight').addEventListener('touchend', () => keyboard.RIGHT = false);

    document.getElementById('btnFire').addEventListener('touchstart', () => keyboard.THROW = true);
    document.getElementById('btnFire').addEventListener('touchend', () => keyboard.THROW = false);

    document.getElementById('btnJump').addEventListener('touchstart', () => keyboard.SPACE = true);
    document.getElementById('btnJump').addEventListener('touchend', () => keyboard.SPACE = false);

    document.getElementById('btnSlash').addEventListener('touchstart', () => keyboard.SLASH = true);
    document.getElementById('btnSlash').addEventListener('touchend', () => keyboard.SLASH = false);

    
}