
let furbyBool = false 
let whiteBool = false 



let furby;
function preload() {
	furby = loadImage('furby.png')
}


function setup() {
	createCanvas(windowWidth, windowHeight)
	background(175, 60, 130)
	imageMode(CENTER)
}


function draw() {
	noStroke()
	smooth()

	if(whiteBool == true)
	{whiteBrush()}
	
	if(furbyBool == true)
	{furbyBrush()}


}



function furbyBrush() {
	if(mouseIsPressed)
		{image(furby, mouseX, mouseY, 40, 40)}
}


function whiteBrush() {
	if(mouseIsPressed) 
		{ellipse(mouseX, mouseY, 40, 40)}
}


function keyPressed() {
	if(key == 'w'){
		whiteBool = true
		furbyBool = false
	}
	if(key == 'f'){
		whiteBool = false 
		furbyBool = true
	}
	if(key == 'e'){
		background(255)
		whiteBool = false 
		furbyBool = false
	}
	if(key == 's'){
		save('paint.jpg')
	}
}










