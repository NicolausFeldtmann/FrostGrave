class KeyStone extends MoObject {

    offset = {
        top: 15,
        left: 22,
        right: 20,
        bottom: 15, 
    };

    speddy = 30;
    width = 120;
    height = 120;
    y = 320;

    constructor(x, y) {
        super().loadImg('img/objects/shiny/13.png');
        this.y = 320;
        this.x = x;
        this.starFly();
        console.log('real keystone pos',this.x, this.y);
    }

    starFly() {
        this.flyInterval = setInterval(() => {
            this.speedY = 25;
            this.alppyGravity();
        }, 25);
        if (this.y <= 320) {
            clearInterval(this.flyInterval);
        }
    }
}