class Jewel extends MoObject {
    
    width = 80;
    height = 80;
    y = 320;
    offset = {
        top: 15,
        left: 22,
        right: 20,
        bottom: 15, 
    };

    constructor(imagePath, y) {
        super().loadImg(imagePath);
        this.y = y;
        this.x = 400 + Math.random() * 4400;
    }
}