
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground2;
var DustBin2,dustbin3,dustbin4;
var paper2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper2 = new Paper(100,200,10,10);
  ground2 = new ground(200,600,1200,20);
 DustBin2 = createSprite(550,580,150,20);
 dustbin3 = createSprite(470,550,20,100);
 dustbin4 = createSprite(630,550,20,100);
	
 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  paper2.display(); 
  ground2.display();
 

  drawSprites();
 
}

function keyPressed(){
  
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper2.body,paper2.body.position,{x:55,y:-55});
  }
}


