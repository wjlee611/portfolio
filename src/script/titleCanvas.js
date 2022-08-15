function Canvas() {
  var canvas = document.querySelector("#scene"),
    ctx = canvas.getContext("2d"),
    particles = [],
    amount = 0,
    mouse = { x: 0, y: 0 },
    radius = 1;

  var copy = document.querySelector("#copy");
  var title = copy.value;

  var colors = ["#fff", "#aaa", "#777"];

  var ww = (canvas.width = 400);
  var wh = (canvas.height = 100);

  function Particle(x, y) {
    this.x = title.length * 15 + Math.random() * 100 - 50;
    this.y = wh / 2 + Math.random() * 10 - 5;
    this.dest = {
      x: x,
      y: y,
    };
    this.r = Math.random() + 0.5;
    this.vx = (Math.random() - 0.5) * 5;
    this.vy = (Math.random() - 0.5) * 5;
    this.accX = 0;
    this.accY = 0;
    this.friction = Math.random() * 0.05 + 0.9;

    this.color = colors[Math.floor(Math.random() * 3)];
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
    ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
    ctx.fill();

    var a = this.x - mouse.x;
    var b = this.y - mouse.y;

    var distance = Math.sqrt(a * a + b * b);
    if (distance < radius * 30) {
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

  function onTouchEnd(e) {
    mouse.x = -9999;
    mouse.y = -9999;
  }

  function initScene() {
    setTimeout(() => {
      var title = document.querySelector("#copy").value;

      ww = canvas.width = 400;
      wh = canvas.height = 100;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = "bold " + ww / 10 + "px sans-serif";
      ctx.textAlign = "start";
      ctx.fillText(title, 50, wh / 2);

      var data = ctx.getImageData(0, 0, ww, wh).data;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "screen";

      particles = [];
      for (var i = 0; i < ww; i += Math.round(ww / 300)) {
        for (var j = 0; j < wh; j += Math.round(ww / 300)) {
          if (data[(i + j * ww) * 4 + 3] > 200) {
            particles.push(new Particle(i, j + 13));
          }
        }
      }
      amount = particles.length;
    }, 200);
  }

  function render(a) {
    requestAnimationFrame(render);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < amount; i++) {
      particles[i].render();
    }
  }

  copy.addEventListener("change", initScene);
  document
    .querySelector("#next_btn")
    .addEventListener("click", () => initScene());
  document
    .querySelector("#prev_btn")
    .addEventListener("click", () => initScene());
  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("touchmove", onTouchMove);
  window.addEventListener("touchend", onTouchEnd);
  initScene();
  requestAnimationFrame(render);
}

export default Canvas;
