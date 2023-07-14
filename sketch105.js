var fade;
var fadeAmount = 1


// Variables for pages 
let intro = true 
let eRandom = true 
let introMessage = false
let introMessage2 = false
let homePageSetup = false

//Variables for buttons: MEDIA
let artButton 
let musicButton 

//Variables for buttons: STOP AND GO
// let button

//Variables for media
let img1 // Lightbulb 
let img2 // Never Let Me Down Cover Art
let img3 // DAMN. album art
let img4 // Cali love album art
let img5


let song1
let song2
let song3
let song4

let vSong1
let vSong2
let vSong3
let vSong4

let songChosen = false
let chosenSong 


let art1
let art2
let art3
let art4


//Variables for visualized audio, unsure if they'll be used
var button;
var fft;
var song;




function preload(){
//Loaded Images 
	img1 = loadImage("light1.jpg");
	img2 = loadImage("nlmdAC.jpg")
	img3 = loadImage("damn.jpg")
	img4 = loadImage("caliLuv.jpg")
	img5 = loadImage("borah.png")

// Loaded Songs 
  song1 = loadSound("Ye.mp3"); // Song: Never Let You Down 
  song2 = loadSound("humble.mp3"); // Song: Humble 
  song3 = loadSound("calilove.mp3"); // Song:
  song4 = loadSound("borahh.mp3"); // Song:

//Loaded Art
  // art1 = loadImage(); // Art:
  // art2 = loadImage(); // Art:
  // art3 = loadImage(); // Art:
  // art4 = loadImage(); // Art:
}

function setup() {
	createCanvas(windowWidth, 800)
	background (200)
	noStroke()
	fade = 0
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	print(mouseX, mouseY)
	// print(windowHeight)
	//print(int(song1.currentTime()))
// Conditionals 
		if(intro == true) {
			rEllipse()
			setTimeout(message, 5000)
		}

		if(introMessage == true){
			if(mouseIsPressed){
				message2()
			}
		}

		if(homePageSetup == true) {
			homeScreen()
		}

		if(artButton == true) {
			toggleArt()
		}

		if(musicButton == true) {
			toggleMusic()
		}
}

function rEllipse() {
	if(eRandom == true){
			frameRate(1000)
			for(let i=0; i<100; i++){
			fill(0)
			ellipse(random(0,windowWidth), random(0,windowHeight), 25, 25) }
			setTimeout(introMessage = true, 2000)
		}
}

function message() {
		textAlign(CENTER)

	eRandom = false	
	
	if(introMessage == true){
	background(0)
	fill(175, 60, 130, fade)
	textSize(100)
    text("Welcome", windowWidth/2, 100)
 	 if (fade<0) fadeAmount=1; 
 	 fade += fadeAmount; 
	}
}

function message2() {
		textAlign(CENTER)

	introMessage2 = true 
	introMessage = false

	if(introMessage2 == true) {
	background(0)
	fill(175, 60, 130)
	textSize(30)
	text("“There is no such thing as a new idea. It is impossible. We simply take a \n lot of old ideas and put them into a sort of mental kaleidoscope. We give \n them a turn and they make new and curious combinations. We keep on \n turning and making new combinations indefinitely; but they are the \n same old pieces of colored glass that have been in use through all the ages.”", windowWidth/2, 200) 
	text("- Mark Twain", windowWidth/2, 400)
	setTimeout(pressEnter, 2000)
	}
}

function pressEnter(){
	fill(175, 60, 130)
	textSize(30)
	text("Press A to continue", windowWidth/2, 500)
}

function keyPressed(){
	if(key == 'a'){
		homePageSetup = true 
	}
}

