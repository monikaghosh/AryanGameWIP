class Enemy{
    constructor(x,y,width,height){
        this.body = createSprite(x,y,width,height);
        this.body.shapeColor = "red";
        this.body.lifetime=800;
        this.health = 100;
        
    }
    
}