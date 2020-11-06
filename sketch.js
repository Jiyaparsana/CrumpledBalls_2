
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var edge1,edge2,edge3;
var dustbin1;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(100,780,3)
    edge1 = new edges(400,640,20,300)
	edge2 = new edges(415,640,400,20)
	edge3 = new edges(430,640,20,300)
	dustbin1 = new Dustbin(410,640,20,100)
	ground = createSprite(400,785,800,10)
 Matter.bodies.setStatic(body,true)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display()
dustbin1.display()
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.body.applyForce(paper1.body,paper1.body.position,{x:100,y:-100})
	}
}


