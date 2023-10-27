class Ball {
    constructor(newX, newY) {
      this.x = newX;
      this.y = newY;
      this.r = 25;
      this.xSpeed = random(-2, 2);
      this.ySpeed = random(-2, 2);
    }
  
    move() {
      this.x += this.xSpeed;
      this.y += this.ySpeed;
  
      if (this.x < 0 || this.x > width) {
        this.xSpeed *= -1;
      }
      if (this.y < 0 || this.y > height) {
        this.ySpeed *= -1;
      }
    }
  
    display() {
      fill(0, 255, 0);
      ellipse(this.x, this.y, this.r * 2);
    }
  
    intersects(other) {
      let d = dist(this.x, this.y, other.x, other.y);
      return d < this.r + other.r;
    }
  
    
  }