function Base(x, y, size, a, da) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.angle = a;
    this.da = da;
  
    this.move = function() {
      this.angle += this.da;
    };
  
    this.draw = function() {
      c.save();
      var s = this.size;
      var x = this.x;
      var y = this.y;
      c.translate(x, y);
      c.rotate(this.angle * Math.PI / 180);
      c.strokeRect(-s / 2, -s / 2, s, s);
      c.rotate(30 * Math.PI / 180);
      c.strokeRect(-s / 2, -s / 2, s, s);
      c.rotate(30 * Math.PI / 180);
      c.strokeRect(-s / 2, -s / 2, s, s);
      c.restore();
      // Draw the laser firing if it is firing
      if (isMouseDown) {
        c.beginPath();
        c.moveTo(x, y);
        c.lineTo(mouse.x, mouse.y);
        c.stroke();
      }
    };
  }