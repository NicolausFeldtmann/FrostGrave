class Level {
    world;
    enemies;
    boss;
    clouds;
    backgrounds;
    blueSky;
    frontObj;
    mana;
    boss;
    level_end_x = 5040;

    constructor(enemies, boss, clouds, backgrounds, blueSky, frontObj, mana) {
        this.enemies = enemies;
        this.boss = boss || [];
        this.clouds = clouds;
        this.backgrounds= backgrounds;
        this.blueSky = blueSky;
        this.frontObj = frontObj;
        this.mana = mana;
    }
}