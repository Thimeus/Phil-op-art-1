function setup() {
  createCanvas(800, 800, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(50);
  orbitControl();
  lights();
  
  let cubeSize = 200;
  let rotationSpeed = 0.01;

  // Gesamtwürfel-Rotation
  rotateX(frameCount * rotationSpeed);
  rotateY(frameCount * rotationSpeed * 1.2);

  // Frontale Fläche (rot-weiße Streifen)
  push();
  translate(0, 0, cubeSize/2);
  drawStripes(cubeSize, color(255, 0, 0), color(255));
  pop();

  // Rückseite (schwarz-weißes Schachbrett)
  push();
  translate(0, 0, -cubeSize/2);
  rotateY(180);
  drawCheckerboard(cubeSize, 8);
  pop();

  // Linke Seite (pulsierende Kreise)
  push();
  translate(-cubeSize/2, 0, 0);
  rotateY(-90);
  drawCircles(cubeSize);
  pop();

  // Rechte Seite (verzerrte Diagonalen)
  push();
  translate(cubeSize/2, 0, 0);
  rotateY(90);
  drawDiagonals(cubeSize);
  pop();

  // Obere Fläche (grüne Spirale)
  push();
  translate(0, -cubeSize/2, 0);
  rotateX(90);
  drawSpiral(cubeSize);
  pop();

  // Untere Fläche (blaue Wellen)
  push();
  translate(0, cubeSize/2, 0);
  rotateX(-90);
  drawWaves(cubeSize);
  pop();
}

// Hilfsfunktionen für die Muster:

function drawStripes(size, col1, col2) {
  let stripeWidth = size/10;
  for(let x = -size/2; x < size/2; x += stripeWidth) {
    fill((x/stripeWidth) % 2 === 0 ? col1 : col2);
    noStroke();
    rect(x, -size/2, stripeWidth, size);
  }
}

function drawCheckerboard(size, tiles) {
  let tileSize = size/tiles;
  for(let y = -size/2; y < size/2; y += tileSize) {
    for(let x = -size/2; x < size/2; x += tileSize) {
      fill((x + y) / tileSize % 2 === 0 ? 255 : 0);
      rect(x, y, tileSize, tileSize);
    }
  }
}

function drawCircles(size) {
  let pulse = sin(frameCount) * 20;
  for(let i = 0; i < 5; i++) {
    fill(255, 150 + i*20, 0);
    ellipse(
      size/4 * cos(frameCount*0.02 + i),
      size/4 * sin(frameCount*0.02 + i),
      50 + pulse
    );
  }
}

function drawDiagonals(size) {
  stroke(255);
  for(let i = -5; i <= 5; i++) {
    let offset = frameCount % 100;
    line(
      -size/2 + offset, 
      size/2 * i/5, 
      size/2 - offset, 
      size/2 * i/5
    );
  }
}

function drawSpiral(size) {
  noFill();
  stroke(0, 255, 100);
  strokeWeight(3);
  for(let r = 0; r < 150; r += 10) {
    arc(0, 0, r, r, frameCount, frameCount + 120);
  }
}

function drawWaves(size) {
  noFill();
  stroke(0, 100, 255);
  for(let y = -size/2; y < size/2; y += 20) {
    beginShape();
    for(let x = -size/2; x <= size/2; x += 10) {
      vertex(x, y + sin(x*0.1 + frameCount*0.1) * 15);
    }
    endShape();
  }
}