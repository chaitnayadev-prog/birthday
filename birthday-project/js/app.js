// ============================================================
//  app.js — Page Transitions, Navigation + Touch Swipe
// ============================================================

const MAIN_PAGES = [
  'pg-story', 'pg-letters', 'pg-gallery',
  'pg-games', 'pg-quiz', 'pg-spin', 'pg-memory', 'pg-guessdate',
  'pg-reveal'
];
const NAV_PAGES = ['pg-story','pg-letters','pg-gallery','pg-games','pg-reveal'];

let currentPage = 'pg-lock';

// ── TRANSITION ────────────────────────────────────────────
function go(id, instant = false) {
  if (id === currentPage) return;

  if (instant) { _swapPage(id); return; }

  const curtain = document.getElementById('curtain');
  curtain.classList.remove('sweep-out');
  curtain.classList.add('sweep-in');

  setTimeout(() => {
    _swapPage(id);
    curtain.classList.remove('sweep-in');
    curtain.classList.add('sweep-out');
    setTimeout(() => curtain.classList.remove('sweep-out'), 700);
  }, 560);
}

function _swapPage(id) {
  const prev = document.querySelector('.pg.active');
  if (prev) prev.classList.remove('active');

  const next = document.getElementById(id);
  if (!next) return;
  next.classList.add('active');
  currentPage = id;

  // Reset scroll
  next.scrollTop = 0;

  // Re-trigger fade-up animations
  next.querySelectorAll('.fade-up').forEach(el => {
    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = '';
  });

  _updateNav(id);
}

function _updateNav(id) {
  const nav = document.getElementById('site-nav');
  nav.style.display = MAIN_PAGES.includes(id) ? 'flex' : 'none';
  // For game sub-pages, highlight the Games button
  const navId = ['pg-quiz','pg-spin','pg-memory','pg-guessdate'].includes(id) ? 'pg-games' : id;
  nav.querySelectorAll('button').forEach(btn => {
    btn.classList.toggle('cur', btn.dataset.pg === navId);
  });
}

function unlockSite() {
  document.getElementById('site-nav').style.display = 'flex';
  go('pg-story');
}

// ── SWIPE GESTURE (mobile nav between main pages) ─────────
let _touchStartX = 0;
let _touchStartY = 0;
const SWIPE_THRESHOLD = 50;  // px
const SWIPE_MAX_Y     = 80;  // vertical tolerance

document.addEventListener('touchstart', e => {
  _touchStartX = e.touches[0].clientX;
  _touchStartY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchend', e => {
  if (!MAIN_PAGES.includes(currentPage)) return;

  const dx = e.changedTouches[0].clientX - _touchStartX;
  const dy = Math.abs(e.changedTouches[0].clientY - _touchStartY);
  if (Math.abs(dx) < SWIPE_THRESHOLD || dy > SWIPE_MAX_Y) return;

  // Game sub-pages: swipe goes back to hub
  const gameSubs = ['pg-quiz','pg-spin','pg-memory','pg-guessdate'];
  if (gameSubs.includes(currentPage)) {
    if (dx > 0) go('pg-games');
    return;
  }

  const topPages = ['pg-story','pg-letters','pg-gallery','pg-games','pg-reveal'];
  const idx = topPages.indexOf(currentPage);
  if (idx === -1) return;
  if (dx < 0 && idx < topPages.length - 1) go(topPages[idx + 1]);
  else if (dx > 0 && idx > 0) go(topPages[idx - 1]);
}, { passive: true });
