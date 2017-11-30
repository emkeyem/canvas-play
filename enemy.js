var w = c.canvas.width;
var h = c.canvas.height;

function Enemy(x, y, size, a, dx, dy, da) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.angle = a;

  this.dx = dx;
  this.dy = dy;
  this.da = da;

  this.move = function() {
    this.angle += this.da;
    this.x += this.dx;
    this.y += this.dy;
    // Bounce off the edges
    var s = this.size;
    if (this.x < s / 2 ||
        this.x + s / 2 > w) {
      this.dx = -this.dx;
      this.da = -this.da;
    }
    if (this.y < s / 2 ||
        this.y + s / 2 > h) {
      this.dy = -this.dy;
      this.da = -this.da;
    }
  };

  this.draw = function() {
    c.save();
    var s = this.size;
    var x = this.x;
    var y = this.y;
    c.translate(x, y);
    c.rotate(this.angle * Math.PI / 180);
    c.strokeRect(-s / 2, -s / 2, s, s);
    c.restore();
  };
}

var e = new Enemy(100, 100, 20, 0, 1, 1, 1);
var cmTID;
var timeStep = 50; 
function updateAll() {
  e.move();
  c.clearRect(0, 0, w, h);
  e.draw();
  clearTimeout(cmTID);
  cmTID = setTimeout(updateAll, timeStep);  
}
updateAll();