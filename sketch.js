var movingRect;
var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

 movingRect = createSprite(50,150,20,50);
 movingRect.shapeColor = "brown";

wall1=createSprite(950,200,20,200);
wall1.shapeColor = color(80,80,80);


speed=random(55,90);

weight = random(400,1500);

}

function draw() {
  background(0); 
  
  
  movingRect.velocityX = speed ;
  

  deformation();

if(movingRect.collide(wall1)){
  movingRect.shapeColor = color("green");
};

console.log(movingRect);

  drawSprites();

}

function deformation(){
 var deformation = 0.5*weight*speed*speed/22500;
}