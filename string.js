let screensize = 700;
let linethickness = 0.1;
let diameter = screensize-(screensize/10);

function setup() {
  createCanvas(2*screensize, screensize);
  strokeWeight(linethickness)
  noStroke()
  ellipse(width/2, height/2, 2*diameter, diameter);
  stroke(0)
}

function draw() {
  cutoff()
}

function cutoff() {
  fill(0)
  let radians = random(2*PI);
  let x = (diameter/2)*cos(radians);
  let y = (diameter/2)*sin(radians);
  
  let radians1 = random(2*PI);
  let x1 = (diameter/2)*cos(radians1);
  let y1 = (diameter/2)*sin(radians1);
  
  line((width/2)+x, (height/2)+y, (width/2)+x1, (height/2)+y1);
}

  
