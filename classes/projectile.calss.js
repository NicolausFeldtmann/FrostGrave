class Projectile extends MoObject {


    smashed;
    speddy = 30;
    speedx = 20;
    offset = {
        top: 80,
        left: 100,
        right: 100,
        bottom: 40,
    };
    boom = new Audio('audio/boom2.mp3');

    IMAGES_IMPACT = [
        'img/effects/Explosion_5/Explosion_1.png',
        'img/effects/Explosion_5/Explosion_2.png',
        'img/effects/Explosion_5/Explosion_3.png',
        'img/effects/Explosion_5/Explosion_4.png',
        'img/effects/Explosion_5/Explosion_5.png',
        'img/effects/Explosion_5/Explosion_6.png',
        'img/effects/Explosion_5/Explosion_7.png',
        'img/effects/Explosion_5/Explosion_8.png',
        'img/effects/Explosion_5/Explosion_9.png',
        'img/effects/Explosion_5/Explosion_10.png',
    ];

    constructor(x, y) {
        super().loadImg('img/effects/Explosion_6/Explosion_1.png');
        this.loadImages(this.IMAGES_IMPACT);
        this.x = x;
        this.y = y;
        this.width = 250;
        this.height = 180;
        this.throw();
    }
    
    throw () {
        this.speedY = 25;
        this.alppyGravity();
        this.throwInterval = setInterval (() => {
            this.x += 12;
        }, 25)
    }

    impact() {
        this.speedy = 0;
        this.speedx = 0;
        this.alppyGravity = false;
        clearInterval(this.throwInterval);
        clearInterval(this.gravityInterval);
        this.impactAnimation();
        this.boom.play();
    }

    impactAnimation() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_IMPACT);
        }, 80)
    }
}