class Balls {
    constructor(newX, newY) {   //x & y location parameters
      this.x = newX;
      this.y = newY;
      this.r = 25;   //radius
      this.u = 0
      this.xSpeed = random(-2, 2);  //random speeds 
      this.ySpeed = random(-2, 2);
      
    }
  
    move() {
      this.x += this.xSpeed; //move balls
      this.y += this.ySpeed;
  
      //checks edges
      if (this.x < 0 || this.x > width) {
        this.xSpeed *= -1;
      }
      if (this.y < 0 || this.y > height) {
        this.ySpeed *= -1;
      }
    }
    

  display() {
    fill(255, 0, 0);
    noStroke();
    ellipse(this.x, this.y, this.r * 2);
    fill(0, 255,0);
    ellipse(this.x, this.y, this.r /2);
    
    if(this.r = this.r/2, i > 0, i++){
    
    push();
    scale(10);
    stroke(0,255,0);
    strokeWeight(3);
    ellipse(this.x, this.y, this.r); //bigger specky thing
    ellipse(this.x, this.y, this.r*2);
    ellipse(this.x, this.y, this.r);
    pop();
    }
    stroke(1)
    ellipse(this.x, this.y, this.r); //random specs in background
  }


  
    intersects(other) {
      let d = dist(this.x, this.y, other.x, other.y); //checking distance between two circles and their radii
      return d < this.r + other.r; //boolean to check distance
    }
  
    
  }


  //cool effects I found while experimenting with code

  
  // ellipse(this.x + 21, this.y +5, this.r);
  // ellipse(this.x + 10, this.y -20, this.r/2);
  // ellipse(this.x -17, this.y - 20, this.r);
  // ellipse(this.x -25, this.y +4, this.r/2);
  // ellipse(this.x -3, this.y +23, this.r/2);


  // display() {
  //   fill(0, 255, 0);
  //   noStroke();
  //   ellipse(this.x, this.y, this.r * 2);
  //   stroke(1);
  //   if(this.r = 10, i > 0, i++){
  //   line(0,130, 160, 170);
  //   }
  //   ellipse(this.x, this.y, this.r);
  // }

  // display() {
  //   fill(0, 255, 0);
  //   noStroke();
  //   ellipse(this.x, this.y, this.r * 2);
  //   stroke(1);
  //   line(this.x = 20,this.x =20,this.y = 20,this.y =20);
  //   ellipse(this.x, this.y, this.r);
  // }
    
  // display() {
  //   fill(0, 255, 0);
  //   noStroke();
  //   ellipse(this.x, this.y, this.r * 2);
  //   stroke(1);
  //   line(this.x += 20,this.x +=20,this.y -= 20,this.y -=20);
  //   ellipse(this.x, this.y, this.r);
  // }
  