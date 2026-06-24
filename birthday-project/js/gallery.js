// ============================================================
//  gallery.js — Photo Gallery + Lightbox with swipe support
// ============================================================

let _lbIndex = 0;
let _lbTouchX = 0;

function initGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  grid.innerHTML = '';

  GALLERY_PHOTOS.forEach((photo, i) => {
    const cell = document.createElement('div');
    cell.className = 'gphoto';
    cell.onclick   = () => openLightbox(i);

    const src = `assets/photos/${photo.file}`;
    cell.innerHTML = `
      <img src="${src}" alt="${photo.caption}" loading="lazy"
           onerror="this.parentElement.innerHTML='${_placeholder(i)}'" />
      <div class="gphoto-cap">${photo.caption}</div>
    `;
    grid.appendChild(cell);
  });
}

function _placeholder(i) {
  const cap = GALLERY_PHOTOS[i]?.caption || '';
  return `<div class="gphoto-placeholder"><span>📸</span><p>Photo ${i+1}</p></div><div class="gphoto-cap">${cap}</div>`;
}

function openLightbox(index) {
  _lbIndex = index;
  _renderLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', _lbKey);
  _addLbSwipe();
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', _lbKey);
}

function lbPrev() { _lbIndex = (_lbIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length; _renderLightbox(); }
function lbNext() { _lbIndex = (_lbIndex + 1) % GALLERY_PHOTOS.length; _renderLightbox(); }

function _renderLightbox() {
  const photo = GALLERY_PHOTOS[_lbIndex];
  const img   = document.getElementById('lb-img');
  const cap   = document.getElementById('lb-cap');
  const cnt   = document.getElementById('lb-counter');
  if (img) img.src = `assets/photos/${photo.file}`;
  if (cap) cap.textContent = photo.caption;
  if (cnt) cnt.textContent = `${_lbIndex + 1} / ${GALLERY_PHOTOS.length}`;
}

function lightboxBg(e) {
  const wrap = document.querySelector('.lb-img-wrap');
  if (wrap && !wrap.contains(e.target) && e.target.id === 'lightbox') closeLightbox();
}

function _lbKey(e) {
  if (e.key === 'ArrowLeft')  lbPrev();
  if (e.key === 'ArrowRight') lbNext();
  if (e.key === 'Escape')     closeLightbox();
}

// Swipe in lightbox
function _addLbSwipe() {
  const lb = document.getElementById('lightbox');
  lb.addEventListener('touchstart', e => { _lbTouchX = e.touches[0].clientX; }, { passive:true, once:false });
  lb.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - _lbTouchX;
    if (Math.abs(dx) > 45) { dx < 0 ? lbNext() : lbPrev(); }
  }, { passive:true });
}
