// ============================================================
//  story.js — Scroll reveal + side nav dots for Page 3
// ============================================================

const STORY_SECTIONS = [
  { id: 'ss0', label: 'Cover'     },
  { id: 'ss1', label: 'Chapter 1' },
  { id: 'ss2', label: 'Chapter 2' },
  { id: 'ss3', label: 'Chapter 3' },
  { id: 'ss4', label: 'Chapter 4' },
  { id: 'ss5', label: 'Chapter 5' },
  { id: 'ss6', label: 'Chapter 6' },
];

let _storyObserver   = null;
let _revealObserver  = null;
let _storyActive     = false;

/** Call once when Page 3 becomes active */
function initStoryPage() {
  if (_storyActive) return;
  _storyActive = true;

  _buildSideNav();
  _initRevealObserver();
  _initSectionObserver();
}

/** Tear down when leaving Page 3 */
function destroyStoryPage() {
  _storyActive = false;
  if (_storyObserver)  { _storyObserver.disconnect();  _storyObserver  = null; }
  if (_revealObserver) { _revealObserver.disconnect(); _revealObserver = null; }
}

// ── SIDE NAV DOTS ─────────────────────────────────────────
function _buildSideNav() {
  const nav = document.getElementById('story-sidenav');
  if (!nav) return;
  nav.innerHTML = '';
  STORY_SECTIONS.forEach(s => {
    const dot = document.createElement('span');
    dot.className    = 'sn-dot';
    dot.dataset.target = s.id;
    dot.title        = s.label;
    dot.onclick      = () => scrollToStorySection(s.id);
    nav.appendChild(dot);
  });
}

function _setActiveDot(id) {
  document.querySelectorAll('.sn-dot').forEach(d => {
    d.classList.toggle('on', d.dataset.target === id);
  });
}

// ── SECTION OBSERVER (which chapter is in view) ───────────
function _initSectionObserver() {
  const pg = document.getElementById('pg-story');
  if (!pg) return;

  _storyObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && e.intersectionRatio >= 0.25) {
        _setActiveDot(e.target.id);
      }
    });
  }, {
    root: pg,
    threshold: 0.25,
  });

  STORY_SECTIONS.forEach(s => {
    const el = document.getElementById(s.id);
    if (el) _storyObserver.observe(el);
  });
}

// ── SCROLL-REVEAL (.rv, .rl, .rr elements) ────────────────
function _initRevealObserver() {
  const pg = document.getElementById('pg-story');
  if (!pg) return;

  _revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('on');
        _revealObserver.unobserve(e.target); // fire once only
      }
    });
  }, {
    root: pg,
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  });

  pg.querySelectorAll('.rv, .rl, .rr, .rv2').forEach(el => {
    _revealObserver.observe(el);
  });
}

// ── SMOOTH SCROLL TO SECTION ──────────────────────────────
function scrollToStorySection(id) {
  const pg  = document.getElementById('pg-story');
  const el  = document.getElementById(id);
  if (!pg || !el) return;
  pg.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
}

// ── CHARACTER BOUNCE ──────────────────────────────────────
function bounceCh(el) {
  el.style.animation = 'none';
  void el.offsetWidth;
  el.style.animation = 'charBounce 0.5s cubic-bezier(0.36,0.07,0.19,0.97)';
  setTimeout(() => el.style.animation = '', 550);
}
