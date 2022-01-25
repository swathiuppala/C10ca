
var trex ,trex_running,ground;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  trex = createSprite(50,160,20,40);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5;

  ground = createSprite(200,180,400,20);
  ground.shapeColor = "brown";
 
}

function draw(){
  background("gray");

  if(keyDown("space")){
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY + 0.8;

  trex.bounceOff(ground);
 drawSprites();
}
