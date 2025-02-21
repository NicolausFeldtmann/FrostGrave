class FrontObj extends MoObject {

    width = 800;
    height = 300;
    constructor(imagePath, y, x) {
        super().loadImg(imagePath);
        this.y = y;
        this.x = x;
    }
}