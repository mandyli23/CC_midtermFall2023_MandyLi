

class Aura {
  constructor(newX, newY) {   //x & y location parameters
    this.x = newX;
    this.y = newY;
    this.r = 25;   //radius
  }
  display (){       
    fill(0, 255, 0, 50);
    ellipse(this.x, this.y, 150, 150);
    
  }
  
  left(){
    this.x += 10;
  }

  right(){
    this.x -= 10;
  }

  up(){
    this.y -= 10;
  }

  down(){
    this.y += 10;
  }


  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y); //checking distance between two circles and their radii
    return d < this.r + other.r; //boolean to check distance
  }
}

class Diseased {
  constructor(newX, newY) {   //x & y location parameters
    this.x = newX;
    this.y = newY;
    this.r = 25;   //radius
  }
  display (){       
    fill(0, 255, 0, 50);
    ellipse(this.x, this.y, random(10, 50));
    ellipse(this.x, this.y, random(20, 80));
    ellipse(this.x, this.y, random(15, 45));
    ellipse(this.x, this.y, random(-10, -20));
    ellipse(this.x, this.y, random(-150, -50));
    
  }
  left(){
    this.x += 10;
  }

  right(){
    this.x -= 10;
  }

  up(){
    this.y -= 10;
  }

  down(){
    this.y += 10;
  }

  
}

class Dude {
    constructor(newX, newY) {   //x & y location parameters
        this.x = newX;
        this.y = newY;
        this.r = 25;   //radius
        // this.xSpeed = random(-2, 2);  //random speeds 
        // this.ySpeed = random(-2, 2);
      }

    
    display (){       //diseased dude
        fill(223,240, 96);
        ellipse(this.x, this.y, 35, 40);
        ellipse(this.x, this.y +40, 60, 50);
        
      }

      left(){
        this.x += 10;
      }

      right(){
        this.x -= 10;
      }

      up(){
        this.y -= 10;
      }

      down(){
        this.y += 10;
      }

    }