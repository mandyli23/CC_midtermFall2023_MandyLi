class Dude {
    constructor(newI, newU) {   //x & y location parameters
        this.i = newI;
        this.u = newU;
        //this.r = 25;   //radius
        // this.xSpeed = random(-2, 2);  //random speeds 
        // this.ySpeed = random(-2, 2);
      }

    
    display (){              //diseased dude
        fill(223,240, 96);
        ellipse(this.i, this.u, 35, 40);
        ellipse(this.i, this.u+40, 60, 50);
        
      }
    
    // move(){
    //     this.i += this.xSpeed; //move balls
    //     this.u += this.ySpeed;
    
    //     //checks edges
    //     if (this.i < 0 || this.i > width) {
    //       this.xSpeed *= -1;
    //     }
    //     if (this.u < 0 || this.u > height) {
    //       this.ySpeed *= -1;
    //     }
    // }
}