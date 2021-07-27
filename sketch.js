const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg_img,engine,world;
var Snowparticle=[];
//var snow;
var SnowImg;
var SnowmanImg;


function preload(){

  bg_img= loadImage("snow3.jpg");

}

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

}

function draw() {
  background(bg_img);  
  Engine.update(engine);
  if(frameCount%20===0){
    Snowparticle.push(new Snow(random(100, 700),-50,10));

  }

  for (var j = 0; j < Snowparticle.length; j++) {
   
    Snowparticle[j].display();
  }
 
  drawSprites();

}