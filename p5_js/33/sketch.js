// Example 33

var a = 0;
var r = 50;

// setup() executes only once and at the very beginning
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  frameRate(15);
}

function draw() {
  noStroke();

  var x = r * cos(a);
  var y = r * sin(a);

  a += 0.1;
  r += 1;

  push();
  translate(width / 2, height / 2);
  fill(random(255),random(255),random(255));
  ellipse(x, y, 50, 50);
  pop();

}