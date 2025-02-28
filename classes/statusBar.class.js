class Status extends DrawObjects {

    IMAGES_HEALTH = [
        'img/objects/health/health.0.PNG',
        'img/objects/health/health.1.PNG',
        'img/objects/health/health.2.PNG',
        'img/objects/health/health.3.PNG',
        'img/objects/health/health.4.PNG',
    ];

    percentage = 100;

    constructor() {
        super().loadImg('img/objects/health/health.0.PNG');
        this.loadImages(this.IMAGES_HEALTH);
        this.x = 100;
        this.y= 100;
        this,this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_HEALTH[this.resolveImagesIdx()];
        this.img = this.imgCache[path];
    }

    resolveImagesIdx() {
        if(this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 2;
        } else if (this.percentage > 10) {
            return 1;
        } else {
            return 0;
        }
    }
}