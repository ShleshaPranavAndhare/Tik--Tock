var hr,mn,sc;
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(500,500);
  //To use Angles in Degrees
  angleMode(DEGREES);
}

function draw() {
  background(0);
  
  textSize(16);
  fill("yellow");
  textAlign("CENTER");
  text("You just have one attempt to unlock and escape. If you fail you are",10,400);
  text("locked and escape. If you fail you are locked forever The key to the ",10,430);
  text("door will unlock only when the CLOCK",100,460);
  textSize(20);
  fill("white");
  text("shows 12",200,490);

  //Translate And Rotate
  translate(200,200);//to make it look at centre
  rotate(-90);
  
  //Calculate the time using predefined function from the p5
  hr=hour();
  mn=minute();
  sc=second();


  //To compute the angle for hour, minute and second
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 12, 0,360);

  //To draw the second hand of the clock
  push();
  rotate(scAngle);//rotate along the second angle
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

   //To draw the minute hand of the clock
   push();
   rotate(hrAngle);
   stroke(0, 255, 0);
   strokeWeight(7);
   line(0,0,75,0);
   pop();

  //To draw the hour hand of the clock
  push();
  rotate(hrAngle);
  stroke(0, 0, 255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();


  stroke(255,0,255);
  point(0,0);

  //To draw the arcs
  strokeWeight(10);
  noFill();

  //Second
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);

  //Minute
  stroke(0,255,0);
  arc(0,0,280,280,0,mnAngle);

  //Hour
  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle);

   //6 parameters of the arc:- 
  //startingpoint in y direction, 
  //startingpoint in x direction,
  //increasing the height,
  //increasing the width,
  //
  //angle of moving
}