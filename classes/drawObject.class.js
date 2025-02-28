class DrawObjects {
    img;
    imgCache = {};
    currentImage = 0;
    x = 100;
    y = 320;
    height = 150;
    width = 100;
    otherDirection = false;
    

    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        if (this.img) {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } else {
            console.warn('Bild ist nicht geladen:', this.img);
        }
    }

    drawFrame(ctx) {
        if (this instanceof Char || this instanceof Walker || this instanceof Boss) {
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.strokeStyle = 'blue';
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        }
    }   

    /**
     * 
     *  @param {Array} arr - 
     */

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imgCache[path] = img;
        });
    }
    
}
