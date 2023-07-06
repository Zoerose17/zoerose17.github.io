
// This sketch makes the background purple when your mouse hovers over a 400x400 spot

function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
//	background(130, 113, 200)
//	ellipse(100, 100, 100, 100)

	if(mouseX < 400 && mouseY < 400) {
background(130, 113, 200)
	}
else {
	background(255)
}

}
