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
    backGrndMusic = new Audio('audio/backgroundMusic.mp3');
    gameOverSound = new Audio('audio/backgroundAudio.mp3');

constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
    this.runSlow();
    this.playMusic();
}

    /**
     * 
     */
    setWorld() {
        this.char.world = this;
    }

    /**
     * execute check functions every 100ms
     */
    run() {
        this.runInterval = setInterval(() => {
            if (!this.isRunnig) return;
            this.checkCollMana();
            this.checkCollJewel();
            this.checkGotHit();
            this.checkImpact();
            this.checkThorw();
        }, 100)
    }

    /**
     * execute check functions every 400ms
     */
    runSlow() {
        this.slowInterval = setInterval(() => {
            if (!this.isRunnig) return;
            this.checkCollEnemys();
            this.checkCollBoss();
        }, 400)
    }

    /**
     * play Background Music
     */
    playMusic() {
        this.backGrndMusic.play();
    }


    /**
     * check if prejecktile is thrown by Character and define start position of animation
     */
    checkThorw() {
        if (this.keyboard.THROW && this.char.mana > 0) { 
            let projectile = new Projectile(this.char.x - 55, this.char.y);
            this.projectile.push(projectile);
            this.char.mana -= 11; 
            this.spell.play();
            this.greenBar.setPercentage(this.char.mana); 
        }
    }

    /**
     * check if enemy is dead and removes it.
     * check if Character is colliding with alive enemy
     */
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

    /**
     * check if boss is dead and removes it.
     * check if Character is colliding with alive boss
     */
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

    /**
     * check if enemy or boss are colliding with projectile
     */
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

    /**
     * check if enemy or boss are colliding with mele hitbox
     */
    checkMele() {
        this.level.enemies.forEach((enemy) => {
            if (this.char.isCollidingMele(enemy)) {
                console.log('MELEE HIT!');
                enemy.gotSlashed();
                enemy.bounceBack(); 
            }
        });
    }

    /**
     * check if character is picking um mana crystall
     */
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

    /**
     * check if character is picking up jewlery
     */
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

    /**
     * check if enemy or boss are colliding with projectile
     */
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
    
    /**
     * draws movable and static objects on canvas
    */
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

    /**
     * removes hiting projectile from game 
     */
    removeProjectile(proIdx) {
        setTimeout(() => {
            this.projectile.splice(proIdx, 1);
        }, 500);
    }

    /**
     * pauses the game
     */
    stopGame() {
        this.isRunnig = !this.isRunnig;
        if (this.isRunnig) {
            this.run();
            this.draw();
            console.log('WEITER!');
        } else {
            clearInterval(this.runInterval);
            clearInterval(this.slowInterval);
            console.log('PAUSE!');
        }
    }

    /**
     * frezzes the game
     */
    endGame() {
        this.isRunnig = !this.isRunnig;
        clearInterval(this.runInterval);
        clearInterval(this.slowInterval);
        this.backGrndMusic.pause();
        this.backGrndMusic.currentTime = 0;
        this.gameOverSound.play();
    }
}