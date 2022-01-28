
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObj=new Ground(width/ 2,670, 1500, 20)
	leftSide = new Ground(1100, 600, 20, 120)
	rightSide= new Ground(1300, 600, 20, 120)
	ball= new Ball ( 50, 600, 20, 20)
	Engine.run(engine);

	
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display()
  leftSide.display()
  rightSide.display()
  ball.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,{x:0,y:0},{x:5, y:25})
	}
}


