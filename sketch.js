var particles = [];
var friction;
// var gravity;
// var wind;
var j;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(-0.01, 0.01, 0, 0.001)


  for (i = 0; i < 10; i++)
    particles[i] = new Particle();
  j = 0;
}

function draw() {
  background(110);

  for (i = particles.length - 1; i >= 0; i--) {

    gravity = createVector(0, 0.02 * particles[i].mass)
    // for(i=0;i<5;i++)
    // gravity.mult(p.mass)

    var w = slider.value()
    wind = createVector(w, 0)

    // wind = createVector(0.01, 0)

    // opor
    particles[i].applyFriction(0.001);
    // friction = p.vel.copy();
    // friction.normalize();
    // let c = -0.001;
    // friction.mult(c);
    // p.applyForce(friction);

    // if (j < 100) {
    
    //particles[i].applyForce(gravity);
    
    //   //console.log(i);
    //    j++;
    // }

    //console.log(j);

    //if (mouseIsPressed)
    particles[i].applyForce(wind);

    particles[i].update();
    particles[i].display();
    particles[i].edges()
  }
}

function mousePressed() {
  for (i = particles.length - 1; i >= 0; i--) {
    d = dist(mouseX,
      mouseY,
      particles[i].location.x,
      particles[i].location.y)

    if (d < particles[i].r/2) {
      let vel1 = particles[i].division() 
      let vel2 = -particles[i].division()
      
      
      
      //let c =0.5;
      
      let loc1 = particles[i].location.copy() //createVector(particles[i].location.x+10, particles[i].location.y)
      
      let loc2 = particles[i].location.copy() //createVector(particles[i].location.x-10, particles[i].location.y)
      
     // loc1 = loc1+ vel1;
      
      particles.push(new Particle(loc1, vel1, particles[i].mass/2, particles[i].col))
      
      particles.push(new Particle(loc2, vel2, particles[i].mass/2,particles[i].col))
      
      particles.splice(i,1)
    }
  }
}