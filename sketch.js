let r, g, b;
let ry = 378;
let gy = 378;
let by = 378;
let rClicked = false;
let gClicked = false;
let bClicked = false;
let ranClicked = false;

function setup() {
  createCanvas(500, 500);
  textAlign('center')
  textFont('century gothic');
}

function draw() {
  strokeWeight(5);
  background(220);
  line(100, 123, 100, 378);
  line(200, 123, 200, 378);
  line(300, 123, 300, 378);
  
  if (rClicked == true){
    ry = mouseY
    if (ry > 378) {
      ry = 378;
    }
    if (ry < 123) {
    	ry = 123;
    }
  }
  if (gClicked == true){
    gy = mouseY;
    if (gy > 378) {
      gy = 378;
    }
    if (gy < 123) {
    	gy = 123;
    }
  }
  if (bClicked == true){
    by = mouseY;
    if (by > 378) {
      by = 378;
    }
    if (by < 123) {
    	by = 123;
    }
  }
  fill(255);
  ellipse(100, ry, 10, 10);
  ellipse(200, gy, 10, 10);
  ellipse(300, by, 10, 10);
  
  r = ((500 - ry) - 122);
  g = ((500 - gy) - 122);
  b = ((500 - by) - 122);
  
  textStyle(NORMAL);
  textSize(75);
  fill(r, 0, 0);
  text('R', 100, 100);
  fill(0, g, 0);
  text('G', 200, 100);
  fill(0, 0, b);
  text('B', 300, 100);
  
  fill(255);
  textSize(30);
  rect(55, 400, 90, 75);
  rect(155, 400, 90, 75);
  rect(255, 400, 90, 75);
  if (ranClicked){
  	fill(200)
  }
  rect(355, 400, 90, 75);
  fill(0)
  text(int(r), 100, 450);
  text(int(g), 200, 450);
  text(int(b), 300, 450);
  textSize(20)
  textStyle(BOLD);
  text('Random', 400, 442)
  
	fill(r, g, b);
  ellipse(400, 250, 100, 100);
}

function mousePressed() {
  if (dist(mouseX, mouseY, 100, ry) <= 10) {
  	rClicked = true;    
  }
  if (dist(mouseX, mouseY, 200, gy) <= 10) {
  	gClicked = true;    
  }
  if (dist(mouseX, mouseY, 300, by) <= 10) {
  	bClicked = true;    
  }
  if (mouseX >= 355 && mouseX <= 445 && mouseY >= 400 && mouseY < 475){//klamesaphelioma
    ry = int(random(123, 378));
    gy = int(random(123, 378));
    by = int(random(123, 378));
    ranClicked = true;
    }
}

function mouseReleased() {
	rClicked = false;
  gClicked = false;
  bClicked = false;
  ranClicked = false;
}
