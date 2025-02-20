class World {

    char = new Char();
    enemies = [
        new Walker(),
        new Walker(),
        new Walker(),
    ];
    clouds = [
        new Clouds(),
        new Clouds(),
        new Clouds(),
    ];
    backgrounds = [
        new Background('img/backgrounds/1/2.png', 0),
        new Background('img/backgrounds/2/2.png', 0),
    ];
    blueSky = [
        new SkyBox('img/objects/sky/2.png', 0),
    ];
    forntObj = [
        new FrontObj('img/backgrounds/3/9.png'),
    ];
    canvas;
    ctx;

constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.draw();
}
    
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.addObjToMap(this.blueSky);
        this.addObjToMap(this.backgrounds);
        this.addToMap(this.char);
        this.addObjToMap(this.clouds);
        this.addObjToMap(this.enemies);
        this.addObjToMap(this.forntObj);

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
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}