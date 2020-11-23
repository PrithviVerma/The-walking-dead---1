var backgroundImg,startImg,start_button,soldier , soldierIdleGun,soldierRunGun,soldierDieGun,soldierShootGun
var gameState = 0;

function preload(){
backgroundImg = loadImage("sprites/background.jpg");
startImg = loadImage("sprites/start.png");
soldierIdleGun = loadAnimation("sprites/Soldier-Guy-PNG/_Mode-Gun/01-Idle/E_E_Gun__Idle_000.png","sprites/Soldier-Guy-PNG/_Mode-Gun/01-Idle/E_E_Gun__Idle_001.png","sprites/Soldier-Guy-PNG/_Mode-Gun/01-Idle/E_E_Gun__Idle_002.png","sprites/Soldier-Guy-PNG/_Mode-Gun/01-Idle/E_E_Gun__Idle_003.png","sprites/Soldier-Guy-PNG/_Mode-Gun/01-Idle/E_E_Gun__Idle_004.png","sprites/Soldier-Guy-PNG/_Mode-Gun/01-Idle/E_E_Gun__Idle_005.png","sprites/Soldier-Guy-PNG/_Mode-Gun/01-Idle/E_E_Gun__Idle_006.png","sprites/Soldier-Guy-PNG/_Mode-Gun/01-Idle/E_E_Gun__Idle_007.png","sprites/Soldier-Guy-PNG/_Mode-Gun/01-Idle/E_E_Gun__Idle_008.png","sprites/Soldier-Guy-PNG/_Mode-Gun/01-Idle/E_E_Gun__Idle_009.png");
}

function setup(){
createCanvas(1200,800);


}

function draw(){
background(backgroundImg);
if (gameState===0){
background(0);
start_button = createSprite(600,400,100,100);
start_button.addImage("start",startImg);
fill("white");
textSize(30);
text("The town has been envaded by zombies",400,150);
text("Help the survivors defeat the zombies",400,200);
text("Press the start button to start. All the best Soldier!",350,250);
soldier = createSprite(100,500,50,50);
soldier.addAnimation("soldier1",soldierIdleGun);
soldier.scale = 0.5;
}

drawSprites();
}