class Walker extends MoObject{

    constructor(imagePath, x) {
        super().loadImg(imagePath, x);

        this.x = 200 + Math.random() * 500;
        this.moveLeft();
    }

    moveLeft() {
        setInterval(() => {
            this.x -= 0.6;
        }, 1000 / 60);
    }
}