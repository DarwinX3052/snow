var bg;
var s1, s2, s3, s4, s5;
var snowI;
function preload(){
  bg = loadImage("snow1.jpg");
  snowI = loadImage("snow4.webp");
}
function setup() {
  createCanvas(800,400);
  s1 = createSprite(100, 0, 50, 50);
  s2 = createSprite(250, 0, 50, 50);
  s3 = createSprite(400, 0, 50, 50);
  s4 = createSprite(650, 0, 50, 50);
  s5 = createSprite(750, 0, 50, 50);

  s1.addImage(snowI);
  s2.addImage(snowI);
  s3.addImage(snowI);
  s4.addImage(snowI);
  s5.addImage(snowI);
  s1.scale = 0.15;
  s2.scale = 0.15;
  s3.scale = 0.15;
  s4.scale = 0.15;
  s5.scale = 0.15;

  s1.velocityY = 2;
  s2.velocityY = 3;
  s3.velocityY = 5;
  s4.velocityY = 1;
  s5.velocityY = 4;
}

function draw() {
  background(bg);
  if (s1.y > 400){
    s1.y = 0;
  }  
  if (s2.y > 400){
    s2.y = 0;
  }  
  if (s3.y > 400){
    s3.y = 0;
  }  
  if (s4.y > 400){
    s4.y = 0;
  }  
  if (s5.y > 400){
    s5.y = 0;
  }  
  drawSprites();
}