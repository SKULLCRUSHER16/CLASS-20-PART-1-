var rect1,rect2;

function setup() {
  createCanvas(1200,800);
 rect1= createSprite(400, 200, 100, 50);
 rect2=createSprite(300,100,150,40);
 rect1.shapeColor="red";
 rect2.shapeColor="red";
}

function draw() {
  background(0);  

rect2.x=World.mouseX;
rect2.y=World.mouseY;

if(rect2.x-rect1.x<rect1.width/2+rect2.width/2 && 
  rect1.x-rect2.x<rect1.width/2+rect2.width/2 && 
  rect2.y-rect1.y<rect1.height/2+rect2.height/2 && 
  rect1.y-rect2.y<rect1.height/2+rect2.height/2 ){
  rect1.shapeColor="cyan";
  rect2.shapeColor="yellow";
}
else{
  rect1.shapeColor="red";
  rect2.shapeColor="red";
}


  drawSprites();
}