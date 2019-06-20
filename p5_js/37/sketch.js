// Example 37

// Using FFT with a Radial Visualization

var frames = 200
var num = 1000; // try numbers up to 40
var theta = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    background(255);
    fill(random(255),random(255),random(255));
    stroke(random(255),random(255),random(255));
    translate(width / 2, height / 2);
    for (i = 0; i < num; i++) {
        push();
        let offSet = TWO_PI / num * i;
        rotate(offSet);
        sz = width * .15;
        x = map(sin(theta), -1, 1, sz, width * .2);
        translate(x, 0);
        push();
        rotate(theta);
        ellipse(0, 0, sz, sz * 2);
        ellipse(0, 0, sz * .7, sz * 2 * .7);
        if (i % 2 == 0) {
            ellipse(0, 0, sz, sz * 2);
        } else {
            ellipse(0, 0, sz * .7, sz * 2 * .7);
        }

        // pop();
        // pop();
    }
    theta += TWO_PI / frames;
}