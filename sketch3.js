
// This sketch reveals a square saying "Found me!!" when your mouse hovers over a designated spot


function setup() {
	createCanvas(windowWidth, windowHeight)
	rectMode(CENTER)
	textMode(CENTER)
}


function draw() {

	if(mouseX > 70 && mouseX < 130 && mouseY > 70 && mouseY < 130)
	{
	background(255, 100, 150)
	//fill(0)
	//circle(100, 100, 60)
	noFill()
	strokeWeight(2)
	stroke(0)
	rect(100, 100, 70, 70)
	textSize(12)
	text("Found me!!", 70, 100)
	} else {
		background(0)
	}

}

