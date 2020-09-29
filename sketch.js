function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(224,224,235);
  angleMode(DEGREES);
  frameRate(30);
}

function draw() {
  //whitecircleFill
  push();
  noStroke();
  fill("white");
  translate(width/2,height/2);
  ellipse(0, 0, 30);
  pop();

  //whitecircleStroke
  push();
  stroke("white");
  strokeWeight(1);
  noFill()
  translate(width/2,height/2);
  ellipse(0, 0, 110);
  pop();

  // LineRed45
  push();
  noStroke();
  fill(lerpColor(color("red"),color("white"),frameCount/100));
  translate(width/2,height/2);
  rotate(45,0);
  translate(0,frameCount*(2));
  ellipse(0, 0, 30);
  pop();

  // LineYellow
  push();
  noStroke();
  fill(lerpColor(color("yellow"),color("white"),frameCount/100));
  translate(width/2,height/2);
  translate(0,frameCount*(-2));
  ellipse(0, 0, 30);
  rotate(frameCount);
  pop();

  // LineBlue-45
  push();
  noStroke();
  fill(lerpColor(color("blue"),color("white"),frameCount/100));
  translate(width/2,height/2);
  rotate(-45,0);
  translate(0,frameCount*2);
  ellipse(0, 0, 30);
  pop();

  // 1.CircleYellow
  push();
  noStroke();
  fill(lerpColor(color("yellow"),color("white"),frameCount/120));
  translate(width/2,height/2);
  rotate(frameCount*2);
  translate(150,0);
  ellipse(0, 0, 20);
  pop();

  // 2.CircleBlue
  push();
  noStroke();
  fill(lerpColor(color("blue"),color("white"),frameCount/120));
  translate(width/2,height/2);
  rotate(-frameCount*2);
  translate(200,0);
  ellipse(0, 0, 20);
  pop();

  // 3.CircleRed
  push();

  noStroke();
  fill(lerpColor(color("red"),color("white"),frameCount/120));
  translate(width/2,height/2);
  rotate(frameCount*2);
  translate(250,0);
  ellipse(0, 0, 20);
  pop();

  // DotCircle
  push();
  noStroke();
  fill("white");
  translate(width/2,height/2);
  rotate(frameCount* 5);
  translate(300,0);
  ellipse(0, 0, 10);
  pop();


  // DotCircle*2
  push();
  noStroke();
  fill("white");
  translate(width/2,height/2);
  rotate(frameCount* 5);
  translate(320,frameCount*2);
  ellipse(0, 0, 10);
  pop();

  if(frameCount ==400){noLoop()};



}
