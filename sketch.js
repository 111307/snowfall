const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
//var backgroundImg;
//var snowflakeImg;
var snowImg;

function preload() {
    //backgroundImg()
    //snowflakeImg = loadImage("snow5.webp");
    snow3Img = loadImage("snow3.jpg");
}

function setup() {
    createCanvas(1200, 800);
    //createSprite(400, 200, 50, 50);
    snow = createSprite(600, 400);
    snow.addImage("snow", snow3Img)
        //snowflake = createSprite(400, 200);
}

function draw() {
    background(255, 255, 255);
    drawSprites();
}