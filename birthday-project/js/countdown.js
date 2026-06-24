// ============================================================
//  countdown.js  —  Countdown Timer + Daily Messages
//  Reads from data/content.js (CONFIG, DAILY_MESSAGES)
// ============================================================

/** Start the live countdown ticking every second */
function initCountdown() {
  const birthday = new Date(CONFIG.birthday);

  function tick() {
    const diff = birthday - new Date();

    if (diff <= 0) {
      // Birthday has arrived — show zeros
      ['d', 'h', 'm', 's'].forEach(k => {
        const el = document.getElementById('cd-' + k);
        if (el) el.textContent = '00';
      });
      return;
    }

    const pad = n => String(Math.floor(n)).padStart(2, '0');

    const days  = Math.floor(diff / 864e5);
    const hours = Math.floor((diff % 864e5) / 36e5);
    const mins  = Math.floor((diff % 36e5)  / 6e4);
    const secs  = Math.floor((diff % 6e4)   / 1e3);

    const elD = document.getElementById('cd-d');
    const elH = document.getElementById('cd-h');
    const elM = document.getElementById('cd-m');
    const elS = document.getElementById('cd-s');

    if (elD) elD.textContent = pad(days);
    if (elH) elH.textContent = pad(hours);
    if (elM) elM.textContent = pad(mins);
    if (elS) elS.textContent = pad(secs);
  }

  tick();
  setInterval(tick, 1000);
}

/** Set the correct daily message based on how many days until birthday */
function initDailyMessage() {
  const birthday = new Date(CONFIG.birthday);
  const msLeft   = birthday - new Date();
  const daysLeft = Math.ceil(msLeft / 864e5);

  let index;
  if (msLeft <= 0)   index = 7;               // it's her birthday
  else if (daysLeft >= 7) index = 0;           // 7+ days away, show day –7 message
  else               index = 7 - daysLeft;     // count up as days decrease

  const entry = DAILY_MESSAGES[Math.min(index, 7)];

  const dayEl = document.getElementById('d-day');
  const msgEl = document.getElementById('d-msg');
  if (dayEl) dayEl.textContent = entry.day;
  if (msgEl) msgEl.textContent = entry.msg;
}

/** Set up the lock page CTA button — disabled until birthday */
function initLockButton() {
  const btn      = document.getElementById('cta-lock');
  const birthday = new Date(CONFIG.birthday);
  const isBday   = new Date() >= birthday;

  if (!btn) return;

  if (isBday) {
    // Birthday! Enable the unlock button
    btn.textContent = 'Unlock My Heart 💛';
    btn.onclick = () => go('pg-pw');
  } else {
    // Not yet — show a gentle message on click
    btn.onclick = () => {
      const original = btn.textContent;
      btn.textContent = 'Not yet, my love… 🔒';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
      }, 2000);
    };
  }
}
