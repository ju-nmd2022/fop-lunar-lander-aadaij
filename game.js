// source for setting up the three states of the game https://www.youtube.com/watch?v=3DcmPs4v2iA&t=537s

createCanvas(800, 500);

// start screen function
function startScreen() {
  function instuctions() {
    text("Hoop Magic", 400, 70);
    text("Instruction on how to paly the game", 400, 100);
  }
  function button(x, y, w, h) {
    noStroke();
    fill(255, 0, 0);
    rect(x, y, w, h);

    fill(0, 0, 0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("PLAY", x + w / 2, y + h / 2);
  }
  background(255, 255, 255);
  button(300, 200, 200, 60);
  instuctions();
}

// game screen function
function gameScreen() {}

// end screen function
function endScreen() {
  textAlign(RIGHT);
  background(255, 255, 255);
  text("HIGH SCORE", 800 / 2, 600 / 2);
  text("SCORE", 800 / 2, 600 / 2 + 20);
}
let screenState = "start";

function mouseClicked() {
  if (
    screenState === "start" &&
    mouseX > 200 &&
    mouseX < 200 + 200 &&
    mouseY > 200 &&
    mouseY < 200 + 60
  ) {
    screenState = "game";
  } else if (screenState === "game") {
    screenState = "end";
  } else if (screenState === "end") {
    screenState = "game";
  }
}

function draw() {
  if (screenState === "start") {
    startScreen();
  } else if (screenState === "game") {
    gameScreen();
  } else if (screenState === "end") {
    endScreen();
  }
  gameScreen();
}
