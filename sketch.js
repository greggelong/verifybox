let checkboxX, checkboxY;
let boxX, boxY, boxWidth, boxHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  textSize(16);
  textAlign(LEFT, CENTER);
  noFill();
  checkboxX = width / 2;
  checkboxY = height / 2;
}

function draw() {
  background(220);

  // Set the position and dimensions for the box around the checkbox and text
  boxWidth = 30 + textWidth("Verify not a cyborg ") + 20; // Adjust width based on text length
  boxHeight = 30 + 20; // Adjust height for padding

  boxX = checkboxX - 10;
  boxY = checkboxY - 10;

  // Draw the box around the checkbox and text
  stroke(0);
  strokeWeight(4);
  noFill();
  rect(boxX, boxY, boxWidth, boxHeight, 5); // Box with rounded corners

  // Draw styled checkbox inside the box
  rect(checkboxX, checkboxY, 30, 30, 5); // Rounded corners for the checkbox

  // Draw text next to checkbox
  fill(0);
  noStroke();
  text("Verify not a cyborg", checkboxX + 40, checkboxY + 15);

  // If mouse is over the checkbox, move it
  if (
    mouseX > checkboxX &&
    mouseX < checkboxX + 30 &&
    mouseY > checkboxY &&
    mouseY < checkboxY + 30
  ) {
    moveCheckbox();
    fill(100, 100, 255);
    text("cyborg!", checkboxX + 40, checkboxY + 45);
  }
}

function moveCheckbox() {
  // Move the checkbox to a new random location within the canvas bounds
  checkboxX = random(100, width - 100);
  checkboxY = random(height - 30);
}
