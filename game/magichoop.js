// MagicHoop basketball game

// setting up the canvas
function setup() {
  var cnv = createCanvas(800, 600);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
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

// draw function
function draw() {
  starBackground();
}
