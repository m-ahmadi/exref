function setup() {
  createCanvas(800, 600);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
	// ellipse(50, 50, 80, 80);
  ellipse(mouseX, mouseY, 80, 80);
	line(15, 25, 70, 90);
}