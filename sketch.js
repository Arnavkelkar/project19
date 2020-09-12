var ball,ballImg,paddle,paddleImg,edge;
function preload() {
 ballImg = loadImage("ball.png");
 paddleImg = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
  ball = createSprite(200,90,20,20);
    paddle =createSprite(350,200)

  ball.addImage(ballImg);
  paddle.addImage(paddleImg);

ball.velocityX=9;  

}

function draw() {
  background(205,153,0);
  edges=createEdgeSprites();

  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-20
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+20
  }
  
  if(ball.bounceOff(paddle)){
     randomVelocity();
  }
  drawSprites();
  
}

function randomVelocity()
{
ball.velocityY=random(-8,8);
}
