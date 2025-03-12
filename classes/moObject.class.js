class MoObject extends DrawObjects{

    energy = 100;
    mana = 0;
    jewel = 0;
    lasHit = 0;
    speed = 0.15;
    speedY = 0;
    accel = 1.5;
    otherDirection = false;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

    alppyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.accel;
            }
        }, 1000 / 40)
    }

    isAboveGround() {
        if (this instanceof Projectile) { // Projectils shall allway fall
            return true;
        } else {
        return this.y < 320;
       }
    }

    isColliding(mo) {
        return this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top;
    }
    
    isColliding(projectile) {
        return this.x + this.width > projectile.x &&
               this.y + this.height > projectile.y &&
               this.x < projectile.x + projectile.width &&
               this.y < projectile.y + projectile.height;
    }

    gotHurt(){
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;   
        } else {
            this.lasHit = new Date().getTime();
        }
    }

    foeHurt() {
        this.energy -= 50;
        if (this.energy < 0) {
            this.energy = 0;

        } else {
            this.lasHit = new Date().getTime();
        }
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lasHit;
        timePassed = timePassed / 500
        return timePassed < 1;
    }

    gotMana() {
        this.mana += 41; 
        console.log(this.mana);
        if (this.mana > 100) { 
            this.mana = 100; 
        } else {
            this.lastHit = new Date().getTime(); 
        }
    }

    gotJewel() {
        this.jewel += 21;
        if (this.jewel > 100) {
            this.jewel = 100;
        } else {
            this.lasHit = new Date().getTime();
        }
    }

    isDeadAgain() {
        return this.energy == 0;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imgCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
    }

    jump() {
        this.speedY = 25;
    }
}
    