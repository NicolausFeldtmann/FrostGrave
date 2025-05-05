class Star extends MoObject{

    width = 80;
    height = 80;
    y = 320;
    offset = {
        top: 15,
        left: 22,
        right: 20,
        bottom: 15, 
    };
    speedy = 25;

    constructor() {
        super().loadImg('img/objects/simple/11.png');
        this.y = 1;
        this.x = 400 + Math.random() * 4400;
        this.fallingStar();
    }

    /**
     * defines how star fall
     */
    fallingStar() {
        setInterval(() => {
            this.y += 2;
        }, 1000 / 30)
    }
}