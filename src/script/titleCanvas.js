function Canvas() {
  var canvas = document.querySelector("#scene"),
    ctx = canvas.getContext("2d"),
    particles = [],
    amount = 0,
    mouse = { x: 0, y: 0 };

  var title = window.location.hash;
  if (title === "#home") title = "DEV. WOONG";
  if (title === "#aboutme") title = "ABOUT ME";
  if (title === "#projects") title = "PROJECTS";
  if (title === "#timeline") title = "TIME LINE";

  // var colors = ["#aaeeff", "#66ddff", "#ffffff"];

  var ww = (canvas.width = 400);
  var wh = (canvas.height = 100);

  function Particle(x, y) {
    this.x = Math.round(title.length * 15 + Math.random() * 100 - 50);
    this.y = Math.round(wh / 2 + Math.random() * 10 - 5);
    this.dest = {
      x: x,
      y: y,
    };
    this.r = 2;
    this.vx = Math.round((Math.random() - 0.5) * 4);
    this.vy = Math.round((Math.random() - 0.5) * 4);
    this.accX = 0;
    this.accY = 0;
    this.friction = Math.random() * 0.05 + 0.9;

    this.color = "#888";
  }

  Particle.prototype.render = function () {
    this.accX = (this.dest.x - this.x) / 300;
    this.accY = (this.dest.y - this.y) / 300;
    this.vx += this.accX;
    this.vy += this.accY;
    this.vx *= this.friction;
    this.vy *= this.friction;

    this.x += this.vx;
    this.y += this.vy;

    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.r, this.r);
    ctx.fill();

    var a = this.x - mouse.x;
    var b = this.y - mouse.y;

    var distance = Math.sqrt(a * a + b * b);
    if (distance < 30) {
      this.accX = (this.x - mouse.x) / 100;
      this.accY = (this.y - mouse.y) / 100;
      this.vx += this.accX;
      this.vy += this.accY;
    }
  };

  function onMouseMove(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }

  function onTouchMove(e) {
    if (e.touches.length > 0) {
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
    }
  }

  function onTouchEnd() {
    mouse.x = -9999;
    mouse.y = -9999;
  }

  function initScene() {
    setTimeout(() => {
      title = window.location.hash;
      if (title === "#home") title = "DEV. WOONG";
      if (title === "#aboutme") title = "ABOUT ME";
      if (title === "#projects") title = "PROJECTS";
      if (title === "#timeline") title = "TIME LINE";

      ww = canvas.width = 400;
      wh = canvas.height = 100;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = "700 " + ww / 10 + "px Verdana";
      ctx.textAlign = "start";
      ctx.fillText(title, 50, wh / 2);

      var data = ctx.getImageData(0, 0, ww, wh).data;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "screen";

      particles = [];
      for (var i = 0; i < ww; i += 3) {
        for (var j = 0; j < wh; j += 3) {
          if (data[(i + j * ww) * 4 + 3] > 250) {
            particles.push(new Particle(i, j + 13));
          }
        }
      }
      amount = particles.length;
    }, 200);
  }

  function render() {
    requestAnimationFrame(render);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < amount; i++) {
      particles[i].render();
    }
  }

  window.addEventListener("title-change", () => initScene());
  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("touchmove", onTouchMove);
  window.addEventListener("touchend", onTouchEnd);
  initScene();
  requestAnimationFrame(render);
}

export default Canvas;
