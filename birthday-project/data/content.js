// ============================================================
//  content.js  —  EDIT EVERYTHING HERE
//  Chaitanya & Khushi's story — personalised from their chats
// ============================================================


// ── BASIC CONFIG ────────────────────────────────────────────
const CONFIG = {
  password:  "",                   // ← Their nickname 🍮
  birthday:  "2026-06-23:00:00+05:30", // ← Khushi's birthday IST
  herName:   "Khushi",
  yourName:  "Tera bbu, Chaitanya 🩵",
};


// ── DAILY MESSAGES (Day -7 to Birthday) ─────────────────────
const DAILY_MESSAGES = [
  {
    day: "Day –7",
    msg: "Good morning, Babyyyy ❤️☀️  Aaj subah aankh khulte hi tu hi yaad aayi 🥺🩵  Pata hai, bas 7 din bache hai aur mera excitement sambhalna mushkil ho raha hai 🤭❤️  Tere bina din thode se incomplete lagte hai, jaise kuch missing ho 😤😂  Teri bakbak, tera smile, tera cheek kaatna — sab bahut miss kar raha hu 🫣🥰  Bas thoda aur wait meri Bacha ❤️  Ek proper hug already pending hai 😌🩵  Aaj zyada stress mat lena, thoda padhai aur thoda rest bhi karna meri Mandak 📚🤭  Take care meri Rasmali, meri Cutipieeee 😘 Love youuuuu 💞",
  },
  {
    day: "Day –6",
    msg: "Good morning, Babyyyy ❤️☀️  Aaj ka message thoda special hai 🤭🩵  Kabhi kabhi bas tujhe dekh ke lagta hai ki itni pyari ladki meri life me kaise aa gayi 🥺❤️  Tu sirf meri girlfriend nahi hai, tu meri comfort hai, meri happiness hai 🫶  Tera gussa 😤😂, tera smile, teri bakbak — sab kuch mujhe naturally bahut accha lagta hai 🫣🥰  Jab tu paas hoti hai na, toh duniya thodi der ke liye ruk si jaati hai ❤️  Miss u babyyyy 😌  Ek tight hug aur bahut saari baate pending hai 😘  Aur haan, aaj bhi pretty lagna mandatory hai 😤❤️  Love youuuuu meri Mandak, meri Rasmali, meri Cutipieeee 💞😘",
  },
  {
    day: "Day –5",
    msg: "Good morning meri jaan ❤️☀️  Aaj ek choti si memory yaad aa rahi hai 🥺🩵  Jab tu bina bole, bina reason, bas pehle text kar deti thi 🤭  Shayad maine tab bola nahi, par maine hamesha notice kiya ❤️  Tu hamesha effort karti rahi, quietly, bina shor ke 🫣🥰  Aur sach bolu toh mujhe tab bhi accha lagta tha aur aaj bhi lagta hai 😌  Tu mere liye hamesha special rahegi 💞  Miss you babyyyy ❤️",
  },
  {
    day: "Day –4",
    msg: "Good morning Babyyyy ❤️☀️  Aaj bas itna bolna hai ki tune mujhe bahut pyaar diya hai 🥺🩵  Bina condition, bina expectation ❤️  Har choti baat ka khayal, har mood me saath 🫶  Shayad maine kabhi properly bola nahi, par tu meri life ka sabse pyara hissa hai 🫣🥰  Aaj bhi apna khayal rakhna meri jaan 😌  Aur haan, thoda sa smile kar lena ❤️",
  },
  {
    day: "Day –3",
    msg: "Good morning meri Cutipieeee ❤️☀️  Bas 3 din bache hai 🥺🩵  Soch ke hi heart thoda sa fast beat karne lagta hai 🤭  Tere liye itna kuch ready hai, bas tere reaction ka wait hai 🫣🥰  Tu mere saath hoti hai toh har din thoda zyada special lagta hai ❤️  Aaj bhi zyada thakna mat 😤😂  Love you babyyyy 😌💞",
  },
  {
    day: "Day –2",
    msg: "Good morning Babyyyy ❤️☀️  Maine bola tha lamba message nahi bhejunga 🤭  Par tu hai hi aisi ki control nahi hota 🥺🩵  Kal ka din thoda emotional bhi hoga aur bahut special bhi ❤️  Bas itna yaad rakhna ki tu bahut pyaari hai aur bahut loved hai 🫣🥰  Ek aur din meri jaan, phir sab tera hoga 😌💞  Love youuuuu 😘",
  },
  {
    day: "Day –1",
    msg: "Good morning meri jaan ❤️☀️  Ek aur raat bas 🥺🩵  Kal tera birthday hai 🤭❤️  Itna wait, itni planning, itni feelings — sab finally tere saamne aane wali hai 🫣🥰  Aaj thoda rest karna, khud ko pamper karna 😌  Kal ka din sirf tera hai ❤️  Love youuuuu meri Rasmali, meri Mandak, meri Cutipieeee 💞😘",
  },
  {
    day: "Happy Birthday Khushi 🎂",
    msg: "Happy Birthday meri sabse pyari Khushi 🥺💙  Aaj ka din sirf tera hai — tere smile ka, tere sapno ka, aur us pyaar ka jo tune mujhe diya hai ❤️  From random ‘Class me hai kya?’ messages to endless baatein, humne bahut kuch build kiya hai 🫣🥰  Shayad perfect nahi hu, par jo bhi hu, sirf tera hu 😌  Aaj jo bhi khol rahi ho, jo bhi dekh rahi ho — sab meri taraf se ek choti si koshish hai tujhe batane ki ki tu meri duniya ho 💞  Hamesha khush rehna, hamesha muskurate rehna ❤️  I love you the most, bbbu 😘",
  },
];

