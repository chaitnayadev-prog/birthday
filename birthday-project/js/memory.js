// ============================================================
//  memory.js — Memory Match Card Flip Game
//  Emojis are drawn from their real story 💙
// ============================================================

const MEMORY_EMOJIS = [
  { em: '💙', label: 'bbu' },
  { em: '🍮', label: 'rasmalai' },
  { em: '🐸', label: 'mandak' },
  { em: '📱', label: '132K msgs' },
  { em: '🌙', label: 'gudnight' },
  { em: '🍽️', label: 'tune kha?' },
  { em: '🎓', label: 'college' },
  { em: '🌸', label: '21 Sept' },
];

let _memCards    = [];
let _memFlipped  = [];
let _memMatched  = 0;
let _memMoves    = 0;
let _memTimer    = null;
let _memSecs     = 0;
let _memLocked   = false;

function initMemory() {
  _memMatched = 0; _memMoves = 0; _memSecs = 0; _memLocked = false;
  _memFlipped = [];
  clearInterval(_memTimer);
  document.getElementById('memory-result')?.classList.remove('show');
  _updateMemStats();

  // Create shuffled pairs
  const pairs = [...MEMORY_EMOJIS, ...MEMORY_EMOJIS]
    .map((v, i) => ({ ...v, id: i }))
    .sort(() => Math.random() - 0.5);

  _memCards = pairs;
  _renderGrid();

  // start timer on first flip (handled in _flipCard)
  _memTimer = null;
}

function _renderGrid() {
  const grid = document.getElementById('memory-grid');
  if (!grid) return;
  grid.innerHTML = '';

  _memCards.forEach((card, idx) => {
    const el = document.createElement('div');
    el.className = 'mem-card';
    el.dataset.idx = idx;
    el.innerHTML = `
      <div class="mem-face mem-back"></div>
      <div class="mem-face mem-front">${card.em}</div>
    `;
    el.onclick = () => _flipCard(idx, el);
    grid.appendChild(el);
  });
}

function _flipCard(idx, el) {
  if (_memLocked) return;
  if (el.classList.contains('flipped') || el.classList.contains('matched')) return;

  // start timer on first flip
  if (!_memTimer) {
    _memTimer = setInterval(() => {
      _memSecs++;
      const el = document.getElementById('mem-time');
      if (el) el.textContent = _memSecs + 's';
    }, 1000);
  }

  el.classList.add('flipped');
  _memFlipped.push({ idx, el });

  if (_memFlipped.length === 2) {
    _memLocked = true;
    _memMoves++;
    document.getElementById('mem-moves').textContent = _memMoves;

    const [a, b] = _memFlipped;
    if (_memCards[a.idx].em === _memCards[b.idx].em) {
      // Match!
      setTimeout(() => {
        a.el.classList.remove('flipped');
        b.el.classList.remove('flipped');
        a.el.classList.add('matched');
        b.el.classList.add('matched');
        _memFlipped = [];
        _memLocked  = false;
        _memMatched++;
        document.getElementById('mem-matched').textContent = _memMatched;
        if (_memMatched === MEMORY_EMOJIS.length) _winMemory();
      }, 500);
    } else {
      // No match — flip back
      setTimeout(() => {
        a.el.classList.remove('flipped');
        b.el.classList.remove('flipped');
        _memFlipped = [];
        _memLocked  = false;
      }, 1000);
    }
  }
}

function _updateMemStats() {
  const mm = document.getElementById('mem-moves');
  const mt = document.getElementById('mem-time');
  const mc = document.getElementById('mem-matched');
  if (mm) mm.textContent = '0';
  if (mt) mt.textContent = '0s';
  if (mc) mc.textContent = '0';
}

function _winMemory() {
  clearInterval(_memTimer);
  const msgs = [
    `${_memMoves} moves and ${_memSecs}s — not bad for someone who forgets to eat 😄`,
    `${_memMoves} moves, ${_memSecs}s — you matched every one just like you matched with me 💙`,
    `${_memMoves} moves! Faster than 17 days to proposal, slower than the speed of "okiii" 😂`,
  ];
  const rc = document.getElementById('memory-result');
  const rt = document.getElementById('mem-win-title');
  const rm = document.getElementById('mem-win-msg');
  if (rt) rt.textContent = 'You matched them all! 🎉';
  if (rm) rm.textContent = msgs[Math.floor(Math.random() * msgs.length)];
  if (rc) rc.classList.add('show');
}

function restartMemory() {
  initMemory();
}
