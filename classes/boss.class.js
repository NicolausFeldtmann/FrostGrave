class Boss extends MoObject {

    world;
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
    dying = new Audio('audio/bossDies.mp3');
    bossTheme = new Audio('audio/bossMusic.mp3');
    slash = new Audio ('audio/bossSlash.mp3');
    angry = new Audio ('audio/bossAngry.mp3');

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

    IMAGES_THROW = [
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Throwing/0_Zombie_Villager_Throwing_000.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Throwing/0_Zombie_Villager_Throwing_001.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Throwing/0_Zombie_Villager_Throwing_002.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Throwing/0_Zombie_Villager_Throwing_003.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Throwing/0_Zombie_Villager_Throwing_004.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Throwing/0_Zombie_Villager_Throwing_005.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Throwing/0_Zombie_Villager_Throwing_006.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Throwing/0_Zombie_Villager_Throwing_007.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Throwing/0_Zombie_Villager_Throwing_008.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Throwing/0_Zombie_Villager_Throwing_009.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Throwing/0_Zombie_Villager_Throwing_010.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Throwing/0_Zombie_Villager_Throwing_011.png',
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

    IMAGES_WAKLING = [
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
        this.loadImages(this.IMAGES_THROW);
        this.loadImages(this.IMAGES_DYING);
        this.loadImages(this.IMAGES_WAKLING);
        this.loadImages(this.IMAGES_SLAY);
        this.loadImages(this.IMAGES_START_ATTACK);
        this.animate();
        this.isHurt = false;
        this.isChargeing = false;
        this.isSlays = false;
        this.isBeaten = false;
        this.lastHit = 0;
        this.x = 5500;
        this.otherDirection = true;
    }

    animate() {
        let i = 0;
        this.animateInterval = setInterval(() => {
            if (!this.firstEncounter && world.char.x > 4440) {
                this.firstEncounter = true; 
                console.log('encounter!'); 
                this.playAnimation(this.IMAGES_WAKLING); 
                i = 0; 
            } else if (this.firstEncounter) {
                if (this.x > 5040) {
                    this.playAnimation(this.IMAGES_WAKLING);
                    this.moveIn(); 
                } else {
                    this.bossAnimation(); 
                }
                i++;
            }
        }, 60);
    }

    bossAnimation() {
        setInterval(() => {
            this.checkSpaceBetween();
            this.animationUpdate();
        }, 200);
    }

    checkSpaceBetween() {
        if (!this.world || !this.world.char) return;
            let spaceBetween = Math.abs(this.world.char.x - this.x);
        
        if (spaceBetween < 400 & !this.isChargeing) this.charge();
    }

    animationUpdate() {
        if (this.isBeaten) {
            this.playAnimation(this.IMAGES_DYING);
            this.dying.play();
            setTimeout(() => {
                showWinScreen();
            }, 2000);
        } else if (this.isHurt) {
            this.playAnimation(this.IMAGES_HURT);
            this.hurt.play();
        } else if (this.isSlays) {
            this.playAnimation(this.IMAGES_SLAY);
            this.slash.play();
        } else if (this.isChargeing) {
            this.playAnimation(this.IMAGES_WAKLING);
            this.chargeChar();
        } else {
            this.playAnimation(this.IMAGES_THROW);
            this.angry.play();
        }
    }

    chargeChar() {
        if (!this.world || this.world.char) return;
            let charPos = this.world.char.x;
            let spaceBetween = Math.abs(charPos - this.x);

        if (spaceBetween > 100) {
            this.x += charPos < this.x ? -this.speed : this.speed;
            this.otherDirection = charPos > this.x;
        } else {
            this.slashing();
        }
    }

    slashing() {
        if (!this.isBeaten && !isChargeing) {
            this.isChargeing = false;
            this.isHurt = false;
            this.isSlays = true;
            this.playAnimation(this.IMAGES_SLAY);
            this.slash.play();
            this.endCharge();
        }
    }

    charge() {
        this.isChargeing = true;
        this.lastHit = new Date().getTime();
    }

    endCharge() {
        setTimeout(() => {
            this.isSlays = false;
            this.playAnimation(this.IMAGES_THROW);
            this.angry.play();
        }, 2000);
    }

    moveIn() {
        if (this.x > 5040) {
            this.x -= this.speed;
            //this.bossTheme.play();
        }
    }
}
