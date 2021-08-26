
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var paperball;



	


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperball = new Paper(100,200,70)
	paperball.shapeColor = "red"

	dustbin1 = new Dustbin(690,670,100,50)

	ground = new Ground(400,690,800,20)

  slingshot1 = new Launcher(paperball.body,{x:100, y:500});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230,230,230);
  Engine.update(engine)
  ground.display()
  dustbin1.display()
  paperball.display()
  slingshot1.display()
  
 // if(keyDown(UP_ARROW))
  //{
	//Matter.Body.applyForce(paperball.body,paperball.body.position,{x:5,y:-20})
  //}
  function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(paperball.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();

}

  drawSprites();
 
}



