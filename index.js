var canvas = document.getElementById("myCanvas"); 
var c = canvas.getContext('2d');


var w = c.canvas.width= window.innerWidth;
var h = c.canvas.height = window.innerHeight;
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

var enemies = [];
var numEnemies = 5;
for (var i = 0; i < numEnemies; i++) {
  var s = 20;
  var x = (w - s) * Math.random() + s / 2;
  var y = (h - s) * Math.random() + s / 2;
  var dx = 4 * (Math.random()- 0.5);
  var dy = 4 * (Math.random() - 0.5);
  var da = 8 * (Math.random() - 0.5);
  var e = new Enemy(x, y, s, 0, dx, dy, da);
  enemies.push(e);
}
var base = new Base(w / 2, h / 2, 20, 0, 3);

var cmTID;
var timeStep = 1000/60; // In milliseconds
function updateAll() {
  for (var i = 0; i < numEnemies; i++) {
    enemies[i].move();
  }
  base.move();
  c.clearRect(0, 0, w, h);
  for (i = 0; i < numEnemies; i++) {
    enemies[i].draw();
  }
  base.draw();
  clearTimeout(cmTID);
  cmTID = setTimeout(updateAll, timeStep);  
}
updateAll();