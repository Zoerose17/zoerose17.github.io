
let xPos 
let yPos 

let xSpeed = 2
let ySpeed = 2

let furby

let mouseDist

let score = 0

let startBool = true 
let winBool = false

let rotation = 0

function preload() {
	furby = loadImage('furby.png')
}

function setup() {
	createCanvas(windowWidth, windowHeight)
	imageMode(CENTER)
	textAlign(CENTER)
	 xPos = random(15, windowWidth - 15)
	 yPos = random(15, windowHeight -15) 
}

function draw() {

	if(startBool == true)
		{start()}
	if(winBool == true)
		{winScreen()}
} 

function winScreen(){
	background(0)
	fill(225)
	textSize(40)
	text("You Won!", windowWidth/2, 50)

	rotation++

	push()
	translate(windowWidth/2, windowHeight/2)
	rotate(radians(rotation))
	image(furby, 0, 0)
	pop()
}

function start(){
	background(175, 60, 130)
	fill(225)
	textSize(40)
	text("Your score is: " + score, windowWidth/2, 50)
	image(furby, xPos, yPos, 20, 20)

		move()
		limitations()
		mouseControl()
		winSwitch()
}

function windowResize() {
	resizeCanvas(windowWidth, windowHeight)
}

function move() {
		xPos = xPos + xSpeed
		yPos = yPos + ySpeed
}

function limitations() {
	if (xPos > windowWidth || xPos < 0) {
		(xSpeed = xSpeed * -1)
		}
	if (yPos > windowHeight || yPos < 0) {
		(ySpeed = ySpeed * -1)
		}
}

function mouseControl() {
		mouseDist = dist(mouseX, mouseY, xPos, yPos)
		print(mouseDist)

		if(mouseDist < 30) {
		xPos = random(15, windowWidth - 15)
		yPos = random(15, windowHeight -15)
		xSpeed = xSpeed * 1.2
		ySpeed = ySpeed * 1.2
		score++
}
}

function winSwitch() {
	if(score == 2)
		{startBool = false
		winBool = true}
}





	
	

