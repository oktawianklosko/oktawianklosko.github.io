
function setup() {
  //Size of the canvas
  var canvas = createCanvas(594, 841);
  canvas.parent("myContainer");

  var text = createDiv('GAD405-Creative Coding');

  text.position(50,50);
  background(160);

  frameRate(30);

  x = random(width);
  y = random(height);
}

var value = 0;
function draw() {
  //background(160);
  //Changes color of shapes depending on the position of the mouse on the canvas
  if (mouseX,mouseY) {
    r = (value);
    g = (value);
    b = (value);
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

  let distanceFromCenter = dist(width/2, height/2, mouseX, mouseY);
  let newSize = map(distanceFromCenter, 0, 515, 400, 10);

  //Creates a Forloop which makes shapes when the mouse is pressed
  for(let i=0; i<100; i++){
    push();
    if (mouseIsPressed){
      //translate(0, 0);
      stroke(0);
      scale(1);
      let xPos = random(mouseX-newSize, mouseX+newSize);
      let yPos = random(mouseY-newSize, mouseY+newSize);
      rect(mouseX, mouseY, random(100), random(100));
      //line(xPos, yPos, width/2, height/2, (255));
      //fill(random(255), random(0), random(20), (200));
      pop();
    }
  }
}

function mouseReleased(){
  if (value == 0) {
    value = 255;
  } else {
    value = 0;
  }
}
