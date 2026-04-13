// ============ FOOD PERSONALITY TYPES ============
const TYPES = {
  hamburger: {
    emoji: "🍔",
    name: "THE HAMBURGER",
    tag: "The Reliable Classic",
    desc: "You are the dependable backbone of every friend group. Not flashy, not loud, just consistently satisfying. You show up on time, you remember birthdays, and you always know where the good napkins are. People order you because they know exactly what they're getting — and honestly? That's a superpower. You are American cinema. You are a solid handshake. You are two buns holding society together.",
    bestFriend: "🍟 French Fries",
    worstEnemy: "🥗 A Sad Desk Salad",
    catchphrase: "\"I'll have what everyone's having.\"",
    stats: { grease: 80, chaos: 40, heart: 90, crunch: 50 }
  },
  hotdog: {
    emoji: "🌭",
    name: "THE HOT DOG",
    tag: "The Unhinged Minimalist",
    desc: "You are a mystery wrapped in a bun. Nobody fully understands what you're made of, and frankly, neither do you. You thrive in chaos — at ballparks, at 2 AM, in a gas station — anywhere loud and slightly suspicious. You've been called a sandwich. You've been called a taco. You've transcended categorization. You exist on pure vibes and processed confidence.",
    bestFriend: "🥨 A Pretzel",
    worstEnemy: "📋 A Labeling System",
    catchphrase: "\"Don't ask questions. Just eat me.\"",
    stats: { grease: 70, chaos: 95, heart: 60, crunch: 20 }
  },
  ramen: {
    emoji: "🍜",
    name: "THE RAMEN",
    tag: "The Deep Thinker",
    desc: "You have layers. Like, a concerning amount of layers. You're steaming hot, complicated, and you take a full 20 minutes just to cool down enough to engage with. People come to you when they want comfort AND an emotional journey. You cried during a Pixar short last week. You have opinions about broth. You are simultaneously the cheapest meal and the most expensive meal, depending on who made you.",
    bestFriend: "🥚 A Soft-Boiled Egg",
    worstEnemy: "⏰ Being Rushed",
    catchphrase: "\"Let it simmer. I'm processing.\"",
    stats: { grease: 55, chaos: 50, heart: 95, crunch: 30 }
  },
  pizza: {
    emoji: "🍕",
    name: "THE PIZZA",
    tag: "The Universal Crowd-Pleaser",
    desc: "You are a party. Literally. No event is complete without you, and if you show up late, the whole mood suffers. You're flexible (thin crust? deep dish? Tuesday?), you feed a crowd, and everyone has a 'their slice.' You've ended fights. You've started fights (looking at you, pineapple). You are triangular, structural, and deeply beloved. If democracy had a flavor, it would be you.",
    bestFriend: "🥤 Literally Any Soda",
    worstEnemy: "🥄 A Fork and Knife",
    catchphrase: "\"I'm bringing everyone together.\"",
    stats: { grease: 85, chaos: 60, heart: 85, crunch: 60 }
  },
  taco: {
    emoji: "🌮",
    name: "THE TACO",
    tag: "The Beautiful Disaster",
    desc: "You are fun. You are messy. You are falling apart the second someone picks you up, and you would not have it any other way. Your life philosophy is 'more is more.' You have dropped at least three important things on the floor this week. You say yes to plans. You say yes to hot sauce. You say yes to adding guac for $2 extra. Your charm is that you were never going to stay together, and nobody came here expecting you to.",
    bestFriend: "🍹 A Margarita",
    worstEnemy: "👔 A White Shirt",
    catchphrase: "\"It's FINE. It's going to be FINE.\"",
    stats: { grease: 60, chaos: 90, heart: 80, crunch: 75 }
  },
  sushi: {
    emoji: "🍣",
    name: "THE SUSHI",
    tag: "The Refined Perfectionist",
    desc: "You are elegant. Precise. A little intimidating. You have strong opinions about rice-to-fish ratios and you will not hesitate to share them. People are either obsessed with you or mildly afraid of you — there's no middle ground. You've mastered the art of making 'minimalist' look expensive. You own at least one nice pen. You have a skincare routine. You are probably judging this quiz right now.",
    bestFriend: "🍵 Green Tea",
    worstEnemy: "🥫 A Can of Beans",
    catchphrase: "\"Actually, it's pronounced…\"",
    stats: { grease: 20, chaos: 25, heart: 70, crunch: 40 }
  },
  friedchicken: {
    emoji: "🍗",
    name: "THE FRIED CHICKEN",
    tag: "The Charmer With Secrets",
    desc: "You are crispy on the outside, soft on the inside, and you run on a blend of herbs and spices nobody is allowed to know. You walk into rooms and people just… turn. You're a storyteller. A hugger. A 'should we get dessert?' person. Your best friend calls you at 11 PM crying and you are ALREADY putting on pants. You carry napkins. You carry emotional weight. You carry the group chat.",
    bestFriend: "🧇 A Waffle",
    worstEnemy: "🧻 Being Judged for Using Your Hands",
    catchphrase: "\"Oh honey, come sit down.\"",
    stats: { grease: 90, chaos: 55, heart: 90, crunch: 95 }
  },
  donut: {
    emoji: "🍩",
    name: "THE DONUT",
    tag: "The Sweet Optimist",
    desc: "You are round, sweet, and you have a hole where your anxiety used to be (you filled it with sprinkles). You are pure serotonin in pastry form. You've never met a Monday you couldn't improve. You believe in love. You believe in naps. You believe that yes, we SHOULD get one for the office. Some people say you have no substance — but those people are wrong and also need a hug and maybe a donut.",
    bestFriend: "☕ A Large Coffee",
    worstEnemy: "🥦 Meal Prep Culture",
    catchphrase: "\"Everything's going to be glazed.\"",
    stats: { grease: 50, chaos: 35, heart: 100, crunch: 30 }
  }
};

