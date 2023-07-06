


function setup () {
	createCanvas(windowWidth, windowHeight)
	frameRate(50)
}

function draw() {
	background(175, 60, 130)
	if (mouseIsPressed === true) 
	{ ellipse(pmouseX, pmouseY, 50, 50) }

	for(let i=0; i<width; i=i+10){
		line(0, 0, i, height)
	}
	for(let i=0; i<height; i=i+10){
		line(0, i, width, i)
	}
	for(let i=0; i<height; i=i+10){
		line(0, windowHeight/2, windowWidth, i)
	}
}