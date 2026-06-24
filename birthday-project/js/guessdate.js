// ============================================================
//  guessdate.js — Guess the Date!
//  "When did THIS moment happen in our story?"
//  All answers drawn from Chaitanya & Khushi's real timeline.
// ============================================================

const GUESS_DATE_QS = [
  {
    scene: `He texted her for the very first time — just to ask if she was in class and to get his attendance marked. She said "okiii."`,
    highlight: `The very first message 💙`,
    opts: ['01 August 2025', '04 September 2025', '21 September 2025', '01 October 2025'],
    a: 1,
    fact: `September 4, 2025 — the "Class me hai kya???" message that started everything.`,
  },
  {
    scene: `She told him she loved him "as a friend." He said it back. Neither of them meant it. Within days they were talking every single evening.`,
    highlight: `"I LOVE U AS A FRIEND 💞"`,
    opts: ['04 September 2025', '07 September 2025', '09 September 2025', '15 September 2025'],
    a: 2,
    fact: `September 9, 2025 — Day 6. Already "best friends" in the most suspicious way possible.`,
  },
  {
    scene: `He said "Muje tho passand hai.. App bato ab 🥺" after a completely chaotic back-and-forth about who should propose first. Neither technically said yes. Both became "us."`,
    highlight: `The proposal that made no sense — and every sense`,
    opts: ['14 September 2025', '21 September 2025', '01 October 2025', '29 September 2025'],
    a: 1,
    fact: `September 21, 2025 — 5:54 PM. Seventeen days after first contact.`,
  },
  {
    scene: `He sent her a message at 5:53 AM before she woke up: "Tune pyar hi itna kiya ki itne din ki sari thakan release hogi. Love u soo sooo much."`,
    highlight: `The 5 AM message she never expected`,
    opts: ['01 October 2025', '01 November 2025', '15 November 2025', '31 December 2025'],
    a: 1,
    fact: `November 1, 2025 — the month he truly realised how much she meant to him.`,
  },
  {
    scene: `At 12:49 AM, after she had already sent her New Year message and he'd missed it (he was asleep), he woke up and sent a whole paragraph ending with "God gave me the perfect gift this year 🎁✨."`,
    highlight: `The New Year paragraph`,
    opts: ['31 December 2025', '01 January 2026', '02 January 2026', '01 December 2025'],
    a: 1,
    fact: `January 1, 2026 — 12:49 AM. He woke up, saw her message, and meant every single word.`,
  },
  {
    scene: `He texted her at 6:03 AM: "gudmrngg bbbbu. Uthhhjaooo. ni toh bus nikl jaygiii." She had been doing this for months by now. He always replied, always caught the bus.`,
    highlight: `The morning that proved some things never change`,
    opts: ['01 March 2026', '01 April 2026', '01 May 2026', '01 June 2026'],
    a: 3,
    fact: `June 1, 2026 — ten months in. Still the same 6 AM wake-up call. 🌅`,
  },
  {
    scene: `He sent a long morning message starting with "Aaj koi lamba message nahi bhejunga 🤭" — and then wrote a full paragraph. She replied "Hahahhaaa 😭 Bsss teri bbbu."`,
    highlight: `"Koi lamba message nahi bhejunga" — famous last words`,
    opts: ['01 May 2026', '08 June 2026', '14 June 2026', '20 June 2026'],
    a: 2,
    fact: `June 14, 2026 — a Sunday morning. He lied (lovingly). She knew.`,
  },
];

let _gdIdx = 0, _gdScore = 0;

function initGuessDate() {
  _gdIdx = 0; _gdScore = 0;
  document.getElementById('gd-result')?.classList.remove('show');
  _renderGD();
}

function _renderGD() {
  const q = GUESS_DATE_QS[_gdIdx];

  const prog  = document.getElementById('gd-prog');
  const bar   = document.getElementById('gd-prog-bar');
  const scene = document.getElementById('gd-scene-text');
  const label = document.getElementById('gd-scene-label');
  const fb    = document.getElementById('gd-feedback');
  const opts  = document.getElementById('gd-options');

  if (prog)  prog.textContent  = `Round ${_gdIdx + 1} of ${GUESS_DATE_QS.length}`;
  if (bar)   bar.style.width   = (_gdIdx / GUESS_DATE_QS.length * 100) + '%';
  if (label) label.textContent = q.highlight;
  if (scene) scene.innerHTML   = q.scene;
  if (fb)    { fb.textContent = ''; fb.className = 'gd-feedback'; }
  if (!opts) return;

  opts.innerHTML = '';
  q.opts.forEach((text, i) => {
    const btn = document.createElement('button');
    btn.className   = 'gd-opt';
    btn.textContent = text;
    btn.onclick     = () => _answerGD(i, btn, q);
    opts.appendChild(btn);
  });
}

function _answerGD(chosen, btn, q) {
  document.querySelectorAll('.gd-opt').forEach(b => b.onclick = null);
  const correct = chosen === q.a;
  const fb = document.getElementById('gd-feedback');

  btn.classList.add(correct ? 'c' : 'w');
  if (!correct) {
    document.querySelectorAll('.gd-opt')[q.a].classList.add('reveal');
  }
  if (correct) _gdScore++;

  if (fb) {
    fb.textContent  = q.fact;
    fb.className    = `gd-feedback ${correct ? 'correct' : 'wrong'}`;
  }

  setTimeout(() => {
    _gdIdx++;
    if (_gdIdx < GUESS_DATE_QS.length) _renderGD();
    else _showGDResult();
  }, 2000);
}

function _showGDResult() {
  const bar  = document.getElementById('gd-prog-bar');
  const prog = document.getElementById('gd-prog');
  if (bar)  bar.style.width  = '100%';
  if (prog) prog.textContent = 'Finished!';

  document.getElementById('gd-options').innerHTML = '';
  document.getElementById('gd-scene-text').textContent = '';
  document.getElementById('gd-scene-label').textContent = '';
  document.getElementById('gd-feedback').textContent = '';

  const n = GUESS_DATE_QS.length;
  const msgs = [
    "Hmm. Our story needs a little more revision 😅 (He still loves you though.)",
    "You know more than you think! Our story is long, to be fair 💙",
    "Solid! You've been paying attention 🌸",
    `${_gdScore}/${n} — you really know us by heart 💙`,
    `${_gdScore}/${n} — you are the story, bbbu 🩵`,
    `${n}/${n}! Perfect! Which makes sense — you lived it. 💙`,
    `${n}/${n}!! You ARE this story 🥹 loce u moreee`,
    `${n}/${n}!!! You know every date of our story 🩵 Happy birthday, my love.`,
  ];

  const rc = document.getElementById('gd-result');
  const rs = document.getElementById('gd-result-score');
  const rm = document.getElementById('gd-result-msg');
  if (rs) rs.textContent = `${_gdScore} / ${n}`;
  if (rm) rm.textContent = msgs[Math.min(_gdScore, msgs.length - 1)];
  if (rc) rc.classList.add('show');
}

function restartGuessDate() {
  initGuessDate();
}
