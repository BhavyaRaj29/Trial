const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const constrain=Matter.Constrain;

var engine;
var world;
var ball,polygon,ground;
var stand1,stand2
var polygon,polygon_Image;
var Slingshot

function preload(){
    polygon_Img=loadImage ("polygon.png");
}

function setup(){
    createCanvas(1000,1000);
    //
    engine = Engine.create();
    world = engine.world;
   // Engine.run(engine);
    ground = new Ground();
    stand1 = new Stand(490,300,250,10);
    stand2 = new Stand(800,200,200,10);

// this is the level 1 of the left side row.....
//1st tower
block1=new block(280,270,30,40);
block2=new block(310,270,30,40);
block3=new block(340,270,30,40);
block4=new block(360,270,30,40);
block5=new block(390,270,30,40);
block6=new block(420,270,30,40);
block7=new block(450,270,30,40);
block8=new block(480,270,30,40);
//2nd tower
block9=new block(320,230,30,40);
block10=new block(350,230,30,40);
block11=new block(380,230,30,40);
block12=new block(410,230,30,40);
block13=new block(440,230,30,40);
//3rd tower
block14=new block(330,290,30,40);
block15=new block(360,290,30,40);
block16=new block(390,290,30,40);
block17=new block(420,290,30,40);
//4th tower
block18=new block(350,250,30,40);
block19=new block(380,250,30,40);



// this will be the second tower (left side) . they will  be written as blocks...
// 1st tower
blocks1=new block(640,175,30,40);
blocks2=new block(670,175,30,40);
blocks3=new block(700,175,30,40);
blocks4=new block(730,175,30,40);
blocks5=new block(760,175,30,40);
blocks6=new block(790,175,30,40);
//2nd tower
blocks7=new block(670,135,30,40);
blocks8=new block(700,135,30,40);
blocks9=new block(730,135,30,40);
blocks10=new block(760,135,30,40);
blocks11=new block(790,135,30,40);
//3rd tower
blocks12=new block(690,95,30,40);
blocks13=new block(720,95,30,40);
blocks14=new block(750,95,30,40);
blocks15=new block(780,95,30,40);
//4th tower
blocks16=new block(710,95,30,40);
blocks17=new block(740,95,30,40);
blocks18=new block(770,95,30,40);
//5th tower
blocks19=new block(720,45,30,40);
blocks20=new block(750,45,30,40);
//6th tower
blocks21=new block(735,35,30,40);

 //ball with slings
 ball = Bodies.circle(50,200,20);
 World.add(world,ball);
 
 slingShot = new Slingshot(this.polygon,{x:200,y:200});



}


function draw(){
background('yellow');
//Engine.update(engine);

textSize(20);
fill("lightyellow");
text("Drag the ball to destroy the blocks",300,30);
textSize(10);
text("Press Space to get a second Chance to Play!!",650 ,350);

ground.display();
stand1.display();
stand2.display();
strokeWeight(2);
stroke(15);

fill("skyblue");
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
fill("pink");
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
fill("turquoise");
block14.display();
block15.display();
block16.display();
block17.display();
fill("grey");
block18.display();
block19.display();


//second TOWER.....



fill("skyblue");
blocks1.display();
blocks2.display();
blocks3.display();
blocks4.display();
blocks5.display();
blocks6.display();
fill("turquoise");
blocks7.display();
blocks8.display();
blocks9.display();
blocks10.display();
blocks11.display();
fill("yellow");
blocks12.display();
blocks13.display();
blocks14.display();
blocks15.display();
fill("pink");
blocks16.display();
blocks17.display();
blocks18.display();
fill("purple");
blocks19.display();
blocks20.display();
fill("green");
blocks21.display();




fill("pink")
blocks9.display();
fill("gold");
imageMode(CENTER)
image(polygon_img ,ball.ball.x,ball.position.y,40,40);

/*slingShot.display();

}
function mouseDragged(){
Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
slingShot.fly();
}
function keyPressed(){
if(keyCode === 32){
    slingShot.attach(this.ball);
}
}*/
slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}






















