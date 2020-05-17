var fixedRect, movingRect;
var obj1, obj2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  obj1 = createSprite(600, 100, 50, 50);
  obj1.shapeColor = "blue";
  obj2 = createSprite(500, 200, 50, 50);
  obj2.shapeColor = "blue";
}

function draw() {
  background(0,0,0);  
  
  obj2.x = mouseX;
  obj2.y = mouseY;

  BounceOff(movingRect, fixedRect);

  if(isTouching(obj1, obj2))  {
    obj1.shapeColor = "red";
    obj2.shapeColor = "red";
  }

  else  {
    obj1.shapeColor = "blue";
    obj2.shapeColor = "blue";
  }

  drawSprites();
}

 