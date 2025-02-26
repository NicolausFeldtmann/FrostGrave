class Char extends MoObject{

    
    IMAGES_WALKING = [
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Running/0_Skeleton_Warrior_Running_000.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Running/0_Skeleton_Warrior_Running_001.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Running/0_Skeleton_Warrior_Running_002.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Running/0_Skeleton_Warrior_Running_003.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Running/0_Skeleton_Warrior_Running_004.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Running/0_Skeleton_Warrior_Running_005.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Running/0_Skeleton_Warrior_Running_006.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Running/0_Skeleton_Warrior_Running_007.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Running/0_Skeleton_Warrior_Running_008.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Running/0_Skeleton_Warrior_Running_009.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Running/0_Skeleton_Warrior_Running_010.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Running/0_Skeleton_Warrior_Running_011.png',
    ];
    currentImage = 0;
    world;
    speed = 8;

    constructor() {
        super().loadImg('img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Running/0_Skeleton_Warrior_Running_000.png');
        this.loadImages(this.IMAGES_WALKING);
        
        this.animate();
    }

    animate() {
        
        setInterval(() => {
            if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) { // noch mit leve.level_end_x zum laufen bringen.
                this.x += this.speed;
                this.otherDirection = false;
            }
        }, 30)

        setInterval(() => {
            if(this.world.keyboard.LEFT && this.x > 100) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x + 100;
        }, 30)

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            this.playAnimation(this.IMAGES_WALKING);
            }
        }, 40);
    }

    moveRight() {
        setInterval(() => {
            this.x += 0.6;
        }, 1000 / 60);
    }

    jump() {}
}