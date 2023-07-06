
// This sketch changes where an ellipse is depending on whether or not you are clicking your mouse 

let ellipseX = 300
function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	background(225)
	fill(0)
	ellipse(ellipseX, 300, 50, 80)

	if (mouseIsPressed === true) {
		ellipseX = 800
	}
	else {
		ellipseX = 300
	}
}

//This does not work
function mouseClicked() {
	if(ellipseX == 300) {
		ellipseX = 100
	}
	if(ellipseX == 100) {
		ellipseX = 300
	}
}


// Learn mouseClicked