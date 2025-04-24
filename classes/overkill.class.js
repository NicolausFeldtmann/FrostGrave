class Overkill extends MoObject {

    speedx = 30;

    IMAGES_FIRE = [
        'img/effects/Explosion_7/1/Explosion_1.png',
        'img/effects/Explosion_7/1/Explosion_2.png',
        'img/effects/Explosion_7/1/Explosion_3.png',
        'img/effects/Explosion_7/1/Explosion_4.png',
        'img/effects/Explosion_7/1/Explosion_5.png',
    ]

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
    ]

    constructor(x, y) {
        super().loadImg('img/effects/Explosion_7/1/Explosion_1.png');
        this.x = x;
        this.y = y;
        this.width = 400;
        this.height = 180;
        this.cast();
    }

    cast() {
        this.castInterval = setInterval(() => {
            this.x += 15;
        })
    }

    impact() {
        this.speedx = 0;
        this.impactAnimation();
    }

    impactAnimation() {
        this.playAnimation(this.IMAGES_IMPACT);
    }
}