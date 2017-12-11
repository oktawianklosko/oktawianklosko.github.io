//This line assigns the term "value" with a value of "0", if the term is used in multiple lines of code
//then it can be edited here to change the value in every line that the term was used
let value = 0;

//This function is used once when the sketch starts up, it establishes properties such as
//the canvas size to determine the environment
function setup() {
//Creates the canvas and displays its size which can be edited
  var canvas = createCanvas(594, 841);
//Nests the canvas in the div created in HTML, this allows the sketch to be placed
//in between the header and footer on the webpage
  canvas.parent("myContainer");
//Establishes the text on the webpage, sketch doesn't appear to work without it
  var text = createDiv('');
  //Adds a colour to the background of the canvas
  background(160);
}
//Continually repeats lines of code after setup runs for every frame
function draw() {
  //Changes color of shapes depending on the position of the mouse on the canvas,
  //also assigns "value" to r, g, b which is "0" by default
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
    //The numbers used in these lines represent the size of the canvas and therefore
    //dictate the how colours change depending on the position of the mouse
    if (mouseX < 594 & mouseY < 841){
    //These lines dictate the fill of the colour as shown by the value "b"
      fill(b, mouseX,mouseY);
    }
    if (mouseX < 594 & mouseY < 841){
      fill(r, mouseX,mouseY);
    }
    if (mouseX < 594 & mouseY < 841){
      fill(g, mouseX,mouseY);
    }

  }

  //Creates a ForLoop which creates shapes when the mouse is pressed and draws them onto the background
  //This line also dictates the amount of shapes that are created
  for(let i=0; i<100; i++){
    //Pushes current drawing setting like stroke, scale and rect, ensures that the loop is carried out
    //by what order lines are written
    push();
    //This line establishes a mouse button press as the way in which following code will be executed,
    //Without this line the code would simply run constantly and shapes would appear if the mouse was
    //on the canvas
    if (mouseIsPressed){
    //This line adds an outline to the shapes
      stroke(0);
    //This line determines the size of the shapes
      scale(1);
    //Creates random size rectangle which is moved by the position of the mouse
      rect(mouseX, mouseY, random(100), random(100));
    //Restores drawing settings, loop starts back at push and can continue to run
    //the same lines of code when the mouse button is pressed
      pop();
    }
  }
}
//This function is used when the user releases the mouse button which then activeates
//the code contained in the function
function mouseReleased(){
  //If the variable "value" = 0, which it does by default, then the value changes to "255"
  //only when the mouse is released, therefore the colours used to draw shapes alternate
  //between two seperate sets
  if (value == 0) {
    value = 255;
  //This line sets the value back to "0" therefore each time the mouse button is
  //released the colour alternates
  } else {
    value = 0;
  }
}
