function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);
  
  // Kamera-Steuerung mit Maus
  orbitControl();
  
  // Licht hinzufügen
  directionalLight(255, 255, 255, 0, 0, -1);
  ambientLight(100);
  
  // Würfel-Styling
  fill(135, 206, 250);  // Hellblauer Farbton
  noStroke();
  
  // Rotation
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  
  // Würfel zeichnen
  box(100);
}