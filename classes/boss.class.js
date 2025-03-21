class Boss extends MoObject {

    height = 500;
    width = 400;
    y = 35;
    energy = 1000;
    speed = 2;
        offset = {
        top: 120,
        left: 105,
        right: 120,
        bottom: 80, 
    };
    hurt = new Audio('audio/bossPain.mp3');
    melm = new Audio('audio/melm.mp3');
    bossTheme = new Audio('audio/bossMusic.mp3');

    IMAGES_START_ATTACK = [
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_009.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_010.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_011.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_000.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_000.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_000.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_000.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_000.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_000.png',
        
    ];

    IMAGES_SLAY = [
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_000.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_001.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_002.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_003.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_004.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_005.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_006.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_007.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_008.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_009.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_010.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_011.png',
    ];

    IMAGES_IDLE = [
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

    IMAGES_HURT = [
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_000.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_001.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_002.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_003.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_004.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_005.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_006.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_007.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_008.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_009.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_010.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_011.png',
    ];

    IMAGES_DYING = [
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_000.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_001.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_002.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_003.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_004.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_005.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_006.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_007.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_008.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_009.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_010.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_011.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_012.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_013.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_014.png',
    ];

    IMAGES_SPAWNING = [
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_000.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_001.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_002.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_003.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_004.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_005.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_006.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_007.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_008.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_009.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_010.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_011.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_012.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_013.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_014.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_015.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_016.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_017.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_018.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_019.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_020.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_021.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_022.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_023.png',
    ];

    firstEncounter = false;

    constructor() {
        super().loadImg('img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_000.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DYING);
        this.loadImages(this.IMAGES_SPAWNING)
        this.loadImages(this.IMAGES_SLAY);
        this.loadImages(this.IMAGES_START_ATTACK);
        this.animate();
        this.x = 5500;
        this.otherDirection = true;
    }

    animate() {
        let i = 0;
        setInterval(() => {
            if (!this.firstEncounter && world.char.x > 4440) {
                this.firstEncounter = true; 
                console.log('encounter!'); 
                this.playAnimation(this.IMAGES_SPAWNING); 
                i = 0; 
            } else if (this.firstEncounter) {
                if (this.x > 5040) {
                    this.playAnimation(this.IMAGES_SPAWNING);
                    this.moveIn(); 
                } else {
                    //this.bossAnimation(); 
                }
                i++;
            }
        }, 60);
    }

    bossAnimation() {
        let i = 0;
        if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
            this.hurt.play();
        } else if (this.isDeadAgain()) {
            this.playAnimation(this.IMAGES_DYING);
            this.melm.play();
            clearInterval(this.reanimateInterval);
        } else {
            this.slay(); 
        }
        i++;
    }

    slay() {
        this.lungeOut();
        setTimeout(() => {
            this.attack();
            this.waitAndGo();
        }, 1000);
    }

    attack() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_SLAY);
        }, 1000 / 10);
    }

    lungeOut() {
        setTimeout(() => {
            this.playAnimation(this.IMAGES_IDLE);
        }, 1000);
    }

    waitAndGo() {
        setTimeout(() => {
            this.moveAhead();
        }, 2000);
    }

    moveAhead() {
        let endPosition = this.x - 250;
        this.moveInterval = setInterval(() => {
            if (this.x > endPosition) {
                this.x -= this.speed;
            } else {
                clearInterval(this.moveInterval);
                this.slay();
            }
        });
    } 

    moveIn() {
        if (this.x > 5040) {
            this.x -= this.speed;
            //this.bossTheme.play();
        }
    }
}
