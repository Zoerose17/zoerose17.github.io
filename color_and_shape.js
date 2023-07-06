
function setup() {
  createCanvas(250, 250);
}
 
function draw() {
  background(200);
  
  translate(-75, -75)
  
// Blue Background 
  noStroke()
  fill(95, 139, 181);
  circle(200, 200, 200);
  
// Haze
  fill(126, 157, 189, 100)
  ellipse(110, 240, 200, 180)
  fill(139, 155, 179, 100)
  ellipse(100, 180, 120, 60)
  fill(139, 155, 179, 100)
  ellipse(110, 260, 150, 40)
  
// Hill thing, base
  beginShape();
  fill(119, 120, 114)
  vertex(300, 210);
    bezierVertex(220, 200, 190, 200, 140, 280);   
  endShape();
  fill(119, 120, 114)
  quad(300, 210, 300, 320, 140, 320, 140, 280)

// Hill thing, bright
  fill(142, 137, 141, 230)
  ellipse(230, 285, 180, 95)
  
  fill(205, 182, 167, 100)
  ellipse(225, 250, 130, 25)
  
  fill(168, 159, 168, 100)
  ellipse(210, 290, 120, 15)
  
  fill(166, 147, 128, 100)
  ellipse(160, 285, 40, 60)
  
  fill(183, 165, 160, 50)
  ellipse(180, 275, 55, 50)
  
  fill(182, 163, 154, 70)
  ellipse(175, 280, 50, 30)
  
  fill(158, 151, 155, 250)
  ellipse(230, 280, 100, 20)
  
  fill(197, 182, 176, 150)
  ellipse(220, 220, 60, 20)
  ellipse(240, 215, 50, 15)
  ellipse(200, 225, 20, 30)
  ellipse(190, 230, 22, 20)
  

// Tree
  fill(73, 53, 19)
  quad(220, 220, 230, 220, 230, 180, 220, 180)
  quad(245, 190, 245, 180, 205, 180, 205, 190)
  quad(205, 190, 215, 185, 190, 165, 185, 170)
  quad(210, 180, 220, 180, 230, 165, 220, 170)
  quad(245, 190, 235, 190, 235, 160, 245, 160)
  
// Clouds
  fill(225, 223, 230, 230)
  ellipse(165, 150, 40, 10)
  ellipse(165, 140, 25, 25)
  ellipse(177.5, 129.5, 40, 8)

// Clean up 
  strokeWeight(200)
  stroke(0)
  noFill();
  circle(200, 200, 400);
  
// Status Symbol 
  strokeWeight(12)
  fill(128, 132, 143)
  circle(257, 275, 50)
  
  noStroke()
  fill(0)
  circle(257, 275, 17)
  
  //print(mouseX, mouseY)
}

