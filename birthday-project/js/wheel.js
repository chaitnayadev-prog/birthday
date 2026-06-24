// ============================================================
//  wheel.js — Spin the Wheel — Separate full page
// ============================================================

let _wAngle   = 0;
let _wSpin    = false;
let _wHistory = [];

function _wSize() {
  return Math.min(260, Math.max(200, window.innerWidth - 80));
}

function initWheel() {
  const cv = document.getElementById('wcanvas');
  if (!cv) return;
  const s = _wSize();
  cv.width = s; cv.height = s;
  _drawWheel(_wAngle);
}

function _drawWheel(angle) {
  const cv = document.getElementById('wcanvas');
  if (!cv) return;
  const ctx = cv.getContext('2d');
  const n   = SPIN_PRIZES.length;
  const cx  = cv.width / 2, cy = cv.height / 2, r = cx - 6;
  const fills = ['rgba(201,168,76,0.07)', 'rgba(201,168,76,0.15)'];

  ctx.clearRect(0, 0, cv.width, cv.height);

  for (let i = 0; i < n; i++) {
    const s = angle + i / n * Math.PI * 2;
    const e = angle + (i + 1) / n * Math.PI * 2;
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, r, s, e); ctx.closePath();
    ctx.fillStyle = fills[i % 2]; ctx.fill();
    ctx.strokeStyle = 'rgba(201,168,76,0.2)'; ctx.lineWidth = 0.8; ctx.stroke();
    ctx.save(); ctx.translate(cx, cy); ctx.rotate(s + (e - s) / 2);
    ctx.textAlign = 'right';
    ctx.fillStyle = 'rgba(245,228,176,0.6)';
    ctx.font = `${Math.round(cv.width * 0.048)}px Inter`;
    ctx.fillText(SPIN_PRIZES[i].split(' ').pop(), r - 8, 4);
    ctx.restore();
  }
  // centre dot
  ctx.beginPath(); ctx.arc(cx, cy, 14, 0, Math.PI * 2);
  ctx.fillStyle = '#c9a84c'; ctx.fill();
}

function doSpin() {
  if (_wSpin) return;
  _wSpin = true;
  const disp = document.getElementById('spin-prize-display');
  const btn  = document.getElementById('spinbtn');
  if (disp) { disp.textContent = ''; disp.classList.remove('lit'); }
  if (btn)  btn.disabled = true;

  const extra = Math.PI * 2 * (5 + Math.random() * 6);
  const target = _wAngle + extra;
  const dur    = 3500;
  const t0     = performance.now();
  const a0     = _wAngle;

  function frame(now) {
    const t = Math.min((now - t0) / dur, 1);
    const e = 1 - Math.pow(1 - t, 4);
    _wAngle = a0 + (target - a0) * e;
    _drawWheel(_wAngle);
    if (t < 1) { requestAnimationFrame(frame); return; }

    _wAngle = target % (Math.PI * 2);
    _wSpin  = false;
    if (btn) btn.disabled = false;

    const n    = SPIN_PRIZES.length;
    const norm = ((-_wAngle) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
    const idx  = Math.floor(norm / (Math.PI * 2) * n) % n;
    const prize = SPIN_PRIZES[idx];

    if (disp) { disp.textContent = prize; disp.classList.add('lit'); }

    // add to history (max 3)
    _wHistory.unshift(prize);
    if (_wHistory.length > 3) _wHistory.pop();
    _renderSpinHistory();
  }
  requestAnimationFrame(frame);
}

function _renderSpinHistory() {
  const list = document.getElementById('spin-history-list');
  if (!list) return;
  list.innerHTML = _wHistory.map(p =>
    `<div class="spin-history-item">${p}</div>`
  ).join('');
  const wrap = document.getElementById('spin-history');
  if (wrap) wrap.style.display = _wHistory.length ? 'block' : 'none';
}

window.addEventListener('resize', () => {
  if (document.getElementById('pg-spin')?.classList.contains('active')) initWheel();
});
