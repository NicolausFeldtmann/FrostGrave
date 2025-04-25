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

    constructor(x, y) {
        super().loadImg('img/objects/simple/11.png');
        this.y = y;
        this.x = x;
    }
}