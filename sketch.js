
function setup() {
  var canvas = createCanvas(594, 841);
  canvas.parent("myContainer");

  var text = createDiv('GAD405-Creative Coding');

  text.position(50,50);

  frameRate(10);

  x = random(width);
  y = random(height);
}

function draw() {
  //background(160);

  for(let i=0; i<100; i++){
    push();
    if (mouseIsPressed){
      translate(10,10);
      fill(random(255), random(255), random(255), (200));
      noStroke();
      //ellipse(random(width), random(height), random(10), random(10));
      rect(random(width), random(height), random(10), random(10));
      pop();
    }
  }
}
