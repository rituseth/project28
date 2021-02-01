class mangoes {
    constructor(x,y,r){
        var options = {
            isStatic :false,
            restitution:0,
            friction:1
          
         
        }
  
         this.x=x;
         this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y, this.r/2, options) 
        this.image=loadImage("mango.png");
        World.add(world,this.body);
   
    }
    display(){
        
        var pos=this.body.position;
        push();
       
        fill (255,255,0)
       
       imageMode(CENTER)
       image(this.image,pos.x,pos.y, this.r, this.r);
       pop();
    }
}