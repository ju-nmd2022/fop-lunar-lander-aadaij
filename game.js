// source for setting up the three states of the game https://www.youtube.com/watch?v=3DcmPs4v2iA&t=537s

textFont("mono space");
createCanvas(800, 500);

// start schreen function
function startScreen() {
  function instuctions() {
    text("TITLE", 400, 70);
    text("INSTRUCTIONS HERE", 400, 100);
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
function gameScreen() {
  background(0, 0, 0);
  let x = 100;
  let y = 100;
  function ballAnimation() {
    fill(255, 255, 255);
    ellipse(x, y, 30, 30);
    y = y + 1;
  }
  ballAnimation();
}

// end screen function
function endScreen() {
  textAlign(RIGHT);
  background(255, 255, 255);
  text("HIGH SCORE", width / 2, height / 2);
  text("SCORE", width / 2, height / 2 + 20);
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
  // if (screenState === "start") {
  //   startScreen();
  // } else if (screenState === "game") {
  //   gameScreen();
  // } else if (screenState === "end") {
  //   endScreen();
  // }
  gameScreen();
}
