class World {

    char = new Char();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new Status();
    greenBar = new GreenBar();
    orangeBar = new OrangeBar();

constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.checkCollisions();
}

    setWorld() {
        this.char.world = this;
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if(this.char.isColliding(enemy)) {
                    this.char.gotHurt();
                    this.statusBar.setPercentage(this.char.energy);
                }
            });
        }, 200)
    }
    
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjToMap(this.level.blueSky);
        this.addObjToMap(this.level.backgrounds);
        this.addToMap(this.char);
        this.addObjToMap(this.level.clouds);
        this.addObjToMap(this.level.enemies);
        this.addObjToMap(this.level.frontObj);
        //------Space for fixed objects-----//
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.greenBar);
        this.addToMap(this.orangeBar);
        this.ctx.translate(this.camera_x, 0);

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
            this.frontFlip(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if(mo.otherDirection) {
            this.backFlip(mo);
        }
    }

    frontFlip(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    backFlip(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}