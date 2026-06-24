// ============================================================
//  quiz.js — "How Well Do You Know Us?" — Separate page
// ============================================================

let _qi = 0, _qs = 0;

function initQuizPage() {
  _qi = 0; _qs = 0;
  _renderQuizHeader();
  _renderQuestion();
  document.getElementById('quiz-result-card').classList.remove('show');
}

function _renderQuizHeader() {
  const dots = document.getElementById('quiz-score-bar');
  if (!dots) return;
  dots.innerHTML = QUIZ.map(() =>
    `<div class="qs-dot"></div>`
  ).join('');
}

function _setProgBar() {
  const bar = document.getElementById('quiz-prog-bar');
  if (bar) bar.style.width = (_qi / QUIZ.length * 100) + '%';
  const num = document.getElementById('quiz-q-num');
  if (num) num.textContent = `Question ${_qi + 1} of ${QUIZ.length}`;
}

function _renderQuestion() {
  const q = QUIZ[_qi];
  _setProgBar();
  const qEl = document.getElementById('quiz-q-text');
  if (qEl) {
    qEl.style.opacity = '0';
    qEl.style.transform = 'translateY(10px)';
    qEl.textContent = q.q;
    setTimeout(() => {
      qEl.style.transition = 'all 0.3s';
      qEl.style.opacity = '1';
      qEl.style.transform = 'translateY(0)';
    }, 20);
  }
  const wrap = document.getElementById('qopts');
  if (!wrap) return;
  wrap.innerHTML = '';
  q.opts.forEach((text, i) => {
    const btn = document.createElement('button');
    btn.className = 'qopt';
    btn.textContent = text;
    btn.onclick = () => _answerQ(i, btn, q.a);
    wrap.appendChild(btn);
  });
}

function _answerQ(chosen, btn, correct) {
  document.querySelectorAll('.qopt').forEach(b => b.onclick = null);
  const isCorrect = chosen === correct;

  btn.classList.add(isCorrect ? 'c' : 'w');
  if (!isCorrect) {
    document.querySelectorAll('.qopt')[correct].classList.add('reveal');
  }
  if (isCorrect) _qs++;

  // update score dot
  const dots = document.querySelectorAll('.qs-dot');
  if (dots[_qi]) dots[_qi].classList.add(isCorrect ? 'c' : 'w');

  setTimeout(() => {
    _qi++;
    if (_qi < QUIZ.length) _renderQuestion();
    else _showQuizResult();
  }, 1200);
}

function _showQuizResult() {
  // fill progress bar to 100
  const bar = document.getElementById('quiz-prog-bar');
  if (bar) bar.style.width = '100%';
  const num = document.getElementById('quiz-q-num');
  if (num) num.textContent = 'Complete!';
  document.getElementById('qopts').innerHTML = '';
  document.getElementById('quiz-q-text').textContent = '';

  const rc = document.getElementById('quiz-result-card');
  const rs = document.getElementById('quiz-result-score');
  const rm = document.getElementById('quiz-result-msg');
  if (rs) rs.textContent = `${_qs} / ${QUIZ.length}`;
  if (rm) rm.textContent = QUIZ_RESULT_MESSAGES[Math.min(_qs, QUIZ_RESULT_MESSAGES.length - 1)];
  if (rc) rc.classList.add('show');
}

function restartQuiz() {
  initQuizPage();
}
