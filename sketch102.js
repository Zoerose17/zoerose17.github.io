
//Variables for text fade effects
var fade;
var fadeAmount = 1


// Variables for pages 
let intro = true 
let eRandom = true 
let introMessage = false
let introMessage2 = false
let homePageSetup = false



function setup() {
  createCanvas(windowWidth, windowHeight)
  background (200)
  fade = 0
  textAlign(CENTER)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}


function draw() {

  if(intro == true) {
    rEllipse()
    setTimeout(message, 5000)
  }

  if(introMessage == true){
    if(mouseIsPressed){
      message2()
    }
  }


  if(homePageSetup == true) {
    homeScreen()
  }
  // print(introMessage2)
  // print(homePageSetup)



}

function rEllipse() {
  if(eRandom == true){
      frameRate(1000)
      for(let i=0; i<100; i++){
      fill(0)
      ellipse(random(0,windowWidth), random(0,windowHeight), 25, 25) }
      setTimeout(introMessage = true, 4000)
    }
}


function message() {
  eRandom = false 
  
  if(introMessage == true){
  background(0)
  fill(175, 60, 130, fade)
  textSize(100)
    text("Welcome", windowWidth/2, 100)
   if (fade<0) fadeAmount=1; 
   fade += fadeAmount; 
  }
}


function message2() {
  introMessage2 = true 
  introMessage = false

  if(introMessage2 == true) {
  background(0)
  fill(175, 60, 130)
  textSize(30)
  text("“There is no such thing as a new idea. It is impossible. We simply take a \n lot of old ideas and put them into a sort of mental kaleidoscope. We give \n them a turn and they make new and curious combinations. We keep on \n turning and making new combinations indefinitely; but they are the \n same old pieces of colored glass that have been in use through all the ages.”", windowWidth/2, 200) 
  text("- Mark Twain", windowWidth/2, 400)
  setTimeout(pressEnter, 2000)
  }

}

function pressEnter(){
  fill(175, 60, 130)
  textSize(30)
  text("Press A to continue", windowWidth/2, 500)
}

function keyPressed(){
  if(key == 'a'){
    homePageSetup = true 
  }
}


function homePage() {
  background(0)
  fill(225)
  rect(100, 100, 200, 300)
}


function homeScreen(){
  background(0)
  fill(100)
  rect(30, 30, windowWidth-60, 130)
  // print(windowWidth)
  fill(225)
  textSize(30)
  text("Take the Journey:", 50, 80)
  textSize(15)
  text("Click Here to Start", 50, 120)
  textWrap(WORD)
  text("This is my explanation. This is my explanation. This is my explanation. This is my explanation. This is my explanation. This is my explanation. This is my explanation.", 320, 60, ((windowWidth-320)-60))
  categoryArt()
  categoryMusic()
  categoryMedia()
  categoryGames()
  categoryIdk()

}//needs to equal 205, other ends at 185, width is 804

function categoryArt(){
  fill(255, 200, 255)
  rect(30, 190, windowWidth/6, 300)

  fill(0)
  textSize(45)
  text("Art", 35, 245)

  textSize(20)
  text("- Mona Lisa", 35, 275)
  text("- The Starry Night", 35, 305)
  text("- The Birth of Venus", 35, 335)

}


function categoryMusic(){
  fill(200, 255, 255)
  rect(((windowWidth/6)+45), 190, windowWidth/6, 300)

  fill(0)
  textSize(45)
  text("Music", (windowWidth/6)+55, 245)

  textSize(20)
  text("- Never Let Me Down, Kanye West", (windowWidth/6)+55, 275)
  text("- The Starry Night", (windowWidth/6)+55, 305)
  text("- The Birth of Venus", (windowWidth/6)+55, 335)
}

function categoryMedia(){
  fill(255, 255, 200)
  rect(((windowWidth/3)+60), 190, windowWidth/6, 300)

  fill(0)
  textSize(45)
  text("Media", (windowWidth/3)+70, 245)

  textSize(20)
  text("- Mona Lisa", (windowWidth/3)+70, 275)
  text("- The Starry Night", (windowWidth/3)+70, 305)
  text("- The Birth of Venus", (windowWidth/3)+70, 335)
}

function categoryGames(){
  fill(255, 200, 200)
  rect(((windowWidth/2)+75), 190, windowWidth/6, 300)

  fill(0)
  textSize(45)
  text("Games", (windowWidth/2)+85, 245)

  textSize(20)
  text("- Mona Lisa", ((windowWidth/2)+80), 275)
  text("- The Starry Night", ((windowWidth/2)+80), 305)
  text("- The Birth of Venus", ((windowWidth/2)+80), 335)
}

function categoryIdk(){
  fill(200, 200, 255)
  rect(((windowWidth*2/3)+90), 190, windowWidth/6, 300)

  fill(0)
  textSize(45)
  text("Idk", (windowWidth*2/3)+100, 245)

  textSize(20)
  text("- Mona Lisa", ((windowWidth*2/3)+95), 275)
  text("- The Starry Night", ((windowWidth*2/3)+95), 305)
  text("- The Birth of Venus", ((windowWidth*2/3)+95), 335)
}

