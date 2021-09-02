var skyMap, waterMap, GroundMap;
var skyMapImage, waterMapImage, GroundMapImage;

var Bugatti, Car, Convertable, Ferrari, Lambo;
var airplane1, airplane2, airplane3, blimp, heliCopter;
var boat1, boat2, boat3, boat4, boat5;

var BugattiImage, CarImage, ConvertableImage, FerrariImage, LamboImage;
var airplane1Image, airplane2Image, airplane3Image, blimpImage, heliCopterImage;
var boat1Image, boat2Image, boat3Image, boat4Image, boat5Image;

var CarCrash, CarCrash2, CarCrash3;
var Play, PlayImage;
var backgroundCount = 0;
var rand = 0;
var gameState = 0;

var PlayerCar = 0;
var AICar = 0;
var Player

var youLose, youWin
var youLoseImage, youWinImage
var Input

function preload() {
  GroundMapImage = loadImage("GroundMap/roadimage.jpg");
  skyMapImage = loadImage("SkyMap/skyimage.jpg");
  waterMapImage = loadImage("WaterMap/waterImage.jpg");

  BugattiImage = loadImage("GroundMap/Bugatti-removebg-preview.png");
  CarImage = loadImage("GroundMap/CarImage1-removebg-preview.png");
  ConvertableImage = loadImage("GroundMap/Convertable-removebg-preview.png");
  FerrariImage = loadImage("GroundMap/ferrari-removebg-preview.png");
  LamboImage = loadImage("GroundMap/lamboBEST-removebg-preview.png");

  airplane1Image = loadImage("SkyMap/airplane1-removebg-preview.png");
  airplane2Image = loadImage("SkyMap/airplane2-removebg-preview.png");
  airplane3Image = loadImage("SkyMap/airplane3-removebg-preview.png");
  blimpImage = loadImage("SkyMap/blimp-removebg-preview.png");
  heliCopterImage = loadImage("SkyMap/helicopter-removebg-preview.png");

  boat1Image = loadImage("WaterMap/boat1-removebg-preview.png");
  boat2Image = loadImage("WaterMap/boat2-removebg-preview.png");
  boat3Image = loadImage("WaterMap/boat3-removebg-preview.png");
  boat4Image = loadImage("WaterMap/boat4-removebg-preview.png");
  boat5Image = loadImage("WaterMap/boat5-removebg-preview.png");

  CarCrash = loadImage("GroundMap/derbyCarCrushers2.png");
  CarCrash2 = loadImage("GroundMap/DerbyCa1r.jpg");
  CarCrash3 = loadImage("GroundMap/derbyCar.jpg");

  PlayImage = loadImage("Start-removebg-preview.png");

  youLoseImage = loadImage("YouLose!.jpg")
  youWinImage = loadImage("youWin!.jpg")
}

function setup() {
  createCanvas(displayWidth - 50, displayHeight - 150);
  Play = createSprite(width / 2, height - 100);
  Play.addImage("Start-removebg-preview.png", PlayImage);



  youLose = createSprite(width / 2, height / 2)
  youLose.addImage("YouLose!.jpg", youLoseImage)
  youLose.visible = false
  youWin = createSprite(width / 2, height / 2)
  youWin.addImage("YouLose!.jpg", youWinImage)
  youWin.visible = false
  
  
  CarsGroup = new Group()
  //PlanesGroup=new group()
  //BoatsGroup=new group()
}

