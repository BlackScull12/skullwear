const canvas = document.getElementById("skulls");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let skulls = Array.from({ length: 40 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  speed: Math.random() * 0.5 + 0.2,
  size: Math.random() * 40 + 20
}));

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  skulls.forEach(s => {
    ctx.fillStyle = "rgba(255,255,255,0.05)";
    ctx.font = `${s.size}px serif`;
    ctx.fillText("☠", s.x, s.y);
    s.y += s.speed;
    if (s.y > canvas.height) s.y = 0;
  });
  requestAnimationFrame(draw);
}

draw();
