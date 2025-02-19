let checkboxX, checkboxY;
let boxX, boxY, boxWidth, boxHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  textSize(30);
  textAlign(LEFT, CENTER);
  noFill();
  checkboxX = width / 2;
  checkboxY = height / 2;
}

function draw() {
  background(220);

  // Set the position and dimensions for the box around the checkbox and text
  boxWidth = 60 + textWidth("Verify not a cyborg ") + 40; // Adjust width based on text length
  boxHeight = 60 + 40; // Adjust height for padding

  boxX = checkboxX - 20;
  boxY = checkboxY - 20;

  // Draw the box around the checkbox and text
  stroke(0);
  strokeWeight(4);
  noFill();
  rect(boxX, boxY, boxWidth, boxHeight, 5); // Box with rounded corners

  // Draw styled checkbox inside the box
  rect(checkboxX, checkboxY, 60, 60, 5); // Rounded corners for the checkbox

  // Draw text next to checkbox
  fill(0);
  noStroke();
  text("Verify not a cyborg", checkboxX + 80, checkboxY + 30);

  // If mouse is over the checkbox, move it
  if (
    mouseX > checkboxX - 100 &&
    mouseX < checkboxX + 240 &&
    mouseY > checkboxY - 100 &&
    mouseY < checkboxY + 160
  ) {
    moveCheckbox();
    fill(100, 100, 255);
    text("cyborg!", checkboxX + 40, checkboxY + 45);
  }
}

function moveCheckbox() {
  // Move the checkbox to a new random location within the canvas bounds
  checkboxX = random(100, width - 200);
  checkboxY = random(height - 60);
}
