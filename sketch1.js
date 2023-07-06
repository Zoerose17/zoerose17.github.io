
// This sketch makes the screen randomly flash different colors

function setup() {
  createCanvas(windowWidth, windowHeight)
  frameRate(10)
}

function draw() {
 // background(225)
  background(random(0,255), random(0,255), random(0,255))

}
