class MoObject {
    x = 100;
    y = 300;
    img;
    height = 150;
    width = 100;
    imgCache = {};
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
}