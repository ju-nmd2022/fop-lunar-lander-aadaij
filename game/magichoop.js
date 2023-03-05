// Magic Hoop basketball game

// setting up the canvas
function setup() {
  var cnv = createCanvas(800, 600);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(0, 0, 0);
}

// values used through the game
let screenState = "start";
let score = 0;

// starting button
function startButton() {
  push();
  stroke(0, 0, 0);
  strokeWeight(3);
  fill(127, 176, 103);
  rect(800 / 2 - 150, 600 / 2 - 30, 300, 60);
  pop();
  noStroke();
  fill(0, 0, 0);
  textSize(16);
  textAlign(CENTER, CENTER);
  textFont("'Courier Prime', monospace");
  text("Press space to play", 800 / 2, 600 / 2);
}

// starting sreen
function startScreen() {
  background(255, 255, 255);
  function titleText() {
    textFont("'Courier Prime', monospace");
    // heading
    push();
    textSize(25);
    text("Magic Hoop", 800 / 2, 80);
    pop();
    // instructions
    push();
    textAlign(LEFT);
    textSize(16);
    text(
      "In this alternative universe \nfree throws are a little different. \nYour goal is to mind control the ball \n(with the arrow keys) into the hoop as many \ntimes as possible before your time runs out.",
      200,
      180
    );
    pop();
  }
  startButton();
  titleText();
}

// drawing the basket
function backBoard() {
  push();
  translate(-40, -90);
  noFill();
  strokeWeight(3);
  // backboard
  stroke(255, 255, 255);
  rect(600 / 2, 400, 300, 200);
  rect(370, 460, 150, 100);
  pop();
}

function rimAndNet() {
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
  line(390, 560, 400, 660);
  line(500, 560, 490, 660);
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
  backBoard();
}

function firstBallPosition() {
  // horisontal line
  line(160, 205, 240, 205);
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

// the animation of the ball
let state = 0;
function ballRotationAnimation(ballPositionX, ballPositionY) {
  starBackground();
  push();
  translate(ballPositionX, ballPositionY);
  stroke(255, 255, 255);
  strokeWeight(3);
  noFill();

  // the ball outline
  push();
  fill(0, 0, 0);
  ellipse(200, 200, 80);
  pop();
  //   vertical line
  line(200, 160, 200, 240);

  let frameSpeed = 10;

  if (state === 0) {
    // first drawing
    firstBallPosition();

    // display the next frame of the animation
    if (frameCount % frameSpeed === 0) {
      state = 1;
    }
  }

  // second drawing
  else if (state === 1) {
    // Draw the second drawing
    secondBallPosition();

    // display the next frame of the animation
    if (frameCount % frameSpeed === 0) {
      state = 2;
    }
  }

  // third drawing
  else if (state === 2) {
    // Draw the third drawing
    thirdBallPosition();

    // display the next frame of the animation
    if (frameCount % frameSpeed === 0) {
      state = 3;
    }
  }

  // fourth drawing
  else if (state === 3) {
    // Draw the third drawing
    fourthBallPosition();

    // display the first frame of the animation again
    if (frameCount % frameSpeed === 0) {
      state = 0;
    }
  }
  pop();

  // drawing the rim and net infront of the ball
  rimAndNet();
}

// https://p5js.org/examples/motion-non-orthogonal-reflection.html
// making the ball move with the keys https://pixelkind.github.io/foundationsofprogramming/programming/12-03-example
// gravity tutorial https://www.youtube.com/watch?v=b5AryiZ6Z-s

// game mecanics
// the ball starts falling from a random width
let x = Math.floor(Math.random() * 700);
// the ball starts falling from out of site
let y = -250;
// setting the speed the ball is dropping and moving side to side
let verticalSpeed = 0;
let horisontalSpeed = 0;

function gameMecanics() {
  background(0, 0, 0);
  ballRotationAnimation(x, y);

  // setting gravity and jumping
  y = y + verticalSpeed;
  if (keyIsDown(38)) {
    verticalSpeed = -4;
  } else {
    setInterval(function gravity() {
      verticalSpeed = verticalSpeed + 0.0001;
    });
  }

  // moving left and right
  x = x + horisontalSpeed;
  if (keyIsDown(37)) {
    horisontalSpeed = -0.3;
  } else if (keyIsDown(39)) {
    horisontalSpeed = 0.3;
  } else {
    x = x + horisontalSpeed;
  }
}

// two minute timer for the game
let duration = 120;

function timer() {
  // how much time is left
  let minutes = Math.floor(duration / 6000);
  let seconds = duration % 6000;
  // only showin two numbers for seconds
  seconds = seconds / 100;
  // getting rid of desimals
  seconds = seconds.toFixed(0);

  // visible timer
  textSize(20);
  fill(255, 255, 255);
  text(minutes + ":" + (seconds < 10 ? "0" : "") + seconds, 750, 40);

  // subtracting from the duration
  duration--;

  // when time runs out show score screen
  if (duration < 0) {
    screenState = "end";
  }
}

// ending screen to show the score and re-start the game
function scoreScreen() {
  background(255, 255, 255);
  push();
  fill(0, 0, 0);
  textAlign(LEFT);
  // hight score
  text("HIGH SCORE", 250, 160);
  text(score, 540, 160);
  // latest score
  text("SCORE", 250, 185);
  text(score, 540, 185);
  startButton();
  pop();
}

// source for setting up the three states of the game https://www.youtube.com/watch?v=3DcmPs4v2iA&t=537s
// draw function
function draw() {
  if (keyIsDown(32)) {
    screenState = "game";
  } else if (screenState === "start") {
    startScreen();
  } else if (screenState === "game") {
    gameMecanics();
    timer();
  } else if (screenState === "end") {
    scoreScreen();
  }
}
