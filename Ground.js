class Ground{
    constructor(x, y, w, h){
        var options ={
            isStatic:true
        }
        this.body=Bodies.rect(x, y, w, h, options);
        this.w=w;
        this.h=h;
        World.add(world, this.body);
    }
    display(){
        push();
        var pos = this.body.position
        strokeWeight(4);
        rectMode(CENTER);
        rect(pos.x, pos.y, this.w, this.h);
        pop();
    }
}