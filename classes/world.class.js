class World extends Extensions{

constructor(canvas, keyboard) {
    super();
    this.keyboard = keyboard;
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.isMutes = muteStatus;
    this.setWorld();
    this.loadGame();
    this.starFall();
}

    /**
     * load game and start game
     */
    loadGame() {
        setTimeout(() => {
            this.draw();
            this.isLoaded = true;  
        }, 5000);
        this.run();
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
                this.checkCollStar();
                this.checkCollKeystone();
                this.checkGotHit();
                this.checkImpact();
                this.checkImpactOverkill();
                this.checkThorw();
                this.checkOverkill();
                this.checkCollBoss();
                this.checkCollEnemys();
        });
    }

    /**
     * check if prejecktile is thrown by Character and define start position of animation
     */
    checkThorw() {
        if (this.isCool) {
            if (this.canThrow()) { 
                let projectile = new Projectile(this.char.x - 55, this.char.y);
                this.projectile.push(projectile);
                this.projectileFired();
            } else if (this.canThrowOtherDirection()) {
                let projectile = new Projectile(this.char.x -110, this.char.y);
                this.projectile.push(projectile);
                this.projectileFired();
            }
        }
    }

    /**
     * fires projectile and removes char mana
     */
    projectileFired() {
        this.char.mana -= 11; 
        this.spell.play();
        this.statusBar.setPercentageMana(this.char.mana);
        this.isCool = false;
        setTimeout(() => {
            this.isCool = true;
        }, 1000);
    }

    /**
     * let sarts fall to ground
     */
    starFall() {
        if (!this.isRunnig) return
        this.fallIntervall = setInterval(() => {
            let star = new Star();
            this.star.push(star);
        }, 2000);
    }

    /**
     * fires overkill ray
     */
    checkOverkill() {
        if (this.isCool) {
            if (this.canOverkill()) {
                let overkill = new Overkill(this.char.x - 55, this.char.y);
                this.overkill.push(overkill);
                this.char.jewel = 0;
                this.statusBar.setPercentageOrange(this.char.jewel);
                setTimeout(() => {
                    this.isCool = false;
                }, 1000); 
            }
        }
    }

    /**
     * check if Character is colliding with alive enemy
     */
    checkCollEnemys() {
        this.level.enemies.forEach((enemy) => {
            if (this.char.isCollidingMo(enemy) && !enemy.isDeadAgain()) {
                this.char.gotHurt();
                this.statusBar.setPercentage(this.char.energy);
            }
        });
    }

    /**
     * check if Character is colliding with alive boss
     */
    checkCollBoss() {
        this.level.boss.forEach((boss) => {
            if (this.char.isCollidingMo(boss) && !boss.isDeadAgain()) {
                this.char.gotHurt();
                this.bar.setPercentage(this.char.energy);
            }
        });
    }

    /**
     * check if enemy is colliding with projectile
     */
    checkImpact() {
        this.projectile.forEach((projectile) => {
            this.level.enemies.forEach((enemy) => {
                if (enemy.isCollidingPro(projectile) && !enemy.isDeadAgain()) {
                    projectile.impact();
                    this.removeProjectile(); 
                };
            });

            this.level.boss.forEach((boss) => {
                if (boss.isCollidingPro(projectile)) {
                    projectile.impact();
                    this.removeProjectile();
                };
            })
        });
    }

    /**
     * Chek collision between Boss and overkill ray
     */
    checkImpactOverkill() {
        this.overkill.forEach((overkill) => {
            this.level.boss.forEach((boss) => {
                if (boss.isCollidingOver(overkill)) {
                    overkill.impact();
                    boss.instaKill();
                    this.removeOverkill();
                }
            })
        })
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

    /**
     * check if char is hit by Boss
     */
    checkHardHit() {
        this.level.boss.forEach((boss, idx) => {
            if (this.isCool) {
                if (this.char.isCollidingMele(boss)) {
                    this.char.gotHitHard();
                    this.statusBar.setPercentage(this.char.energy);  
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
                this.statusBar.setPercentageMana(this.char.mana);
                this.level.mana.splice(idx, 1);
            }
        });
    };

    /**
     * check if char is colliding with star
     */
    checkCollStar() {
        this.star.forEach((star, idx) => {
            if (this.char.isCollidingMo(star)) {
                this.crystal.play();
                this.char.gotJewel();
                this.statusBar.setPercentageOrange(this.char.jewel);
                this.star.splice(idx, 1);
            }
        })
    }

    /**
     * check if char is colliding with keySone 
     */
    checkCollKeystone() {
        this.keyStone.forEach((keyStone, idx) => {
            if (this.char.isCollidingMo(keyStone)) {
                this.tadda.play();
                setTimeout(() => {
                    this.winGame();
                    this.keyStone.splice(idx, 1);
                },3000);
            }
        })
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
        //mo.drawFrame(this.ctx);
        //mo.drawHitFrame(this.ctx);
        //mo.drawMeleFrame(this.ctx);
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
        }, 1000);
    }

    /**
     * remove overkill ray 
     */
    removeOverkill(overIdx) {
        setTimeout(() => {
            this.overkill.splice(overIdx, 1);
        }, 2000);
    }

    /**
     * frezzes the game
     */
    endGame() {
        this.isRunnig = !this.isRunnig;
        if (!this.isRunnig) {
            this.stop();
            this.snow1.muted = true;
            this.snow2.muted = true;
            this.stomp.muted = true;
            this.slash.muted = true;
            this.backGrndMusic.muted = true;
            this.backGrndMusic.currentTime = 0;
        };
    }

    /**
     * end game as "Gamoe Over"
     */
    lostGame() {
        if (!this.isOver) {
            this.isOver = true;
            this.endGame();
            gameOver();
        }
    }

    /**
     * end game succeesfull
     */
    winGame() {
        if (!this.isOver) {
            this.isOver = true;
            this.endGame();
            win();
        }
    }

    /**
     * initialize Boss hit char
     */
    hitHard() {
        this.checkHardHit();
        this.char.charBounce();
    }

    /**
     * set endable Intervals
     */
    setEndInterval (fn, time) {
        let id = setInterval(fn, time);
        this.intervalIds.push(id);
    }

    /**
     * end specific game Intervals
     */
    stop() {
        this.intervalIds.forEach(clearInterval);
    }

    /**
     * detects throw command
     */
    canThrow() {
        return this.keyboard.THROW && this.char.mana > 0 && !this.char.otherDirection;
    }

    /**
     * detects throw command while looking other direction
     */
    canThrowOtherDirection() {
        return this.keyboard.THROW && this.char.mana > 0 && this.char.otherDirection;
    }

    /**
     * detects overkill command
     */
    canOverkill() {
        return this.keyboard.OVERKILL && this.char.jewel > 99;
    }
}