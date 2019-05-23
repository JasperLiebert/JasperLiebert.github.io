let input, button, reset, jump;
let x = 15;
let y = 250;
let letters = []

function setup() {
  createCanvas(500, 500);
  background(100, 95);
  
  textAlign(CENTER);
	textSize(50);
	
  input = createInput()
  input.position(20, 20)
  
  button = createButton('Create New Word')
  button.position(20, 40)
  button.mousePressed(newword);

  reset = createButton('Reset');
  reset.position(20, 100);
  reset.mousePressed(res);
	
  jump = createButton('Jump');
  jump.position(20, 80)
  jump.mousePressed(wordJump);
  
	textAlign('center');
	textSize(25);
  textStyle(BOLD);
  textFont('impact');
}


function newword() {
	const name = input.value();
  clear();
  input.value('');
	for (i=0;i<name.length;i++){
  	if (name[i] == ''){
    	x += 12
    }
    else{
      letters.push(new letter(name[i], false, x, y, 0, random(2,5), 0.25));
    	x += 15
    }
  }
  x=15
  }

function draw() {
  background(100, 95) 
  for(i=0; i<letters.length;i++) {

    if (letters[i].clicked) {
    //print('bop?')
  	letters[i].x = mouseX;
  	letters[i].y = mouseY;
    letters[i].xVel = (mouseX - pmouseX)/3;
    letters[i].yVel = (mouseY - pmouseY)/3;
  	}
  	else { //Doing Velocity and Gravity
 			letters[i].y += letters[i].yVel
    	letters[i].x += letters[i].xVel
  	if (letters[i].y <= 500) {
  		letters[i].yVel += letters[i].grav
  	}
    if (letters[i].y <= 15){ //Roof Bounce
      letters[i].y = 15;
    	letters[i].yVel = -(letters[i].yVel*0.6);
    }
  	if (letters[i].y >= 500){ //Ground Bounce
  		if (letters[i].yVel <= 1.2) {
      	letters[i].y = 500
   		}
    	else {
      	letters[i].yVel = -(letters[i].yVel*0.6);
    	}
  	}
  	if (letters[i].x <= 5) { //X Borders
      letters[i].xVel = -(letters[i].xVel * 0.6)
      letters[i].x = 5;
  	}
  	if (letters[i].x >= 495) {
      letters[i].xVel = -(letters[i].xVel * 0.6)
      letters[i].x = 495;
  	}
    if(letters[i].xVel > 0) { //slows down X velocity
    	letters[i].xVel -= 0.02
    }
    if(letters[i].xVel < 0) {
    	letters[i].xVel += 0.02
    }
    }
    text(letters[i].name, letters[i].x, letters[i].y); //Drawing the letters
  }
}

function wordJump() {
	for (i=0;i<letters.length;i++) {
  	letters[i].yVel = random(-15, -7)
  }
}

function mousePressed() {
	for (i=0;i < letters.length; i++) {
  	if (dist(mouseX, mouseY, letters[i].x, letters[i].y) <= 12){
        letters[i].clicked = true;
      	letters[i].yVel = 0;
      	break;
        }
  }
}

function mouseReleased() {
for (i=0;i<letters.length;i++) {
	letters[i].clicked = false;
}}
  
function res() {
	letters = [];
}
