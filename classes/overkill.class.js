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
        this.width = 150;
        this.height = 120;
        this.cast();
    }

    cast() {
        this.castInterval = setInterval(() => {
            this.playAnimation(this.IMAGES_FIRE);
            world.cast.play();
            this.x += 10;
        }, 1000 / 30);
    }

    impact() {
        clearInterval(this.castInterval);
        this.speedx = 0;
        this.impactAnimation();
        world.baam.volume = 0.3;
        world.baam.play();
    }

    impactAnimation() {
        this.impactInterval = setInterval(() => {
            this.playAnimation(this.IMAGES_IMPACT);
            this.width = 500;
            this.height = 440;
            this.y = 150;
        },1000 / 1.5);
    }
}