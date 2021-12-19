class Plinko{
    constructor(x, y, r){
        var options={
            isStatic:false
        }
        this.body = Bodies.cirlce(x, y, this.r, options);
        this.color=color(random(0, 255), random(0, 255), random(0, 255), );
        this.r=r;
        World.add(world, this.body)
    }
    display(){
        push();
        pos = this.body.position;
        rect(pos.x, pos.y);
        pop();
    }
}