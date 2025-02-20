class Clouds extends MoObject {
    y = 50;
    width = 150;
    height = 50;

    constructor() {
        super().loadImg('img/objects/clouds/PNG/Clouds_gray/Shape2/cloud_shape2_1.png');
        this.x = 0 + Math.random() * 500;
    }
}
