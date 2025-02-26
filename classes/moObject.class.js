class MoObject {
    x = 100;
    y = 320;
    img;
    height = 150;
    width = 100;
    imgCache = {};
    speed = 0.15;
    speedY = 0;
    accel = 2.0;
    otherDirection = false;

    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imgCache[path] = img;
        });
    }

    appyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.accel;
            }
        }, 1000 / 50)
    }

    isAboveGround() {
        return this.y < 320;
    }

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = images[i];
        this.img = this.imgCache[path];
        this.currentImage++;
    }

    moveRight() {
        console.log('move Right');
    }

    moveLeft() {
        console.log('move left');
    }

    jump() {
        this.speedY = 25;
    }
}