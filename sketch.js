
function setup() {
  createCanvas(800, 800);
}

function draw() {
  if (option == 1) {    //option 1
    background(130, 225, 40);
      noStroke();
      ellipse(width/2, height/2, 700 , 700);
        for(x = mouseX; x <= 700 && x >= 100; x++ ){
        oneDisease();
          if(x == 700 || x == 100){
          mouseX + oneDisease();  //probably need to change this from func to OOP in order to duplicate
              
          }//if
          
    background(0, 0, 255);
 function oneDisease(){  
  map(mouseX, 0, 10, 0, 800);
    option++;
    if( option >= 4) {
      option = 1;
    }
  }


  