// ── OUR STORY CHAPTERS ──────────────────────────────────────
// These are real — from their actual messages, Sept 2025 → June 2026
const STORY_CHAPTERS = [
  {
    chapterLabel: "Chapter I · 04 September 2025",
    title: "\"Class Me Hai Kya?\"",
    preview: "It started with attendance. Not flowers, not poetry — attendance. September 4th, 11:40 AM.",
    body: `I'll be honest. When I first texted her, I wasn't thinking about love. I wasn't thinking about butterflies or late-night calls or nicknames that would turn into an entire dessert menu. I was thinking about attendance. Just attendance.

"Class me hai kya???" That's what I sent. She said "yesss." I sent her my roll number — 2501060086 — and said Attendance laga de. She said okiii. I said No problem. That was day one.

But here's the thing nobody tells you about love: it doesn't announce itself. That same evening, she asked "kl aayegaaa???" and I said I'd come if my friends did. Then I turned around and asked: "Tum aaoge??" She said she'd asked because she wanted to know if I'd be there. I told her to come. She said okieeeee.

Neither of us realised that was already something.`,
  },
  {
    chapterLabel: "Chapter II · September 9–20, 2025",
    title: "\"I Love U As A Friend\" 😂",
    preview: "The most unconvincing sentence ever typed. Day 6. Within days, we were talking every evening.",
    body: `Within days, we were talking every evening. She told me I was a "bandaa achaa" — and I told her I already knew. She called me a yapper. Honestly, fair. But here's the thing about Khushi: she could out-yap me any day of the week. And I loved every word.

Then she said "I LOVE U AS A FRIEND 💞💞." And I said it back. "I love u as a bff." And neither of us believed it for even one second.

Day 6. She'd told me she gets quiet in class, that she worries she'll go into depression if she stays silent. And I said — without thinking — "Depression kuch nahi hota. Bolo. Koi judge kare toh vo uski problem hai." I didn't plan that. But even then, without fully knowing it, I wanted her to feel safe.

Then she asked: "bndi h terrii??" I said I was single. She got curious. She said she'd follow me around until I told her my ex's name. She's been following me around ever since. Just not because of that anymore.`,
  },
  {
    chapterLabel: "Chapter III · 21 September 2025 · 5:54 PM",
    title: "Seventeen Days. One Chaotic Confession.",
    preview: "Nobody technically proposed. Nobody technically said yes. And yet — we became us.",
    body: `We had been talking for exactly 17 days. Nobody planned what happened next. That's the truest thing about it.

"Propose kario phele.." I said. She asked kaaisee 😭. I said flowers deo. She said she'd kushii kushii accept it. I said "Aap ki beti ne propose kiya hai.. Reject kar du??" She said "aaab m ni krriiii 🙂😭."

Then I said it. Five words: "Muje tho passand hai.. App bato ab 🥺"

Read it again. Nobody technically proposed. Nobody technically said yes. We went in circles, we teased each other, we both pretended we weren't serious — and somehow, in the middle of all that beautiful chaos, we became us.

That same night, she was already calling me bbu. I said "Ok my bbuuu 🩵." She shot back "nii horiii meree bbbuu." Then I told her I'd gotten rasmalai but hadn't brought her any. She was outraged. I laughed. The word rasmalai would follow us for 10 months and counting.`,
  },
  {
    chapterLabel: "Chapter IV · October 2025 → June 2026",
    title: "Ten Months. Ten Stories.",
    preview: "People think love is made of grand moments. Looking back at 132,000 messages — I disagree.",
    body: `October 1st, 6:02 AM. I had slept at 4 AM. She texted: "bbuu." Then: "aaraa h yh niii." No good morning, no how are you. She'd woken up just to reach me. I grumbled. She laughed. She'd been doing that since the start — reaching first, quietly, before I even thought to look.

November 1st, before she was even awake, I sent her a message: "Tune pyar hi itna kiya ki itne din ki sari thakan release hogi. Love u soo sooo much." I hadn't planned to send it. I just realised — her love wasn't loud or dramatic. It was in Python notes made at midnight. In the "tune kha liya?" every evening. In every small, consistent, ordinary thing.

December 31st into January 1st at 12:49 AM: "God gave me the perfect gift this year 🎁✨. And u did everything for me. Love u aur ab tho words bhi nahi hai. Thank you for treating me like a princess." She had already texted at 12:09. I'd missed it — asleep. I woke up and sent that paragraph. I meant every syllable.

June 1st, 6:03 AM: "gudmrngg bbbbu. Uthhhjaooo. ni toh bus nikl jaygiii." Ten months in. She was still waking up early to make sure I didn't miss my bus. Some things don't change. The best things never do.`,
  },
  {
    chapterLabel: "Chapter V · The Things That Make Them Them",
    title: "Mandak, Rasmalai & 300+ Goodnights",
    preview: "Every night: \"No phones. Aab jaao. Gudnight bbbu.\" Followed by three more messages from him.",
    body: `Every single night ends the same way. She says "No phones. Aab jaao. Gudnight bbbu." He sends three more messages after that. She pretends to be annoyed. He says "love u the most babyyyy 🩵." She says "loce u moreee." They've done this for 300+ nights and haven't gotten bored once.

And then there's "Tune kha liya??" — asked from Day 11. September 11th, he was already checking if she'd eaten. Then she started asking him. It became their language for: I care. I'm thinking of you. You exist to me. He never let her sleep without checking. She never let him skip a meal without asking.

The nicknames deserve their own paragraph. Mandak — she called him mandak. He said "mera mandak 😭🩵." It stuck. Then rasmalai — started with him eating it without her. Became a term of endearment. Then gulabjamun. Then bbu → bbbu → babbabie → babababu. Nobody is counting the b's anymore.

June 14th, 10:15 AM: "Aaj koi lamba message nahi bhejunga 🤭. Bas itna bolna tha ki mujhe bahut accha lagta hai ki meri life me tu hai 🥺🩵. Tu sirf meri girlfriend nahi hai, tu meri best friend bhi hai." She replied "Hahahhaaa 😭 Bsss teri bbbu." He'd written a paragraph again. He always does, with her.`,
  },
  {
    chapterLabel: "Chapter VI · What I Actually Feel. Honestly.",
    title: "Narrated by Chaitanya",
    preview: "I don't say these things well in real life. I get awkward. But let me try — just once, for her birthday.",
    body: `I don't say these things well in real life. I get awkward. I make jokes when I should say serious things. But let me try — just once, for her birthday — to be honest about what she actually means to me.

Before you, I thought love had to be big. Dramatic. A grand gesture. Then you came along and made a Tuesday at 6 AM feel like something worth getting up for. You texted "aaraa h yh niii?" and that mattered more than anything beautiful I'd read or watched. You made the ordinary extraordinary just by being in it.

"Jab tu mere pass nahi hoti na, mai tab teri choti chiti baat pe gussa ho jata hu kuki I miss u." I wrote that in November. I still mean it. When you're not there, everything feels slightly off — like a song missing one instrument. You are the part of the day I look forward to. Even the annoying ones where you call me mandak.

You call me mandak and rasmalai and gulabjamun and babbabie. You say "no phones aab jaao" and then text three more times. You make Python notes at midnight. You check if I ate before you check if I'm okay. You are the kind of person who makes the people around them better without even trying.

And on your birthday — Happy Birthday, my bbbu. You made me better. You really did. 💙`,
  },
];


