class DrawObjects {
    
    img;
    imgCache = {};
    currentImage = 0;
    x = 100;
    y = 320;
    height = 150;
    width = 100;

    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        if (this.img) {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
    }

    drawFrame(ctx) {
        if (this instanceof Char || this instanceof Walker || this instanceof Boss || this instanceof Mana || this instanceof Jewel || this instanceof Projectile) {
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.strokeStyle = 'blue';
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        }
    }
    
    drawHitFrame(ctx) {
        if (this instanceof Char || this instanceof Walker || this instanceof Boss || this instanceof Mana || this instanceof Jewel || this instanceof Projectile) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + this.offset.left, this.y + this.offset.top, this.width - this.offset.right -this.offset.left, this.height - this.offset.top - this.offset.bottom);
            ctx.stroke();
            }
    }

    drawMeleFrame(ctx) {
        if (this instanceof Char) {
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'orange';
            ctx.rect(this.x + this.offset.right, this.y + this.offset.top, this.width - this.offset.right, this.height - this.offset.top - this.offset.bottom);
            ctx.stroke();
        }
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imgCache[path] = img;
        });
    }
    
}
