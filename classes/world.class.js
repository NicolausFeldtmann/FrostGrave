class World {

    isRunnig = true;
    char = new Char();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new Status();
    greenBar = new GreenBar();
    orangeBar = new OrangeBar();
    projectile = [];
    lastMeleTime = 0; 
    meleeCooldown = 500;
    spell = new Audio('audio/spell.mp3');
    crystal = new Audio('audio/crystal.mp3');

constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
    this.runSlow();
}

    setWorld() {
        this.char.world = this;
    }

    run() {
        this.runInterval = setInterval(() => {
            this.checkCollMana();
            this.checkCollJewel();
            this.checkGotHit();
            this.checkImpact();
            this.checkThorw();
        }, 100)
    }

    runSlow() {
        this.slowInterval = setInterval(() => {
            this.checkCollEnemys();
            this.checkCollBoss();
        }, 400)
    }

    checkThorw() {
        if (this.keyboard.THROW && this.char.mana > 0) { 
            let projectile = new Projectile(this.char.x - 55, this.char.y);
            this.projectile.push(projectile);
            this.char.mana -= 11; 
            console.log('HADOUKEN!');
            this.spell.play();
            this.greenBar.setPercentage(this.char.mana); 
        }
    }

    checkCollEnemys() {
        this.level.enemies.forEach((enemy, index) => {
            if (enemy.isDeadAgain()) {
                setTimeout(() => {
                    this.level.enemies.splice(index, 1);
                }, 400)
            } else if (this.char.isCollidingMo(enemy)) {
                this.char.gotHurt();
                this.statusBar.setPercentage(this.char.energy);
            }
        });
    }

    checkCollBoss() {
        this.level.boss.forEach((boss, index) => {
            if (boss.isDeadAgain()) {
                setTimeout(() => {
                    this.level.boss.splice(index, 1);
                }, 800)
            } else if (this.char.isCollidingMo(boss)) {
                this.char.gotHurt();
                this.statusBar.setPercentage(this.char.energy);
            }
        })
    }

    checkImpact() {
        this.projectile.forEach((projectile) => {
            this.level.enemies.forEach((enemy) => {
                if (enemy.isCollidingPro(projectile)) {
                    projectile.impact();
                    this.removeProjectile(); 
                }
            });
    
            this.level.boss.forEach((boss) => {
                if (boss.isCollidingPro(projectile)) {
                    projectile.impact();
                    this.removeProjectile();
                }
            });
        });
    }

    checkMele() {
        this.level.enemies.forEach((enemy) => {
            if (this.char.isCollidingMele(enemy)) {
                console.log('MELEE HIT!');
                enemy.gotSlashed();
                enemy.bounceBack(); 
            }
        });
    }

    checkCollMana() {
        this.level.mana.forEach((mana , idx) => {
            if(this.char.isCollidingMo(mana)) {
                console.log('MANA!');
                this.crystal.play();
                this.char.gotMana();
                this.greenBar.setPercentage(this.char.mana);
                this.level.mana.splice(idx, 1);
            }
        });
    };

    checkCollJewel() {
        this.level.jewel.forEach((jewel, idx) => {
            if (this.char.isCollidingMo(jewel)) {
                console.log('JEWEWL!');
                this.crystal.play();
                this.char.gotJewel();
                this.orangeBar.setPercentage(this.char.jewel);
                this.level.jewel.splice(idx, 1);
            }
        });
    }

    checkGotHit() {
        this.projectile.forEach((projectile) => {
            this.level.enemies.forEach((enemy) => {
                if (enemy.isCollidingPro(projectile)) {
                    console.log('HIT!');
                    enemy.foeHurt();
                }
        });
            
            this.level.boss.forEach((boss) => {
                if (boss.isCollidingPro(projectile)) {
                    console.log('HIT BOSS');
                    boss.foeHurt();
                }
            });
        });
    }
    
    draw() {
        if (!this.isRunnig) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjToMap(this.level.blueSky);
        this.addObjToMap(this.level.backgrounds);
        this.addToMap(this.char);
        this.addObjToMap(this.level.clouds);
        this.addObjToMap(this.level.enemies);
        this.addObjToMap(this.level.boss);
        this.addObjToMap(this.level.mana);
        this.addObjToMap(this.level.jewel);
        this.addObjToMap(this.level.frontObj);
        this.addObjToMap(this.projectile);
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
        mo.drawHitFrame(this.ctx);
        mo.drawMeleFrame(this.ctx);

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

    removeProjectile(proIdx) {
        setTimeout(() => {
            this.projectile.splice(proIdx, 1);
        }, 500);
    }

    stopGame() {
        if (this.isRunnig) {
            this.isRunnig = false;
            clearInterval(this.runInterval);
            clearInterval(this.slowInterval);
            console.log('PAUSE!');
        } else {
            this.isRunnig = true;
            this.run();
            this.draw();
            console.log('WEITER!');
            
        }
    }
}