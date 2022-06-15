let capture; 

let size = 7 

let startx = 0 
let starty = 0 

function setup() {
  createCanvas(windowWidth, windowHeight); 
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
  imageMode(CENTER);

}


function draw() {
  clear();
  background(0);
  if(mouseIsPressed){
  capture.loadPixels();


  let size = floor(map(mouseX, 100, width, 7, 40)); 

  for (var starty = 0; starty < capture.height; starty++) { 
    for (var startx = 0; startx < capture.width; startx++) {
      var index = (startx + starty * capture.width) * 4;
      var r = capture.pixels[index + 0];
      var g = capture.pixels[index + 1];
      var b = capture.pixels[index + 2];

      var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b)) 

      noStroke(); 

    fill(r,g,b)

      rect(startx, starty, size, size)
      

      startx = startx + size -1 
    }
    starty = starty + size -1 
  }
}
}