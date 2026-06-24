// ============================================================
//  reveal.js — Birthday Reveal Page Magic
//  Fireworks · Floating hearts · Typewriter · Scroll reveal
//  Confetti burst on button press
// ============================================================

let _rvInit = false;
let _twInterval = null;

function initRevealPage() {
  if (_rvInit) return;
  _rvInit = true;

  _spawnHearts();
  _buildStars();
  _startTypewriter();
  _initRevealScrollObserver();
  _initFireworks(); // subtle ambient fireworks on load
}

// ── STAR FIELD ──────────────────────────────────────────────
function _buildStars() {
  const wrap = document.getElementById('rv-stars');
  if (!wrap) return;
  for (let i = 0; i < 80; i++) {
    const s = document.createElement('div');
    s.className = 'rv-star';
    const size = Math.random() * 2 + 0.5;
    s.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%; top:${Math.random()*100}%;
      animation-duration:${2+Math.random()*4}s;
      animation-delay:${-Math.random()*4}s;
      opacity:${0.1+Math.random()*0.4};
    `;
    wrap.appendChild(s);
  }
}

// ── FLOATING HEARTS ─────────────────────────────────────────
const HEART_EMOJIS = ['💙','🩵','💜','🩷','💗','💞','🫀','✨','🌸'];
function _spawnHearts() {
  const wrap = document.getElementById('rv-hearts');
  if (!wrap) return;

  function makeHeart() {
    const h = document.createElement('div');
    h.className = 'fheart';
    h.textContent = HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)];
    h.style.cssText = `
      left:${5 + Math.random()*90}%;
      font-size:${0.9+Math.random()*1.4}rem;
      animation-duration:${7+Math.random()*8}s;
      animation-delay:${Math.random()*6}s;
      opacity:0;
    `;
    wrap.appendChild(h);
    setTimeout(() => h.remove(), 16000);
  }

  // initial burst
  for (let i = 0; i < 12; i++) makeHeart();
  // keep spawning
  setInterval(makeHeart, 900);
}

// ── TYPEWRITER ──────────────────────────────────────────────
const TW_PHRASES = [
  "From \"Class me hai kya?\" to forever mine…",
  "17 din mein duniya badal gayi…",
  "132,000 messages · 300+ goodnights · 1 love…",
  "\"God gave me the perfect gift this year.\" — woh tu thi…",
  "Tu sirf meri girlfriend nahi. Tu mera ghar hai.",
  "Happy Birthday, meri Khushi. 🎂🩵",
  "Loce u the most — hamesha.",
];

function _startTypewriter() {
  const el = document.getElementById('rv-tw-text');
  if (!el) return;

  let phraseIdx = 0, charIdx = 0, deleting = false, pauseTimer = null;

  function tick() {
    const phrase = TW_PHRASES[phraseIdx];

    if (!deleting) {
      charIdx++;
      el.textContent = phrase.slice(0, charIdx);
      if (charIdx === phrase.length) {
        deleting = true;
        pauseTimer = setTimeout(tickLoop, 2400);
        return;
      }
    } else {
      charIdx--;
      el.textContent = phrase.slice(0, charIdx);
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % TW_PHRASES.length;
        pauseTimer = setTimeout(tickLoop, 300);
        return;
      }
    }
    tickLoop();
  }

  function tickLoop() {
    const speed = deleting ? 28 : (charIdx < 4 ? 180 : 52);
    _twInterval = setTimeout(tick, speed);
  }

  tickLoop();
}

// ── FIREWORKS (canvas) ──────────────────────────────────────
let _fw = null;
let _fwParticles = [];

function _initFireworks() {
  const cv = document.getElementById('rv-fireworks');
  if (!cv) return;
  _fw = cv.getContext('2d');
  _resizeFireworks();
  window.addEventListener('resize', _resizeFireworks);

  // subtle ambient bursts every few seconds
  _ambientBurst();
  setInterval(_ambientBurst, 3800);
  _fwLoop();
}

function _resizeFireworks() {
  const cv = document.getElementById('rv-fireworks');
  if (cv) { cv.width = window.innerWidth; cv.height = window.innerHeight; }
}

function _ambientBurst() {
  const cv = document.getElementById('rv-fireworks');
  if (!cv) return;
  // small quiet burst at random position
  _burst(
    cv.width * (0.1 + Math.random() * 0.8),
    cv.height * (0.05 + Math.random() * 0.45),
    20, 0.7
  );
}

function _burst(x, y, count, sizeMulti) {
  const colors = ['#ff9ab8','#88beff','#c898ff','#e8c97a','#7de0a0','#ffffff'];
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 / count) * i + Math.random() * 0.4;
    const speed = (1.5 + Math.random() * 3.5) * (sizeMulti || 1);
    _fwParticles.push({
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1, decay: 0.012 + Math.random() * 0.018,
      r: 1.5 + Math.random() * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      trail: [],
    });
  }
}

function _fwLoop() {
  const cv = document.getElementById('rv-fireworks');
  if (!cv || !_fw) { requestAnimationFrame(_fwLoop); return; }

  _fw.clearRect(0, 0, cv.width, cv.height);

  _fwParticles = _fwParticles.filter(p => p.life > 0);
  _fwParticles.forEach(p => {
    p.trail.push({x: p.x, y: p.y, life: p.life});
    if (p.trail.length > 5) p.trail.shift();

    p.trail.forEach((t, i) => {
      _fw.beginPath();
      _fw.arc(t.x, t.y, p.r * (i/p.trail.length) * 0.6, 0, Math.PI*2);
      _fw.fillStyle = p.color + Math.round(t.life * 60 * (i/p.trail.length)).toString(16).padStart(2,'0');
      _fw.fill();
    });

    _fw.beginPath();
    _fw.arc(p.x, p.y, p.r, 0, Math.PI*2);
    _fw.fillStyle = p.color + Math.round(p.life * 255).toString(16).padStart(2,'0');
    _fw.fill();

    p.x += p.vx; p.y += p.vy;
    p.vy += 0.04; // gravity
    p.vx *= 0.98; p.vy *= 0.98;
    p.life -= p.decay;
  });

  requestAnimationFrame(_fwLoop);
}

// ── CONFETTI BURST (button) ──────────────────────────────────
function revealBurst() {
  const cv = document.getElementById('rv-fireworks');
  if (!cv) return;

  // big multi-burst
  const cx = cv.width / 2;
  for (let b = 0; b < 6; b++) {
    setTimeout(() => {
      _burst(cx * (0.4 + Math.random()*1.2), cv.height * (0.2 + Math.random()*0.4), 45, 1.3);
    }, b * 180);
  }

  // extra heart emojis explosion
  const wrap = document.getElementById('rv-hearts');
  if (wrap) {
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const h = document.createElement('div');
        h.className = 'fheart';
        h.textContent = HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)];
        h.style.cssText = `
          left:${5+Math.random()*90}%;
          font-size:${1.2+Math.random()*2}rem;
          animation-duration:${5+Math.random()*5}s;
          animation-delay:0s; opacity:0;
        `;
        wrap.appendChild(h);
        setTimeout(() => h.remove(), 11000);
      }, i * 80);
    }
  }
}

// ── SCROLL REVEAL ─────────────────────────────────────────────
function _initRevealScrollObserver() {
  const pg = document.getElementById('pg-reveal');
  if (!pg) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('on'); obs.unobserve(e.target); }
    });
  }, { root: pg, threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  pg.querySelectorAll('.rv-rv, .rv-rl, .rv-rr').forEach(el => obs.observe(el));
}
