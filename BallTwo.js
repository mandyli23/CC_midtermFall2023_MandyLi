class Bal {
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
      fill(0, 255, 0, 220);
      noStroke();
      ellipse(this.x, this.y, random(this.r));
      fill(0, 230, 0);
      ellipse(this.x, this.y, random(this.r*2));
      this.y = this.y + 5;
      
    }
  
    
  
    
  }