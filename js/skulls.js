const canvas = document.getElementById("skulls");
const ctx = canvas.getContext("2d");

/* Resize canvas to full screen */
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

/* Create skulls */
let skulls = Array.from({ length: 50 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  speed: Math.random() * 0.6 + 0.2,
  size: Math.random() * 80 + 40,
  opacity: Math.random() * 0.2 + 0.2
}));

/* Draw loop */
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  skulls.forEach(s => {
    ctx.font = `${s.size}px serif`;
    ctx.fillStyle = `rgba(255,255,255,${s.opacity})`;

    /* Glow effect */
    ctx.shadowColor = "rgba(255,255,255,0.35)";
    ctx.shadowBlur = 12;

    ctx.fillText("☠", s.x, s.y);

    /* Reset shadow so it doesn't stack */
    ctx.shadowBlur = 0;

    /* Movement */
    s.y += s.speed;
    if (s.y > canvas.height + s.size) {
      s.y = -s.size;
      s.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(draw);
}

draw();
