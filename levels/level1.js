let level1 

function initLevel(){
    level1 = new Level(
    [
        new Walker('img/enemys/Zombie_Villager_1/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_000.png'),
        new Walker('img/enemys/Zombie_Villager_1/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_000.png'),
        new Walker2('img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_000.png'),
        new Walker('img/enemys/Zombie_Villager_1/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_000.png'),
        new Walker('img/enemys/Zombie_Villager_1/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_000.png'),
        new Walker2('img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_000.png'),
        new Walker('img/enemys/Zombie_Villager_1/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_000.png'),
        new Walker('img/enemys/Zombie_Villager_1/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_000.png'),
        new Walker('img/enemys/Zombie_Villager_1/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_000.png'),
        new Walker2('img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_000.png'),
        new Walker2('img/enemys/Zombie_Villager_2/PNG/PNG Sequences/Running/0_Zombie_Villager_Running_000.png'),
    ],
    [
        new Boss(),
    ],
    [
        new Clouds(),
        new Clouds(),
        new Clouds(),
        new Clouds(),
        new Clouds(),
        new Clouds(),
        new Clouds(),
        new Clouds(),
        new Clouds(),
        new Clouds(),
        new Clouds(),
        new Clouds(),
    ],
    [
        new Background('img/backgrounds/1/2.png', 0),
        new Background('img/backgrounds/2/2.png', 0),
        new Background('img/backgrounds/1/2.png', 720),
        new Background('img/backgrounds/2/2.png', 720),
        new Background('img/backgrounds/1/2.png', 1440),
        new Background('img/backgrounds/2/2.png', 1440),
        new Background('img/backgrounds/1/2.png', 2160),
        new Background('img/backgrounds/2/2.png', 2160),
        new Background('img/backgrounds/1/2.png', 2880),
        new Background('img/backgrounds/2/2.png', 2880),
        new Background('img/backgrounds/1/2.png', 3600),
        new Background('img/backgrounds/2/2.png', 3600),
        new Background('img/backgrounds/1/2.png', 4320),
        new Background('img/backgrounds/2/2.png', 4320),
        new Background('img/backgrounds/1/2.png', 5040),
        new Background('img/backgrounds/2/2.png', 5040),
    ],
    [
        new SkyBox('img/objects/sky/2.png', 0),
        new SkyBox('img/objects/sky/2.png', 720),
        new SkyBox('img/objects/sky/2.png', 1440),
        new SkyBox('img/objects/sky/2.png', 2160),
        new SkyBox('img/objects/sky/2.png', 2880),
        new SkyBox('img/objects/sky/2.png', 3600),
        new SkyBox('img/objects/sky/2.png', 4320),
        new SkyBox('img/objects/sky/2.png', 5040),
    ],
    [
        new FrontObj('img/backgrounds/3/9.png',170),
        new FrontObj('img/backgrounds/3/9.png',170),
        new FrontObj('img/backgrounds/3/9.png',170),
        new FrontObj('img/backgrounds/3/9.png',170),
        new FrontObj('img/backgrounds/3/9.png',170),
        new FrontObj('img/backgrounds/3/9.png',170),
        new FrontObj('img/backgrounds/3/9.png',170),
        new FrontObj('img/backgrounds/3/9.png',170),
    ],
    [
        new Mana('img/objects/shiny/8.png', 380),
        new Mana('img/objects/shiny/8.png', 380),
        new Mana('img/objects/shiny/8.png', 380),
        new Mana('img/objects/shiny/8.png', 380),
        new Mana('img/objects/shiny/8.png', 380),
    ],
    [
        new Jewel('img/objects/shiny/5.png', 380),
        new Jewel('img/objects/shiny/5.png', 380),
        new Jewel('img/objects/shiny/5.png', 380),
        new Jewel('img/objects/shiny/5.png', 380),
        new Jewel('img/objects/shiny/5.png', 380),
        new Jewel('img/objects/shiny/5.png', 380),
    ],
    );
};