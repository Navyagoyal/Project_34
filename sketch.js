//Create variables here
var dog,happydog,foodS,foodStock,database;
function preload()
{
  //load images here
  dog = loadImage("images/Dog.png");
  happydog = loadImage("images/happydog.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  var DogSprite=createSprite(250,250,50,50);
  DogSprite.addImage(dog);
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}

function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happydog);
  }
  drawSprites();
  //add styles here
  textSize(20);
  fill("white");
  stroke(2);
  text("Note: Use UP_ARROW Key to feed Drago milk",100,20);
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })  
}



