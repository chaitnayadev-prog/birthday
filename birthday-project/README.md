# Birthday Website — Project Structure

```
birthday-project/
│
├── index.html              ← Main entry point (open this in browser)
│
├── data/
│   └── content.js          ← ✏️  EDIT THIS — all your text, messages, quiz, letters
│
├── css/
│   └── styles.css          ← All styling (dark navy + gold theme)
│
├── js/
│   ├── app.js              ← Page transitions + navigation logic
│   ├── countdown.js        ← Countdown timer + daily messages
│   ├── quiz.js             ← Quiz game logic
│   └── wheel.js            ← Spin the wheel logic
│
├── pages/
│   ├── lock.html           ← Page 1: Lock / countdown (shown 7 days before)
│   ├── password.html       ← Page 2: Password gate (unlocks on birthday)
│   ├── story.html          ← Page 3: Our Story (chapters)
│   ├── letters.html        ← Page 4: Love Letters Vault
│   ├── gallery.html        ← Page 5: Photo Gallery
│   ├── games.html          ← Page 6: Quiz + Spin the Wheel
│   └── reveal.html         ← Page 7: Birthday Reveal
│
└── assets/
    └── photos/             ← 📸 DROP YOUR PHOTOS HERE
        └── (put .jpg/.png files here)
```

---

## How to edit content

Open `data/content.js` — everything you'd want to personalise is there:

- `CONFIG.password` — the secret password
- `CONFIG.birthday` — the birthday date/time
- `DAILY_MESSAGES` — the 7 day countdown messages
- `STORY_CHAPTERS` — the 4 story chapters (title + full text)
- `LETTERS` — the 6 love letters (tag + title + body)
- `QUIZ` — the 5 quiz questions and answers
- `SPIN_PRIZES` — the 8 spin wheel prizes
- `GALLERY_PHOTOS` — list of photo filenames + captions

## How to add photos

1. Put your `.jpg` or `.png` photos inside `assets/photos/`
2. Open `data/content.js`
3. In the `GALLERY_PHOTOS` array, add entries like:
   ```js
   { file: "our-trip.jpg", caption: "That weekend in the mountains 🏔️" },
   ```

## How to host for free (share the link)

**Option A — Netlify (easiest)**
1. Go to netlify.com → "Add new site" → "Deploy manually"
2. Drag the entire `birthday-project/` folder onto the page
3. You get a free link like `https://happy-birthday-xyz.netlify.app`

**Option B — GitHub Pages**
1. Push this folder to a GitHub repo
2. Settings → Pages → Deploy from main branch

---
