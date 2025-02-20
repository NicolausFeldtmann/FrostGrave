class SkyBox extends MoObject {

    width = 720;
    height = 400;

    constructor(imagePath, x, y) {
        super().loadImg(imagePath);
        this.y = 400 - this.height;
        this.x = x;
    }
}