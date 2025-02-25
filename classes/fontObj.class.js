class FrontObj extends MoObject {

    width = 800;
    height = 300;
    y = 170;
    constructor(imagePath, y) {
        super().loadImg(imagePath);
        this.y = y;
        this.x = 200 + Math.random() * 5040;
    }
}