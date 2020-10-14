var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	groundSprite=createSprite(width/2, height-35, width,20);
	groundSprite.shapeColor=color(255)

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 80, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	engine = Engine.create();
	world = engine.world;

	keyPressed();

	  packageBody = Bodies.rectangle(width/2 , 80, 30, 30, {restitution: 0.8, isStatic: true});
	  World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, height-35, width, 20 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
}


function draw() {
 
  background(0,0,0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

 Matter.Body.setStatic(packageBody, false);  
}
}