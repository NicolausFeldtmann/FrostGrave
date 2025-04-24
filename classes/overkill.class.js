class Overkill extends MoObject {

    speedx = 30;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }

    IMAGES_FIRE = [
        'img/effects/Explosion_7/3/Explosion_2_1.png',
        'img/effects/Explosion_7/3/Explosion_2_2.png',
        'img/effects/Explosion_7/3/Explosion_2_3.png',
        'img/effects/Explosion_7/3/Explosion_2_4.png',
        'img/effects/Explosion_7/3/Explosion_2_5.png',
        'img/effects/Explosion_7/3/Explosion_2_6.png',
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
        this.loadImages(this.IMAGES_FIRE);
        this.loadImages(this.IMAGES_IMPACT);
        this.x = x;
        this.y = y;
        this.width = 250;
        this.height = 120;
        this.cast();
    }

    cast() {
        this.castInterval = setInterval(() => {
            this.playAnimation(this.IMAGES_FIRE);
            this.x += 10;
        }, 1000 / 30);
    }

    impact() {
        this.speedx = 0;
        this.impactAnimation();
    }

    impactAnimation() {
        this.playAnimation(this.IMAGES_IMPACT);
    }
}