// ── LOVE LETTERS ────────────────────────────────────────────
const LETTERS = [
  {
    tag: "Open when you're sad",
    title: "A Letter for Your Hard Days",
    body: `If you are reading this, something has made the world feel smaller than it should. I want you to know: that feeling is not permanent. It never is.

You once told me you get quiet in class, that staying silent makes you feel like you'll go under. I said "Depression kuch nahi hota. Bolo. Koi judge kare toh vo uski problem hai." I meant it then. I mean it now — louder.

You carry so much, so quietly. I see the strength you spend on everyone else. On your hard days, please remember: you are not behind. You are not failing. You are a whole person having a human day — and that is allowed.

I love you on your easiest days and your hardest ones. Come back to me when you're ready. I'll be here.`,
  },
  {
    tag: "Open when you miss me",
    title: "I'm Right Here, Bbbu",
    body: `October 7th, you texted "bssss i miss uuu." I said "I miss u more.." You didn't believe me. You never do.

But here's the truth: when you're not there, everything feels slightly off. I wrote it in November — "jab tu mere pass nahi hoti na, mai tab teri choti chiti baat pe gussa ho jata hu kuki I miss u." I still mean it. More than I did then.

Wherever I am when you read this, some part of me is already with you. In the "tune kha liya?" I'll ask in an hour. In the goodnight ritual we'll do tonight. In the song that feels like us.

I miss you too. I always will, a little, even when you're right beside me. Because you're the kind of person worth missing.`,
  },
  {
    tag: "Open on your worst day",
    title: "You Are Not Alone in This",
    body: `Worst days are liars. They pretend to be permanent. They speak in absolutes and none of them are true.

You have survived every bad day that has ever come for you. Every single one. The hard exam seasons. The silences that stretched too long. The nights where the world felt off. All of them. That is not luck. That is you.

There were times you said you wouldn't talk tomorrow. There were times I said I was fine when I wasn't. But we always came back. 5:53 AM, morning after a hard night: "Sorry bbuu. Morning ♥️. Tune pyar hi itna kiya ki itne din ki sari thakan release hogi. Love u sooo sooo much." 

The storms pass. They always have. And I am here — not to fix it. Just to sit beside you in it, for as long as it takes.`,
  },
  {
    tag: "Open when you feel lost",
    title: "Come Home to Yourself",
    body: `Feeling lost doesn't mean you're broken. Sometimes it just means you've outgrown the map.

You are allowed to be in between — between who you were and who you're becoming. You don't need to have it all figured out. Not the project name (though "Axon Analyze" was genuinely good). Not the plan. Not the answer to whatever's sitting heavy right now.

I love who you are right now. The searching version. The midnight-Python-notes version. The version that calls me mandak when she's annoyed and rasmalai when she's soft. Every version.

Come home to yourself when you're ready. And remember — I called you meri life me hai on an ordinary Tuesday morning. That doesn't go away. 🩵`,
  },
  {
    tag: "Open any time",
    title: "Everything I Never Said",
    body: `I said "koi lamba message nahi bhejunga." And then I wrote a paragraph. You know how this goes.

Here is the thing I should have said more clearly, more often: you are the best part of my ordinary life. Not in the dramatic sense. In the real sense. The Tuesday sense. The 6 AM text sense. The "tune kha liya?" sense.

Thank you for waking up early to make sure I didn't miss my bus. Thank you for Python notes and DSA resources at 9 AM. Thank you for "gudnight bbbu" after "no phones." Thank you for saying loce u moreee when I say love u the most.

Thank you for 132,000 messages. Every single one said the same thing. 

I choose you. I'd choose you again.`,
  },
  {
    tag: "Open on your birthday 🎂",
    title: "Happy Birthday, My Bbbu",
    body: `From "Class me hai kya?" to "Gudnight mines rasmalaii" —
From roll number 2501060086 to bbbu, babbabie, mandak, gulabjamun —
From 17 days of "just friends" to 300+ nights of "loce u moreee" —

You are my best friend, my favourite yapper, my person.

Every good morning. Every midnight sorry. Every "tune kha liya?" Every single one of 132,000 messages — they all say the same thing:

I chose you. I'd choose you again. On every September 4th that comes after this one. On every birthday. On every ordinary Tuesday at 6 AM.

Happy birthday, Khushi. 🩵 God gave me the perfect gift in 2025. And it was you.

— Tera bbu, Chaitanya`,
  },
];


