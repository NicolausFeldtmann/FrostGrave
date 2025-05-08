class Extensions {

    isOver = false
    isCool = true;
    isLoaded = false;
    isRunnig = true;
    
    char = new Char();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new Status();
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
    boom = new Audio('audio/boom2.mp3');
    lostSound = new Audio('audio/backgroundAudio.mp3');
    winSound = new  Audio('audio/winMusic.mp3');
    tadda = new Audio('audio/tadda.mp3');

    /**
     * draws movable and static objects on canvas
    */
    draw() {
        this.drawInterval = this.setEndInterval(() => {
            if (!this.isRunnig) return;
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.translate(this.camera_x, 0);
            this.addObjToMap(this.level.blueSky);
            this.addObjToMap(this.level.backgrounds);
            this.addObjToMap(this.level.clouds);
            this.addObjToMap(this.level.enemies);
            this.addObjToMap(this.level.boss);
            this.addToMap(this.char);
            this.addObjToMap(this.level.mana);
            this.addObjToMap(this.level.frontObj);
            this.addObjToMap(this.projectile);
            this.addObjToMap(this.overkill);
            this.addObjToMap(this.star);
            this.addObjToMap(this.keyStone);
            //------Space for fixed objects-----//
            this.ctx.translate(-this.camera_x, 0);
            this.addToMap(this.statusBar);;
            this.ctx.translate(this.camera_x, 0);
    
            this.ctx.translate(-this.camera_x, 0);
        }, 1000 / 30);
    }

    muteAudio() {
        this.backGrndMusic.muted = true;
        this.snow1.muted = true;
        this.snow2.muted = true;
        this.spell.muted = true;
        this.crystal.muted = true;
        this.gameOverSound.muted = true;
        this.winMusic.muted = true;
        this.slashSound.muted = true;
        this.ouch.muted = true;
        this.bossTheme.muted = true;
        this.hurt.muted = true;
        this.stomp.muted = true;
        this.slash.muted = true;
        this.walkerHurt.muted = true;
        this.walkerDying.muted = true;
        this.cast.muted = true;
        this.baam.muted = true;
        this.boom.muted = true;
        this.winSound.muted = true;
        this.lostSound.muted = true;
        this.dying.muted = true;
        this.tadda.muted = true;
    }
}

