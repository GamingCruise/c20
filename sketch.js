


var box1
var box2
function setup() {
  createCanvas(800,400);
  box1=createSprite(400, 200, 50, 50);
  box1.shapeColor="blue"
  box2=createSprite(500,100,100,100);
box2.shapeColor="green"
box1.debug=true;
box2.debug=true;
}

function draw() {
  background(255,255,255); 
box1.y=mouseY;
box1.x=mouseX;
console.log(box1.x-box2.x);
if(box2.x-box1.x<box1.width/2+box2.width/2 && box1.x-box2.x<box1.width/2+box2.width/2 && box1.y-box2.y<box1.height/2+box2.height/2 && box2.y-box1.y<box1.height/2+box2.height/2){
  console.log("no...")
  box1.shapeColor="red";
  box2.shapeColor="red";
}
else {
  box1.shapeColor="blue";
  box2.shapeColor="green";
}

  drawSprites();
}