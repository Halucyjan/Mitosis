class Particle {
  constructor(loc, vel, mass,col) {
    // this.x = 50;
    // this.y = 50;
    this.location = loc || createVector(random(0, width), random(0, height));
    this.vel = vel || createVector(random(0, 1), random(0, 1));
    this.acc = createVector(0, 0);
    this.force = createVector(0, 0);
    this.mass = mass || random(0.5, 2);
    this.r = 16 * this.mass;
    this.col = col || createVector(random(0, 255), 0, random(0, 255));
  }





  update() {

    this.location.add(this.vel);
    //     this.location.x += this.vel.x;
    //     this.location.y += this.vel.y;


    this.vel.add(this.acc);
    //     this.vel.x += this.acc.x;
    //     this.vel.y += this.acc.y;

    this.acc.mult(0);

    // incrise mass
    if (this.mass < 10)
      this.mass += 0.001;
    this.r = 16 * this.mass;

  }

  applyForce(force) {
    var f = createVector(force.x, force.y, force.z)
    f.div(this.mass);
    this.acc.add(f);
  }

  applyFriction(c) {
    var friction = this.vel.copy();
    friction.normalize();
    this.c = -c || -0.001;
    friction.mult(this.c);
    this.applyForce(friction);
  }

  //cell division
  division() {
    let v = p5.Vector.random2D();
    return v;
  }

  display() {
    push()

    //fill(255, 50);
    fill(this.col.x, this.col.y, this.col.z,90)
    circle(this.location.x, this.location.y, this.r);

    pop()
  }

  edges() {
    //right
    if (this.location.x > width - this.r / 2) {
      this.location.x = width - this.r / 2;
      this.vel.x *= -1
    }
    //left
    if (this.location.x < this.r / 2) {
      this.location.x = this.r / 2;
      this.vel.x *= -1
    }
    //down
    if (this.location.y > height - this.r / 2) {
      this.location.y = height - this.r / 2;
      this.vel.y *= -1
    }
    // up
    if (this.location.y < this.r / 2) {
      this.location.y = this.r / 2;
      this.vel.y *= -1
    }
  }
}
