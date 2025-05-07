class Status extends DrawObjects {

    IMAGES_HEALTH = [
        'img/objects/health/health.0.PNG',
        'img/objects/health/health.20.PNG',
        'img/objects/health/health.40.PNG',
        'img/objects/health/health.60.PNG',
        'img/objects/health/health.80.PNG',
        'img/objects/health/health.100.PNG',
    ];

    IMAGES_ORANGE = [
        'img/objects/bars/oBar.6.PNG',
        'img/objects/bars/oBar.5.PNG',
        'img/objects/bars/oBar.4.PNG',
        'img/objects/bars/oBar.3.PNG',
        'img/objects/bars/oBar.2.PNG',
        'img/objects/bars/oBar.1.PNG',
    ];

    IMAGES_MANA = [
        'img/objects/bars/greenBar.6.PNG',
        'img/objects/bars/greenBar.5.PNG',
        'img/objects/bars/greenBar.4.PNG',
        'img/objects/bars/greenBar.3.PNG',
        'img/objects/bars/greenBar.2.PNG',
        'img/objects/bars/greenBar.1.PNG',
    ]

    percentage = 100;
    percentOrange = 0;
    percentMana = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES_HEALTH);
        this.loadImages(this.IMAGES_ORANGE);
        this.loadImages(this.IMAGES_MANA);

        this.healthX = 20;
        this.healthY = 20;
        this.healthWidth = 200;
        this.healthHeight = 30;

        this.orangeX = 20;
        this.orangeY = 100;
        this.orangeWidth = 200;
        this.orangeHeight = 30;

        this.manaX = 20;
        this.manaY = 60;
        this.manaWidth = 200;
        this.manaHeight = 30;

        this.setPercentage(100);
        this.setPercentageOrange(0);
        this.setPercentageMana(0);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_HEALTH[this.resolveImagesIdx(this.percentage)];
        this.healthImg = this.imgCache[path];
    }

    setPercentageOrange(presentag) {
        this.presentag = presentag;
        let path = this.IMAGES_ORANGE[this.resolveImagesIdx(this.presentag)];
        this.orangeImg = this.imgCache[path];
    }

    setPercentageMana(presentag) {
        this.presentag = presentag;
        let path = this.IMAGES_MANA[this.resolveImagesIdx(this.presentag)];
        this.manaImg = this.imgCache[path];
    }

    resolveImagesIdx(value) {
        if(value == 100) {
            return 5;
        } else if (value > 80) {
            return 4;
        } else if (value > 60) {
            return 3;
        } else if (value > 40) {
            return 2;
        } else if(value > 20) {
            return 1;
        } else {
            return 0;
        }
    }

    draw(ctx) {
        ctx.drawImage(this.healthImg, this.healthX, this.healthY, this.healthWidth, this.healthHeight);
        ctx.drawImage(this.orangeImg, this.orangeX, this.orangeY, this.orangeWidth, this.orangeHeight);
        ctx.drawImage(this.manaImg, this.manaX, this.manaY, this.manaWidth, this.manaHeight);
    }
}