class MoObject extends DrawObjects{

    world;
    energy = 100;
    mana = 0;
    jewel = 0;
    lasHit = 0;
    speed = 0.15;
    speedY = 0;
    accel = 1.5;
    CoolDown = false;
    otherDirection = false;

    constructor(world) {
        super();
        this.world = world;
    }

    /**
     * sets gravity physics for game
     */
    alppyGravity() {
        this.gravityInterval = setInterval(() => {  

            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.accel;
            }
        }, 1000 / 40)
    }

    /**
     * Let Objet fall when higher on y axis as 320
     */
    isAboveGround() {
        if (this instanceof Projectile) { // Projectils shall allway fall
            return true;
        } else {
        return this.y < 320;
       }
    }

    /**
     * Defines size of Movable Obeject hitbox
     */
    isCollidingMo(mo) {
        return (
            this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
        );
    }

    /**
     * Defines size of Projectile hitbox
     */
    isCollidingPro(projectile) {
        return (
            this.x + this.width - this.offset.right > projectile.x + projectile.offset.left &&
            this.y + this.height - this.offset.bottom > projectile.y + projectile.offset.top &&
            this.x + this.offset.left < projectile.x + projectile.width - projectile.offset.right &&
            this.y + this.offset.top < projectile.y + projectile.height - projectile.offset.bottom
        );
    }

    /**
     * Defines mele hitbox, wile character is executing mele attack
     */
    isCollidingMele(mele) {
        return (
            this.x + this.offset.left < mele.x + mele.width - mele.offset.right &&
            this.x + this.width - this.offset.right > mele.x + mele.offset.left &&
            this.y + this.offset.top < mele.y + mele.height - mele.offset.bottom &&
            this.y + this.height - this.offset.bottom > mele.y + mele.offset.top
        );
    }

    /**
     * handles damage when collision is deteckted
     */
    gotHurt(){
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;   
        } else {
            this.lasHit = new Date().getTime();
        }
    }

    /**
     * handles damage when collision with mele hitbox is deteckted
     */
    gotSlashed() {
        this.energy -= 25;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lasHit = new Date().getTime();
        }
    }

    /**
     * handles demage of enemies
     */
    foeHurt() {
        this.energy -= 50;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lasHit = new Date().getTime();
            this.beCool();
        }
    }

    /**
     * sets cooldown
     */
    beCool() {
        this.CoolDown = true;
        console.log('BE COOL!');
        setTimeout(() => {
            this.CoolDown = false;
        }, 500);
    }

    /**
     * sets hurt datus for 500ms
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lasHit;
        timePassed = timePassed / 500
        return timePassed < 1;
    }

    /**
     * handles recived mana
     */
    gotMana() {
        this.mana += 41; 
        console.log(this.mana);
        if (this.mana > 100) { 
            this.mana = 100; 
        } else {
            this.lastHit = new Date().getTime(); 
        }
    }

    /**
     * handles reived jewlery
     */
    gotJewel() {
        this.jewel += 21;
        if (this.jewel > 100) {
            this.jewel = 100;
        } else {
            this.lasHit = new Date().getTime();
        }
    }

    /**
     * detecs if character or enemy is out of energy
     */
    isDeadAgain() {
        return this.energy == 0;
    }

    /**
     * player for invoked animation 
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imgCache[path];
        this.currentImage++;
    }

    /**
     * moves character from left to right
     */
    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }
/**
 * moves character from right to left
 */
    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
    }

    /**
     * let char jump, under physic conditions
     */
    jump() {
        this.speedY = 25;
    }

    /**
     * execute mele attack
     */
    slash() {
        this.world.checkMele();
    }

    /**
     * throw enemy back, after mele collision
     */
    bounceBack() {
        this.x += 75;
    }

    /**
     * quit game in shows "Game Over" screen
     */
    gameOver() {
        if (!this.world.isRunnig) return;
            this.world.endGame();
            showGameOver();
            clearInterval(this.world.musicInterval);
    }

    /**
     * auit game and shows "Winnig" screen
     */
    beatGame() {
        if (!this.world.isRunnig) return
            this.world.endGame();
            showWinScreen();
    } 
}
