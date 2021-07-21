var ship , ship_floting , sea , seaimage;

 function preload(){
ship_floting = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaimage = loadImage("sea.png")
}

function setup(){
  createCanvas(800,400);
  
  //to create sea 
  sea = createSprite(250,180,400,20)
  sea.addImage(seaimage)
  sea.scale=0.4
  sea.velocityX=-3
 

  //to create ship
  ship = createSprite(200,200,20,20)
  ship.addAnimation("floting",ship_floting);
  ship.scale=0.2
  
}

function draw() {
 
  //to set background color
  background("skyblue");

  //to repet background
 if(sea.x < 0) {
    sea.x = 600;
    }
  drawSprites();
}