
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint=Matter.Constraint
var bob1,lifted,liftbody,co1,bob2,co2,bob3,co3,bob4,c04;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
liftbody=Bodies.rectangle(350,350,130,30,{isStatic:true})
World.add(world,liftbody)
lifted=createSprite(400,350,130,30)
	Engine.run(engine);
  bob1=new Ball(300,550)
  co1=new Rope(bob1.body,{x:300,y:350})
  bob2=new Ball(334,550)
  co2=new Rope(bob2.body,{x:334,y:350})
  bob3=new Ball(368,550)
  co3=new Rope(bob3.body,{x:368,y:350})
  bob4=new Ball(402,550)
  co4=new Rope(bob4.body,{x:402,y:350})
  
}


function draw() {
  rectMode(CENTER);
  background("brown");
  lifted.x=liftbody.position.x
  lifted.y=liftbody.position.y
  momemtum()
  text("press left arrow key",400,200)
  text("Newton's Cradle",400,100)
  drawSprites();
  co1.display();
  co2.display();
  co3.display();
  co4.display();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 
 
}
function momemtum(){
  if (keyDown("LEFT_ARROW")) {
  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-49,y:-2})
  
  
  }
}


