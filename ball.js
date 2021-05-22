class Ball{
  constructor(x,y,r){
    
    var options = {
      restitution: 0.8,
      density : 1,
      friction : 0.004
      
    }
    this.body = Bodies.circle(x,y,r,options)
    World.add(world, this.body)
    this.r = r
    console.log(this.body)

  }
  display(){
    var pos = this.body.position
    var angle = this.body.angle
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    ellipseMode(CENTER)
    ellipse(0,0,this.r*2,this.r*2)
    
    pop()
  }
}