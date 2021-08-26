class Dustbin
{
    constructor(x,y)
    {
        this.x = x
        this.y = y
        this.dustbinWidth = 200
        this.dustbinHeight = 200
        this.angle = 0
        this.wallThickness = 20
        this.bottomBody = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic:true})
        this.rightWallBody = Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
        Matter.Body.setAngle(this.rightWallBody,-1*this.angle)
        this.leftWallBody = Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
        Matter.Body.setAngle(this.leftWallBody,this.angle)
        this.image = loadImage("dustbin.PNG")
        World.add(world,this.bottomBody)
        World.add(world,this.rightWallBody)
        World.add(world,this.leftWallBody)
    }
    display()
    {
        var posBottom = this.bottomBody.position
        var posRight = this.rightWallBody.position
        var posLeft = this.leftWallBody.position
        push()
        translate(posLeft.x,posLeft.y)
        rectMode(CENTER);
        angleMode(radians)
        fill("white")
    //    stroke(255)
        rotate(this.angle)
        rect(0,0,this.wallThickness,this.dustbinHeight)
        pop()
        push()
        translate(posRight.x,posRight.y)
        rectMode(CENTER)
        angleMode(radians)
        fill("white")
       // stroke(255)
        rotate(-1*this.angle)
        rect(0,0,this.wallThickness,this.dustbinHeight)
        pop()
        push()
        translate(posBottom.x,posBottom.y)
        rectMode(CENTER)
        angleMode(radians)
        fill("white")
      //  stroke(255)
      rotate(this.angle)
        rect(0,0,this.dustbinWidth,this.wallThickness)
        image(this.image, -95,-200,200, 200)
        imageMode(CENTER)
        pop()
    }
}