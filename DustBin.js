class DustBin {
    constructor(x,y,width,height){
        var options={
         isStatic: true
        }
        this.x= x;
        this.y=y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height);
        World.add(world,this.body)
        

    }
    display(){
    rect(this.body.position.x,this.body.position.y,this.width,this.height);

    }
}