// https://pixelkind.github.io/foundationsofprogramming/programming/12-03-example
// animating ball to move with keys

// https://p5js.org/examples/motion-non-orthogonal-reflection.html

function firstBallPosition() {
  line(240, 200, 160, 200);

  // right line
  beginShape();
  vertex(175, 170);
  bezierVertex(175, 170, 210, 200, 175, 230);
  endShape();

  // left line
  beginShape();
  vertex(225, 170);
  bezierVertex(225, 170, 190, 200, 225, 230);
  endShape();
}

function secondBallPosition() {
  //   second ball position
  //   right line
  beginShape();
  vertex(239, 190);
  bezierVertex(239, 190, 200, 210, 215, 235);
  endShape();

  // right line
  beginShape();
  vertex(160, 190);
  bezierVertex(160, 190, 200, 210, 185, 235);
  endShape();

  // vertical curve
  beginShape();
  vertex(165, 215);
  bezierVertex(165, 215, 200, 230, 235, 215);
  endShape();
}

function thirdBallPosition() {
  // third ball position
  //   left line
  beginShape();
  vertex(220, 165);
  bezierVertex(220, 165, 235, 200, 220, 235);
  endShape();

  // right line
  beginShape();
  vertex(180, 165);
  bezierVertex(180, 165, 165, 200, 180, 235);
  endShape();
}

function fourthBallPosition() {
  // fourth ball position
  //   left line
  beginShape();
  vertex(220, 165);
  bezierVertex(220, 165, 200, 200, 239, 210);
  endShape();
  // right line
  beginShape();
  vertex(180, 165);
  bezierVertex(180, 165, 200, 200, 160, 210);
  endShape();
  // vertical curve
  beginShape();
  vertex(160, 190);
  bezierVertex(160, 190, 200, 170, 239, 190);
  endShape();
}

const state = 0;

// animation
function ballRotationAnimation() {
  background(0, 0, 0);
  let ballPositionX = 200;
  let ballPositionY = 200;
  stroke(255, 255, 255);
  strokeWeight(3);
  noFill();

  ellipse(ballPositionX, ballPositionY, 80);
  //   vertical line
  line(ballPositionX, ballPositionX - 40, ballPositionY, ballPositionY + 40);

  // First drawing
  if (state === 0) {
    // Draw the first drawing

    firstBallPosition();

    // Transition to the next state after 60 frames
    if (frameCount % 10 === 0) {
      state = 1;
    }
  }

  // Second drawing
  else if (state === 1) {
    // Draw the second drawing
    secondBallPosition();

    // Transition to the next state after 60 frames
    if (frameCount % 10 === 0) {
      state = 2;
    }
  }

  // Third drawing
  else if (state === 2) {
    // Draw the third drawing
    thirdBallPosition();

    // Transition back to the first state after 60 frames
    if (frameCount % 10 === 0) {
      state = 3;
    }
  }

  // Fourth drawing
  else if (state === 3) {
    // Draw the third drawing
    fourthBallPosition();

    // Transition back to the first state after 60 frames
    if (frameCount % 10 === 0) {
      state = 0;
    }
  }
}

function draw() {
  ballRotationAnimation();
}
