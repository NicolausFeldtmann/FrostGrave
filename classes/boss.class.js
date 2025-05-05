class Boss extends MoObject {

    static instance = null;
    isAlive = true;
    firstEncounter = false;
    world;
    height = 500;
    width = 400;
    y = 35;
    energy = 1000;
    speed = 4;
    lastHit = 0;
    offset = {
        top: 120,
        left: 105,
        right: 120,
        bottom: 80, 
    };
    intervalIds = [];
    i = 0;

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

    constructor(world) {
        super().loadImg('img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_000.png');
        if (Boss.instance) {
            return Boss.instance;
        }
        Boss.instance = this;
        this.world = world;
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_THROW);
        this.loadImages(this.IMAGES_DYING);
        this.loadImages(this.IMAGES_WAKLING);
        this.loadImages(this.IMAGES_SLAY);
        this.loadImages(this.IMAGES_START_ATTACK);
        this.spawnAnimation();
        this.react();
        this.x = 5500;
        this.otherDirection = true;
    }

    spawnAnimation() {
        let i = 0;
        this.spawnInterval = setInterval(() => {
            if (!this.firstEncounter && world.char.x > 4440) {
                this.firstEncounter = true;
                if (this.firstEncounter) {
                    this.moveIn();
                    world.backGrndMusic.pause();
                    world.bossTheme.volume = 0.3;
                    world.bossTheme.play();
                }
            }
        }, 60)
    }

    checkBossState() {
        if (this.isAlive) {
            if (this.x <= 5040) {
                clearInterval(this.spawnInterval);
                world.bossTheme.pause();
                this.bossAnimation();
                world.backGrndMusic.play();
            } else {
                this.firstEncounter = false;
            }
        }
    }

    bossAnimation() {
        if (this.isAlive) {
            if (this.isDeadAgain()) {
                this.playDieAnimation();
            } else if (this.isHurt()) {
                this.bossHurt();
            } else {
                this.checkDistance();
            }
        }
    }

    react() {
        this.reactInterval = setInterval(() => {
            this.checkBossState();
        }, 60);
    }

    checkDistance() {
        if (this.isAlive) {
            let bossPos = this.x;
            let charPos = world.char.x;
            let spaceBetween = bossPos - charPos;
            
            if (spaceBetween >= 5) {
                this.persueChar();
            } else {
                this.attack();
            }
        }
    }

    attack() {
        if (this.isAlive) {
            this.playAnimation(this.IMAGES_SLAY);
            world.slash.play();
            setTimeout(() => {
                world.hitHard();
            }, 100);
        }
    }

    persueChar() {
        if (this.isAlive) {
            let bossPos = this.x;
            let charPos = world.char.x;
            if (bossPos < charPos) {
                this.otherDirection;  
                this.x += this.speed;
                this.walk();
            } else {
                this.walk();
                this.x -= this.speed;
            }
        }
    }

    moveIn() {
        if (this.x > 5040) {
            this.playAnimation(this.IMAGES_WAKLING);
            this.x -= this.speed;            
        }
    }

    walk() {
        if (this.isAlive) {
            this.playAnimation(this.IMAGES_WAKLING);
            world.stomp.volume = 0.2;
            world.stomp.play();
        }
    }

    bossDies() {
        this.isAlive = false;
        world.dying.play();
        setInterval(() => { 
        clearInterval(this.reactInterval);
        clearInterval(this.spawnInterval);
        }, 30);
    }

    bossHurt()  {
        this.playAnimation(this.IMAGES_HURT);
        world.hurt.play();
    }

    dropKeyStone() {
        if (!this.isAlive) {
            this.keyStone = new KeyStone(this.x + 150);
            world.keyStone.push(this.keyStone);
            console.log('key stone dropped', this.x, this.y);
        }
    }

    playDieAnimation() {
        this.bossDies();
        let i = 0;
        let totalFrames = 14;

        this.dieInterval = setInterval(() => {
            let frmNumbrStr = String(i).padStart(3, '0');
            let imagePath = `img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_${frmNumbrStr}.png`;

            this.loadImg(imagePath);

            i++;
            if (frmNumbrStr >= totalFrames) {
                clearInterval(this.dieInterval);
            }
        }, 100);
        this.isAlive = false;
        this.dropKeyStone();
    }
}