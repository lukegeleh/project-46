var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var redbubble
var redbubbleImg
var gameOverImg
var restartImg
var score = 0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
redbubbleImg = loadImage("assets/redbubble.png")   
bgImg = loadImage("assets/bg.png")
gameOverImg= loadImage("assets/gameOver.png")
restartImg = loadImage("assets/restart.png")
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}


function setup(){

//background image
createCanvas(500,500)
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;

gameOver = createSprite(300,100);
gameOver.addImage(gameOverImg);
restart = createSprite(300,140);
restart.addImage(restartImg);
gameOver.scale = 0.5;
restart.scale = 0.5;

}

function draw() {
  
  
  background("black");

  if(gameState===PLAY) {
//making the hot air balloon jump
if(keyDown("space")) {
  balloon.velocityY= -2 ;
  
}

//adding gravity
  balloon.velocityY = balloon.velocityY+0.5;
  spawnredbubble();

  if(balloon.isTouching(bottomGround))
{

gameState = END;

}

        
           
  if(balloon.isTouching(topGround))
{

gameState = END;

}
  }

  if(gameState === END) 
    {
          gameOver.visible = true;
          gameOver.depth = gameOver.depth+1
          restart.visible = true;
          restart.depth = restart.depth+1

          balloon.velocityX = 0;
          balloon.velocityY = 0;
          topObstaclesGroup.setVelocityXEach(0);
          bottomObstaclesGroup.setVelocityXEach(0);
          barGroup.setVelocityXEach(0);
          topObstaclesGroup.setLifetimeEach(-1);
          bottomObstaclesGroup.setLifetimeEach(-1);
         
          balloon.y = 200;
          
          //resetting the game
          if(mousePressedOver(restart)) 
          {
                reset();
          }
        
}

drawSprites();
}
  




function spawnredbubble() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
     redbubble = createSprite(600,100,40,10);
    redbubble.y = Math.round(random(10,400));
    redbubble.addImage(redbubbleImg);
    redbubble.scale = 0.1;
    redbubble.velocityX = -3;
    
     //assign lifetime to the variable
    redbubble.lifetime = 134;
    
    //adjust the depth
    redbubble.depth = balloon.depth;
    balloon.depth = balloon.depth + 1;
    
    //adding cloud to the group
   
    }
}

function Bar() 
 {
         if(World.frameCount % 60 === 0)
         {
           var bar = createSprite(400,200,10,800);
          bar.velocityX = -6
        
          
          bar.velocityX = -6
          bar.depth = balloon.depth;
          bar.lifetime = 70;
          bar.visible = false;

          barGroup.add(bar);
         }
}

function Score()
{
         if(balloon.isTouching(barGroup))
         {
           //increment the score by 1
         }
        textFont("algerian");
        textSize(30);
        fill("yellow");
        //Display the score 
       
  
}
