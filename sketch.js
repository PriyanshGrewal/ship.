var seaImage;
var shipImg1;
function preload(){
seaImage = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  seaImage = createSprite(200,180,400,20);
  seaImage.addImage(sea.png);
}

function draw() {
  background("blue");
  
}




