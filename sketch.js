//Declare global variables

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var sup ;

var fireball;

var fireballGroup;



var invisbleGround;

var survivalTime=0;

var bg;






function preload(){
  
  //Load animations and images
  
  supImage =             
  loadImage("sup.png");
  
 fireBallImage = loadImage("fireball.png");
  
  
  bg = loadImage ("sky.png");
  
  //groundImage = loadImage ("ground.jpeg");
  
}



function setup() {
  
  //create canvas
  
  createCanvas(600,600);

  
  // create monkey
  
  sup=createSprite(mouseX,mouseY,pmouseX,pmouseY);

  sup.addImage(supImage);
  sup.scale=0.1
  
  
  //create ground
  
  ground=createSprite(400,450.02,900,200);
  
  ground.x = ground.width/2;
  
  console.log(ground.x)
  
  //create scrolling ground
  
  if(ground.x===ground.x/2){
    
    ground.x=ground.width/2;
    
  }
 
  }


function draw() {
  
  //background
  
  background(bg);
  
  
  sup.x=mouseX;
  sup.y=mouseY;
 
  //ww should stay on the ground
  
  

  
  
  
  
  //Survival Time
  
  stroke("black");
  
  textSize=20;
  
  fill("black");
  
  survivalTime=Math.ceil(frameCount/frameRate());
  
  text("Survival Time:  "+ survivalTime,100,50);
  
  
  // Spawn bananas
  
  spawnFireball();
  
  //Spawn obstacles
  
 //if(fireballGroup.isTouching(sup)){
 //  text("OUT!",200,200);
 //}
  
 if(sup.isTouching(ground)){
   text("OUT!",200,200);
  }
  //Add banana group
  
  fireballGroup= new Group();
  
  //Add obstacles group
  
  
  
  //draw sprites
  
  drawSprites();
  
}

//spawn banana function

function spawnFireball(){
  
  if(frameCount % 80 === 0){
    
    fireball=createSprite(500,315,1,1);
    
    fireball.y=(random(100,280));
  
    
    fireball.addImage(fireBallImage);
    
    fireball.scale=0.1;
    
    fireball.velocityX=-3
    
    fireball.lifetime=150;
    
    fireballGroup.add(fireball);
   
  }
  
}


function BounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x -object1.x < object2.width/2 + object1.width/2) {
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y < object2.height/2 +object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
    object1.velocityY = object1.velocityY * (-1);
  object2.velocityY = object2.velocityY * (-1);
}
}




