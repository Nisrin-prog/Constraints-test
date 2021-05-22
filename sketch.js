const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

function setup(){
  createCanvas(400,400)
  engine = Engine.create()
  world = engine.world
  ball = new Ball(100,100,10)
  ball2 = new Ball(100,200,20)
  ball3 = new Ball(300,300,15)

  
  var option = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,400,20,option)
  World.add(world, ground)
  
}
function draw(){
  background("blue")
  rectMode(CENTER)
  
  Engine.update(engine)
  
  ball.display()
  ball2.display()
  ball3.display()
  rect(ground.position.x,ground.position.y,400,20)
  
  
}
