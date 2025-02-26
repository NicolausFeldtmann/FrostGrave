class Walker extends MoObject{

    x = 150;

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
    currentImage = 0

    constructor(imagePath, x) {
        super().loadImg(imagePath, x);
        this.loadImages(this.IMAGES_WALKING);

        this.x = 200 + Math.random() * 5040;
        this.moveLeft();
        this.reanimate();
        this.otherDirection = true;
    }

    reanimate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 80)
    }

    moveLeft() {
        setInterval(() => {
            this.x -= 0.6;
        }, 1000 / 60);
    }
}