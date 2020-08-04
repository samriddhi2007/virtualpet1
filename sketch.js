//Create variables here
var dog,happydog
var database
var foodS,foodStock;
function preload()
{
  dogImg = loadImgage("images/doglmg.png")
  dogImg2 = loadImage("images/doglmg1.png")
	//load images here
}

function setup() {
  createCanvas(500, 500);
   //dog = createSprite(200,200,20,20)
  dog = new Dog(200,200,20,20)
  
}


function draw() {  
 
  dog.display();
  
  drawSprites();
  //add styles here

}



