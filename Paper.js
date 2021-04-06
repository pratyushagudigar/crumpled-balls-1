class Paper {

    constructor(x,y,r){
     var options={
         isStatic: false,
         restitution: 0.5,
         friction:0.3,
         density:1.2
     }
     this.body = Bodies.circle(x,y,r,options);
     this.x = x;
     this.y = y;
     this.r = r;
    this.paperimg = loadImage("paper.png");
    
     World.add(world,this.body);


    }
    display(){
     imageMode(CENTER);
    image(this.paperimg,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}