// ── QUIZ ────────────────────────────────────────────────────
// Real questions from their real story — no cheating bbbu
const QUIZ = [
  {
    q: "What was the very first thing Chaitanya ever said to Khushi?",
    opts: ["Hi, how are you?", "Class me hai kya??? 📋", "Tu bahut cute hai 😊", "Mera naam batao"],
    a: 1,
  },
  {
    q: "What food became Khushi's most iconic nickname for Chaitanya?",
    opts: ["Gulab jamun 🍯", "Jalebi", "Kheer", "Rasmalai 🍮"],
    a: 3,
  },
  {
    q: "On what date did the chaotic proposal happen?",
    opts: ["4 September 2025", "14 September 2025", "21 September 2025 🌸", "1 October 2025"],
    a: 2,
  },
  {
    q: "What did Chaitanya say to Khushi at 12:49 AM on New Year's?",
    opts: ["Happy new year!", "God gave me the perfect gift this year 🎁", "He missed it — she sent first", "He was asleep"],
    a: 1,
  },
  {
    q: "What animal did Khushi name Chaitanya?",
    opts: ["Billi 🐱", "Kutta 🐶", "Mandak 🐸", "Bandar 🐒"],
    a: 2,
  },
  {
    q: "What does Chaitanya ask Khushi every single day, multiple times?",
    opts: ["How was college?", "Tune kha liya?? 🍽️", "Miss me?", "Sleep kab aayi?"],
    a: 1,
  },
  {
    q: "How many messages are in their WhatsApp chat?",
    opts: ["Around 10,000", "Around 50,000", "Over 132,000 💬", "Around 200,000"],
    a: 2,
  },
];

