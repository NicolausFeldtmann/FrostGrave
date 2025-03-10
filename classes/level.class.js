class Level {
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
        this.boss = boss;
        this.clouds = clouds;
        this.backgrounds= backgrounds;
        this.blueSky = blueSky;
        this.frontObj = frontObj;
        this.mana = mana;
        this.jewel = jewel;
    }
}