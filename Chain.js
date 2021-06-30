class Chain{
    constructor(bodyA,bodyB){
        var Options = {
            bodyA:bodyA,
            bodyB:bodyB,
            length:10,
            stiffness:0.02
        }
    
        this.chain = Constraint.create(Options);
        World.add(world,this.chain);
    }
    display(){
    strokeWeight(3);
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
    }
}