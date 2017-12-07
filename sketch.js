
function setup() {
  //Size of the canvas
  var canvas = createCanvas(594, 841);
  canvas.parent("myContainer");

  var text = createDiv('GAD405-Creative Coding');

  text.position(50,50);

  frameRate(30);

  x = random(width);
  y = random(height);
}

var value = r, g, b;
function draw() {
  //background(160);

//Changes color of shapes depending on the position of the mouse on the canvas
  if (mouseX,mouseY) {
        r = (255);
        g = (255);
        b = (255);
//These lines control the coordinates of the canvas and as well as the color
if (mouseX < 594 & mouseY < 841){
fill(r,g,b, mouseX,mouseY);
}
if (mouseX < 594 & mouseY < 841){
fill(b, mouseX,mouseY);
}

if (mouseX < 594 & mouseY < 841){
fill(r, mouseX,mouseY);
}
if (mouseX < 594 & mouseY < 841){
fill(g, mouseX,mouseY);
}
}
//Creates a Forloop which makes shapes when the mouse is pressed
  for(let i=0; i<90; i++){
    push();
    if (mouseIsPressed){
      translate(0, 0);
      stroke(0);
      scale(1);
      rect(random(width), random(height), random(50), random(50));
      //fill(random(255), random(0), random(20), (200));
      pop();
  }
}
}

function mouseReleased(){
  if (value == 255) {
    value = 0;
  } else {
    value = 0;
  }
}
