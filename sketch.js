let value = 0;
let x2;
let y2;
let speedX;
let speedY;

function setup() {
  //Size of the canvas
  var canvas = createCanvas(594, 841);
  canvas.parent("myContainer");
  var text = createDiv('');
  text.position(50,50);
  background(160);
  frameRate(30);
  x = random(width);
  y = random(height);

  x2 = width/2;
  y2 = height/2;
  speedX = random(-5., 5.);
  speedY = random(-5., 5.);

}

function draw() {

  x2 += speedX;
  y2 += speedY;

  if (x2>594) x2 = -25;

if (x2<-25) x2 = 594;

if (y2>841) y2 = -25;
if (y2<-25) y2 = 841;
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
      stroke(0);
      scale(1);
      let xPos = random(mouseX-newSize, mouseX+newSize);
      let yPos = random(mouseY-newSize, mouseY+newSize);
      rect(x2, y2, random(100), random(100));
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
