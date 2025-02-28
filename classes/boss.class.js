class Boss extends MoObject {

    height = 500;
    width = 400;
    y = 35;

    IMAGES_WALKING = [
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_000.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_001.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_002.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_003.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_004.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_005.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_006.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_007.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_008.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_009.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_010.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_011.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_012.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_013.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_014.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_015.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_016.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_017.png',
    ];

    constructor() {
        super().loadImg('img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_000.png');
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
        this.x = 5040;
        this.otherDirection = true;
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 60)
    }

}

