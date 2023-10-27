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
      fill(0, 255, 0);
      noStroke();
      ellipse(this.x, this.y, this.r * 2);
    }
  
    intersects(other) {
      let d = dist(this.x, this.y, other.x, other.y); //checking distance between two circles and their radii
      return d < this.r + other.r; //boolean to check distance
    }
  
    
  }