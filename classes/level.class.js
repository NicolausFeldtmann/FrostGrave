class Level {
    enemies;
    clouds;
    backgrounds;
    blueSky;
    frontObj;
    mana;
    boss;
    level_end_x = 5040;

    constructor(enemies, clouds, backgrounds, blueSky, frontObj, mana, boss) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgrounds= backgrounds;
        this.blueSky = blueSky;
        this.frontObj = frontObj;
        this.boss = boss;
        this.mana = mana;
    }
}