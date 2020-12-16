var bullet,wall1,weight,speed,deformation,thickness;

function setup() {
  createCanvas(800,400);

  bullet = createSprite(200,100,70,20);
  bullet.shapeColor = color(225);
  wall1 = createSprite(700,200,thickness,300);
  wall1.shapeColor = color(80,80,80);

  speed = random(200,250);
  weight = random(20,30);
  thickness = random(22,83);
}

function draw() {
  background("black");  

  bullet.velocityX = speed;

  deformation = 0.5 * weight * speed * speed/(thickness * thickness * thickness)

  if(deformation < 10 && bullet.isTouching(wall1)){
    bullet.collide(wall1)
    bullet.shapeColor = color(0,255,0);
  }

  if(deformation > 10 && bullet.isTouching(wall1)){
    bullet.collide(wall1)
    bullet.shapeColor = color(255,0,0);
  }
  drawSprites();
}