function draw() {
  drawSprites();
  if (gameState == 0) {
    background("hotpink");
    if (backgroundCount == 0) {
      rand = Math.round(random(1, 3));
      if (rand == 1) {
        background(CarCrash);
        backgroundCount++;
      }
      if (rand == 2) {
        background(CarCrash2);
        backgroundCount++;
      }
      if (rand == 3) {
        background(CarCrash3);
        backgroundCount++;
      }
    }
    else {
      if (rand == 1) {
        background(CarCrash);
        if (backgroundCount > 30) {
          backgroundCount = 0;
          rand = 0;
        } else {
          backgroundCount++;
        }
      }
      if (rand == 2) {
        background(CarCrash2);
        if (backgroundCount > 30) {
          backgroundCount = 0;
          rand = 0;
        } else {
          backgroundCount++;
        }
      }
      if (rand == 3) {
        background(CarCrash3);
        if (backgroundCount > 30) {
          backgroundCount = 0;
          rand = 0;
        } else {
          backgroundCount++;
        }
      }
    }
    if (mousePressedOver(Play)) {
      Play.destroy();

      background(GroundMapImage);
      gameState = 1;
    }


  }
  if (gameState == 1) {


    if (PlayerCar === 0) {
      Lambo = createSprite(width / 7, 100);
      Lambo.addImage("GroundMap/lamboBEST-removebg-preview.png", LamboImage);
      Bugatti = createSprite(width / 3, 200);
      Bugatti.addImage("GroundMap/Bugatti-removebg-preview.png", BugattiImage);
      Ferrari = createSprite(width / 2, 100);
      Ferrari.addImage("GroundMap/ferrari-removebg-preview.png", FerrariImage);
      Car = createSprite(width / 1.5, 200);
      Car.addImage("GroundMap/CarImage1-removebg-preview.png", CarImage);
      Convertable = createSprite(width / 1.177, 100);
      Convertable.addImage("GroundMap/Convertable-removebg-preview.png", ConvertableImage);
      CarsGroup.add(Lambo);
      CarsGroup.add(Bugatti);
      CarsGroup.add(Car);
      CarsGroup.add(Ferrari);
      CarsGroup.add(Convertable);

      if (mousePressedOver(Lambo)) {
        console.log("hihihihiiiihihihihihihihhihi")
        PlayerCar = 1;
      }
      if (mousePressedOver(Ferrari)) {
        PlayerCar = 2;
      }
      if (mousePressedOver(Bugatti)) {

        PlayerCar = 3;
      }
      if (mousePressedOver(Convertable)) {
        PlayerCar = 4;
      }
      if (mousePressedOver(Car)) {
        PlayerCar = 5;
      }

    }
    console.log("sfsafcashjkfasjfsajfkasjhjhf = " + PlayerCar);
    if (PlayerCar !== 0) {
      console.log("PlayerCarPlayerCar = " + PlayerCar);
      Lambo.destroy();
      Ferrari.destroy();
      Bugatti.destroy();
      Car.destroy();
      Convertable.destroy();


      if (PlayerCar == 1) {
        CarsGroup.destroyEach();
        console.log("sfsafcashjkfasjfsajfkasjhjhf ");
        Player = createSprite(width / 7, height / 2.5);
        Player.addImage("Lambo", LamboImage);
        AICar1 = createSprite(width / 3, height / 1.5);
        AICar1.addImage("Buggati", BugattiImage);
        AICar2 = createSprite(width / 2, height / 2.5);
        AICar2.addImage("Ferrari", FerrariImage);
        AICar3 = createSprite(width / 1.5, height / 1.5);
        AICar3.addImage("Car", CarImage);
        AICar4 = createSprite(width / 1.177, height / 2.5);
        AICar4.addImage("Convertable", ConvertableImage);
        Lambo.destroy();
        Ferrari.destroy();
        Bugatti.destroy();
        Car.destroy();
        Convertable.destroy();

      }
      if (PlayerCar == 2) {
        CarsGroup.destroyEach();
        Player = createSprite(width / 7, height / 2.5);
        Player.addImage("Ferrari", FerrariImage);
        AICar1 = createSprite(width / 3, height / 1.5);
        AICar1.addImage("Buggati", BugattiImage);
        AICar2 = createSprite(width / 2, height / 2.5);
        AICar2.addImage("Lambo", LamboImage);
        AICar3 = createSprite(width / 1.5, height / 1.5);
        AICar3.addImage("Car", CarImage);
        AICar4 = createSprite(width / 1.177, height / 2.5);
        AICar4.addImage("Convertable", ConvertableImage);
        Lambo.destroy();
        Ferrari.destroy();
        Bugatti.destroy();
        Car.destroy();
        Convertable.destroy();

      }
      if (PlayerCar == 3) {
        CarsGroup.destroyEach();
        Player = createSprite(width / 7, height / 2.5);
        Player.addImage("Buggati", BugattiImage);
        AICar1 = createSprite(width / 3, height / 1.5);
        AICar1.addImage("Lambo", LamboImage);
        AICar2 = createSprite(width / 2, height / 2.5);
        AICar2.addImage("Ferrari", FerrariImage);
        AICar3 = createSprite(width / 1.5, height / 1.5);
        AICar3.addImage("Car", CarImage);
        AICar4 = createSprite(width / 1.177, height / 2.5);
        AICar4.addImage("Convertable", ConvertableImage);
        Lambo.destroy();
        Ferrari.destroy();
        Bugatti.destroy();
        Car.destroy();
        Convertable.destroy();

      }
      if (PlayerCar == 4) {
        CarsGroup.destroyEach();
        Player = createSprite(width / 7, height / 2.5);
        Player.addImage("Convertable", ConvertableImage);
        AICar1 = createSprite(width / 3, height / 1.5);
        AICar1.addImage("Buggati", BugattiImage);
        AICar2 = createSprite(width / 2, height / 2.5);
        AICar2.addImage("Ferrari", FerrariImage);
        AICar3 = createSprite(width / 1.5, height / 1.5);
        AICar3.addImage("Lambo", LamboImage);
        AICar4 = createSprite(width / 1.177, height / 2.5);
        AICar4.addImage("Convertable", CarImage);
        Lambo.destroy();
        Ferrari.destroy();
        Bugatti.destroy();
        Car.destroy();
        Convertable.destroy();

      }
      if (PlayerCar == 5) {
        CarsGroup.destroyEach();
        Player = createSprite(width / 7, height / 2.5);
        Player.addImage("Car", CarImage);
        AICar1 = createSprite(width / 3, height / 1.5);
        AICar1.addImage("Buggati", BugattiImage);
        AICar2 = createSprite(width / 2, height / 2.5);
        AICar2.addImage("Ferrari", FerrariImage);
        AICar3 = createSprite(width / 1.5, height / 1.5);
        AICar3.addImage("Car", ConvertableImage);
        AICar4 = createSprite(width / 1.177, height / 2.5);
        AICar4.addImage("Lambo", LamboImage);
        Lambo.destroy();
        Ferrari.destroy();
        Bugatti.destroy();
        Car.destroy();
        Convertable.destroy();

      }
     
    }
    console.log("PlayerCar = " + PlayerCar)
    gameState=2
  }
if(gameState==2){
  background(GroundMapImage)
  if(keyDown(LEFT_ARROW)){
    Player.velocityX=-random(3,12)
  }
  if(keyDown(RIGHT_ARROW)){
    Player.velocityX=random(3,12)
  }
  if(keyDown(UP_ARROW)){
    Player.velocityY=-random(3,12)
  }
  if(keyDown(DOWN_ARROW)){
    Player.velocityY=random(3,12)
  }
 // edges=createEdgeSprites()
  //Player.bounceOff(edges)
}
  drawSprites();
}
