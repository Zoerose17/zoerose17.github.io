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
let img1 // song1
let img2 // song2
let img3 // song3
let img4 // light
let img5 // under construction 


let song1
let song2
let song3

let vSong1
let vSong2
let vSong3

let songChosen = false
let chosenSong 


let art1
let art2
let art3


//Variables for visualized audio, unsure if they'll be used
var button;
var fft;
var song;




function preload(){
//Loaded Images 
	img1 = loadImage("nbagtCover.jpg");
	img2 = loadImage("bjCover.jpg");
	img3 = loadImage("brCover.jpg");
	img4 = loadImage("light1.jpg");
	img5 = loadImage("uc.jpg");


// Loaded Songs 
  song1 = loadSound("nbagt.mp3"); 
  song2 = loadSound("bj.mp3");
  song3 = loadSound("br.mp3");


//Loaded Art
  // art1 = loadImage(); // Art:
  // art2 = loadImage(); // Art:
  // art3 = loadImage(); // Art:
  // art4 = loadImage(); // Art:
}

function setup() {
	createCanvas(windowWidth, 1000)
	background (200)
	noStroke()
	fade = 0
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}

function draw(){
	 print(mouseX, mouseY)
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

function rEllipse(){
	if(eRandom == true){
			frameRate(1000)
			for(let i=0; i<100; i++){
			fill(0)
			ellipse(random(0,windowWidth), random(0,windowHeight), 25, 25) }
			setTimeout(introMessage = true, 2000)
		}
}

function message(){
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

function message2(){
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
	text("What is originality?", windowWidth-60, 80)
	imageMode(CENTER)
	image(img4, windowWidth/2, 120)
	textAlign(LEFT)

// Setup for buttons
	//ART
	fill(121, 78, 78)
	rect(30, 160, (windowWidth/2)-45, 30, 20)
	fill(255)
	textSize(20)
	text("ART", (windowWidth/4)-15, 182)
	if(mouseIsPressed){
		if(mouseY > 160 && mouseY < 190) {
			if(mouseX > 30 && mouseX < windowWidth/2 -15) {
				artButton = true 
				musicButton = false
			} 
		} 
	}

	//MUSIC
	fill(121, 78, 119)
	rect((windowWidth/2)+15, 160, (windowWidth/2)-45, 30, 20)
	fill(255)
	textSize(20)
	text("MUSIC", (windowWidth*3/4)-30, 182)
	if(mouseIsPressed){
		if(mouseY > 160 && mouseY < 190) {
			if(mouseX > (windowWidth/2)+15 && mouseX < windowWidth - 30) {
				musicButton = true
				artButton = false
			} 
		} 
	}
}

function toggleArt(){
  		imageMode(CENTER)
  		image(img5, windowWidth/2, 500)
}

function toggleMusic(){  
	// Visual Setup
		fill(0)
		stroke(225)
		strokeWeight(1)
		rect(45, 220, 170, 30)
		rect(45, 275, 170, 30)
		rect(45, 330, 170, 150)
		rect(250, 290, windowWidth-290, 490)
		strokeWeight(3)
		rect(250, 220, windowWidth-290, 45)
		fill(255)
		textSize(20)
		noStroke()
		text("Menu", 100, 355)
		text("Song 1\nSong 2\nSong 3", 60, 385)
		text("Start Song", 83, 242)
		textSize(13)
		text("<<  |  PAUSE/PLAY  |  >>", 57, 295)

	// Audio Playing Line 
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


	// Song Selection 
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
  		}
  	}

  // Specific Song Visuals 
  	if(vSong1 == true){
  		imageMode(CORNER)
  		image(img1, 45, 490, 170, 170)
  		noStroke()
  		fill(255)
  		textSize(15)
  		textWrap(WORD)
  		text("Song: Nuthin' but a 'G' Thang\nArtist: Dr. Dre ft. Snoop Dogg\nProducer: Dr. Dre\nReleased: 1992", 45, 670, 180)
  		noStroke()
  		text("Influence:\n\nHip-Hop:\nWhen looking at the inspiration for “Nuthin’ But a ‘G’ Thang”, you must first look at the characteristics of its genre, hip-hop, and more specifically, g-funk. Hip-hop emerged from the bronx during the 70s and quickly spread to become a global cultural phenomenon. Hip-hop music often features rhythmic and rhyming lyrics delivered in a distinctive style, accompanied by beats, samples, and electronic instrumentation. It’s subgenre, g-funk, emerged on the west coast in the early 90s, and is characterized by its smooth, melodic, and funk-influenced production style. It typically feature deep basslines, synthesizers, and a laid-back groove. “Nuthin’ But a ‘G’ Thang” is a clear embodiment of everything its genre has created.\n\nSampled Bassline:\nThe bassline in “Nuthin’ But a ‘G’ Thang” was borrowed from Leon Haywood's 1975 funk track, 'I Want'a Do Something Freaky to You.' This sample provides the songs foundational rhythm and groove, contributing significantly to its G-funk sound.\n\nSmooth Synth Melodies:\nThe song features smooth synth melodies, which are a hallmark of G-funk production. These synthesizers add a melodic and atmospheric quality to the music, giving it a distinct West Coast flavor.", 280, 310, 500)
  		stroke(30, 165, 30)
  		line(265, 290, 265, 770)
  		stroke(90, 70, 165)
  		line(265, 335, 800, 335)
  		// stroke(20, 50, 165)
  		// line(265, 560, 800, 560)
  		// stroke(165, 40, 165)
  		// line(265, 675, 800, 675)
  		noStroke()
  //		text("Impact:\n\n", 830, 310, 500)
			text("Impact:\n\nInfluences on Artists:\nThe success of Nuthin' But a 'G' Thang helped solidify the careers of both Dr. Dre and Snoop Dogg. Dr. Dre's production style on this track influenced many producers who sought to replicate the G-funk sound in their own music. Snoop Dogg's smooth and laid-back delivery on the song also had a lasting impact on West Coast rap. Artists like Warren G, Nate Dogg, and Tha Dogg Pound, who were part of the same West Coast hip-hop scene, were directly influenced by the G-funk sound introduced by this track.\n\nContribution to Gangsta Rap and Hip-Hop Sound in the Early '90s:\n‘Gangsta rap’ was a subgenre of hip-hop that emerged in the late 1980s and early 1990s, known for its gritty, street-oriented lyrics. Nuthin' But a 'G' Thang contributed to the evolution of gangsta rap by providing a more musically sophisticated and accessible sound to accompany the raw and often controversial lyrics associated with the genre. This fusion of gangsta rap's lyrical content with the melodic and funk-inspired G-funk production style became a hallmark of West Coast hip-hop in the early '90s. The song's success also marked a shift in the overall sound of hip-hop at that time, as G-funk influenced producers and artists well beyond the West Coast, leaving a lasting impact on the genre as a whole.", 830, 310, 500)
  		stroke(15, 165, 35)
  		line(815, 290, 815, 770)
  		stroke(90, 70, 165)
  		line(815, 335, 1370, 335)
  		// stroke(20, 50, 165)
  		// line(815, 525, 1370, 525)
  	}

  	if(vSong2 == true){
  		imageMode(CORNER)
  		image(img2, 45, 490, 170, 170)
  		noStroke()
  		fill(255)
  		textSize(15)
  		textWrap(WORD)
  		text("Song: Billie Jean\nArtist: Michael Jackson\nProducer: Quincey Jones\nReleased: 1982", 45, 670, 180)
  		noStroke()
			text("Influence:\n\nFunk and Dance-Pop Genres:\nBillie Jean is characterized by its funky bassline, infectious groove, and danceable rhythm. These elements were heavily influenced by the funk genre, which was popularized by artists like James Brown and George Clinton. Additionally, the song embraced the emerging dance-pop genre of the early 1980s, characterized by its blend of danceable beats and catchy melodies.\n\nInfluence from James Brown:\nMichael Jackson was heavily influenced by the godfather of funk, James Brown. His dynamic stage presence and rhythmic style can be seen in Jackson's performance of Billie Jean, especially in his iconic moonwalk and dance moves during the song's live performances.\n\nInfluence from Donna Summer:\nThe song's distinctive bassline was inspired by the 1981 disco track 'State of Independence' by Donna Summer, which was produced by Quincy Jones. Jackson and Jones adapted this bassline to create the unforgettable groove of Billie Jean.", 280, 310, 500)
  		stroke(30, 165, 30)
  		line(265, 290, 265, 770)
  		stroke(90, 70, 165)
  		line(265, 335, 800, 335)
  		noStroke()
			text("Impact:\n\nInfluence on Synthesizers and Electronic Beats:\nBillie Jean showcased the innovative use of synthesizers and electronic beats, creating a sound that was ahead of its time. This influence can be heard in songs like Madonna's ‘Into the Groove’ and Prince's ‘When Doves Cry,’ both of which embraced electronic elements in their production.\n\nRevolutionizing Music Videos:\nThe music video for Billie Jean was groundbreaking. It introduced cinematic storytelling to music videos and popularized the concept of a music video as a short film. This revolutionized the art of music videos and inspired artists like Madonna, who created elaborate music videos with storytelling elements, such as ‘Like a Prayer,’ and Beyoncé, whose visual album ‘Lemonade’ incorporates narrative-driven videos.\n\nMoonwalk and Dance Moves:\nThe iconic moonwalk and dance moves from Billie Jean have been imitated by artists like Chris Brown and Bruno Mars during their live performances.", 830, 310, 500)
  		stroke(15, 165, 35)
  		line(815, 290, 815, 770)
  		stroke(90, 70, 165)
  		line(815, 335, 1370, 335)
  	}

  	if(vSong3 == true){
  		imageMode(CORNER)
  		image(img3, 45, 490, 170, 170)
  		noStroke()
  		fill(255)
  		textSize(15)
  		textWrap(WORD)
  		text("Song: Bohemian Rhapsody\nArtist: Queen\nProducer: Queen and Roy Thomas Baker\nReleased: 1975", 45, 670, 180)
		  // var t1 = map(25, 0, song3.duration(), 250, windowWidth-200);
		  // var t2 = map(50, 0, song3.duration(), 250, windowWidth-200);
		  // var t3 = map(240, 0, song3.duration(), 250, windowWidth-200);
		  // var t4 = map(300, 0, song3.duration(), 250, windowWidth-200);
  		// stroke(30, 165, 30)
		  // line(t1, 290, t1, 330)
		  // line(t2, 290, t2, 330)
		  // line(t3, 290, t3, 330)
		  // line(t4, 290, t4, 330)
			text("Bohemian Rhapsody is both one of the most unique songs in western culture, and the song that has drawn the most from what came before it. The uniqueness and conformity of the song are one and the same, and the reason for both is that, technically, Bohemian Rhapsody is not one song, but 5. The first is an a cappella introduction. The second, a ballad. The third, an opera. The fourth, hard rock. And last, a reflective coda. This idea of blending genres began in the 60s, with songs ‘Good Vibrations’ by The Beach Boys and ‘A Day in the Life’ by The Beatles being the first to do so.\n\nThe song still draws more from an array of different influences. Mainly in the opera, which includes references to characters from Italian theater, quotes from the Quran, and many other subtle allusions. ", 280, 310, 1000)



  	}
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
		  				song1.play()
		  			}
		  			if(vSong2 == true){
		  				if(song1.isPlaying() == true){
		  					song1.stop()
		  				}
		  				if(song3.isPlaying() == true){
		  					song3.stop()
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
		  				song3.play()
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
}






// REMEMBER TO RESET VARIABLES BEFORE UPLOADING TO GITHUB












  	// //	if(song1.currentTime() > 1 ){  
  	// 	stroke(15, 165, 35)
  	// 	text("Influence:", 280, 310, 300)
  	// 	line(265, 290, 265, 770)
  	// //	}
  	// //	if(song1.currentTime() > 5 ){  
  	// 	stroke(90, 70, 165)
  	// 	text("Hip-Hop:\nWhen looking at the inspiration for “Nuthin’ But a ‘G’ Thang”, you must first look at the characteristics of its genre, hip-hop, and more specifically, g-funk. Hip-hop emerged from the bronx during the 70s and quickly spread to become a global cultural phenomenon. Hip-hop music often features rhythmic and rhyming lyrics delivered in a distinctive style, accompanied by beats, samples, and electronic instrumentation. It’s subgenre, g-funk, emerged on the west coast in the early 90s, and is characterized by its smooth, melodic, and funk-influenced production style. It typically feature deep basslines, synthesizers, and a laid-back groove. “Nuthin’ But a ‘G’ Thang” is a clear embodiment of everything its genre has created.", 280, 340, 500)
  	// 	line(265, 330, 800, 330)
  	// //	}
  	// //	if(song1.currentTime() > 10 ){  
  	// 	stroke(30, 60, 255)
  	// 	text("Sampled Bassline:\nThe bassline in “Nuthin’ But a ‘G’ Thang” was borrowed from Leon Haywood's 1975 funk track, 'I Want'a Do Something Freaky to You.' This sample provides the songs foundational rhythm and groove, contributing significantly to its G-funk sound.", 280, 570, 500)
  	// 	line(265, 560, 800, 560)
  	// //	}
  	// //	if(song1.currentTime() > 15 ){  
  	// 	stroke(255, 40, 230)
  	// 	text("Smooth Synth Melodies:\nThe song features smooth synth melodies, which are a hallmark of G-funk production. These synthesizers add a melodic and atmospheric quality to the music, giving it a distinct West Coast flavor.", 280, 685, 500)
  	// 	line(265, 675, 800, 675)
  	// //	}
  	//	if(song1.currentTime() > 1 ){  