function homeScreen(){

// Setup for background & text on top of screen
	noStroke()
	textAlign(LEFT)
	background(0)
	fill(100)
	rect(30, 30, windowWidth-60, 100)
	fill(225)
	textSize(30)
	text("Take the Journey:", 50, 80)
	textSize(15)
	//text("Click Here to Start", 300, 77.5)
	textAlign(RIGHT)
	textSize(30)
	text("What really is originality?", windowWidth-60, 80)
	imageMode(CENTER)
	image(img1, windowWidth/2, 120)
	textAlign(LEFT)

// Setup for buttons

	//ART
		//Setup
	fill(121, 78, 78)
	rect(30, 160, (windowWidth/2)-45, 30, 20)
	fill(255)
	textSize(20)
	text("ART", (windowWidth/4)-15, 182)

		//Working function
	if(mouseIsPressed){
		if(mouseY > 160 && mouseY < 190) {
			if(mouseX > 30 && mouseX < windowWidth/2 -15) {
				artButton = true 
				musicButton = false
			} } }

	//MUSIC
			//Setup
	fill(121, 78, 119)
	rect((windowWidth/2)+15, 160, (windowWidth/2)-45, 30, 20)
	fill(255)
	textSize(20)
	text("MUSIC", (windowWidth*3/4)-30, 182)

			//Working function
	if(mouseIsPressed){
		if(mouseY > 160 && mouseY < 190) {
			if(mouseX > (windowWidth/2)+15 && mouseX < windowWidth - 30) {
				musicButton = true
				artButton = false
			} } }

// Setup for geometry


// Conditionals for menu 

  if(artButton == true){

		fill(0)
		stroke(225)
		strokeWeight(1)
		rect(45, 220, 170, 30)
		rect(45, 275, 170, 30)
		rect(45, 330, 170, 150)
		rect(250, 290, windowWidth-290, 490)
		strokeWeight(3)
		rect(250, 220, windowWidth-290, 45)
  	if(mouseIsPressed){
  		if(mouseX > 60 && mouseX < 155){
  			if(mouseY > 465 && mouseY < 485){
  				print("Art 1!")
  			}
  			if(mouseY > 490 && mouseY < 510){
  				print("Art 2!")
  			}
  			if(mouseY > 515 && mouseY < 535){
  				print("Art 3!")
  			}
  			if(mouseY > 540 && mouseY < 560){
  				print("Art 4!")
  			}
  		}
  	}
  }

  if(musicButton == true){

		fill(0)
		stroke(225)
		strokeWeight(1)
		rect(45, 220, 170, 30)
		rect(45, 275, 170, 30)
		rect(45, 330, 170, 150)
		rect(250, 290, windowWidth-290, 490)
		strokeWeight(3)
		rect(250, 220, windowWidth-290, 45)

  	if(mouseIsPressed){
  		if(mouseX > 60 && mouseX < 155){
  			if(mouseY > 370 && mouseY < 390){
  				print("Song 1!")
  				songChosen = true
  				vSong1 = true
  				vSong2 = false
  				vSong3 = false
  				vSong4 = false
  				chosenSong = song1
  			}
  			if(mouseY > 395 && mouseY < 415){
  				print("Song 2!")
   				songChosen = true
  				vSong1 = false
  				vSong2 = true
  				vSong3 = false
  				vSong4 = false
  				chosenSong = song2
  			}
  			if(mouseY > 420 && mouseY < 440){
  				print("Song 3!")
   				songChosen = true
  				vSong1 = false
  				vSong2 = false
  				vSong3 = true
  				vSong4 = false
  				chosenSong = song3
  			}
  			if(mouseY > 445 && mouseY < 465){
  				print("Song 4!")
   				songChosen = true
  				vSong1 = false
  				vSong2 = false
  				vSong3 = false
  				vSong4 = true
  				chosenSong = song4
  			}
  		}
  	}


  	if(vSong1 == true){
  		imageMode(CORNER)
  		image(img2, 45, 490, 170, 170)
  		noStroke()
  		fill(255)
  		textSize(15)
  		textWrap(WORD)
  		text("Song: Never Let You Down\nArtist: Kanye West\nFeatures: Jay-Z and J. Ivy\nProducer: Kanye West\nReleased: 2004", 45, 670, 180)
  		if(song1.currentTime() > 16 ){ //first instence of the corus 
  		text("Part of the chorus:\n'One thing I've found, one thing I found\nOh no, you'll never let me down'\nis a sample from the song 'Maybe It's the Power of Love' by Bojack, which was released first in 1980.", 280, 330, 140)
  		stroke(90, 70, 165)
  		line(265, 291, 265, 565)
  		}
  		if(song1.currentTime() > 44 ){ //first instence of the corus 
			stroke(90, 120, 200)
			line(335, 291, 335, 307)
			line(335, 307, 435, 307)
			line(435, 307, 435, 620)
			line( 270, 620, 675, 620)
			noStroke()
			fill(255)
			text("'When you hot, I'm hot\nAnd when your feet cold, mines is sizzling'\nThis is referencing Jerry Reed’s 1971 single “When you’re hot, you’re hot”, Hov touches on his longevity in the rap game. He acknowledges other rappers have come up and had their time in the spotlight.", 275, 630, 410)
  		}
  		if(song1.currentTime() > 55){ //first instence of the corus 
			stroke(128, 120, 200)
			line(355, 291, 355, 298)
			line(355, 298, 445, 298)
			line(445, 298, 445, 375)
			noStroke()
			fill(255)
  		text("This line is an homage to the N.W.A song “Niggaz 4 Life.”", 455, 320, 170)
  		}
  		if(song1.currentTime() > 110){
  			stroke(130, 110, 220)
  			line(490, 291, 490, 298)
  			line(490, 298, 620, 298)
  			line(620, 298, 620, 385)
  			line(620, 385, 450, 385)
				noStroke()
				fill(255)
  			text("The lines:\n'I done did dirt and went to church to get my hands scrubbed\nSwear I've been baptized 'least three or four times'\nrefer to Matthew 27:24 when Pilate washed his hands from guilt", 448, 400, 170)
  		}

  	}
  	
  	if(vSong2 == true){
  		imageMode(CORNER)
  		image(img3, 45, 490, 170, 170)
  		noStroke()
  		fill(255)
  		textSize(15)
  		textWrap(WORD)
  		text("Song: HUMBLE.\nArtist: Kendrick Lamar\nProducer: Pluss & Mike WiLL Made-It\nReleased: 2017", 45, 670, 180)
  		text("The line:\n'If I quit your BM, I still ride Mercedes, funk'\nis an omage to Pimp C’s line on “Big Pimpin'”: \nIf I wasn’t rappin', baby, I would still be ridin' Mercedes", 270, 310, 200)
  		text("The chorus in HUMBLE. is a reference to Jeremiah 13:18, in which it says 'Say unto the king and to the queen, Humble yourselves, sit down…'", 270, 475, 350)
		  	stroke(90, 120, 200)
			line(480, 291, 480, 440)
			stroke(128, 120, 200)
			line(500, 291, 500, 460)
			line(265, 460, 620, 460)

  	}
  	if(vSong3 == true){
  		imageMode(CORNER)
  		image(img4, 45, 490, 170, 170)
  		noStroke()
  		fill(255)
  		textSize(15)
  		textWrap(WORD)
  		text("Song: California Love\nArtist: 2Pac\nFeatures: Roger Troutman and Dr. Dre\nProducer: Dr. Dre\nReleased: 2017", 45, 670, 180)
  	}
  	if(vSong4 == true){
  		imageMode(CORNER)
  		image(img5, 45, 490, 170, 170)
  		noStroke()
  		fill(255)
  		textSize(15)
  		textWrap(WORD)
  		text("Song: Bohemian Rhapsody\nArtist: Queen\nProducer: Queen and Roy Thomas Baker\nReleased: 1975", 45, 670, 180)
  	}
  }
}

