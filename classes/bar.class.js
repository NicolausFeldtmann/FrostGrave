class Bar extends DrawObjects {

    IMAGES_HEALTH = [
        'img/objects/health/health.0.PNG',
        'img/objects/health/health.20.PNG',
        'img/objects/health/health.40.PNG',
        'img/objects/health/health.60.PNG',
        'img/objects/health/health.80.PNG',
        'img/objects/health/health.100.PNG',
    ];

    IMAGES_MANA = [
        'img/objects/bars/greenBar.1.PNG',
        'img/objects/bars/greenBar.2.PNG',
        'img/objects/bars/greenBar.3.PNG',
        'img/objects/bars/greenBar.4.PNG',
        'img/objects/bars/greenBar.5.PNG',
        'img/objects/bars/greenBar.6.PNG',
    ]

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES_HEALTH);
        this.loadImages(this.IMAGES_MANA);
        this.x = 20;
        this.y = 20;
        this.width = 200;
        this.height = 30;
        this.setPercentage(100);
    }

        /**
     * set actual presentage
     */
        setPercentageheHealth(percentage) {
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