class Jewel extends MoObject {
    
    width = 80;
    height = 80;
    y = 320;
    constructor(imagePath, y) {
        super().loadImg(imagePath);
        this.y = y;
        this.x = 400 + Math.random() * 5040;
    }
}