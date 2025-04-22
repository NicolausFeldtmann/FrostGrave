class World {

    isOver = false
    isCool = true;
    isLoaded = false;
    isRunnig = true;
    isMuted = false;
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
    winMusic = new Audio('audio/winMusic.mp3');
    snow1 = new Audio('audio/snow1.mp3');
    snow2 = new Audio('audio/snow2.mp3');
    slashSound = new Audio('audio/slash.mp3');
    ouch = new Audio('audio/wilhelm.mp3');
    hurt = new Audio('audio/bossPain.mp3');
    dying = new Audio('audio/bossDies.mp3');
    bossTheme = new Audio('audio/bossTheme.mp3');
    slash = new Audio('audio/bossSlash.mp3');
    stomp = new Audio('audio/stomp.mp3'); 
    walkerHurt = new Audio('audio/gotHrut.mp3');
    walkerDying = new Audio('audio/walkerPain.mp3');

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
        this.backGrndMusic.play();
    }

    /**
     * execute check functions every 100ms
     */
    run() {
        this.runInterval = this.setEndInterval(() => {
            if (!this.isRunnig) return;
            this.checkCollMana();
            this.checkCollJewel();
            this.checkGotHit();
            this.checkImpact();
            this.checkThorw();
            this.checkCollBoss();
        }, 100)
    }

    /**
     * execute check functions every 400ms
     */
    runSlow() {
        this.slowInterval = this.setEndInterval(() => {
            if (!this.isRunnig) return;
                this.checkCollEnemys();
        }, 600)
    }

    /**
     * check if prejecktile is thrown by Character and define start position of animation
     */
    checkThorw() {
        if (this.isCool) {
            if (this.keyboard.THROW && this.char.mana > 0) { 
                let projectile = new Projectile(this.char.x - 55, this.char.y);
                this.projectile.push(projectile);
                this.char.mana -= 11; 
                this.spell.play();
                this.greenBar.setPercentage(this.char.mana);
                this.isCool = false;
                setTimeout(() => {
                    this.isCool = true;
                }, 1000);
            }
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
                    this.char.charBounceLittel();
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
                }, 400)
            } else if (this.char.isCollidingMo(boss)) {
                this.char.gotHurt();
                this.statusBar.setPercentage(this.char.energy);
            }
        });
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
                enemy.gotSlashed(); 
                enemy.bounceBack();
            }
        });
    }

    checkHardHit() {
        this.level.boss.forEach((boss, idx) => {
            if (this.isCool) {
                if (boss.isDeadAgain()) {
                    console.log('NOOOOOO!');
                } else if (this.char.isCollidingMele(boss)) {
                    this.char.gotHitHard();
                    this.statusBar.setPercentage(this.char.energy);
                    console.log('PAAM!');  
                }
                this.isCool = false;
                setTimeout(() => {
                    this.isCool = true;
                }, 500);
            }
        })
    }

    /**
     * check if character is picking um mana crystall
     */
    checkCollMana() {
        this.level.mana.forEach((mana , idx) => {
            if(this.char.isCollidingMo(mana)) {
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
                    enemy.foeHurt();
                }
        });
            
            this.level.boss.forEach((boss) => {
                if (boss.isCollidingPro(projectile)) {
                    boss.foeHurt();
                }
            });
        });
    }
    
    /**
     * draws movable and static objects on canvas
    */
    draw() {
        this.drawInterval = this.setEndInterval(() => {
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

    /**
     * removes hiting projectile from game 
     */
    removeProjectile(proIdx) {
        setTimeout(() => {
            this.projectile.splice(proIdx, 1);
        }, 500);
    }

    /**
     * frezzes the game
     */
    endGame() {
        this.isRunnig = !this.isRunnig;
        if (!this.isRunnig) {
            this.stop();
            this.stomp.muted = true;
            this.slash.muted = true;
            this.backGrndMusic.muted = true;
            this.backGrndMusic.currentTime = 0;
        };
    }

    lostGame() {
        if (!this.isOver) {
            this.isOver = true;
            this.endGame();
            gameOver();
        }
    }

    winGame() {
        if (!this.isOver) {
            this.isOver = true;
            this.endGame();
            win();
        }
    }

    hitHard() {
        this.checkHardHit();
        this.char.charBounce();
    }

    setEndInterval (fn, time) {
        let id = setInterval(fn, time);
        this.intervalIds.push(id);
        console.log(this.intervalIds);
    }

    stop() {
        this.intervalIds.forEach(clearInterval);
    }
}