var bullet, wall, thickness;
var speed, weight;


function setup() {
  createCanvas(1600, 400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83)

  bullet = createSprite(50, 200, 50, 5);
  bullet.velocityX = speed;
  bullet.shapeColor = color(225)

  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);


}

function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEgde = lwall.x;

  if(bulletRightEdge >= wallLeftEdge){
    return true
  }
  return false;
}

function draw(){

  hasCollided()

  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage > 10){
      wall.shapeColor = color(225, 0, 0)
  }

    if(damage < 10){
     wall.shapeColor = color(0, 225, 0)
  }
}
  drawSprites();
}