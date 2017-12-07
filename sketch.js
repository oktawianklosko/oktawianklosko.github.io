
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
        r = (255);
        g = (255);
        b = (255);

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

  for(let i=0; i<100; i++){
    push();
    if (mouseIsPressed){
      translate(10,10);
      //fill(random(255), random(0), random(20), (200));
      noStroke(); 
      rect(random(width), random(height), random(50), random(50));
      pop();

  }
}
}
