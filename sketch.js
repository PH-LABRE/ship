var ship
var sea
function preload(){
  seaImg = loadImage("sea.png")
  shipImg = loadInimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  ship=createSprite(50,180,20,50)
  ship.addAnimation("sailing", ship)
  ship.scale=0.5
 sea = createSprite(200,200,400,20)
 if (sea.X < 0) {
  sea.X = sea.width/2
}
sea.velocityX=+10
}

function draw() {
  background("blue");
 
  spriteName.addImage(seaImg)
  spriteName.addImage(shipImg)
  ship.collide(sea)
    drawSprites();

 
}
