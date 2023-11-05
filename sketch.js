let balls = [];
let ball = 0;
let newBalls = [];
let balls2 = [];
let bal = 0;
let sc2tm = true;//scene 2 boolean to reset color

let balls3 =[];
let b = 0;

let i = 0;
let dudes = [];
let ddx = [100, 600,200, 500,700,750];  //array of locations for dudes
let ddy = [100, 150, 500, 500,700,350];

let aura = [];   //array of aura for dudes
let ax = [100];  //only show at first
let ay = [100];

let diseased = [];  //array thats flashes disease aura
let dx = [100];    //only show at first
let dy = [100];




let option = 1;

 //time control scene 2
let scene2StartTime;
let scene2Duration = 20000; //20sec
let startColor;
let endColor;

function setup() {
  createCanvas(800, 800);
  startColor = color(255, 0, 0, 150); // Initial color (red)
  endColor = color(0, 255, 20); // Final color (green)
  //Set the start time for scene 2
  for(i = 0; i < 6; i ++){
    dudes[i] = new Dude(ddx[i], ddy[i]); 
  }
  for(i = 0; i < 6; i ++){
    aura[i] = new Aura(ax[i], ay[i]); 
  }
  for(i = 0; i < 6; i ++){
    diseased[i] = new Diseased(dx[i], dy[i]); 
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
      
        newBalls.push(new Ball(newX1, newY1, random(-1, 1), random(-2, 2))); //adding new balls after intersection
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

myCellCluster(0); //blood

  for (let i = 0; i< balls2.length; i++) {
    balls2[i].move();
    balls2[i].display(50,0);
  }
}//option 2

if (option === 3){
  background(255);
  balls2.splice(0, balls2.length);
  //background(255, 246,25);
  
  for (let i = 0; i < balls3.length; i++) {
    balls3[i].move();
    balls3[i].display();
    for (let j = 0; j < balls3.length; j++) {
      if (i !== j && balls3[i].intersects(balls3[j])) {
        let newX1 = random(width);
        let newY1 = random(height);
        let newX2 = random(width);
        let newY2 = random(height);
      
        balls3.push(new Balls(newX1, newY1, random(-1, 1), random(-2, 2))); //adding new balls after intersection
        balls3.push(new Balls(newX2, newY2, random(-1, 1), random(-2, 2)));
      } 
    }
  }
  for (let i = balls3.length - 1; i >= 0; i--) {
    balls3[i].move();
    balls3[i].display();
    if (balls3[i].x < 0 || balls3[i].x > width || balls3[i].y < 0 || balls3[i].y > height) {
      balls3.splice(i, 1); // had to remove balls because the screen froze
    
  }
}




}//option 3


if (option === 4){
  background(160, 160, 190);



  for(i = 0; i<6; i++){
    dudes[i].display();
    aura[i].display();
    diseased[i].display();
  }


 

}//option 3


}//draw function




//key/mouse controls


function keyPressed() {
  if (key === 'd') {
    // Move left - d
    if (dudes.length > 0) {
      dudes[0].left();
    } 
    if (aura.length > 0) {
      aura[0].left();
    } 
    if (diseased.length > 0) {
      diseased[0].left();
    }
  } else if (key === 'a') {
    // Move right - a
    if (dudes.length > 0) {
      dudes[0].right();
    } 
    if (aura.length > 0) {
      aura[0].right();
    } 
    if (diseased.length > 0) {
      diseased[0].right();
    }
  } else if (key === 's') {
    // Move down - s
    if (dudes.length > 0) {
      dudes[0].down();
    } 
    if (aura.length > 0) {
      aura[0].down();
    } 
    if (diseased.length > 0) {
      diseased[0].down();
    }
  } else if (key === 'w') {
    // Move up - w
    if (dudes.length > 0) {
      dudes[0].up();
    } 
    if (aura.length > 0) {
      aura[0].up();
    } 
    if (diseased.length > 0) {
      diseased[0].up();
    }
  }
}




function mousePressed() {
  if (option === 1){
  balls.push(new Ball(mouseX, mouseY));
  } else if (option === 2) {
  balls2.push(new Bal(random(800), random(300)));
  currentTime = millis();
} else if (option ===3){
  balls3.push(new Balls(random(800), random(800)));
}

}


//functions for designs
function myCell(x1, y1, a1, a2) { //this function is for one blinking cell

  if(sc2tm){  //when scene 2 starts, the value is initially true, allowing for millis to start tracking time
    scene2StartTime = millis();
    sc2tm = false;  //sets to false so that color can change only within scene 2
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

  for(i = y; i <= 800; i += 200){ //add "my cell" on the y axis in increments of 200
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
  if (key === 'q') {
    option++;
 if (option > 4) {
    option = 1; 
    sc2tm = true;//every time the scene changes, boolean goes back to true
  }

  console.log(option);
}
}