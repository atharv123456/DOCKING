var bg,bgImg;
var iss,issImg;
var rocket,rocketImg1,rocketImg2,rocketImg3,rocketImg4;
var hasDocked;


function preload(){
bgImg=loadImage("spacebg.jpg");
issImg=loadImage("iss.png");
rocketImg1=loadImage("spacecraft1.png");
rocketImg2=loadImage("spacecraft2.png");
rocketImg3=loadImage("spacecraft3.png");
rocketImg4=loadImage("spacecraft4.png");
}



function setup() {
  createCanvas(800,400);

  //creating the iss
  iss=createSprite(370, 170, 48, 48);
  iss.addImage(issImg);

  //creating the rocket
  rocket=createSprite(700,300,30,30);
  rocket.addImage(rocketImg1);
  rocket.scale=0.3;


}

function draw() {
  background(bgImg);


  if(!hasDocked){
  rocket.x=rocket.x+random(-1,1)

    if(keyCode===DOWN_ARROW){
      rocket.velocityY=3;
      rocket.addImage(rocketImg2)
      }
      
      if(keyCode===UP_ARROW){
        rocket.velocityY=-3;
        rocket.addImage(rocketImg2)
        }
      
        if(keyCode===RIGHT_ARROW){
          rocket.velocityX=3;
          rocket.addImage(rocketImg4)
          }
      
          if(keyCode===LEFT_ARROW){
            rocket.velocityX=-3;
            rocket.addImage(rocketImg3)
            }
 
  hasDocked=false;
  }
 if(rocket.y<=(iss.y+87)&rocket.x<=iss.x-4){
 hasDocked=true;
 rocket.velocityX=0;
 rocket.velocityY=0;
 textSize(20);
 fill("white");
 text("Docking Successfull!!",600,350);

 rocket.addImage(rocketImg1)
 }

  
  



  drawSprites(); 
}
 
if(rocket.x===335){
rocket.velocityX=0;
}
