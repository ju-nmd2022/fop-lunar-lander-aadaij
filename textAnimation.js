const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ";

let title = "SCORE";

setInterval(() => {
  background(0, 0, 0);
  let outTitle = letters[Math.floor(Math.random() * 29)];
  function draw() {
    textSize(20);
    fill(255, 255, 255);
    text(outTitle, 100, 100);
  }
  draw();
}, 150);
