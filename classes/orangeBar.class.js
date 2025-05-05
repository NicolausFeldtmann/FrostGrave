class OrangeBar extends DrawObjects {

    IMAGES_ORANGE = [
        'img/objects/bars/greenBar.6.PNG',
        'img/objects/bars/oragneBar.5.PNG',
        'img/objects/bars/oragneBar.4.PNG',
        'img/objects/bars/oragneBar.3.PNG',
        'img/objects/bars/oragneBar.2.PNG',
        'img/objects/bars/oragneBar.1.PNG',
    ];

    percentOrange = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES_ORANGE);
        this.x = 20;
        this.y = 100;
        this.width = 200;
        this.height = 30;
        this.setPercentage();
    }

    /**
     * set actual presentage
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_ORANGE[this.resolveImagesIdx()];
        this.img = this.imgCache[path];
    }

    /**
     *  retruns bar image concerning actual presentag
     */
    resolveImagesIdx() {
        if(this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if(this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}