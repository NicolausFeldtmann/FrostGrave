class World {

    char = new Char();
    enemies = [
        new Walker('img/enemys/Zombie_Villager_1/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_000.png'),
        new Walker('img/enemys/Zombie_Villager_1/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_000.png'),
        new Walker('img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_000.png'),
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
        new FrontObj('img/backgrounds/3/9.png',170, 120),
        new FrontObj('img/backgrounds/3/9.png',170, 250),
        new FrontObj('img/backgrounds/3/9.png',170, 2950),
        new FrontObj('img/backgrounds/3/9.png',170, 600),
        new FrontObj('img/backgrounds/3/9.png',170, 700),
    ];
    canvas;
    ctx;
    keyboard;

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