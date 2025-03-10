class Projectile extends MoObject {

    offset = {
        top: 120,
        left: 165,
        right: 165,
        bottom: 100,
    };

    IMAGES_IMPACT = [
        'img/effects/Explosion_8/Explosion_1.png',
        'img/effects/Explosion_8/Explosion_2.png',
        'img/effects/Explosion_8/Explosion_3.png',
        'img/effects/Explosion_8/Explosion_4.png',
        'img/effects/Explosion_8/Explosion_5.png',
        'img/effects/Explosion_8/Explosion_6.png',
        'img/effects/Explosion_8/Explosion_7.png',
        'img/effects/Explosion_8/Explosion_8.png',
        'img/effects/Explosion_8/Explosion_9.png',
        'img/effects/Explosion_8/Explosion_10.png',
    ];

    constructor(x, y) {
        super().loadImg('img/effects/Explosion_6/Explosion_1.png');
        this.loadImages(this.IMAGES_IMPACT);
        this.x = x;
        this.y = y;
        this.width = 250;
        this.height = 180;
        this.throw();
        this.spin();
    }
    Projectile
    spin() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_IMPACT);
        }, 100)
    }
    
        throw () {
        this.speedY = 25;
        this.alppyGravity();
        setInterval (() => {
            this.x += 12;
        }, 25)
    }
}