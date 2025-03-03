class Projectile extends MoObject {

    constructor(x, y) {
        super().loadImg('img/effects/Explosion_6/Explosion_1.png');
        this.x = x;
        this.y = y;
        this.width = 250;
        this.height = 180;
        this.throw();

    }
    
    throw () {
    this.speedY = 30;
    this.alppyGravity();
    setInterval (() => {
        this.x += 12;
    }, 25)
    };
}