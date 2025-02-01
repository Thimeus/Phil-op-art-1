function setup() {
  createCanvas(1000, 1000, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  orbitControl();

  // Paradoxe Beleuchtung
  directionalLight(255, 0, 0, -1, 1, -1);  // Rotes Licht
  directionalLight(0, 255, 0, 1, -1, 1);   // Grünes Licht (gegensätzliche Richtung)

  // Hypnotische Rotation
  rotateX(frameCount * 0.7);
  rotateY(frameCount * 0.5);
  rotateZ(frameCount * 0.3);

  // Interferenzmuster mit schwebenden Quadern
  noFill();
  strokeWeight(2);
  
  // Erzeuge 3 ineinandergeschachtelte Würfel mit Farbwechsel
  for(let i = 0; i < 3; i++) {
    push();
    stroke(
      map(sin(frameCount*2 + i*50), -1, 1, 0, 255),
      map(cos(frameCount*2 + i*50), -1, 1, 0, 255),
      map(sin(frameCount*2 + i*50 + 90), -1, 1, 0, 255)
    );
    
    // Pulsierende Skalierung
    let scaleFactor = 1 + sin(frameCount*0.5 + i*30)*0.2;
    scale(scaleFactor);
    
    // Würfel mit leicht versetzter Rotation
    box(250 + i*30);
    pop();
    
    // Linker unterer Text
  textAlign(LEFT, BOTTOM);
  text("Phil Scheller / KUNST / Klasse 7d", 20, height - 20);
  }
}