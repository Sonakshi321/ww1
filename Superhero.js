class Superhero{
  constructor(x, y, width, height) {
    var options = {
   
        'Airfriction':0.005,
        'density':4.0,
        
    }
    this.body = Bodies.rectangle(x,y, width, height,{restitution:0.0,isStatic:false});
    this.width = width;
    this.height = height;
    this.image = loadImage("sup.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
      pos.x=mouseX;
      pos.y=mouseY;
   // var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    //rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0,this.width,this.height);
    pop();
  }
}


