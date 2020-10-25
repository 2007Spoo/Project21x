var wall,thickness;

var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  
  speed= random(223,321)
  weight= random(30,52)
  thickness= random(22,83)
  bullet= createSprite(200, 200, 50, 50);

  bullet.velocityX= speed;

  bullet.shapeColor= "blue";


  wall= createSprite(1200, 200,thickness, height/2)
  wall.shapeColor= "red";
}

function draw() {
  background(0);

  function hasCollided(bullet,wall)
  {
    bulletRightEdge= bullet.x + bullet.width;
    wallLeftEdge= wall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true
    }
    return false;
  }

  if(hasCollided(bulletRightEdge,wall))
  {
    bullet.velocityX=0;
    var damage= 0.5 * weight * speed/(thickness * thickness * thickness);
  }
  if(damage > 10)
  {
    wall.shapeColor= "pink";
  }
  drawSprites();
}