class OrangeBar extends DrawObjects {

    IMAGES_ORANGE = [
        'img/objects/bars/oragneBar.6.PNG',
        'img/objects/bars/oragneBar.5.PNG',
        'img/objects/bars/oragneBar.4.PNG',
        'img/objects/bars/oragneBar.3.PNG',
        'img/objects/bars/oragneBar.2.PNG',
        'img/objects/bars/oragneBar.1.PNG',
    ];

    percentOrange = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES_ORANGE);
        this.x = 20;
        this.y = 100;
        this.width = 200;
        this.height = 30;
        this.setPerOrange(100);
    }

    setPerOrange(percentOrange) {
        this.percentOrange = percentOrange;
        let path = this.IMAGES_ORANGE[this.resolveImgIdx()];
        this.img = this.imgCache[path];
    }

    resolveImgIdx() {
        if (this.percentOrange == 100) {
            return 5;
        } else if (this.percentOrange > 80) {
            return 4;
        } else if (this.percentOrange > 60) {
            return 3;
        } else if (this.percentOrange > 40) {
            return 2;
        } else if (this.percentOrange > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}