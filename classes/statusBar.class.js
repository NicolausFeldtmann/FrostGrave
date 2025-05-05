class Status extends DrawObjects {

    IMAGES_HEALTH = [
        'img/objects/health/health.0.PNG',
        'img/objects/health/health.20.PNG',
        'img/objects/health/health.40.PNG',
        'img/objects/health/health.60.PNG',
        'img/objects/health/health.80.PNG',
        'img/objects/health/health.100.PNG',
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES_HEALTH);
        this.x = 20;
        this.y = 20;
        this.width = 200;
        this.height = 30;
        this.setPercentage(100);
    }

    /**
     * set actual presentage
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_HEALTH[this.resolveImagesIdx()];
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