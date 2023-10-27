let balls = [];
let ball = 0;
let newBalls = [];

function setup() {
  createCanvas(800, 800);
}

let option = 0;

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
  background(255, 225, 255);
  //scale(random(1, 3));
  myCellCluster(0);
  myCellCluster(200);
  myCellCluster(400);
  myCellCluster(600);
  myCellCluster(800);
}

}

if (option === 2){
function keyPressed() {
  noLoop();
}

function keyReleased() {
  loop();
}
}

if (option === 1){
function mousePressed() {
  balls.push(new Ball(mouseX, mouseY));
}
}

function myCell(x1, y1, a1, a2) { //this function is for one blinking cell
  noStroke();
  //fill(random(y/2,0, x/4));
  fill((x1-100)/1.5,0, 0);
  ellipse (x1, y1, a1, a2);
  
}

function myCellCluster(y){
  myCell(0, y,random(100),random(300));
  myCell(400, y,random(100),random(300));
  myCell(300, y,random(100),random(300));
  myCell(200, y,random(100),random(300));
  myCell(100, y,random(100),random(300));
  myCell(500, y,random(100),random(300));
  myCell(600, y,random(100),random(300));
  myCell(700, y,random(100),random(300));
  myCell(800, y,random(100),random(300));
}

function mousePressed(){
  option++;
  if(option > 3) {
    option = 1;
  }
}
