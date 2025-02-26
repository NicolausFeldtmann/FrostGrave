class Char extends MoObject{

    y = 80;
    
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

    IMAGES_JUMPING = [
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Jump Start/0_Skeleton_Warrior_Jump Start_000.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Jump Start/0_Skeleton_Warrior_Jump Start_001.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Jump Start/0_Skeleton_Warrior_Jump Start_002.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Jump Start/0_Skeleton_Warrior_Jump Start_003.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Jump Start/0_Skeleton_Warrior_Jump Start_004.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Jump Start/0_Skeleton_Warrior_Jump Start_005.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Falling Down/0_Skeleton_Warrior_Falling Down_000.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Falling Down/0_Skeleton_Warrior_Falling Down_001.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Falling Down/0_Skeleton_Warrior_Falling Down_002.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Falling Down/0_Skeleton_Warrior_Falling Down_003.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Falling Down/0_Skeleton_Warrior_Falling Down_004.png',
        'img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Falling Down/0_Skeleton_Warrior_Falling Down_005.png',
    ];
    currentImage = 0;
    world;
    speed = 8;

    constructor() {
        super().loadImg('img/witheWalker/Skeleton_Warrior_1/PNG/PNG Sequences/Running/0_Skeleton_Warrior_Running_000.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.appyGravity();
        this.animate();
    }

    animate() {
        
        setInterval(() => {
            if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) { // noch mit leve.level_end_x zum laufen bringen.
                this.x += this.speed;
                this.otherDirection = false;
            }
            
            if(this.world.keyboard.LEFT && this.x > 100) {
                this.x -= this.speed;
                this.otherDirection = true;
            }

            if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            this.playAnimation(this.IMAGES_WALKING);
            }

            if(this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
            }
            this.world.camera_x = -this.x + 100;
        },1000 / 40);

        setInterval(() => {
            if(this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else {
                if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }
        }, 1000 / 30)
    }
}