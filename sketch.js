const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, runner;
var stone;

function preload() {
  backgroundImg = loadImage("jungle.jpg");
  
}

function setup() {
  createCanvas(1280,600);
  
  runner = createSprite(340, 300, 100, 100);

  stone = createSprite(1280, 300, 50, 50);
 

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(640, 580, 1280, 20);
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  
  
  ground.display();

  drawSprites();
}