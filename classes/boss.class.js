class Boss extends MoObject {

    world;
    height = 500;
    width = 400;
    y = 35;
    energy = 1000;
    speed = 4;
    lastHit = 0;
    offset = {
        top: 120,
        left: 105,
        right: 120,
        bottom: 80, 
    };
    hurt = new Audio('audio/bossPain.mp3');
    dying = new Audio('audio/bossDies.mp3');
    bossTheme = new Audio('audio/bossMusic.mp3');
    slash = new Audio ('audio/bossSlash.mp3');
    angry = new Audio ('audio/bossAngry.mp3');

    IMAGES_START_ATTACK = [
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_009.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_010.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_011.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_000.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_000.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_000.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_000.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_000.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_000.png',
        
    ];

    IMAGES_THROW = [
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Throwing/0_Zombie_Villager_Throwing_000.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Throwing/0_Zombie_Villager_Throwing_001.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Throwing/0_Zombie_Villager_Throwing_002.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Throwing/0_Zombie_Villager_Throwing_003.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Throwing/0_Zombie_Villager_Throwing_004.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Throwing/0_Zombie_Villager_Throwing_005.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Throwing/0_Zombie_Villager_Throwing_006.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Throwing/0_Zombie_Villager_Throwing_007.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Throwing/0_Zombie_Villager_Throwing_008.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Throwing/0_Zombie_Villager_Throwing_009.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Throwing/0_Zombie_Villager_Throwing_010.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Throwing/0_Zombie_Villager_Throwing_011.png',
    ];

    IMAGES_SLAY = [
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_000.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_001.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_002.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_003.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_004.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_005.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_006.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_007.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_008.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_009.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_010.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Slashing/0_Zombie_Villager_Slashing_011.png',
    ];

    IMAGES_IDLE = [
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_000.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_001.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_002.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_003.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_004.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_005.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_006.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_007.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_008.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_009.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_010.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_011.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_012.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_013.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_014.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_015.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_016.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_017.png',
    ];

    IMAGES_HURT = [
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_000.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_001.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_002.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_003.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_004.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_005.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_006.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_007.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_008.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_009.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_010.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Hurt/0_Zombie_Villager_Hurt_011.png',
    ];

    IMAGES_DYING = [
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_000.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_001.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_002.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_003.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_004.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_005.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_006.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_007.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_008.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_009.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_010.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_011.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_012.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_013.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Dying/0_Zombie_Villager_Dying_014.png',
    ];

    IMAGES_WAKLING = [
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_000.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_001.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_002.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_003.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_004.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_005.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_006.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_007.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_008.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_009.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_010.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_011.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_012.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_013.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_014.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_015.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_016.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_017.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_018.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_019.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_020.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_021.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_022.png',
        'img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Walking/0_Zombie_Villager_Walking_023.png',
    ];

    firstEncounter = false;

    constructor(world) {
        super().loadImg('img/enemys/Zombie_Villager_3/PNG/PNG Sequences/Idle Blinking/0_Zombie_Villager_Idle Blinking_000.png');
        this.world = world;
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_THROW);
        this.loadImages(this.IMAGES_DYING);
        this.loadImages(this.IMAGES_WAKLING);
        this.loadImages(this.IMAGES_SLAY);
        this.loadImages(this.IMAGES_START_ATTACK);
        this.animate();
        this.x = 5500;
        this.otherDirection = true;
    }

    animate() {
        let i = 0;
        this.animateInterval = setInterval(() => {
            if (!this.firstEncounter && world.char.x > 4440) {
                this.firstEncounter = true; 
                console.log('Encounter!'); 
                this.playAnimation(this.IMAGES_WAKLING); 
                i = 0; 
            } else if (this.firstEncounter) {
                if (this.x > 5040) {
                    this.playAnimation(this.IMAGES_WAKLING);
                    this.moveIn(); 
                } else {
                    console.log('Boss-Animation läuft'); // Hier loggen 
                    this.bossAnimation();
                }
                i++;
            }
        }, 60);
    }

    bossAnimation() {
        if (this.isDeadAgain()) {
            this.playAnimation(this.IMAGES_DYING);
            this.dying.play();
        } else if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
        } else {
            this.reactInterval();
        }
    }

    reactInterval() {
        setInterval(() => {
            this.checkDistance();
        }, 200);
    }

    checkDistance() {
        if (!this.world || !this.world.char) return; 
        
        let spaceBetween = Math.abs(this.world.char.x - this.x); 
    
        if (spaceBetween < 200) {  
            console.log('Character ist in der Nähe des Bosses. Distanz:', spaceBetween);
            // Hier kannst du weitere Logik hinzufügen, z.B. Spezialaktionen des Bosses 
        } else {
            console.log('Character ist zu weit weg. Distanz:', spaceBetween);
            this.persueChar();
        }
    }

    persueChar() {
        if (!this.world || !this.world.char) return; 
        
        let charPos = this.world.char.x;
        let spaceBetween = Math.abs(charPos - this.x);
        
        console.log(`Vor der Verfolgung: Boss-Position: ${this.x}, Charakter-Position: ${charPos}, Distanz: ${spaceBetween}`);
    
        if (spaceBetween > 200) {
            this.x += charPos < this.x ? -this.speed : this.speed;
            this.otherDirection = charPos > this.x;
    
            console.log(`Nach der Verfolgung: Neue Boss-Position: ${this.x}`); // Hier überprüfen, ob die Position aktualisiert wird
            this.playAnimation(this.IMAGES_WAKLING); // Animation abspielen
        }
    }

    moveIn() {
        // Hier kann die Animation entsprechend dem Bewegungszustand angepasst werden
        this.playAnimation(this.IMAGES_WAKLING);
        if (this.x > 5040) {
            this.x -= this.speed; // Dies ist die Logik für das Bewegen des Bosses
            console.log(`Boss bewegt sich näher: ${this.x}`);
        }
    }
}