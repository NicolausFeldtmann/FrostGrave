class MoObject {
    x = 120;
    y = 300;
    img;
    height = 150;
    width = 100;

    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log('move Right');
    }

    moveLeft() {
        console.log('move left');
    }
}