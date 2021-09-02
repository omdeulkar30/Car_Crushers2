var skyMap, waterMap, groundMap
var skyMapImage, waterMapImage, groundMapImage

var Bugatti, Car, Convertable, Ferrari, Lambo
var airplane1, airplane2, airplane3, blimp, heliCopter
var boat1, boat2, boat3, boat4, boat5

var BugattiImage, CarImage, ConvertableImage, FerrariImage, LamboImage
var airplane1Image, airplane2Image, airplane3Image, blimpImage, heliCopterImage
var boat1Image, boat2Image, boat3Image, boat4Image, boat5Image

var CarCrash, BoatCrash, PlaneCrash
var Play, PlayImage
var backgroundCount = 0
var rand = 0
var gameState = 0
 

var PlayerCar = 0
var AICar= 0
function preload() {
  groundMapImage = loadImage("GroundMap/roadimage.jpg")
  skyMapImage = loadImage("SkyMap/skyimage.jpg")
  waterMapImage = loadImage("WaterMap/waterImage.jpg")

  BugattiImage = loadImage("GroundMap/Bugatti-removebg-preview.png")
  CarImage = loadImage("GroundMap/CarImage1-removebg-preview.png")
  ConvertableImage = loadImage("GroundMap/Convertable-removebg-preview.png")
  FerrariImage = loadImage("GroundMap/ferrari-removebg-preview.png")
  LamboImage = loadImage("GroundMap/lamboBEST-removebg-preview.png")

  airplane1Image = loadImage("SkyMap/airplane1-removebg-preview.png")
  airplane2Image = loadImage("SkyMap/airplane2-removebg-preview.png")
  airplane3Image = loadImage("SkyMap/airplane3-removebg-preview.png")
  blimpImage = loadImage("SkyMap/blimp-removebg-preview.png")
  heliCopterImage = loadImage("SkyMap/helicopter-removebg-preview.png")

  boat1Image = loadImage("WaterMap/boat1-removebg-preview.png")
  boat2Image = loadImage("WaterMap/boat2-removebg-preview.png")
  boat3Image = loadImage("WaterMap/boat3-removebg-preview.png")
  boat4Image = loadImage("WaterMap/boat4-removebg-preview.png")
  boat5Image = loadImage("WaterMap/boat5-removebg-preview.png")

  CarCrash = loadImage("GroundMap/derbyCarCrushers2.png")
  BoatCrash = loadImage("WaterMap/battleship.png")
  PlaneCrash = loadImage("SkyMap/derbyjets.png")

  PlayImage = loadImage("Start-removebg-preview.png")
}

function setup() {
  createCanvas(displayWidth - 50, displayHeight - 150);
  Play = createSprite(width / 2, height -100)
  Play.addImage("Start-removebg-preview.png", PlayImage)

  groundMap = createSprite(width / 6, height / 2, (2 * width) / 6, height)
  groundMap.addImage("GroundMap/roadimage.jpg", groundMapImage)
  groundMap.visible = false
  //groundMap.scale=3
  SkyMap = createSprite(width / 2, height / 2, (2 * width) / 6, height)
  SkyMap.addImage("SkyMap/skyimage.jpg", skyMapImage)
  SkyMap.visible = false
  WaterMap = createSprite(width - width / 6, height / 2, (2 * width) / 6, height)
  WaterMap.addImage("WaterMap/waterImage.jpg", waterMapImage)
  WaterMap.visible = false

  
 // CarsGroup=new group()
 //PlanesGroup=new group()
  //BoatsGroup=new group()
}

