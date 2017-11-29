
function setup() {
  var canvas = createCanvas(500, 500);
  canvas.parent("myContainer");

  var text = createDiv('This is a HTML string');

  text.position(50,50);

  frameRate(8);

  x = random(width);
  y = random(height);

}

function draw() {
  background(30);

  for(let i=0; i<300; i++){
push();
translate(10,10);
fill(random(255), random(255), random(255));
noStroke();
ellipse(random(width), random(height), random(50), random(50));
pop();

  }

}
