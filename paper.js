class Paper {
    constructor(){
        var options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2
        }
 this.body= Bodies.circle(x,y,radius,options)
 this.radius=3
 this.image= loadImage("paper.png")

        World.add(world, this.body);
    }
    display(){
      
   var pos=this.body.position
   imageMode(CENTER);
   image(this.image, 0, 0, 70);
    }
}