function toggleArt(){
	// print("Art has been toggled!")

//Visual Setup
	fill(255)
	textSize(20)
	noStroke()
	text("Menu", 100, 300)
	textSize(15)
	text("Not Yet Functioning", 55, 400)
	// text("Artwork 1\nArtwork 2\nArtwork 3\nArtwork 4", 60, 480)
}

function toggleMusic(){
// print("Music has been toggled!")

// Visual Setup
	fill(255)
	textSize(20)
	noStroke()
	text("Menu", 100, 355)
	text("Song 1\nSong 2\nSong 3\nSong 4", 60, 385)
	text("Start Song", 83, 242)
	textSize(13)
	text("<<  |  PAUSE/PLAY  |  >>", 57, 295)

// Audio Visual 

	//Song 1
		var s1 = map(song1.currentTime(), 0, song1.duration(), 250, windowWidth-200);
	  stroke(100);
	  strokeWeight(3);
	  line(s1, 215, s1, 270);
	//Song 2
	  var s2 = map(song2.currentTime(), 0, song2.duration(), 250, windowWidth-200);
    stroke(100);
    strokeWeight(3);
    line(s2, 215, s2, 270);
	//Song 3
	  var s3 = map(song3.currentTime(), 0, song3.duration(), 250, windowWidth-200);
    stroke(100);
    strokeWeight(3);
    line(s3, 215, s3, 270);
	//Song 4
	  var s4 = map(song4.currentTime(), 0, song4.duration(), 250, windowWidth-200);
    stroke(100);
    strokeWeight(3);
    line(s4, 215, s4, 270);

// Pick a song warning 
	if(mouseIsPressed){
	if(mouseX > 45 && mouseX < 215){
	  if(mouseY > 290 && mouseY < 335){
	  		if(songChosen == false){
	  			textSize(20)
	  			text("Pick a song first!", 55, 660)
	  		} } } }
}









