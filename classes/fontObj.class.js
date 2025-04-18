class FrontObj extends MoObject {

    width = 800;
    height = 300;
    y = 170;
    constructor(imagePath,x, y) {
        super().loadImg(imagePath);
        this.y = y;
        this.x = x;
    }
}