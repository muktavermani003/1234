var hr, mn, sc;

function setup() {
  createCanvas(800,800);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  textSize(30)
  stroke("blue")
  text("1", 525, 200)
  text("2", 620, 283)
  text("3", 650, 410)
  text("4", 610, 530)
  text("5", 525, 615)
  text("6", 400, 650)
  text("7", 260, 614)
  text("8", 180, 525)
  text("9", 150, 415)
  text("10", 170, 290)
  text("11", 260, 200)
  text("12", 380, 150)

  hr = hour();
  mn = minute();
  sc = second();
push();
  rotate(scAngle);
  strokeWeight(2);
  stroke(160, 250, 170);
  noFill();

  scAngle = map(sc, 0, 60, 0, 360);
  arc(400, 400, 450, 450, 0, scAngle);
pop()
push();
  rotate(mnAngle);
  strokeWeight(4);
  stroke("blue");
  noFill();

  mnAngle = map(mn, 0, 60, 0, 360);
  arc(400, 400, 300, 300, 0, mnAngle);
pop();
push();
  rotate(hrAngle);
  strokeWeight(6);
  stroke("red");
  noFill();

  hrAngle = map(hr%12, 0, 12, 0, 360);
  arc(400, 400, 250, 250, 0, hrAngle);
pop();
  translate(400, 400);
  rotate(-90);
}