function mouseClicked(){

if(musicButton == true){

	// Start song function 
		  if(mouseX > 45 && mouseX < 215){
		  	if(mouseY > 220 && mouseY < 265){
		  		if(songChosen == true){
		  			if(vSong1 == true){
		  				if(song2.isPlaying() == true){
		  					song2.stop()
		  				}
		  				if(song3.isPlaying() == true){
		  					song3.stop()
		  				}
		  				if(song4.isPlaying() == true){
		  					song4.stop()
		  				}
		  				song1.play()
		  			}
		  			if(vSong2 == true){
		  				if(song1.isPlaying() == true){
		  					song1.stop()
		  				}
		  				if(song3.isPlaying() == true){
		  					song3.stop()
		  				}
		  				if(song4.isPlaying() == true){
		  					song4.stop()
		  				}
		  				song2.play()
		  			}
		  			if(vSong3 == true){
		  				if(song1.isPlaying() == true){
		  					song1.stop()
		  				}
		  				if(song2.isPlaying() == true){
		  					song2.stop()
		  				}
		  				if(song4.isPlaying() == true){
		  					song4.stop()
		  				}
		  				song3.play()
		  			}
		  			if(vSong4 == true){
		  				if(song1.isPlaying() == true){
		  					song1.stop()
		  				}
		  				if(song2.isPlaying() == true){
		  					song2.stop()
		  				}
		  				if(song3.isPlaying() == true){
		  					song3.stop()
		  				}
		  				song4.play()
		  			}
		} } } 

	// Pause/Play function
		if(mouseY > 275 && mouseY < 305){
			if(mouseX > 45 && mouseX < 80){
				print("<<")
				back()
			}
			if(mouseX > 80 && mouseX < 177){
				print("PAUSE/PLAY")
				pp()
			}
			if(mouseX > 177 && mouseX < 215){
				print(">>")
				fow()
			}
		}
}

if(artButton == true){
	print("Not yet set up.")
}




}



function back(){
	if(vSong1 == true){
	  var len = song1.duration();
	  var t = song1.currentTime()-5;
	  song1.jump(t);
	}

	if(vSong2 == true){
	  var len = song2.duration();
	  var t = song2.currentTime()-5;
	  song2.jump(t);
	}
	if(vSong3 == true){
	  var len = song3.duration();
	  var t = song3.currentTime()-5;
	  song3.jump(t);
	}
	if(vSong4 == true){
	  var len = song4.duration();
	  var t = song4.currentTime()-5;
	  song4.jump(t);
	}
}

function pp(){
	if(vSong1 == true){
	  if(!song1.isPlaying()){
	    song1.play();
	  }  else { song1.pause() }
}

	if(vSong2 == true){
	  if(!song2.isPlaying()){
	    song2.play();
	  }  else { song2.pause() }
}
	if(vSong3 == true){
	  if(!song3.isPlaying()){
	    song3.play();
	  }  else { song3.pause() }
}
	if(vSong4 == true){
	  if(!song4.isPlaying()){
	    song4.play();
	  }  else { song4.pause() }
}
}

function fow(){
	if(vSong1 == true){
	  var len = song1.duration();
	  var t = song1.currentTime()+10;
	  song1.jump(t);
	}

	if(vSong2 == true){
	  var len = song2.duration();
	  var t = song2.currentTime()+10;
	  song2.jump(t);
	}

	if(vSong3 == true){
	  var len = song3.duration();
	  var t = song3.currentTime()+10;
	  song3.jump(t);
	}
	if(vSong4 == true){
	  var len = song4.duration();
	  var t = song4.currentTime()+10;
	  song4.jump(t);
	}
}


































// Unused Code


// Button selectors:


	// artButton = createButton('ART')
	// artButton.position(30, 190)
	// artButton.mousePressed(toggleArt)
	// artButton.addClass('artCss')

	// musicButton = createButton('MUSIC')
	// musicButton.position()
	// musicButton.mouse




  // var spectrum = fft.analyze();
  // for (var i = 0; i < spectrum.length; i++){
  //   var amp = spectrum[i];
  //   var y = map(amp+10, 0, windowWidth, height+5, 0);
  //   fill(frameCount%880,40,70);
  //   rect((i*w), y*0.5, w - 5, height - y);
	// 	}






// 	button = createButton('play')
//   button.position(83, windowHeight-80);
//   button.mousePressed(togglePlaying);

// function togglePlaying(){
//   if(!song1.isPlaying()){
//     song1.play();
//     button.html("pause");
//   }  else {
//     song1.pause();
//     button.html("play");
//   }
// }









