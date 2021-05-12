
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof1;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bobObject1= new bob(300,400,40);
bobObject2= new bob(340,400,40);
bobObject3= new bob(380,400,40);
bobObject4= new bob(420,400,40);
bobObject5= new bob(460,400,40);
roof1     = new roof(400,200,300,20);
rope1=new rope(bobObject1.body,roof1.body,-100,10);
rope2=new rope(bobObject2.body,roof1.body,-60,10);
rope3=new rope(bobObject3.body,roof1.body,-20,10);
rope4=new rope(bobObject4.body,roof1.body,20,10);
rope5=new rope(bobObject5.body,roof1.body,60,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}
function keyPressed(){
  if (keyCode===UP_ARROW){

Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-300,y:90});
  }
}


