class Walker2 extends MoObject{

    x = 150;
    speed = 2.5;
    offset = {
        top: 35,
        left: 35,
        right: 35,
        bottom: 25, 
    };

    IMAGES_WALKING = [
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_000.png',
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_001.png',
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_002.png',
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_003.png',
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_004.png',
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_005.png',
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_006.png',
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_007.png',
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_008.png',
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_009.png',
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_010.png',
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_011.png',
    ];

    IMAGES_HURT =  [
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_000.png',
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_001.png',
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_002.png',
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_003.png',
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_004.png',
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_005.png',
    ];

    IMAGES_DYING = [
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_000.png',
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_001.png',
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_002.png',
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_003.png',
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_004.png',
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_005.png',
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_006.png',
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_007.png',
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_008.png',
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_009.png',
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_010.png',
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_011.png',
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_012.png',
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_013.png',
        'img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_014.png',
    ];

    constructor(imagePath, x) {
        super().loadImg(imagePath, x);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DYING);
        this.x = x;
        this.reanimate();
        this.otherDirection = true;
    }

    /**
     * animate enemy depending of its current status
     */
    reanimate() {
        this.reanimateInterval = setInterval(() => {
            if (this.isDeadAgain()) {
                this.playDieAnimation();
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
                world.walkerHurt.play();
            } else {
                this.walkLeft();
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 1000/ 15)
    }

    /**
     * moves enemy from right to left throu level
     */
    walkLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
    }

    /**
     * carry out death of walker
    */
    walkerDies() {
        this.playAnimation(this.IMAGES_HURT);
        world.walkerDying.play();
        setTimeout(() => {
            clearInterval(this.reanimateInterval);
            this.loadImg('img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_014.png');
        }, 700);
    }

    playDieAnimation() {
        clearInterval(this.reanimateInterval);
        world.walkerDying.play();
        let i = 0;
        let totalFrame = 14;
        this.dieInterval = setInterval(() => {
            let frmNumbrStr = String(i).padStart(3, '0');
            let imagePath = `img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_${frmNumbrStr}.png`;
            this.loadImg(imagePath);
            i++;
            if (frmNumbrStr >= totalFrame) {
                clearInterval(this.dieInterval);
            }
        }, 50);
    }
}