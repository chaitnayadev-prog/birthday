// ============================================================
//  particles.js — Fewer particles on mobile for perf
// ============================================================

function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let pts = [];

  const isMobile = () => window.innerWidth < 600;

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    const count   = isMobile() ? 45 : 90;
    pts = Array.from({ length: count }, () => _mk(canvas));
  }

  function _mk(cv) {
    return {
      x:  Math.random() * cv.width,
      y:  Math.random() * cv.height,
      r:  Math.random() * 1.0 + 0.2,
      sp: Math.random() * 0.12 + 0.04,
      op: Math.random() * 0.5,
      d:  1,
    };
  }

  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pts.forEach(p => {
      p.y  -= p.sp;
      p.op += 0.003 * p.d;
      if (p.op >= 0.5) p.d = -1;
      if (p.op <= 0.0) p.d =  1;
      if (p.y < -4) { p.y = canvas.height + 4; p.x = Math.random() * canvas.width; }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,168,76,${Math.max(0, Math.min(0.5, p.op))})`;
      ctx.fill();
    });
    requestAnimationFrame(frame);
  }

  window.addEventListener('resize', resize);
  resize();
  frame();
}
