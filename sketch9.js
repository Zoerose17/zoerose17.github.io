function setup() {
  createCanvas(500, 500)
  background(0)
}

let a = color(0)
let b = color(255)

function draw() {
  noStroke()
  fill(225)
  rect(50, 50, 100, 50, 100, 60, 50, 60)
}

function isBlack() {

}

// patches-own [living dead]

// ;; (is-divisor? n d) -> boolean
// ;            n : integer
// ;            d : integer
// to-report is-divisor? [ n d]
//   report (remainder n d) = 0
//   ;; report (is-zero? (remainder n d))
// end

// ;; (is-even? n) -> boolean
// ;         n : integer
// to-report is-even? [n]
//   report (is-divisor? n 2)
// end

// ;; (is-odd? n) -> boolean
// ;         n : integer
// to-report is-odd? [n]
//   report (not (is-even? n))
// end

// ;;Observer
// to setup
//   resize-world -20 20 -20 20
//   set-patch-size 7
//   ask patches
//   [set pcolor black]
// end

// to draw-H
//   ask patches [set living patches with [pcolor = pink]]
//   ask patches [set dead patches with [pcolor = black]]
//   ask patches at-points [[0 0][1 0][-1 0][1 1][1 -1][-1 1][-1 -1]] [set pcolor pink]
// end

// to draw-heart
//   ask patches [set living patches with [pcolor = pink]]
//   ask patches [set dead patches with [pcolor = black]]
//   ask patches at-points [
//     [1 3][-2 4][2 4][0 2][-3 4][-1 3][3 4] [-4 3] [4 3] [-5 2] [5 2]
//     [-5 1] [5 1] [-5 0] [5 0] [-4 -1] [4 -1] [-3 -2] [3 -2]
//     [-2 -3] [2 -3] [-1 -4] [1 -4] [0 -4]
//   ] [set pcolor pink]
// end

// to draw-alive
//   if mouse-down? [ask patch mouse-xcor mouse-ycor [set pcolor pink]]
// end

// ;;Observer
// to go
//   count-neighbors
//   transition
// end

// to count-neighbors
//   ask patches [set living (count neighbors with [pcolor = pink])]
//   ask patches [set dead (count neighbors with [pcolor = black])]
// end

// to transition
//   ask patches
//   [if is-odd? living
//     [set pcolor pink]]
//   ask patches
//   [if is-even? living
//     [set pcolor black]]
// end