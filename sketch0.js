
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

function windowResize() {
	resizeCanvas(windowWidth, windowHeight)
}


function draw() {

	if(intro == true) {
		rEllipse()
		setTimeout(message, 5000)
	}
	if(homePageSetup == true) {
		homePage()
	}
	print(introMessage2)
	print(homePageSetup)



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
 	 if(mouseIsPressed){message2()}
	}
}


function message2() {
	introMessage2 = true 
	introMessage = false

	if(introMessage2 == true) {
	background(0)

	fill(175, 60, 130)
	textSize(30)
	text("“There is no such thing as a new idea. It is impossible. We simply take a \n lot of old ideas and put them into a sort of mental kaleidoscope. We give \n them a turn and they make new and curious combinations. We keep on \n turning and making new combinations indefinitely; but they are the \n same old pieces of colored glass that have been in use through all the ages. \n -Mark Twain”", windowWidth/2, 200) 
	setTimeout(pressEnter, 2000)

	if(key == 'a'){
		print("works")
		// homePageSetup = true 
		// introMessage2 = false
	}
	}
}

function pressEnter(){
	fill(175, 60, 130)
	textSize(30)
	text("Press A to continue", windowWidth/2, 500)
}

function homePage() {
	background(0)
	fill(225)
	rect(100, 100, 200, 300)
}
