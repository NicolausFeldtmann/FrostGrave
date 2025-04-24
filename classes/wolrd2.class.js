class World2 {

    isOver = false
    isCool = true;
    isLoaded = false;
    isRunnig = true;
    isMuted = false;
    char = new Char();
    level = level2;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new Status();
    greenBar = new GreenBar();
    orangeBar = new OrangeBar();
    projectile = [];
    keyStone = [];

    intervalIds = [];
    i = 0;

    constructor(canvas, keyboard) {
        this.keyboard = keyboard;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.setWorld();
        this.loadGame();
    }

    loadGame() {
        setTimeout(() => {
            this.draw();
            this.isLoaded = true;
            console.log('ist geladen');
            
        }, 5000);
        this.run();
        this.runSlow();
    }
    /**
     * 
     */
    setWorld() {
        this.char.world = this; 
    }

    run() {
        this.runInterval = this.setEndInterval(() => {
            if (!this.isRunnig) return;
       
        }, 100)
    }

    /**
     * execute check functions every 400ms
     */
    runSlow() {
        this.slowInterval = this.setEndInterval(() => {
            if (!this.isRunnig) return;
            
        }, 500)
    }

    draw() {
        this.drawInterval = this.setEndInterval(() => {
            if (!this.isRunnig) return;
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.translate(this.camera_x, 0);
            this.addObjToMap(this.level.blueSky);
            this.addObjToMap(this.level.backgrounds);
            this.addObjToMap(this.level.clouds);
            this.addObjToMap(this.level.enemies);
            this.addObjToMap(this.level.boss);
            this.addToMap(this.char);
            this.addObjToMap(this.level.mana);
            this.addObjToMap(this.level.jewel);
            this.addObjToMap(this.level.frontObj);
            this.addObjToMap(this.projectile);
            this.addObjToMap(this.keyStone);
            //------Space for fixed objects-----//
            this.ctx.translate(-this.camera_x, 0);
            this.addToMap(this.statusBar);
            this.addToMap(this.greenBar);
            this.addToMap(this.orangeBar);
            this.ctx.translate(this.camera_x, 0);

            this.ctx.translate(-this.camera_x, 0);
        }, 1000 / 30);
    }

    /**
     * add object to canvas
    */
    addObjToMap(objects) {
        objects.forEach(obj => {
            this.addToMap(obj);
        })
    }

    /**
     * add movable object to canvas 
     */
    addToMap(mo) {
        if(mo.otherDirection) {
            this.frontFlip(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        mo.drawHitFrame(this.ctx);
        mo.drawMeleFrame(this.ctx);

        if(mo.otherDirection) {
            this.backFlip(mo);
        }
    }

    /**
     * fliping image depending of declared direktion 
     */
    frontFlip(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    /**
     * fliping image in other direction depending of declared direktion
     */
    backFlip(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    setEndInterval (fn, time) {
        let id = setInterval(fn, time);
        this.intervalIds.push(id);
        console.log(this.intervalIds);
    }
}