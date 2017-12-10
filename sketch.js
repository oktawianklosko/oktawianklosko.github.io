//This line assigns the term "value" with a value of "0", if the term is used in multiple lines of code
//then it can be edited here to change the value in every line that the term was used
let value = 0;

//This function is used once when the sketch starts up, it establishes properties such as
//the canvas size to determine the environment
function setup() {
  //Creates the canvas and displays its size which can be edited
  var canvas = createCanvas(594, 841);
  canvas.parent("myContainer");

  var text = createDiv('');

  text.position(50,50);
  //Adds a colour to the background of the canvas
  background(160);

  x = random(width);
  y = random(height);
}

//Continually repeats lines of code after setup
function draw() {
  //Changes color of shapes depending on the position of the mouse on the canvas
  if (mouseX,mouseY) {
    r = value;
    g = value;
    b = value;
    //These lines control the coordinates of the canvas and as well as the color,
    //therefore depending on the where the mouse of located on the canvas a different colour
    //will be used when the user presses the mouse button
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

  //Creates a ForLoop which creates shapes when the mouse is pressed and draws them onto the background
  //This line also dictates the amount of shapes that are created
  for(let i=0; i<100; i++){
    push();
    //This line establishes a mouse button press as the way in which following code will be executed,
    //Without this line the code would simply run constantly and shapes would appear if the mouse was
    //on the canvas
    if (mouseIsPressed){
    //This line adds an outline to the shapes
      stroke(0);
    //This line determines the size of the shapes
      scale(1);
      let xPos = random(mouseX-newSize, mouseX+newSize);
      let yPos = random(mouseY-newSize, mouseY+newSize);
      rect(mouseX, mouseY, random(100), random(100));
      //line(xPos, yPos, width/2, height/2, (255));
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