function draw() {
  drawSprites()
  if (gameState == 0) {
    background("hotpink")
    if (backgroundCount == 0) {
      rand = Math.round(random(1, 3))
      if (rand == 1) {
        background(CarCrash);
        backgroundCount++
      }
      if (rand == 2) {
        background(BoatCrash);
        backgroundCount++
      }
      if (rand == 3) {
        background(PlaneCrash);
        backgroundCount++
      }
    }
    else {
      if (rand == 1) {
        background(CarCrash);
        if (backgroundCount > 30) {
          backgroundCount = 0
          rand = 0
        }
        else {
          backgroundCount++
        }
      }
      if (rand == 2) {
        background(BoatCrash);
        if (backgroundCount > 30) {
          backgroundCount = 0
          rand = 0
        }
        else {
          backgroundCount++

        }
      }
      if (rand == 3) {
        background(PlaneCrash);
        if (backgroundCount > 30) {
          backgroundCount = 0
          rand = 0
        }
        else {
          backgroundCount++
        }
      }
    }
    console.log("WORKING" + rand)
    console.log("WORKING1" + backgroundCount)
    if (mousePressedOver(Play)) {
      Play.destroy()
      groundMap.visible = true
      SkyMap.visible = true
      WaterMap.visible = true
    }

    if (mousePressedOver(groundMap)) {
      gameState = 1
      groundMap.destroy()
      SkyMap.destroy()
      WaterMap.destroy()
    }
    if (mousePressedOver(SkyMap)) {
      gameState = 2
      groundMap.destroy()
      SkyMap.destroy()
      WaterMap.destroy()
    }
    if (mousePressedOver(WaterMap)) {
      gameState = 3
      groundMap.destroy()
      SkyMap.destroy()
      WaterMap.destroy()
    }
  }
  if (gameState == 1) {
    background(groundMapImage)
    Lambo=createSprite(width/7, height/1.5)
    Lambo.addImage("GroundMap/lamboBEST-removebg-preview.png",LamboImage)
    Bugatti=createSprite(width/3, height/2.5)
    Bugatti.addImage("GroundMap/Bugatti-removebg-preview.png",BugattiImage)
    Ferrari=createSprite(width/2, height/1.5)
    Ferrari.addImage("GroundMap/ferrari-removebg-preview.png",FerrariImage)
    Car=createSprite(width/1.5, height/2.5)
    Car.addImage("GroundMap/CarImage1-removebg-preview.png",CarImage)
    Convertable=createSprite(width/1.177, height/1.6)
    Convertable.addImage("GroundMap/Convertable-removebg-preview.png",ConvertableImage)
    if(mousePressedOver(Lambo)){
     /* PlayerCar = Lambo
      AICar = Bugatti
      AICar = Ferrari
      AICar = Car
      AICar = Convertable*/
      PlayerCar =  1
    }
    if(mousePressedOver(Ferrari)){
      /* PlayerCar = Lambo
       AICar = Bugatti
       AICar = Ferrari
       AICar = Car
       AICar = Convertable*/
       PlayerCar =  2
     }
     if(mousePressedOver(Bugatti)){
      /* PlayerCar = Lambo
       AICar = Bugatti
       AICar = Ferrari
       AICar = Car
       AICar = Convertable*/
       PlayerCar =  3
     }
     if(mousePressedOver(Convertable)){
      /* PlayerCar = Lambo
       AICar = Bugatti
       AICar = Ferrari
       AICar = Car
       AICar = Convertable*/
       PlayerCar =  4
     }
     if(mousePressedOver(Car)){
      /* PlayerCar = Lambo
       AICar = Bugatti
       AICar = Ferrari
       AICar = Car
       AICar = Convertable*/
       PlayerCar =  5
     }
     if(PlayerCar!=0){
       console.log("PlayerCar")
       Lambo.destroy()
       Ferrari.destroy()
       Bugatti.destroy()
       Car.destroy()
       Convertable.destroy()
       Lambo.visible=false
       Ferrari.visible=false
       Bugatti.visible=false
       Car.visible=false
       Convertable.visible=false 
       if(PlayerCar==1){
         console.log("PlayerCar=1")
         Player=createSprite(width/7, height/2.5)
         Player.addImage("Lambo", LamboImage)
         AICar1=createSprite(width/3, height/1.5)
         AICar1.addImage("Buggati",BugattiImage)
         AICar2=createSprite(width/2, height/2.5)
         AICar2.addImage("Ferrari",FerrariImage)
         AICar3=createSprite(width/1.5, height/1.5)
         AICar3.addImage("Car",CarImage)
         AICar4=createSprite(width/1.177, height/2.5)
         AICar4.addImage("Convertable",ConvertableImage)
       }
       if(PlayerCar==2){
        Player=createSprite(width/7, height/2.5)
        Player.addImage("Ferrari", FerrariImage)
        AICar1=createSprite(width/3, height/1.5)
        AICar1.addImage("Buggati",BugattiImage)
        AICar2=createSprite(width/2, height/2.5)
        AICar2.addImage("Lambo",LamboImage)
        AICar3=createSprite(width/1.5, height/1.5)
        AICar3.addImage("Car",CarImage)
        AICar4=createSprite(width/1.177, height/2.5)
        AICar4.addImage("Convertable",ConvertableImage)
      }
      if(PlayerCar==3){
        Player=createSprite(width/7, height/2.5)
        Player.addImage("Buggati", BugattiImage)
        AICar1=createSprite(width/3, height/1.5)
        AICar1.addImage("Lambo",LamboImage)
        AICar2=createSprite(width/2, height/2.5)
        AICar2.addImage("Ferrari",FerrariImage)
        AICar3=createSprite(width/1.5, height/1.5)
        AICar3.addImage("Car",CarImage)
        AICar4=createSprite(width/1.177, height/2.5)
        AICar4.addImage("Convertable",ConvertableImage)
      }
      if(PlayerCar==4){
        Player=createSprite(width/7, height/2.5)
        Player.addImage("Car", CarImage)
        AICar1=createSprite(width/3, height/1.5)
        AICar1.addImage("Buggati",BugattiImage)
        AICar2=createSprite(width/2, height/2.5)
        AICar2.addImage("Ferrari",FerrariImage)
        AICar3=createSprite(width/1.5, height/1.5)
        AICar3.addImage("Lambo",LamboImage)
        AICar4=createSprite(width/1.177, height/2.5)
        AICar4.addImage("Convertable",ConvertableImage)
      }
      if(PlayerCar==5){
        Player=createSprite(width/7, height/2.5)
        Player.addImage("Convertable", ConvertableImage)
        AICar1=createSprite(width/3, height/1.5)
        AICar1.addImage("Buggati",BugattiImage)
        AICar2=createSprite(width/2, height/2.5)
        AICar2.addImage("Ferrari",FerrariImage)
        AICar3=createSprite(width/1.5, height/1.5)
        AICar3.addImage("Car",CarImage)
        AICar4=createSprite(width/1.177, height/2.5)
        AICar4.addImage("Lambo",LamboImage)
      }
     }
    if(PlayerCar=1&&keyCode==38 ){
      
    }
  }
  if (gameState == 2) {
    background(skyMapImage)
    airplane1=createSprite(width/7, height/1.5)
    airplane1.addImage("SkyMap/airplane1-removebg-preview.png",airplane1Image)
   airplane2=createSprite(width/3, height/2.5)
   airplane2.addImage("SkyMap/airplane2-removebg-preview.png",airplane2Image)
    airplane3=createSprite(width/2, height/1.5)
    airplane3.addImage("SkyMap/airplane3-removebg-preview.png",airplane3Image)
    blimp=createSprite(width/1.5, height/2.5)
    blimp.addImage("SkyMap/blimp-removebg-preview.png",blimpImage)
    heliCopter=createSprite(width/1.177, height/1.6)
    heliCopter.addImage("SkyMap/helicopter-removebg-preview.png",heliCopterImage)
  }
  if (gameState == 3) {
    background(waterMapImage)
    boat1=createSprite(width/7, height/1.5)
    boat1.addImage("WaterMap/boat1-removebg-preview.png",boat1Image)
    boat2=createSprite(width/3, height/2.5)
    boat2.addImage("WaterMap/boat2-removebg-preview.pngg",boat2Image)
    boat3=createSprite(width/2, height/1.5)
    boat3.addImage("WaterMap/boat3-removebg-preview.png",boat3Image)
    boat4=createSprite(width/1.5, height/2.5)
    boat4.addImage("WaterMap/boat4-removebg-preview.png",boat4Image)
    boat5=createSprite(width/1.177, height/1.6)
    boat5.addImage("WaterMap/boat5-removebg-preview.png",boat5Image)
  }
  drawSprites();
}