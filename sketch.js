var retFixo, retMovendo, objeto1,objeto10;
var parede1,parede2,parede3,parede4;

function setup() {
  createCanvas(800,700);
  retFixo = createSprite(410, 690, 250, 10);
  retFixo.shapeColor = "green";
  retFixo.debug = true;
  retMovendo = createSprite(400,200,80,30);
  retMovendo.shapeColor = "white";
  retMovendo.debug = true;
  objeto1 = createSprite(150, 690, 250, 10);
  objeto1.shapeColor = "blue";
  objeto1.debug = true;
  
  objeto10 = createSprite(670, 690, 250, 10);
  objeto10.shapeColor = "red";
  objeto10.debug = true;

 parede1=createSprite(10,350,10,700)
 parede2=createSprite(790,350,10,700)
 parede3=createSprite(400,10,800,10)
 parede4=createSprite(400,690,800,10)

 parede1.visible=false;
 parede2.visible=false;
 parede3.visible=false;
 parede4.visible=false;

 retMovendo.velocityY=+15;
 retMovendo.velocityX=+13;

}

function draw() {
  background(0,0,0);  

  
  if(isTouching(retMovendo,objeto1)){

    retMovendo.shapeColor = "blue";

  }

  if(isTouching(retMovendo,retFixo)){

    retMovendo.shapeColor = "green";

  }

  if(isTouching(retMovendo,objeto10)){

    retMovendo.shapeColor = "red";

  }

 retMovendo.bounceOff(parede1)
 retMovendo.bounceOff(parede2)
 retMovendo.bounceOff(parede3)
 retMovendo.bounceOff(parede4)
 retMovendo.bounceOff(objeto1)
 retMovendo.bounceOff(retFixo)
 retMovendo.bounceOff(objeto10)

  drawSprites();
}

