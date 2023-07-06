
// Makes an image of a furby your cursor


let furby;
function preload() {
	furby = loadImage('furby.png')
}


function setup() {
	createCanvas(windowWidth, windowHeight)
	imageMode(CENTER)
	noCursor()
}

function draw() {
	background(175, 60, 130)
	image(furby, mouseX, mouseY)
}