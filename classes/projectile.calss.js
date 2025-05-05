class Projectile extends MoObject {


    smashed;
    speedy = 25;
    speedx = 20;
    offset = {
        top: 80,
        left: 100,
        right: 100,
        bottom: 40,
    };

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
        this.checkPosCahr();
    }

    /**
     * detects view direction of char when projectile fired
     */
    checkPosCahr() {
        if (!world.char.otherDirection) {
            this.throw();
        } else {
            this.throwBack();
        }
    }
    
    /**
     * Defines physics of projctile
     */
    throw () {
        this.speedY = 20;
        this.alppyGravity();
        this.throwInterval = setInterval (() => {
            this.x += 20;
        }, 1000 / 30);
    }
 
    /**
     * Defines physics of projectile
     */
    throwBack() {
        this.speedY = 20;
        this.alppyGravity();
        this.throwInterval = setInterval(() => {
            this.x -= 20; 
        }, 1000 / 30); 
    }

    /**
     * Defines behavuior after Collision
     */
    impact() {
        this.speedy = 0;
        this.speedx = 0;
        this.alppyGravity = false;
        clearInterval(this.throwInterval);
        clearInterval(this.gravityInterval);
        this.impactAnimation();
        world.boom.play();
        world.removeProjectile();
    }

    /**
     * runs impact animation
     */
    impactAnimation() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_IMPACT);
        }, 80)
    }
}