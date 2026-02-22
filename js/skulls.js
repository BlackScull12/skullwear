const skullBg = document.querySelector('.skull-bg');

for (let i = 0; i < 20; i++) {
  const skull = document.createElement('img');
  skull.src = 'assets/skull.png';
  skull.className = 'skull';
  skull.style.left = Math.random() * 100 + 'vw';
  skull.style.animationDuration = 10 + Math.random() * 20 + 's';
  skullBg.appendChild(skull);
}
