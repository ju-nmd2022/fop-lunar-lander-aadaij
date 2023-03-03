// MagicHoop basketball game

// setting up the canvas
function setup() {
  var cnv = createCanvas(800, 600);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(0, 0, 0);
}

function startScreen() {
  background(255, 255, 255);
  function titleText() {
    textFont("'Courier Prime', monospace");
    push();
    textSize(40);
    text("Hoop Magic", 800 / 2, 80);
    pop();
    push();
    textAlign(LEFT);
    text(
      "In this alternative universe \nfree throws are a little different. \nYour goal is to mind control the ball \n(with the arrow keys) into the hoop as many \ntimes as possible before your time runs out.",
      150,
      180
    );
    pop();
  }
  function startButton() {
    push();
    stroke(2);
    fill(255, 0, 0);
    rect(800 / 2 - 150, 600 / 2 - 30, 300, 60);
    pop();
    noStroke();
    fill(0, 0, 0);
    textSize(20);
    textAlign(CENTER, CENTER);
    textFont("'Courier Prime', monospace");
    text("Press space to play", 800 / 2, 600 / 2);
  }
  startButton();
  titleText();
}

// flashing star background
function starBackground() {
  let flashArray = [];

  for (let i = 0; i < 20; i++) {
    const flash = {
      potitionX: Math.floor(Math.random() * width),
      potitiony: Math.floor(Math.random() * height),
      alpha: Math.random(),
    };
    flashArray.push(flash);
  }

  if (keyIsPressed === true) {
    noStroke();
    background(0, 0, 0);
    for (let flash of flashArray) {
      fill(255, 255, 255, Math.abs(Math.sin(flash.alpha)) * 255);
      let scaling = Math.random();
      let x = Math.floor(Math.random() * 800);
      let y = Math.floor(Math.random() * 600);
      // drawing the star shape
      beginShape();
      vertex(x + 10 * scaling, y + 285 * scaling);
      bezierVertex(
        x + 10 * scaling,
        y + 285 * scaling,
        x + 10 * scaling,
        y + 360 * scaling,
        x + 50 * scaling,
        y + 360 * scaling
      );
      bezierVertex(
        x + 50 * scaling,
        y + 360 * scaling,
        x + 10 * scaling,
        y + 360 * scaling,
        x + 10 * scaling,
        y + 430 * scaling
      );
      bezierVertex(
        x + 10 * scaling,
        y + 430 * scaling,
        x + 10 * scaling,
        y + 360 * scaling,
        x - 30 * scaling,
        y + 360 * scaling
      );
      bezierVertex(
        x - 30 * scaling,
        y + 360 * scaling,
        x + 10 * scaling,
        y + 360 * scaling,
        x + 10 * scaling,
        y + 285 * scaling
      );
      endShape();

      flash.alpha = flash.alpha + 1;
      flash.potitionX = flash.potitionX + Math.random() * 0.1;
    }
  }
}

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

let state = 0;

// animation
function ballRotationAnimation(ballPositionX, ballPositionY) {
  starBackground();
  translate(ballPositionX, ballPositionY);
  stroke(255, 255, 255);
  strokeWeight(3);
  noFill();

  push();
  fill(0, 0, 0);
  ellipse(200, 200, 80);
  pop();
  //   vertical line
  line(200, 160, 200, 240);

  let frameSpeed = 10;

  // First drawing
  if (state === 0) {
    // Draw the first drawing
    firstBallPosition();

    // Transition to the next state after 60 frames
    if (frameCount % frameSpeed === 0) {
      state = 1;
    }
  }

  // Second drawing
  else if (state === 1) {
    // Draw the second drawing
    secondBallPosition();

    // Transition to the next state after 60 frames
    if (frameCount % frameSpeed === 0) {
      state = 2;
    }
  }

  // Third drawing
  else if (state === 2) {
    // Draw the third drawing
    thirdBallPosition();

    // Transition back to the first state after 60 frames
    if (frameCount % frameSpeed === 0) {
      state = 3;
    }
  }

  // Fourth drawing
  else if (state === 3) {
    // Draw the third drawing
    fourthBallPosition();

    // Transition back to the first state after 60 frames
    if (frameCount % frameSpeed === 0) {
      state = 0;
    }
  }
}

// source for setting up the three states of the game https://www.youtube.com/watch?v=3DcmPs4v2iA&t=537s
let screenState = "start";
function gameState() {
  if (screenState === "start") {
    screenState = "game";
  } else if (screenState === "game") {
    screenState = "end";
  } else if (screenState === "end") {
    screenState = "game";
  }
}

function startTheGame() {
  if (keyIsDown(32)) {
    screenState = "game";
  } else if (screenState === "start") {
    screenState = "start";
    startScreen();
  } else if (screenState === "game") {
    ballRotationAnimation(0, 100);
  }
}

// two minute timer for the game
// Call a function after the specified amount of time has elapsed
// setTimeout(function () {
//   screenState = "end";
//   console.log("Timer has elapsed!");
// }, 120000);

// draw function
function draw() {
  startTheGame();
}
