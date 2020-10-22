class Rope{
    constructor(body1,pointB){
        var options = {
            bodyA : body1,
            pointB : pointB,
           length:200,
           stiffness:0.4
        }
        this.rope = constraint.create(options);
        World.add(world,this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointc = this.rope.pointB;

       

        var Anchor1X = pointA.x;
        var Anchor1Y = pointA.y;

        var Anchor2X = pointc.x 
        var Anchor2Y = pointc.y;
        strokeWeight(2);
        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
    }

}