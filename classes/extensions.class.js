class Extensions {

    isOver = false
    isCool = true;
    isLoaded = false;
    isRunnig = true;
    isMuted = false;
    char = new Char();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new Status();
    greenBar = new GreenBar();
    orangeBar = new OrangeBar();
    projectile = [];
    overkill = [];
    keyStone = [];
    star = [];
    intervalIds = [];
    i = 0;

    backGrndMusic = new Audio('audio/backgroundMusic.mp3');
    spell = new Audio('audio/spell.mp3');
    crystal = new Audio('audio/crystal.mp3');
    gameOverSound = new Audio('audio/backgroundAudio.mp3');
    winMusic = new Audio('audio/winMusic.mp3');
    snow1 = new Audio('audio/snow1.mp3');
    snow2 = new Audio('audio/snow2.mp3');
    slashSound = new Audio('audio/slash.mp3');
    ouch = new Audio('audio/wilhelm.mp3');
    hurt = new Audio('audio/bossPain.mp3');
    dying = new Audio('audio/bossDies.mp3');
    bossTheme = new Audio('audio/bossTheme.mp3');
    slash = new Audio('audio/bossSlash.mp3');
    stomp = new Audio('audio/stomp.mp3'); 
    walkerHurt = new Audio('audio/walkerPain.mp3');
    walkerDying = new Audio('audio/walkerPain2.mp3');
    cast = new Audio('audio/overkill.mp3');
    baam = new Audio('audio/baam.mp3');
}