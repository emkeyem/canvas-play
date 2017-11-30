var canvas = document.getElementById("myCanvas"); 
var c = canvas.getContext('2d');

var timeStep = 1000/60;
var angle = 0;
var size = 20;
var w = c.canvas.width= window.innerWidth;
var h = c.canvas.height = window.innerHeight;

var cmTID;

var isMouseDown = false;
c.canvas.onmousedown = 
  function(evt) { isMouseDown = true; };
c.canvas.onmouseup = 
  function(evt) { isMouseDown = false; };

var mouse = {x: 0, y: 0};
c.canvas.onmousemove = 
  function(evt) {
    mouse.x = evt.clientX;
    mouse.y = evt.clientY;
  };

function update() {
  c.clearRect(0, 0, w, h);

  

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
    c.beginPath();
    c.moveTo(w / 2, h / 2);
    c.lineTo(mouse.x, mouse.y);
    c.stroke();
  }

  angle += 1;

  clearTimeout(cmTID);
  cmTID = setTimeout(update, timeStep);
}

update();
