
let status
let ponline
let pidle
let pdnd
let poffline
let online = true 
let idle = false 
let dnd = false 
let offline = false 
let a = ''

function preload() {
  status = loadImage('status.png')
  ponline = loadImage('online.png')
  pidle = loadImage('idle.png')
  pdnd = loadImage('dnd.png')
  poffline = loadImage('offline.png')
}

function setup() {
  createCanvas(680, 350);
  background(0);
  imageMode(CENTER)
    let inp = createInput('');
  inp.position(290, 297);
  inp.size(350);
  inp.input(myInputEvent);
}

function myInputEvent() {
 a = (this.value());
}

 
function draw() {
  
  translate(-75, -50)


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
  strokeWeight(50)
  stroke(0)
  noFill();
  circle(200, 200, 250);
  noStroke()
  fill(0)
  rect(75, 300, 100, 40)
  rect(75, 280, 50, 80)
  rect(280, 290, 50, 50)

// Image 
  image(status, 550, 200, 400, 250)

  if(mouseIsPressed && (mouseX > 275) && (mouseX < 680)) 
    {
      if((mouseY > 0) && (mouseY < 55))
      {
          online = true 
          idle = false 
          dnd = false 
          offline = false 
      }
      if((mouseY > 55) && (mouseY < 105))
      {
          online = false  
          idle = true  
          dnd = false 
          offline = false 
      }
      if((mouseY > 105) && (mouseY < 165))
      {
          online = false  
          idle = false   
          dnd = true  
          offline = false 
      }
      if((mouseY > 165) && (mouseY < 250))
      {
          online = false  
          idle = false   
          dnd = false 
          offline = true  
      }
}

  if((mouseX > 280) && (mouseX < 670)) 
    {
      if((mouseY > 0) && (mouseY < 55))
      {
        image(ponline, 550, 103, 380, 38)
      }
      if((mouseY > 55) && (mouseY < 105))
      {
        image(pidle, 550, 159, 380, 38)
      }
      if((mouseY > 105) && (mouseY < 165))
      {
        image(pdnd, 550, 209, 380, 58)
      }
      if((mouseY > 165) && (mouseY < 250))
      {
        image(poffline, 550, 278, 380, 78)
      }
}

//print(mouseX, mouseY)

if (online == true) {
    strokeWeight(12)
    stroke(0)
    fill(28, 167, 93)
    circle(257, 275, 50)
}

if (idle == true) {
    strokeWeight(12)
    stroke(0)
    fill(241, 178, 65)
    circle(257, 275, 50)
    
    noStroke()
    fill(0)
    circle(249, 267, 30)
}

if (dnd == true) {
    strokeWeight(12)
    stroke(0)
    fill(245, 62, 67)
    circle(257, 275, 50)
   
    noStroke()
    fill(0)
    rect(245, 270, 25, 8)
}

if (offline == true) {
  strokeWeight(12)
  stroke(0)
  fill(128, 132, 143)
  circle(257, 275, 50)

  noStroke()
  fill(0)
  circle(257, 275, 17)
}


// Status Message

  fill(100)
  noStroke()
  rect(90, 350, 220, 20, 5, 5, 5, 5)

  //print(a)

  fill(255)
  text('Status: ' + a, 95, 364)
  text('Set status here:', 370, 344)
  text('Change status here:', 370, 75)

  quad(329, 0, 329, 500, 330, 500, 330, 0)
}
