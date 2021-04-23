const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var bird;
var log1,log2,log3,log4;
var box3, box4,box5;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,380,70,70);
    box2 = new Box(900,380,70,70);
    ground = new Ground(600,height,1200,20)
    pig1 = new Pig(800,380);
    bird=new Bird(40,80)
    log1=new Log(800,320,400,PI)
    box3 = new Box(700,280,70,70);
    pig2 = new Pig(800,280);
    box4 = new  Box(900,280,70,70)
    log2 = new Log(800,260,400,PI);
    box5 = new Box(800,240,70,70);
    log3 = new Log(740,240,100,-PI/4);

}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
 box2.display();
    pig1.display();
    log1.display();
    log2.display();
    log3.display();
    box5.display();
    ground.display();
    box3.display();
    box4.display();
    pig2.display();
    bird.display();
}