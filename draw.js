let col, start, end;
let perc = 0;
let change = 0.005

function setup() {
  createCanvas(500, 500);
  start = color(0, 255, 182);
  end = color(255, 0, 220);
  background(0);
  noStroke()
}

function draw() {
}

function mousePressed() {
  col = lerpColor(start, end, perc);
  fill(col);
  ellipse(mouseX, mouseY, 25, 25);
  perc += change;
  if (perc >= 1){
  change = -change    
  }
  if (perc <= 0){
  change = -change    
  }
}

function mouseDragged() {
  col = lerpColor(start, end, perc);
  fill(col);
  ellipse(mouseX, mouseY, 25, 25);
  perc += change;
  if (perc >= 1){
  change = -change    
  }
  if (perc <= 0){
  change = -change    
  }
}
