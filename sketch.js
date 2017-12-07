
function setup() {
  var canvas = createCanvas(594, 841);
  canvas.parent("myContainer");

  var text = createDiv('GAD405-Creative Coding');

  text.position(50,50);

  frameRate(30);

  x = random(width);
  y = random(height);
}


function draw() {
  //background(160);

  if (mouseX,mouseY) {
        r = (254);
        g = (254);
        b = (254);

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

  for(let i=0; i<90; i++){
    push();
    if (mouseIsPressed){
      translate(0, 0);
      stroke(0);
      rect(random(width), random(height), random(50), random(50));
      //fill(random(255), random(0), random(20), (200));
      pop();

  }
}
}
