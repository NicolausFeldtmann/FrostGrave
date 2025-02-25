class World {

    char = new Char();
    enemies = level1.enemies;
    clouds = level1.clouds;
    backgrounds = level1.backgrounds;
    blueSky = level1.blueSky;
    frontObj = level1.frontObj;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
}

    setWorld() {
        this.char.world = this;
    }
    
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjToMap(this.blueSky);
        this.addObjToMap(this.backgrounds);
        this.addToMap(this.char);
        this.addObjToMap(this.clouds);
        this.addObjToMap(this.enemies);
        this.addObjToMap(this.frontObj);
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    addObjToMap(objects) {
        objects.forEach(obj => {
            this.addToMap(obj);
        })
    }

    addToMap(mo) {
        if(mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if(mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }
}