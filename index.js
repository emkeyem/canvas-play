var canvas = document.getElementById("myCanvas"); 
var c = canvas.getContext('2d');

var timeStep = 1000/60; // In milliseconds
var angle = 0;
var size = 20;
var w = c.canvas.width= window.innerWidth;
var h = c.canvas.height = window.innerHeight;

var cmTID;

// Keep track of whether the mouse is up or down
var isMouseDown = false;
c.canvas.onmousedown = 
  function(evt) { isMouseDown = true; };
c.canvas.onmouseup = 
  function(evt) { isMouseDown = false; };

// Keep track of where the mouse is
var mouse = {x: 0, y: 0};
c.canvas.onmousemove = 
  function(evt) {
    mouse.x = evt.clientX;
    mouse.y = evt.clientY;
  };

function update() {
  // Clear the canvas
  c.clearRect(0, 0, w, h);

  // Draw our base in the center, rotated by angle
  c.save();
  c.translate(w / 2, h / 2);
  c.rotate(Math.PI * angle / 180);
  c.strokeRect(-size / 2, -size / 2, size, size);
  c.rotate(Math.PI * 30 / 180);
  c.strokeRect(-size / 2, -size / 2, size, size);
  c.rotate(Math.PI * 30 / 180);
  c.strokeRect(-size / 2, -size / 2, size, size);
  c.restore();

  if (isMouseDown) {
    // Draw a line from the base to the mouse
    c.beginPath();
    c.moveTo(w / 2, h / 2);
    c.lineTo(mouse.x, mouse.y);
    c.stroke();
  }

  // Increase the rotation a little each time
  angle += 1;

  clearTimeout(cmTID);
  // Do everything again in a while
  cmTID = setTimeout(update, timeStep);
}

update();