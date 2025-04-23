class BossChick extends MoObject {

    speed = 4;
    height = 500;
    width = 300;
    y = 0;
    offset = {
        top: 120,
        left: 105,
        right: 120,
        bottom: 80,
    };
    firstEncounter = false;ä
    isAlive = true;

    IMAGES_WALKING = [
        'img/enemys/boss_chicken/1_walk/G1.png',
        'img/enemys/boss_chicken/1_walk/G2.png',
        'img/enemys/boss_chicken/1_walk/G3.png',
        'img/enemys/boss_chicken/1_walk/G4.png',
    ];

    IMAGES_ALERT = [
        'img/enemys/boss_chicken/2_alert/G5.png',
        'img/enemys/boss_chicken/2_alert/G6.png',
        'img/enemys/boss_chicken/2_alert/G7.png',
        'img/enemys/boss_chicken/2_alert/G8.png',
        'img/enemys/boss_chicken/2_alert/G9.png',
        'img/enemys/boss_chicken/2_alert/G10.png',
        'img/enemys/boss_chicken/2_alert/G11.png',
        'img/enemys/boss_chicken/2_alert/G12.png',
    ];

    IMAGES_ATTACK = [
        'img/enemys/boss_chicken/3_attack/G13.png',
        'img/enemys/boss_chicken/3_attack/G14.png',
        'img/enemys/boss_chicken/3_attack/G15.png',
        'img/enemys/boss_chicken/3_attack/G16.png',
        'img/enemys/boss_chicken/3_attack/G17.png',
        'img/enemys/boss_chicken/3_attack/G18.png',
        'img/enemys/boss_chicken/3_attack/G19.png',
        'img/enemys/boss_chicken/3_attack/G20.png',
    ];

    IMAGES_HURT = [
        'img/enemys/boss_chicken/4_hurt/G21.png',
        'img/enemys/boss_chicken/4_hurt/G22.png',
        'img/enemys/boss_chicken/4_hurt/G23.png',
    ];

    IMAGES_DEAD = [
        'img/enemys/boss_chicken/5_dead/G24.png',
        'img/enemys/boss_chicken/5_dead/G25.png',
        'img/enemys/boss_chicken/5_dead/G26.png',
    ];

    constructor() {
        super().loadImg('img/enemys/boss_chicken/1_walk/G1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 5500;
        this.animate();
        this.spawn();
    }

    spawn() {
        this.spawnInterval = setInterval(() => {
            if (!this.firstEncounter && world.char.x > 4440) {
                this.firstEncounter = true;
                if (this.firstEncounter) {
                    moveIn();
                }
            }
        }, 60);
    }

    animate() {
        this.animationInterval = setInterval(() => {
            this.checkBossState();
        })
    }

    checkBossState() {
        if (this.isAlive) {
            if (this.x <= 5040) {
                clearInterval(this.animationInterval);
                this.reaction();
            } else {
                this.firstEncounter = false;
            }
        }
    }

    reaction() {
        if (this.isAlive) {
            if (this.isDead) {
                this.playAnimation(this.IMAGES_DEAD);
                setTimeout(() => {
                    wold.winGame();
                    this.bossDies();
                }, 1000);
            } else if (this.isHurt) {
                this.playAnimation(this.IMAGES_HURT);
            } else {
                checkDistance();
            }
        }
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

    persueChar() {
        if (this.isAlive) {
            let bossPos = this.x;
            let charPos = wold.char.x;
            

            if (bossPos < charPos) {
                this.x += this.speed;
                this.walk();
            } else {
                this.x -= this.speed;
                this.otherDirection;
                this.walk();
            }
        }
    }

    attack() {
        if (this.isAlive) {
            this.playAnimation(this.IMAGES_ATTACK);
            setTimeout(() => {
                wold.hitHard();
            })
        }
    }

    moveIn() {
        if (this.x > 5040) {
            this.playAnimation(this.IMAGES_WALKING);
            this.x -= this.speed;        }
    }

    walk() {
        if (this.isAlive) {
            this.playAnimation(this.IMAGES_WALKING);
        }
    }

    bossDies() {
        this.isAlive = false;
        setInterval(() => {
            clearInterval(this.spawnInterval);
            clearInterval(this.animationInterval);
        })
    }
}