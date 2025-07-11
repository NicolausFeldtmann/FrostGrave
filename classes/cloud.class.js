class Clouds extends MoObject {
    y = 50;
    width = 150;
    height = 50;

    constructor() {
        super().loadImg('img/objects/clouds/PNG/Clouds_gray/Shape2/cloud_shape2_1.png');
        this.y = Math.random() * 30;
        this.x = 200 + Math.random() * 5040;
        this.height = 50;
        this.moveCloud();
    }

    /**
     * moves clouds from left to right
     */
    moveCloud() {
        setInterval( () =>{
            this.x -= 0.2;
        }, 1000 / 60);
    }
}