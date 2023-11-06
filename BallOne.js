class Ball {
    constructor(newX, newY) {   //x & y location parameters
      this.x = newX;
      this.y = newY;
      this.r = 25;   //radius
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
      fill(0, 250, 0);
      noStroke();
      ellipse(this.x, this.y, this.r * 2);
      //stroke();
     //fill(200, 100, 0);
     // fill(200, 20, 0);
      ellipse(this.x + 41, this.y +15, this.r/1.3);
      fill(0, 250, 0);
      ellipse(this.x + 20, this.y -30, this.r/2);
    //  fill(200, 20, 0);
      ellipse(this.x -27, this.y - 30, this.r/1.3);
      fill(0, 250, 0);
      ellipse(this.x -35, this.y +14, this.r/2);
   //   fill(200, 20, 0);
      ellipse(this.x -8, this.y +43, this.r/1.3);
  
    
    }
  
    intersects(other) {
      let d = dist(this.x, this.y, other.x, other.y); //checking distance between two circles and their radii
      return d < this.r + other.r; //boolean to check distance
    }
  
    
  }


 