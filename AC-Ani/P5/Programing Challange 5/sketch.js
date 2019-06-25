var columns;
var rows;
var size = 20;
var w;
var h;

var grid = [];

var f = 0;

var mic;
var button;


function preload() {
  song = loadSound("../audio/myBeat.mp3");
}

function setup(){
  createCanvas(windowWidth,windowHeight-100,WEBGL);
  w = width;
  h = height;
  columns = w / size;
  rows = h / size;
  grid.push([columns,rows]);

  button = createButton("Listen");
  button.mousePressed(toggleListen);
	mic = new p5.AudioIn()
  mic.start();
}

function draw(){
  micLevel = mic.getLevel();
  var smoothMicLevel = 20;
  smoothMicLevel = lerp(smoothMicLevel, micLevel,0.2);
 

  f += 0.00001;

  var yoffset = f;
  for(var y = 0;y < rows; y++){
    var xoffset = 0;
    for(var x = 0; x < columns; x++){
      grid.push([x,y]);
      grid[x][y] = map(noise(xoffset,yoffset), 0, 1, -200,200);

      xoffset += 0.3;
    }
    yoffset += 0.3;
  }

  background(0);
  noFill();
  stroke(random(255),random(255),random(255));
  translate(width/20-600,height/20-100);
  rotateX(PI/3);

  translate(-w/20,-h/20);
  for(var y = 0;y < rows-1; y++){
    beginShape(TRIANGLE_STRIP);
    for(var x = 0; x < columns; x++){
      vertex(x*size*smoothMicLevel,y*size*smoothMicLevel,grid[x][y])*smoothMicLevel;
      vertex(x*size*smoothMicLevel,(y+1)*size)*smoothMicLevel ,grid[x][y]*smoothMicLevel;
      // rect(x*size,y*size,size,size);
    }
    endShape();
  }  
}

function toggleListen() {
	if (getAudioContext().state !== 'running') {
    	getAudioContext().resume();
		text('listening to audio', width/2, height/2);
		button.html("Stop");
	} else {
        text('click Play button to start', width/2, height/2);

        button.html("Listen");
    }
}