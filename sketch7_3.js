
// This is less of a viable option and more just for my own curiosity 


function setup() {
	createCanvas(500, 500)
	background(175, 60, 130)
}


function draw() {
	
	var test = function(num) {

		if (num < 10) 
			{ (num = num + 1) // number is not increasing, forgot to loop 
		      print("x")}     // it, probably better with for loop
		else
			{ (num = num - 10)
		      print("y")}
	}

let x = 1

test(x)

print(test(x)) // Prints undefined 

}