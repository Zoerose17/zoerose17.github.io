
// This sketch is 

let x = 0
let y = 0

function setup() {
	createCanvas(windowWidth, windowHeight)
	noLoop()
}

function draw() {
  background(175, 60, 130)
  x = x + 1
  y = y + 1
  if (x > width && y > length) {
    x = 0
    y = 0
  }
  ellipse(x, y, 30, 30)
 // line(x, 0, x, height)


}

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}
