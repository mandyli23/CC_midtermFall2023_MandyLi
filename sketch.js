let balls = [];
let ball = 0;
let newBalls = [];

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(130, 225, 40);

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


function mousePressed() {
  balls.push(new Ball(mouseX, mouseY));
}