// ============ QUIZ QUESTIONS ============
// Each answer adds points to one or more food types.
const QUESTIONS = [
  {
    q: "It's 2 AM. You are hungry. What's the move?",
    answers: [
      { text: "Whatever's in the fridge, eaten cold, over the sink.", emoji: "🥶", scores: { hotdog: 2, taco: 1 } },
      { text: "Carefully assemble a small, elegant snack on a real plate.", emoji: "🍽️", scores: { sushi: 2, ramen: 1 } },
      { text: "Text someone. This is a group activity now.", emoji: "📱", scores: { pizza: 2, friedchicken: 1 } },
      { text: "Something sweet. Always something sweet.", emoji: "🍰", scores: { donut: 2, hamburger: 1 } }
    ]
  },
  {
    q: "Pick your weekend aesthetic:",
    answers: [
      { text: "Outdoor festival, questionable footwear, at least one unplanned friendship.", emoji: "🎪", scores: { taco: 2, hotdog: 1 } },
      { text: "Cozy apartment. Book. Blanket. A beverage that requires a coaster.", emoji: "📚", scores: { ramen: 2, sushi: 1 } },
      { text: "Everyone's at my place and somehow I'm hosting again.", emoji: "🏠", scores: { pizza: 2, friedchicken: 1 } },
      { text: "Errands, but make them pleasant. I got a little treat.", emoji: "🛍️", scores: { donut: 2, hamburger: 1 } }
    ]
  },
  {
    q: "A friend is going through it. You:",
    answers: [
      { text: "Show up physically with food and stay until they fall asleep.", emoji: "💕", scores: { friedchicken: 2, ramen: 1 } },
      { text: "Send a beautifully worded text and a thoughtful gift.", emoji: "💌", scores: { sushi: 2, donut: 1 } },
      { text: "Plan a wild night out to take their mind off it.", emoji: "🎉", scores: { taco: 2, pizza: 1 } },
      { text: "Just be normal around them. They don't need a production.", emoji: "🤝", scores: { hamburger: 2, hotdog: 1 } }
    ]
  },
  {
    q: "Your texting style is best described as:",
    answers: [
      { text: "Paragraphs. Voice notes. A whole novel.", emoji: "📖", scores: { ramen: 2, friedchicken: 1 } },
      { text: "'k'", emoji: "💀", scores: { hotdog: 2, hamburger: 1 } },
      { text: "A chaotic mess of typos, emojis, and three separate topics.", emoji: "🌪️", scores: { taco: 2, pizza: 1 } },
      { text: "Perfectly punctuated. Maybe a cute sign-off.", emoji: "✨", scores: { sushi: 2, donut: 1 } }
    ]
  },
  {
    q: "How do you handle Mondays?",
    answers: [
      { text: "I fear no day. Mondays are just days with good lighting.", emoji: "☀️", scores: { donut: 2, pizza: 1 } },
      { text: "I grind. I drink water. I execute.", emoji: "💪", scores: { sushi: 2, hamburger: 1 } },
      { text: "I retreat into my shell. Do not speak to me until noon.", emoji: "🐚", scores: { ramen: 2 } },
      { text: "I somehow arrive late AND overcaffeinated. Unclear how.", emoji: "⚡", scores: { taco: 2, hotdog: 1 } }
    ]
  },
  {
    q: "Your ideal first date is:",
    answers: [
      { text: "A dive bar. Chaos. Energy. Maybe karaoke.", emoji: "🎤", scores: { hotdog: 2, taco: 1 } },
      { text: "A nice restaurant where the waiter says 'very good choice.'", emoji: "🍷", scores: { sushi: 2, friedchicken: 1 } },
      { text: "A long walk where we accidentally tell each other EVERYTHING.", emoji: "🚶", scores: { ramen: 2, donut: 1 } },
      { text: "Literally just get pizza. I don't need a theme.", emoji: "🍕", scores: { pizza: 2, hamburger: 1 } }
    ]
  },
  {
    q: "Pick a chaotic truth about yourself:",
    answers: [
      { text: "I have been told I 'bring a lot of energy' to a quiet room.", emoji: "🔥", scores: { taco: 2, pizza: 1 } },
      { text: "I unironically love routine. A schedule is my love language.", emoji: "📅", scores: { hamburger: 2, sushi: 1 } },
      { text: "I have cried at a commercial in the last 30 days.", emoji: "😭", scores: { ramen: 2, friedchicken: 1 } },
      { text: "I bought something I didn't need today and it healed me.", emoji: "🛒", scores: { donut: 2, hotdog: 1 } }
    ]
  },
  {
    q: "What's your group chat role?",
    answers: [
      { text: "The planner. If I don't send the 'so when are we doing this,' nothing happens.", emoji: "📋", scores: { hamburger: 2, sushi: 1 } },
      { text: "The chaos agent. Unhinged screenshots at 1 AM.", emoji: "🤡", scores: { hotdog: 2, taco: 1 } },
      { text: "The emotional support friend. I read all 47 messages.", emoji: "🫂", scores: { friedchicken: 2, ramen: 1 } },
      { text: "The morale booster. I send 'we got this 💖' unprompted.", emoji: "🌈", scores: { donut: 2, pizza: 1 } }
    ]
  },
  {
    q: "Pick a condiment. Don't overthink it.",
    answers: [
      { text: "Ketchup. Don't make this weird.", emoji: "🍅", scores: { hamburger: 2, hotdog: 1 } },
      { text: "Sriracha or something that burns slightly.", emoji: "🌶️", scores: { taco: 2, ramen: 1 } },
      { text: "Ranch. I will fight you about this.", emoji: "🥛", scores: { pizza: 2, friedchicken: 1 } },
      { text: "Soy sauce. Carefully. Respectfully. Just a little.", emoji: "🥢", scores: { sushi: 2, donut: 1 } }
    ]
  },
  {
    q: "What's on your kitchen counter right now?",
    answers: [
      { text: "A candle, fresh fruit, and a cookbook I pretend to use.", emoji: "🕯️", scores: { sushi: 2, donut: 1 } },
      { text: "A coffee maker, a pan I should wash, and vibes.", emoji: "☕", scores: { hamburger: 2, friedchicken: 1 } },
      { text: "Mail from 2 weeks ago and a mug I'm reusing.", emoji: "📬", scores: { hotdog: 2, taco: 1 } },
      { text: "Seven half-finished projects and an emotional support plant.", emoji: "🌱", scores: { ramen: 2, pizza: 1 } }
    ]
  },
  {
    q: "Someone cuts you off in traffic. You:",
    answers: [
      { text: "Honk. Gesture. Compose a LinkedIn post about it mentally.", emoji: "📣", scores: { taco: 2, hotdog: 1 } },
      { text: "Say nothing. Stew. Think about it for 4 days.", emoji: "🫥", scores: { ramen: 2, sushi: 1 } },
      { text: "Wave them in like 'go ahead, I believe in you.'", emoji: "🙏", scores: { donut: 2, friedchicken: 1 } },
      { text: "Shrug. It's fine. I wasn't in a rush anyway.", emoji: "😌", scores: { hamburger: 2, pizza: 1 } }
    ]
  },
  {
    q: "Finally — pick a totally random vibe:",
    answers: [
      { text: "A neon sign flickering at a roadside diner.", emoji: "🛻", scores: { hamburger: 2, hotdog: 1 } },
      { text: "A rainy window, a warm bowl, and a sad playlist.", emoji: "🌧️", scores: { ramen: 2, friedchicken: 1 } },
      { text: "A rooftop at golden hour with all my friends yelling.", emoji: "🌇", scores: { pizza: 2, taco: 1 } },
      { text: "A quiet morning, a latte, and my life somewhat together.", emoji: "☕", scores: { donut: 2, sushi: 1 } }
    ]
  }
];

