function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(224,224,235);
  angleMode(DEGREES);
  frameRate(20);
}

function draw() {

  pop()

  push();
  noStroke();
  fill(lerpColor(color("yellow"),color("white"),frameCount/120));
  translate(width/2,height/2);
  rotate(frameCount* 3);
  translate(100,0);
  ellipse(0, 0, 20);
  pop();



  push();
  noStroke();
  fill(lerpColor(color("blue"),color("white"),frameCount/120));
  translate(width/2,height/2);
  rotate(frameCount* -2);
  translate(150,0);
  ellipse(0, 0, 20);
  pop();

  push();
  noStroke();
  fill(lerpColor(color("red"),color("white"),frameCount/120));
  translate(width/2,height/2);
  rotate(frameCount* 2);
  translate(200,0);
  ellipse(0, 0, 20);
  pop();

  push();
  noStroke();
  fill("white");
  translate(width/2,height/2);
  rotate(frameCount* 5);
  translate(300,0);
  ellipse(0, 0, 10);
  pop();

  push();
  noStroke();
  fill("white");
  translate(width/2,height/2);
  rotate(frameCount* 5);
  translate(320,frameCount*2);
  ellipse(0, 0, 10);
  pop();

  if(frameCount == 360){noLoop()};



}
