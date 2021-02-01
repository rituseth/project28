
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground ;
var stone1;
var boy,boyImg;
var tree;
var sling1;
var mango1,mango2,mango3,mango4
function preload()
{
boyImg=loadImage("boy.png")
}
	

function setup() {
	createCanvas(1200,400);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	stone1=new Stone(400, 300,40,40);
	 boy=createSprite(450,330,50,50);
	 sling1 = new Sling(stone1.body,{x:400,y:250});
	tree=new Tree(1000,200,500,500)
	mango1=new mangoes(1000,200,25,25);
	mango2=new mangoes(1090,200,25,25);
	mango3=new mangoes(1080,200,25,25);
	mango4=new mangoes(1055,200,25,25);
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();

  boy.addImage(boyImg);
boy.scale=0.1;
  stone1.display();
sling1.display();

mango1.display();
mango2.display();
mango3.display();
mango4.display();


detectCollission(mango1 , stone1)
detectCollission(mango2 , stone1)
detectCollission(mango3 , stone1)
detectCollission(mango4 , stone1)
tree.display();
  drawSprites();
  ;
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling1.fly();
}

function detectCollission(lmango , lstone){
	mangoBodyPosition= lmango.body.position
	stoneBodyPosition= lstone.body.position
	
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r ){
	Matter.Body.setStatic(lmango.body ,false);
	}
	}
	