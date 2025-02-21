class Background extends MoObject {

    width = 720;
    height = 340;

    constructor(imagePath, x) {
        super().loadImg(imagePath);
        this.y = 480 - this.height;
        this.x = x;
    }
}