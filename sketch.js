let balls = [];
let ball = 0;
let newBalls = [];
let balls2 = [];
let bal = 0;
let sc2tm = true;
let dudes = [];
let ddx = [100, 150,200,205,300,350];
let ddy = [100, 150,200,205,300,350];

//let c = 1; //c for color
// c = c++;


let option = 1;

 //time control scene 2
let scene2StartTime;
let scene2Duration = 20000; //20sec
let startColor;
let endColor;
let x3;
let y3;
function setup() {
  createCanvas(800, 800);
  startColor = color(255, 0, 0, 15); // Initial color (red)
  endColor = color(0, 255, 20); // Final color (green)
  // Set the start time for scene 2
  for(i = 0; 1 < 5; i ++){
    dudes[i] = new Dude(ddx[i], ddy[i]);
  }
  
  
}





function draw() {
  background(255, 225, 255);

  if(option === 1){
  
  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].display();
    for (let j = 0; j < balls.length; j++) {
      if (i !== j && balls[i].intersects(balls[j])) {
        let newX1 = random(width);
        let newY1 = random(height);
        let newX2 = random(width);
        let newY2 = random(height);
      
        newBalls.push(new Ball(newX1, newY1, random(-1, 1), random(-2, 2)));
        newBalls.push(new Ball(newX2, newY2, random(-1, 1), random(-2, 2)));
      } 
    }
  }
  for (let i = newBalls.length - 1; i >= 0; i--) {
    newBalls[i].move();
    newBalls[i].display();
    if (newBalls[i].x < 0 || newBalls[i].x > width || newBalls[i].y < 0 || newBalls[i].y > height) {
      newBalls.splice(i, 1); // had to remove balls because the screen froze
    }
  }
}

if (option === 2){
  //scene2
newBalls.splice(0, newBalls.length);
balls.splice(0, balls.length);

  background(0);

 
  //scale(random(1, 3));
  myCellCluster(0);

  for (let i = 0; i< balls2.length; i++) {
    balls2[i].move();
    balls2[i].display(50,0);

  
  }
}//option 2

if (option === 3){
  background(160, 160, 190);
 
  for(i = 0; i<6; i++){
    dudes[i].display();
  }
  

}//option 3
}//draw function




//key/mouse controls
function keyTyped() {
  if (option === 2 && key === 'q') {
    noLoop(); 
  }
}

function keyReleased() {
  if (option === 2 && key === 'q'){
  loop();
}
}


function mousePressed() {
  if (option === 1){
  balls.push(new Ball(mouseX, mouseY));
  } else if (option === 2) {
  balls2.push(new Bal(random(800), random(300)));
  currentTime = millis();
}

}

function mouseDragged(){
 //diseases[i].move(new Ball(mouseX, mouseY));
}


function myCell(x1, y1, a1, a2) { //this function is for one blinking cell

  if(sc2tm){
    scene2StartTime = millis();
    sc2tm = false;
  }
  frameRate(15);
  noStroke();
  fill(255, 0, 0);

  let currentTime = millis() - scene2StartTime;

  if (currentTime < scene2Duration) {
    let interColor = lerpColor(startColor, endColor, currentTime / scene2Duration);  //lerp color used to gradient to new color
    fill(interColor);

  //fill(200,y1/1.5, 0, y1/(3));
  ellipse (x1, y1, a1, a2);
  }else {
    // Once the duration is reached, set to the final color
    fill(endColor);
    ellipse (x1, y1, a1, a2);
  
  }

}

function myCellCluster(y){

  for(i = y; i <= 800; i += 200){
    myCell(0, i,random(20),random(300));
    myCell(400, i,random(20),random(300));
    myCell(300, i,random(20),random(300));
    myCell(200, i,random(20),random(300));
    myCell(100, i,random(20),random(300));
    myCell(500, i,random(20),random(300));
    myCell(600, i,random(20),random(300));
    myCell(700, i,random(20),random(300));
    myCell(800, i,random(20),random(300));
  }
  

}



function keyTyped() {
  if (key === 'w') {
    option++;
 if (option > 3) {
    option = 1; 
    sc2tm = true;
  }

  console.log(option);
}
}