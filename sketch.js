
function preload(){
  seaImg=loadImage("sea.png");
  shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

  

}

function setup(){
  createCanvas(400,400); 
  sea=createSprite(0,0,400,400);
  sea.addImage("sea",seaImg);
  sea.velocityX=4;

  ship=createSprite(100,100,50,50);
  ship.addAnimation("ship",shipImg1);
  ship.scale = 0.3;
}

function draw() {
  background("blue");
   

  if(sea.x>400)
  {
    sea.x=width/4;
  }

  drawSprites();
}