const QUIZ_RESULT_MESSAGES = [
  "Hmm, bbbu — we need to talk 😭",
  "A little more revision needed, bbbu 🌷",
  "Getting there! Tu jaanti hai humare baare mein 💙",
  "Good score! Almost as good as the proposal 😏",
  "Very impressive! Kha liya tune? 🍽️",
  "5/5! You literally ARE this story 🥹 loce u moreee",
  "6/6! Perfect — just like you, babbabie 🩵",
  "7/7!! God gave him the perfect gift this year. That's you. 🎁",
];


// ── SPIN WHEEL PRIZES ───────────────────────────────────────
const SPIN_PRIZES = [
  "Rasmalai — finally, all for you 🍮",
  "Three kisses — collect whenever 💋",
  "Your next date is my choice, my surprise 🌙",
  "A voice note from me, right now 🎙️",
  "One wish — anything, I'll try my best ✨",
  "Breakfast made by me this weekend 🍳",
  "No phones, just us, an evening walk 🌅",
  "Koi lamba message — and I mean it this time 💙",
];


// ── PHOTO GALLERY ───────────────────────────────────────────
// Drop photos into assets/photos/ and list them here
const GALLERY_PHOTOS = [
  { file: "photo1.jpg", caption: "The day everything changed ✨" },
  { file: "photo2.jpg", caption: "My favourite smile in the world 💙" },
  { file: "photo3.jpg", caption: "This one makes me happy every time 🌙" },
  { file: "photo4.jpg", caption: "Us at our best 💫" },
  { file: "photo5.jpg", caption: "I keep coming back to this one 🤍" },
  { file: "photo6.jpg", caption: "This is what home feels like 🏡" },
];


// ── BIRTHDAY REVEAL CONTENT ─────────────────────────────────
const REVEAL = {
  eyebrow: "29th June 2026 — your day. our day.",
  heading: "Happy Birthday,\nKhushi.",
  subheading: "From \"Class me hai kya?\" to forever mine.",
  body: [
    "Ten months. 132,000 messages. One very chaotic proposal at 5:54 PM. Seventeen days from strangers to us. 300+ goodnights. One New Year's message at 12:49 AM that I wrote because I ran out of ways to explain what you mean to me.",
    "You are not just my girlfriend. Tu meri best friend bhi hai. You are the first person I want to tell things to — good things, the stupid 2 AM thought, the thing that happened on the way to college. You are my person.",
    "On your birthday, I want to give you what I can't wrap: the promise of every good morning still ahead. Every 'tune kha liya?' Every 'loce u moreee.' Every ordinary Tuesday that becomes extraordinary because you're in it.",
  ],
  promise: "\"God gave me the perfect gift in 2025. And it was you. I'd choose you again — on every September 4th, every June 29th, every ordinary day in between.\"",
  closing: "This website ends here. The story doesn't. — Tera bbu, Chaitanya 🩵",
};
