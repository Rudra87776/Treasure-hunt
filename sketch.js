//Robert, a young man, has been seen picking up goods which seemed to have been fallen from his bag.
//the police has labelled him to be burgalar and offered a sum 10000 rupees reward for his capture.
//since the police haven't yet reached the place, people took their place and are onto Robert, many have thrown knifes and spikes on the road to slow him down.
// he shouldn't hit a knife or he will be a goner.
// help him escape them.But is he a real thief or new age Sherlock Holmes who on the trails of criminal mastermind?



var PLAY = 1;
var   END = 0;
var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;
var gameState = PLAY;
var GO;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(400,400);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
 
  GO = createSprite(200,200,10,10);
  GO.addAnimation("end",endImg);
  GO.scale = 0.4;
  GO.visible = false;


//creating boy running
boy = createSprite(70,330,20,20);
boy.addAnimation("SahilRunning",boyImg);
  
boy.scale=0.08;
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();
  
  
}

function draw() {

  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  

  
  if (gameState === PLAY){
createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
        treasureCollection = treasureCollection + 1;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
       treasureCollection = treasureCollection + 2;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
       treasureCollection = treasureCollection + 3;
      
    }else{
      if(swordGroup.isTouching(boy)) {
        swordGroup.destroyEach();
         
        gameState = END ;
    }
  } 
  }
else if (gameState === END){

path.velocityY = 0;
boy.visible = false;


  jwelleryG.setVelocityYEach(0);
  cashG.setVelocityYEach(0);
  diamondsG.setVelocityYEach(0);
  
  jwelleryG.setLifetimeEach(0);
  cashG.setLifetimeEach(0);
  diamondsG.setLifetimeEach(0);
  
  
  GO.visible = true;

}
  drawSprites();
  
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);
 
  
}

function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 180 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 280 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 150 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}