// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ";

// let title = "SCORE";

// setInterval(() => {
//   background(0, 0, 0);
//   let outTitle = letters[Math.floor(Math.random() * 29)];
//   function draw() {
//     textSize(20);
//     fill(255, 255, 255);
//     text(outTitle, 100, 100);
//   }
//   draw();
// }, 150);

function basketRimAndNet() {
  push();
  translate(-40, -90);
  noFill();
  stroke(255, 255, 255);
  // rim
  push();
  strokeWeight(10);
  line(390, 560, 500, 560);
  pop();
  // net
  strokeWeight(3);
  // line(390, 560, 400, 660);
  // line(500, 560, 490, 660);
  line(420, 580, 493, 630);
  line(470, 580, 398, 630);
  line(395, 600, 490, 660);
  line(495, 600, 400, 660);
  line(398, 630, 440, 660);
  line(440, 660, 490, 630);
  line(420, 580, 395, 600);
  line(470, 580, 495, 600);
  line(415, 560, 420, 580);
  line(475, 560, 470, 580);
  pop();
}
