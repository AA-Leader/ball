class Ball {
    constructor(x, y, r) {
var options=
{isStatic:false,
density: 1.2,
friction:0,
restitution:0.3
}
      
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
      
  
     
  
      World.add(world, this.body);
    }
    
  
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
      
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  }