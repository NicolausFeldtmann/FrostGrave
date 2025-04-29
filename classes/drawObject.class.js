class DrawObjects {
    
    img;
    imgCache = {};
    currentImage = 0;
    x = 100;
    y = 320;
    height = 150;
    width = 100;

    /**
     * load single Image from path 
     */
    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * draws image on canvas 
     */
    draw(ctx) {
        if (this.img) {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
    }

    /**
     * draws dev tool fram around image 
     */
    drawFrame(ctx) {
        if (this instanceof Char || this instanceof Walker || this instanceof Boss || this instanceof Mana || this instanceof Jewel || this instanceof Projectile || this instanceof Overkill) {
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.strokeStyle = 'blue';
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        }
    }
    

    /**
     * draws dev tool frame aorund declared hitbox
     */
    drawHitFrame(ctx) {
        if (this instanceof Char || this instanceof Walker || this instanceof Boss || this instanceof Mana || this instanceof Jewel || this instanceof Projectile || this instanceof Overkill) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + this.offset.left, this.y + this.offset.top, this.width - this.offset.right -this.offset.left, this.height - this.offset.top - this.offset.bottom);
            ctx.stroke();
            }
    }

    /**
     * draws dev tool fram around declared mele hitbox
     */
    drawMeleFrame(ctx) {
        if (this instanceof Char || this instanceof Boss) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'orange';
            ctx.rect(this.x + this.offset.left, this.y + this.offset.top, this.width - this.offset.right + 35 -this.offset.left, this.height - this.offset.top - this.offset.bottom);
            ctx.stroke();
        }
    }

    /**
     * loads all images from array 
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imgCache[path] = img;
        });
    }

    
}
