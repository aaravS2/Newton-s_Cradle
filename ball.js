class Ball{
constructor(x,y){
    var options={
        isStatic:false,
        
        density:18.6
    }
    
this.body=Bodies.circle(x,y,17,options)
this.x=x
    this.y=y
    this.radius=17
World.add(world,this.body)
}display(){
    ellipseMode(RADIUS);
    fill('silver');
    var pos=this.body.position
    ellipse(pos.x,pos.y,17,17)
}


}