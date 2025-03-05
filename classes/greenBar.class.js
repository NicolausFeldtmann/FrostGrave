class GreenBar extends DrawObjects {

    IMAGES_GREEN = [
        'img/objects/bars/greenBar.6.PNG',
        'img/objects/bars/greenBar.5.PNG',
        'img/objects/bars/greenBar.4.PNG',
        'img/objects/bars/greenBar.3.PNG',
        'img/objects/bars/greenBar.2.PNG',
        'img/objects/bars/greenBar.1.PNG',
    ];

    percentage = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES_GREEN);
        this.x = 20;
        this.y = 60;
        this.width = 200;
        this.height = 30;
        this.setPercentage(20);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_GREEN[this.resolveImagesIdx()];
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
        } else if(this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}