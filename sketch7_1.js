// This code works to trigger the text once the x, y coordinate is black
// Issue: need to find way to loop back to x = 1 and y = 1

function setup() {
	createCanvas(500, 500)
	background(175, 60, 130)
}


function draw() {

	frameRate(100)
	for(let i=0; i<10; i++){
	fill(0)
	ellipse(random(0,500), random(0,500), 25, 25) }

	let x = 1
	while (x < 499) 
	{x = x + 1}
	
	let y = 1	
	while (y < 499) 
	{y = y + 1}



	let a = red(0)
	let b = get(x, y)

if ( (red(a) === red(b)) === false) {
		print("x")
	} 
	else{ 
		print("y")
		fill(225)
		textSize(100)
		text("hi", 100, 100)
		}

		print(x, y)
	}




// After doing 7.2 & 7.3:

	// Close to giving up tbh but I think I have some options 
	// to make this work. I can create a function to play over
	// again within itself & it'll be stopped by a true/false 
	// when

	// Ok actually my issue is that it is going to stop looping 
	// whenever it encounters a black pixel 







