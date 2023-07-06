

function setup() {
	createCanvas(500, 500)
	background(175, 60, 130)
}


function draw() {
	
	frameRate(1000)
	for(let i=0; i<1000; i++){
	fill(0)
	point(random(0,500), random(0,500)) }

	frameRate(1000)
	for(let i=0; i<1000; i++){
	fill(0)
	point(random(0,500), random(0,500)) }

	fill(175, 60, 130)
	rect(0, 0, 2, 2)


// My attempt at looping it back, does not work

	let x = 1
	if ((x < 499) || (x = 1)) 
	{ x++ }
	else { x - 499}
	
	let y = 1	
	if ((y < 499) || (y = 1)) 
	{ y++ }
	else { y -499}

	let a = red(0)
	let d = get(1, 1) 


	if ((red(a) === red(d)) === false ) 
		{ print("not done!") }
	else 
		{ print("done")
		  fill(225)
	 	  textSize(100)
		  text("hi", 100, 100) }

	print(x, y)
	print(red(a))
	print(red(d))

	function message() {
		fill(225)
	 	textSize(100)
		text("sup", 100, 100)
	}
	setTimeout(message, 8000)

}



	
	// let xx = 1
	// while (xx < 499) 
	// { xx++ }
	
	// let yy = 1	
	// while (yy < 499) 
	// { yy++ }



	// for(let xx=1; xx<499; xx++) {
	// 	if
	// }


	// function addOne(x) {
	// 	return x + 1
	// }

// var mycolor;
// function setup() {
// }
// function draw() {
//   background(0);
//   fill(255,0,0);
//   rect(10,10,20,20);
//   mycolor = get(mouseX, mouseY); ****** def can be used elsewhere 
//   if(red(mycolor) == 255){
//     fill(255,255,255);
//     rect (40,40,20,20);
//   }
// }
