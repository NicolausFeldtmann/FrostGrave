class Level {
    world;
    enemies;
    boss;
    clouds;
    backgrounds;
    blueSky;
    frontObj;
    mana;
    jewel;
    boss;
    level_end_x = 5040;

    constructor(enemies, boss, clouds, backgrounds, blueSky, frontObj, mana, jewel,) {
        this.enemies = enemies;
        this.boss = boss || [];
        this.clouds = clouds;
        this.backgrounds= backgrounds;
        this.blueSky = blueSky;
        this.frontObj = frontObj;
        this.mana = mana;
        this.jewel = jewel;
        this.spell = new Audio('audio/spell.mp3');
        this.crystal = new Audio('audio/crystal.mp3');
        this.backGrndMusic = new Audio('audio/backgroundMusic.mp3');
        this.gameOverSound = new Audio('audio/backgroundAudio.mp3');
        this.winMusic = new Audio('audio/winMusic.mp3');
        this.snow1 = new Audio('audio/snow1.mp3');
        this.snow2 = new Audio('audio/snow2.mp3');
        this.slashSound = new Audio('audio/slash.mp3');
        this.ouch = new Audio('audio/wilhelm.mp3');
        this.hurt = new Audio('audio/bossPain.mp3');
        this.dying = new Audio('audio/bossDies.mp3');
        this.bossTheme = new Audio('audio/bossTheme.mp3');
        this.slash = new Audio('audio/bossSlash.mp3');
        this.stomp = new Audio('audio/stomp.mp3'); 
    }
}