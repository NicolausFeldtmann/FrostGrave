class Mana extends MoObject {

    offset = {
        top: 15,
        left: 22,
        right: 20,
        bottom: 15, 
    };

    width = 80;
    height = 80;
    y = 320;
    constructor(imagePath, x, y) {
        super().loadImg(imagePath);
        this.y = y;
        this.x = x;
    }
}