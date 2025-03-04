class Walker extends MoObject{

    x = 150;
    foeEnergy = 2;

    IMAGES_WALKING = [
        'img/enemys/Zombie_Villager_1/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_000.png',
        'img/enemys/Zombie_Villager_1/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_001.png',
        'img/enemys/Zombie_Villager_1/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_002.png',
        'img/enemys/Zombie_Villager_1/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_003.png',
        'img/enemys/Zombie_Villager_1/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_004.png',
        'img/enemys/Zombie_Villager_1/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_005.png',
        'img/enemys/Zombie_Villager_1/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_006.png',
        'img/enemys/Zombie_Villager_1/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_007.png',
        'img/enemys/Zombie_Villager_1/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_008.png',
        'img/enemys/Zombie_Villager_1/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_009.png',
        'img/enemys/Zombie_Villager_1/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_010.png',
        'img/enemys/Zombie_Villager_1/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_011.png',
    ];

    IMAGES_DYING = [
        'img/enemys/Zombie_Villager_1/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_000.png',
        'img/enemys/Zombie_Villager_1/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_001.png',
        'img/enemys/Zombie_Villager_1/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_002.png',
        'img/enemys/Zombie_Villager_1/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_003.png',
        'img/enemys/Zombie_Villager_1/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_004.png',
        'img/enemys/Zombie_Villager_1/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_005.png',
        'img/enemys/Zombie_Villager_1/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_006.png',
        'img/enemys/Zombie_Villager_1/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_007.png',
        'img/enemys/Zombie_Villager_1/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_008.png',
        'img/enemys/Zombie_Villager_1/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_009.png',
    ];

    constructor(imagePath, x) {
        super().loadImg(imagePath, x);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 200 + Math.random() * 5040;
        this.reanimate();
        this.otherDirection = true;
    }

    reanimate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60)

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 60)

        setInterval (() => {
            if (this.isDeadAgain()) {
                this.playAnimation(this.IMAGES_DYING);
            } else {
                this.moveLeft();
            }
        }, 200)
    }
}