// ============ STATE ============
const state = {
  current: 0,
  scores: Object.fromEntries(Object.keys(TYPES).map(k => [k, 0]))
};

// ============ HELPERS ============
const $ = id => document.getElementById(id);
const show = id => {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  $(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function renderQuestion() {
  const total = QUESTIONS.length;
  const q = QUESTIONS[state.current];
  $('questionNumber').textContent = 'Q' + (state.current + 1);
  $('questionText').textContent = q.q;
  $('progressLabel').textContent = `QUESTION ${state.current + 1} / ${total}`;
  $('progressFill').style.width = ((state.current) / total * 100) + '%';
  $('orderNum').textContent = String(100000 + state.current).slice(1);

  const list = $('answerList');
  list.innerHTML = '';
  q.answers.forEach((a, i) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.innerHTML = `<span class="emoji">${a.emoji}</span><span>${a.text}</span>`;
    btn.addEventListener('click', () => pickAnswer(a));
    list.appendChild(btn);
  });
}

function pickAnswer(a) {
  Object.entries(a.scores).forEach(([k, v]) => state.scores[k] += v);
  state.current++;
  if (state.current >= QUESTIONS.length) {
    $('progressFill').style.width = '100%';
    setTimeout(showResult, 400);
  } else {
    renderQuestion();
  }
}

function showResult() {
  const winner = Object.entries(state.scores).sort((a, b) => b[1] - a[1])[0][0];
  const t = TYPES[winner];
  $('resultEmoji').textContent = t.emoji;
  $('resultName').textContent = t.name;
  $('resultTag').textContent = `"${t.tag}"`;
  $('resultDesc').textContent = t.desc;
  $('bestFriend').textContent = t.bestFriend;
  $('worstEnemy').textContent = t.worstEnemy;
  $('catchphrase').textContent = t.catchphrase;

  // Animate stat bars
  setTimeout(() => {
    $('statGrease').style.width = t.stats.grease + '%';
    $('statChaos').style.width = t.stats.chaos + '%';
    $('statHeart').style.width = t.stats.heart + '%';
    $('statCrunch').style.width = t.stats.crunch + '%';
  }, 100);

  // Render all types
  const grid = $('allTypesGrid');
  grid.innerHTML = '';
  Object.entries(TYPES).forEach(([key, type]) => {
    const card = document.createElement('div');
    card.className = 'type-card';
    if (key === winner) card.style.background = '#ffd93d';
    card.innerHTML = `
      <span class="type-emoji">${type.emoji}</span>
      <div class="type-title">${type.name.replace('THE ', '')}</div>
      <div class="type-tiny">${type.tag}</div>
    `;
    grid.appendChild(card);
  });

  show('result');
}

function resetQuiz() {
  state.current = 0;
  Object.keys(state.scores).forEach(k => state.scores[k] = 0);
  renderQuestion();
  show('quiz');
}

// ============ BIND ============
$('startBtn').addEventListener('click', () => {
  renderQuestion();
  show('quiz');
});

$('retakeBtn').addEventListener('click', resetQuiz);

$('shareBtn').addEventListener('click', () => {
  const name = $('resultName').textContent;
  const text = `I took the FFTI quiz and apparently I'm ${name}. Explain yourselves.`;
  if (navigator.share) {
    navigator.share({ title: 'My Fast Food Type', text, url: location.href }).catch(() => {});
  } else {
    navigator.clipboard?.writeText(text + ' ' + location.href);
    const btn = $('shareBtn');
    const old = btn.innerHTML;
    btn.innerHTML = '✅ COPIED!';
    setTimeout(() => btn.innerHTML = old, 1500);
  }
});
