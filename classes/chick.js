class Chick extends MoObject {

    y = 350;
    width = 100;
    height = 100;
    wpeed = 2.5;
    offset = {
        top: 35,
        left: 25,
        right: 25,
        bottom: 25,
    };

    IMAGE_WALKING = [
        'img/enemys/chicken/chicken_normal/1_walk/1_w.png',
        'img/enemys/chicken/chicken_normal/1_walk/2_w.png',
        'img/enemys/chicken/chicken_normal/1_walk/3_w.png',
    ]

    IMAGES_DEAD = [
        'img/enemys/chicken/chicken_normal/2_dead/dead.png',
    ]

    constructor(imagePath, x) {
        super().loadImg('img/enemys/chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGE_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x;
        this.animate();
    }

    animate() {
        this.animationIntervall = setInterval(() => {
            if (this.isDead) {
                this.playAnimation(this.IMAGES_DEAD);
            } else {
                this.walkLeft();
            }
        })
    }

    walkLeft() {
        this.x -= this.speed;
        this.otherDirection = false;
    }
}