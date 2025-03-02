class Projectile extends  DrawObjects {

    constructor() {
        super().loadImg('img/effects/Explosion_6/Explosion_1.png');
        this.x = 100;
        this.y = 100;
        this.throw(100, 150);

    }
    
    throw (x, y) {
    this.x = x;
    this.y = y;
    this.speedY = 30;
    this.alppyGravity();
    };
}