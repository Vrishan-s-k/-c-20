var fixedRect, movingRect;

function setup(){
  createCanvas(1500, 900)

  fixedRect = createSprite(200, 300, 50, 80);
  fixedRect.shapeColor = "darkorange"
  fixedRect.debug = true;

  movingRect = createSprite(300, 300, 80, 30);
  movingRect.shapeColor = "darkorange";
  movingRect.debug = true;

}

function draw(){
  background(0);

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    &&fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2
    &&movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor = rgb(255,255,255);
    fixedRect.shapeColor = rgb(255,255,255);
  }
  else{
    movingRect.shapeColor= "darkorange";
    fixedRect.shapeColor = "darkorange";
  }

  drawSprites();

}