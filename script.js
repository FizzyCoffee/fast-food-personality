// =====================================================
// FFTI — Fast Food Type Indicator (i18n: ja default, en)
// =====================================================

// ============ UI STRINGS ============
const UI = {
  ja: {
    tag: "ファストフード性格診断 — 100% 無栄養",
    heroLine1: "あなたは",
    heroLine2: "どの",
    heroLine3: "ファストフード？",
    heroSub: "星座占いはもう古い。MBTIは終わった。心理カウンセラーもそっと置いておこう。科学*が証明しました。人間は皆、心の奥底で「脂っこいメニュー」です。テストを受けて、運命を受け入れよう。",
    startBtn: "診断スタート",
    startSub: "🍟 全12問 ・ カロリーゼロ（情報量も）",
    disclaimer: "*科学ではありません。論文に引用しないでください。",
    menuTitle: "★ 本日のラインナップ ★",
    orderLabel: "注文番号 #000001",
    thankYou: "自分を注文してくれてありがとう",
    resultStamp: "おめでとう、あなたは…",
    statGrease: "脂っこさ",
    statChaos: "カオス度",
    statHeart: "ハート",
    statCrunch: "カリカリ度",
    bestFriendLabel: "相性 ◎",
    worstEnemyLabel: "相性 ✕",
    catchphraseLabel: "あなたの口ぐせ：",
    retakeBtn: "🔁 もう一度診断",
    shareBtn: "📣 自慢する",
    allTypesTitle: "全メニュー一覧（タップで切替）",
    footerLeft: "FFTI™ は誰の登録商標でもありません。カロリー情報：あります。",
    footerRight: "© 2026 ・ 🧈 と若干の判断力で作成",
    progress: (i, total) => `第 ${i} 問 / 全 ${total} 問`,
    orderNum: (n) => `注文番号 #${n}`,
    shareText: (name) => `FFTI 診断を受けたら「${name}」でした。どういうこと？`,
    shareTitle: "私のファストフードタイプ",
    copied: "✅ コピー済み！",
    pageTitle: "FFTI — ファストフード性格診断",
    // share modal
    shareModalTitle: "結果をシェアしよう",
    shareModalSub: "画像でもリンクでも、お好きな方法で。",
    downloadBtn: "画像をダウンロード",
    copyLinkBtn: "リンクをコピー",
    linkCopied: "✅ リンクをコピーしました",
    imageSaved: "✅ 画像を保存しました",
    fromFriend: "👋 友達があなたにこの診断をシェアしました — 自分でもやってみる？",
    takeQuizBtn: "自分で診断する",
    imgFooter: "FFTI® ・ ファストフード性格診断",
    imgHeader: "私のファストフードタイプは…",
    imgBestLabel: "相性 ◎",
    imgWorstLabel: "相性 ✕",
    imgGrease: "脂っこさ",
    imgChaos: "カオス度",
    imgHeart: "ハート",
    imgCrunch: "カリカリ度",
    imgAttached: "✅ 画像を保存しました！投稿に添付してね",
    instagramHint: "① 画像を保存 → ② Instagramで投稿📷",
    instagramStep1: "まず画像を保存してね！"
  },
  en: {
    tag: "Fast Food Type Indicator — Now with 100% More Grease",
    heroLine1: "WHAT KIND OF",
    heroLine2: "FAST FOOD",
    heroLine3: "ARE YOU?",
    heroSub: "Forget horoscopes. Forget Myers-Briggs. Forget your therapist's \"inner child work.\" Science* has determined that every human being is, at their core, a greasy menu item. Take the quiz. Learn the truth. Accept your destiny.",
    startBtn: "START QUIZ",
    startSub: "🍟 12 questions · 0 nutritional value",
    disclaimer: "*Not actual science. Please do not cite this in your dissertation.",
    menuTitle: "★ TODAY'S SPECIALS ★",
    orderLabel: "ORDER #000001",
    thankYou: "THANK YOU FOR CHOOSING YOURSELF",
    resultStamp: "CONGRATULATIONS, YOU ARE A…",
    statGrease: "GREASE",
    statChaos: "CHAOS",
    statHeart: "HEART",
    statCrunch: "CRUNCH",
    bestFriendLabel: "BEST FRIEND",
    worstEnemyLabel: "WORST ENEMY",
    catchphraseLabel: "YOUR CATCHPHRASE:",
    retakeBtn: "🔁 RETAKE QUIZ",
    shareBtn: "📣 BRAG ABOUT IT",
    allTypesTitle: "THE FULL MENU OF PERSONALITIES",
    footerLeft: "FFTI™ is a registered trademark of nobody. Calorie info: yes.",
    footerRight: "© 2026 · Made with 🧈 and questionable judgment",
    progress: (i, total) => `QUESTION ${i} / ${total}`,
    orderNum: (n) => `ORDER #${n}`,
    shareText: (name) => `I took the FFTI quiz and apparently I'm ${name}. Explain yourselves.`,
    shareTitle: "My Fast Food Type",
    copied: "✅ COPIED!",
    pageTitle: "FFTI — The Fast Food Type Indicator",
    // share modal
    shareModalTitle: "SHARE YOUR RESULT",
    shareModalSub: "Download an image or share a link — you choose.",
    downloadBtn: "Download Image",
    copyLinkBtn: "Copy Link",
    linkCopied: "✅ LINK COPIED",
    imageSaved: "✅ IMAGE SAVED",
    fromFriend: "👋 A friend sent you this quiz — wanna take it yourself?",
    takeQuizBtn: "TAKE THE QUIZ",
    imgFooter: "FFTI® · Fast Food Type Indicator",
    imgHeader: "My fast food type is…",
    imgBestLabel: "BEST FRIEND",
    imgWorstLabel: "WORST ENEMY",
    imgGrease: "GREASE",
    imgChaos: "CHAOS",
    imgHeart: "HEART",
    imgCrunch: "CRUNCH",
    imgAttached: "✅ IMAGE SAVED — attach it to your post!",
    instagramHint: "① Save image → ② Post on Instagram 📷",
    instagramStep1: "Save the image first!"
  }
};

// ============ FOOD TYPES ============
const TYPES = {
  hamburger: {
    emoji: "🍔",
    stats: { grease: 80, chaos: 40, heart: 90, crunch: 50 },
    ja: {
      name: "ハンバーガー型",
      short: "ハンバーガー",
      tag: "安定のクラシック",
      desc: "あなたはどのグループにも一人はいる「いてくれるだけで安心する人」。派手じゃない、うるさくない、ただ確実に満足させてくれる。約束の時間に遅れない。誕生日を覚えている。コンビニで一番美味しいおにぎりも知っている。みんながあなたを「注文する」のは、何が出てくるか分かっているから。それ、地味に超能力です。あなたは土曜の昼下がりの安心感。しっかりした握手。社会をそっと支えている二枚のバンズです。",
      bestFriend: "🍟 ポテト",
      worstEnemy: "🥗 デスクで食べる寂しいサラダ",
      catchphrase: "「みんなと同じでいいです」"
    },
    en: {
      name: "THE HAMBURGER",
      short: "HAMBURGER",
      tag: "The Reliable Classic",
      desc: "You are the dependable backbone of every friend group. Not flashy, not loud, just consistently satisfying. You show up on time, you remember birthdays, and you always know where the good napkins are. People order you because they know exactly what they're getting — and honestly? That's a superpower. You are American cinema. You are a solid handshake. You are two buns holding society together.",
      bestFriend: "🍟 French Fries",
      worstEnemy: "🥗 A Sad Desk Salad",
      catchphrase: "\"I'll have what everyone's having.\""
    }
  },
  hotdog: {
    emoji: "🌭",
    stats: { grease: 70, chaos: 95, heart: 60, crunch: 20 },
    ja: {
      name: "ホットドッグ型",
      short: "ホットドッグ",
      tag: "カオスなミニマリスト",
      desc: "あなたはパンに包まれたミステリー。何でできているのか誰も知らないし、正直あなた自身もよく分かっていない。ドーム球場、終電後のコンビニ前、深夜のガソスタ — とにかくうるさくてちょっと怪しい場所で本領発揮。「これってサンドイッチ？」「タコス？」と分類されかけるたびに、あなたは全てを超越してきた。加工された自信と勢いだけで生きている、それがあなた。",
      bestFriend: "🥨 プレッツェル",
      worstEnemy: "📋 カテゴリー分けしたがる人",
      catchphrase: "「深く考えるな。食え。」"
    },
    en: {
      name: "THE HOT DOG",
      short: "HOT DOG",
      tag: "The Unhinged Minimalist",
      desc: "You are a mystery wrapped in a bun. Nobody fully understands what you're made of, and frankly, neither do you. You thrive in chaos — at ballparks, at 2 AM, in a gas station — anywhere loud and slightly suspicious. You've been called a sandwich. You've been called a taco. You've transcended categorization. You exist on pure vibes and processed confidence.",
      bestFriend: "🥨 A Pretzel",
      worstEnemy: "📋 A Labeling System",
      catchphrase: "\"Don't ask questions. Just eat me.\""
    }
  },
  ramen: {
    emoji: "🍜",
    stats: { grease: 55, chaos: 50, heart: 95, crunch: 30 },
    ja: {
      name: "ラーメン型",
      short: "ラーメン",
      tag: "こじらせ思想家",
      desc: "あなたには層がある。ちょっと心配になるぐらい、層がある。熱くて、複雑で、冷めるまで20分は話しかけられない。人があなたに求めるのは「癒し」＆「深イイ話」。先週もPixarの短編で泣いた。スープに哲学がある。同じラーメンでも作り手によって最安にも最高級にもなる、それがあなた。",
      bestFriend: "🥚 半熟たまご",
      worstEnemy: "⏰ 急かされること",
      catchphrase: "「ちょっと待って、今考えてる」"
    },
    en: {
      name: "THE RAMEN",
      short: "RAMEN",
      tag: "The Deep Thinker",
      desc: "You have layers. Like, a concerning amount of layers. You're steaming hot, complicated, and you take a full 20 minutes just to cool down enough to engage with. People come to you when they want comfort AND an emotional journey. You cried during a Pixar short last week. You have opinions about broth. You are simultaneously the cheapest meal and the most expensive meal, depending on who made you.",
      bestFriend: "🥚 A Soft-Boiled Egg",
      worstEnemy: "⏰ Being Rushed",
      catchphrase: "\"Let it simmer. I'm processing.\""
    }
  },
  pizza: {
    emoji: "🍕",
    stats: { grease: 85, chaos: 60, heart: 85, crunch: 60 },
    ja: {
      name: "ピザ型",
      short: "ピザ",
      tag: "全員から愛されるタイプ",
      desc: "あなた＝パーティー。もう文字通り。あなたがいないと飲み会の空気が成立しない。遅刻すると全員の機嫌が下がる。薄い？厚い？火曜日？何でもOK。みんなに「自分の一切れ」がある。あなたは争いを止めたことも、始めたこともある（パイナップルの件）。三角形で、構造的で、深く愛される存在。民主主義に味があるなら、それはあなたです。",
      bestFriend: "🥤 何でもいいから炭酸",
      worstEnemy: "🥄 ナイフとフォーク",
      catchphrase: "「みんな呼んじゃお」"
    },
    en: {
      name: "THE PIZZA",
      short: "PIZZA",
      tag: "The Universal Crowd-Pleaser",
      desc: "You are a party. Literally. No event is complete without you, and if you show up late, the whole mood suffers. You're flexible (thin crust? deep dish? Tuesday?), you feed a crowd, and everyone has a 'their slice.' You've ended fights. You've started fights (looking at you, pineapple). You are triangular, structural, and deeply beloved. If democracy had a flavor, it would be you.",
      bestFriend: "🥤 Literally Any Soda",
      worstEnemy: "🥄 A Fork and Knife",
      catchphrase: "\"I'm bringing everyone together.\""
    }
  },
  taco: {
    emoji: "🌮",
    stats: { grease: 60, chaos: 90, heart: 80, crunch: 75 },
    ja: {
      emoji: "🐙",
      name: "たこ焼き型",
      short: "たこ焼き",
      tag: "アツアツのパーティー魂",
      desc: "あなたは熱い。文字通り、危険なぐらい熱い。初対面で誰かの口を火傷させがち。8個パックが基本なので、一人で現れることはない — 気づけば友達も6人くっついてくる。ソース、マヨ、かつお節、青のりを全身にまとって、屋台文化そのものを体現している。中身はたこ？まあ、実は何でもいい。あなた自身の本質もそう。外はカリッ、中はトロッ、そして絶対に人を笑わせる。",
      bestFriend: "🍺 キンキンに冷えた生ビール",
      worstEnemy: "🍽️ お上品なテーブルマナー",
      catchphrase: "「アツッ！…でも、うまい。」"
    },
    en: {
      name: "THE TACO",
      short: "TACO",
      tag: "The Beautiful Disaster",
      desc: "You are fun. You are messy. You are falling apart the second someone picks you up, and you would not have it any other way. Your life philosophy is 'more is more.' You have dropped at least three important things on the floor this week. You say yes to plans. You say yes to hot sauce. You say yes to adding guac for $2 extra. Your charm is that you were never going to stay together, and nobody came here expecting you to.",
      bestFriend: "🍹 A Margarita",
      worstEnemy: "👔 A White Shirt",
      catchphrase: "\"It's FINE. It's going to be FINE.\""
    }
  },
  sushi: {
    emoji: "🍣",
    stats: { grease: 20, chaos: 25, heart: 70, crunch: 40 },
    ja: {
      name: "寿司型",
      short: "寿司",
      tag: "こだわりの完璧主義者",
      desc: "上品。繊細。ちょっと近寄りがたい。シャリとネタのバランスに強いこだわりがあり、それを遠慮なく語る。周りはあなたに「めっちゃ好き」か「ちょっと怖い」かのどちらか。中間はない。「ミニマル」を高級に見せる達人。良い万年筆を持っている。スキンケアにも手を抜かない。この診断にも内心ちょっとツッコんでる。",
      bestFriend: "🍵 緑茶",
      worstEnemy: "🥫 コンビニの缶詰",
      catchphrase: "「実はそれ、正しくは…」"
    },
    en: {
      name: "THE SUSHI",
      short: "SUSHI",
      tag: "The Refined Perfectionist",
      desc: "You are elegant. Precise. A little intimidating. You have strong opinions about rice-to-fish ratios and you will not hesitate to share them. People are either obsessed with you or mildly afraid of you — there's no middle ground. You've mastered the art of making 'minimalist' look expensive. You own at least one nice pen. You have a skincare routine. You are probably judging this quiz right now.",
      bestFriend: "🍵 Green Tea",
      worstEnemy: "🥫 A Can of Beans",
      catchphrase: "\"Actually, it's pronounced…\""
    }
  },
  friedchicken: {
    emoji: "🍗",
    stats: { grease: 90, chaos: 55, heart: 90, crunch: 95 },
    ja: {
      name: "からあげ型",
      short: "からあげ",
      tag: "秘密を抱えた癒し系",
      desc: "外はカリッ、中はジュワッ。秘伝のスパイス配合は誰にも教えない。あなたが部屋に入ると、みんな自然と振り向く。話し上手で、ハグ上手で、「〆にもう一軒行く？」って言える人。親友が23時に泣きながらLINEしてきたら、もうズボンを履いている。ウェットティッシュも持ってる。感情の重さも受け止めてる。グループLINEの中心もあなた。",
      bestFriend: "🍙 白ごはん",
      worstEnemy: "🧻 手で食べるのを白い目で見る人",
      catchphrase: "「ちょっとそこ座って、話そ？」"
    },
    en: {
      name: "THE FRIED CHICKEN",
      short: "FRIED CHICKEN",
      tag: "The Charmer With Secrets",
      desc: "You are crispy on the outside, soft on the inside, and you run on a blend of herbs and spices nobody is allowed to know. You walk into rooms and people just… turn. You're a storyteller. A hugger. A 'should we get dessert?' person. Your best friend calls you at 11 PM crying and you are ALREADY putting on pants. You carry napkins. You carry emotional weight. You carry the group chat.",
      bestFriend: "🧇 A Waffle",
      worstEnemy: "🧻 Being Judged for Using Your Hands",
      catchphrase: "\"Oh honey, come sit down.\""
    }
  },
  donut: {
    emoji: "🍩",
    stats: { grease: 50, chaos: 35, heart: 100, crunch: 30 },
    ja: {
      name: "ドーナツ型",
      short: "ドーナツ",
      tag: "甘党の楽観主義者",
      desc: "まんまる。甘い。不安があった場所には、今はスプリンクルが詰まっている。あなたは生菓子の形をしたセロトニン。月曜の朝ですら「今日もいけそう」と思える人。愛を信じる。昼寝を信じる。「これ職場のみんなにも買って帰ろ」と即決できる。たまに「中身ないよね」と言う人もいるけど、その人こそハグとドーナツが必要なだけ。",
      bestFriend: "☕ 特大コーヒー",
      worstEnemy: "🥦 ストイックな作り置き勢",
      catchphrase: "「大丈夫、全部うまくいくよ〜」"
    },
    en: {
      name: "THE DONUT",
      short: "DONUT",
      tag: "The Sweet Optimist",
      desc: "You are round, sweet, and you have a hole where your anxiety used to be (you filled it with sprinkles). You are pure serotonin in pastry form. You've never met a Monday you couldn't improve. You believe in love. You believe in naps. You believe that yes, we SHOULD get one for the office. Some people say you have no substance — but those people are wrong and also need a hug and maybe a donut.",
      bestFriend: "☕ A Large Coffee",
      worstEnemy: "🥦 Meal Prep Culture",
      catchphrase: "\"Everything's going to be glazed.\""
    }
  }
};

// ============ QUESTIONS ============
const QUESTIONS = [
  {
    ja: { q: "深夜2時、お腹がすいた。どうする？" },
    en: { q: "It's 2 AM. You are hungry. What's the move?" },
    answers: [
      {
        ja: { text: "冷蔵庫の中のものを、立ったまま、冷たいまま食べる。" },
        en: { text: "Whatever's in the fridge, eaten cold, over the sink." },
        emoji: "🥶", scores: { hotdog: 2, taco: 1 }
      },
      {
        ja: { text: "ちゃんとお皿に盛って、小さくて上品な夜食を作る。" },
        en: { text: "Carefully assemble a small, elegant snack on a real plate." },
        emoji: "🍽️", scores: { sushi: 2, ramen: 1 }
      },
      {
        ja: { text: "誰かにLINE。これはもう団体戦。" },
        en: { text: "Text someone. This is a group activity now." },
        emoji: "📱", scores: { pizza: 2, friedchicken: 1 }
      },
      {
        ja: { text: "甘いもの。なんだかんだ言って甘いもの。" },
        en: { text: "Something sweet. Always something sweet." },
        emoji: "🍰", scores: { donut: 2, hamburger: 1 }
      }
    ]
  },
  {
    ja: { q: "理想の週末を選んで：" },
    en: { q: "Pick your weekend aesthetic:" },
    answers: [
      {
        ja: { text: "フェス。謎の靴。気づいたら知らない人と友達になってる。" },
        en: { text: "Outdoor festival, questionable footwear, at least one unplanned friendship." },
        emoji: "🎪", scores: { taco: 2, hotdog: 1 }
      },
      {
        ja: { text: "部屋でぬくぬく。本。ブランケット。コースター必須の飲み物。" },
        en: { text: "Cozy apartment. Book. Blanket. A beverage that requires a coaster." },
        emoji: "📚", scores: { ramen: 2, sushi: 1 }
      },
      {
        ja: { text: "なぜかまた自分の家でホームパーティー開催中。" },
        en: { text: "Everyone's at my place and somehow I'm hosting again." },
        emoji: "🏠", scores: { pizza: 2, friedchicken: 1 }
      },
      {
        ja: { text: "用事を気分よく片付ける。ついでに自分へのご褒美。" },
        en: { text: "Errands, but make them pleasant. I got a little treat." },
        emoji: "🛍️", scores: { donut: 2, hamburger: 1 }
      }
    ]
  },
  {
    ja: { q: "友達がちょっと病んでる。あなたは：" },
    en: { q: "A friend is going through it. You:" },
    answers: [
      {
        ja: { text: "ごはん持って直接行く。寝るまでそばにいる。" },
        en: { text: "Show up physically with food and stay until they fall asleep." },
        emoji: "💕", scores: { friedchicken: 2, ramen: 1 }
      },
      {
        ja: { text: "言葉を選び抜いた長文LINEと、ちょっと気の利いたプレゼント。" },
        en: { text: "Send a beautifully worded text and a thoughtful gift." },
        emoji: "💌", scores: { sushi: 2, donut: 1 }
      },
      {
        ja: { text: "ド派手な夜遊びを計画して忘れさせる。" },
        en: { text: "Plan a wild night out to take their mind off it." },
        emoji: "🎉", scores: { taco: 2, pizza: 1 }
      },
      {
        ja: { text: "いつも通り接する。下手に演出するほうが逆に気を遣わせる。" },
        en: { text: "Just be normal around them. They don't need a production." },
        emoji: "🤝", scores: { hamburger: 2, hotdog: 1 }
      }
    ]
  },
  {
    ja: { q: "あなたのLINEの文体は？" },
    en: { q: "Your texting style is best described as:" },
    answers: [
      {
        ja: { text: "長文。ボイスメッセージ。ほぼ小説。" },
        en: { text: "Paragraphs. Voice notes. A whole novel." },
        emoji: "📖", scores: { ramen: 2, friedchicken: 1 }
      },
      {
        ja: { text: "「りょ」" },
        en: { text: "'k'" },
        emoji: "💀", scores: { hotdog: 2, hamburger: 1 }
      },
      {
        ja: { text: "誤字と絵文字と話題が3つ混ざったカオス。" },
        en: { text: "A chaotic mess of typos, emojis, and three separate topics." },
        emoji: "🌪️", scores: { taco: 2, pizza: 1 }
      },
      {
        ja: { text: "句読点まできっちり。ちょっと可愛い締めの一言付き。" },
        en: { text: "Perfectly punctuated. Maybe a cute sign-off." },
        emoji: "✨", scores: { sushi: 2, donut: 1 }
      }
    ]
  },
  {
    ja: { q: "月曜日との向き合い方は？" },
    en: { q: "How do you handle Mondays?" },
    answers: [
      {
        ja: { text: "月曜？ただの光のきれいな平日でしょ。" },
        en: { text: "I fear no day. Mondays are just days with good lighting." },
        emoji: "☀️", scores: { donut: 2, pizza: 1 }
      },
      {
        ja: { text: "粛々と仕事する。水を飲む。タスクを倒す。" },
        en: { text: "I grind. I drink water. I execute." },
        emoji: "💪", scores: { sushi: 2, hamburger: 1 }
      },
      {
        ja: { text: "殻にこもる。昼までは話しかけないでほしい。" },
        en: { text: "I retreat into my shell. Do not speak to me until noon." },
        emoji: "🐚", scores: { ramen: 2 }
      },
      {
        ja: { text: "遅刻してるのにカフェイン過剰。謎。" },
        en: { text: "I somehow arrive late AND overcaffeinated. Unclear how." },
        emoji: "⚡", scores: { taco: 2, hotdog: 1 }
      }
    ]
  },
  {
    ja: { q: "理想の初デートは？" },
    en: { q: "Your ideal first date is:" },
    answers: [
      {
        ja: { text: "ガヤガヤした居酒屋。カオス。テンション高め。カラオケもアリ。" },
        en: { text: "A dive bar. Chaos. Energy. Maybe karaoke." },
        emoji: "🎤", scores: { hotdog: 2, taco: 1 }
      },
      {
        ja: { text: "店員さんに「お目が高い」と言われるタイプの店。" },
        en: { text: "A nice restaurant where the waiter says 'very good choice.'" },
        emoji: "🍷", scores: { sushi: 2, friedchicken: 1 }
      },
      {
        ja: { text: "長めの散歩。気づいたらお互いの全部を話してる。" },
        en: { text: "A long walk where we accidentally tell each other EVERYTHING." },
        emoji: "🚶", scores: { ramen: 2, donut: 1 }
      },
      {
        ja: { text: "とりあえずピザ。テーマとかいらない。" },
        en: { text: "Literally just get pizza. I don't need a theme." },
        emoji: "🍕", scores: { pizza: 2, hamburger: 1 }
      }
    ]
  },
  {
    ja: { q: "カオスな自分の真実、一つ選んで：" },
    en: { q: "Pick a chaotic truth about yourself:" },
    answers: [
      {
        ja: { text: "「テンション持ち込みすぎ」と言われたことがある。" },
        en: { text: "I have been told I 'bring a lot of energy' to a quiet room." },
        emoji: "🔥", scores: { taco: 2, pizza: 1 }
      },
      {
        ja: { text: "ルーティン大好き。スケジュールは愛。" },
        en: { text: "I unironically love routine. A schedule is my love language." },
        emoji: "📅", scores: { hamburger: 2, sushi: 1 }
      },
      {
        ja: { text: "ここ一か月以内にCMで泣いた。" },
        en: { text: "I have cried at a commercial in the last 30 days." },
        emoji: "😭", scores: { ramen: 2, friedchicken: 1 }
      },
      {
        ja: { text: "今日も要らないものを買って、心が救われた。" },
        en: { text: "I bought something I didn't need today and it healed me." },
        emoji: "🛒", scores: { donut: 2, hotdog: 1 }
      }
    ]
  },
  {
    ja: { q: "グループLINEでの役割は？" },
    en: { q: "What's your group chat role?" },
    answers: [
      {
        ja: { text: "幹事役。「で、いつやる？」を送らないと何も進まない。" },
        en: { text: "The planner. If I don't send the 'so when are we doing this,' nothing happens." },
        emoji: "📋", scores: { hamburger: 2, sushi: 1 }
      },
      {
        ja: { text: "カオス担当。深夜1時にヤバいスクショを投下する人。" },
        en: { text: "The chaos agent. Unhinged screenshots at 1 AM." },
        emoji: "🤡", scores: { hotdog: 2, taco: 1 }
      },
      {
        ja: { text: "みんなの精神安定剤。47件の長文もちゃんと全部読む。" },
        en: { text: "The emotional support friend. I read all 47 messages." },
        emoji: "🫂", scores: { friedchicken: 2, ramen: 1 }
      },
      {
        ja: { text: "盛り上げ役。「みんなファイト💖」と突然送る人。" },
        en: { text: "The morale booster. I send 'we got this 💖' unprompted." },
        emoji: "🌈", scores: { donut: 2, pizza: 1 }
      }
    ]
  },
  {
    ja: { q: "調味料を一つ。考えずに選んで。" },
    en: { q: "Pick a condiment. Don't overthink it." },
    answers: [
      {
        ja: { text: "ケチャップ。複雑にしないで。" },
        en: { text: "Ketchup. Don't make this weird." },
        emoji: "🍅", scores: { hamburger: 2, hotdog: 1 }
      },
      {
        ja: { text: "ラー油かタバスコ、とにかくピリ辛。" },
        en: { text: "Sriracha or something that burns slightly." },
        emoji: "🌶️", scores: { taco: 2, ramen: 1 }
      },
      {
        ja: { text: "マヨネーズ。これだけは譲れない。" },
        en: { text: "Ranch. I will fight you about this." },
        emoji: "🥛", scores: { pizza: 2, friedchicken: 1 }
      },
      {
        ja: { text: "醤油。慎重に。控えめに。ほんの一滴。" },
        en: { text: "Soy sauce. Carefully. Respectfully. Just a little." },
        emoji: "🥢", scores: { sushi: 2, donut: 1 }
      }
    ]
  },
  {
    ja: { q: "今、キッチンのカウンターに何がある？" },
    en: { q: "What's on your kitchen counter right now?" },
    answers: [
      {
        ja: { text: "キャンドル、フルーツ、使ってる風の料理本。" },
        en: { text: "A candle, fresh fruit, and a cookbook I pretend to use." },
        emoji: "🕯️", scores: { sushi: 2, donut: 1 }
      },
      {
        ja: { text: "コーヒーメーカー、洗うべきフライパン、あとは雰囲気。" },
        en: { text: "A coffee maker, a pan I should wash, and vibes." },
        emoji: "☕", scores: { hamburger: 2, friedchicken: 1 }
      },
      {
        ja: { text: "2週間前の郵便物と、使い回してるマグカップ。" },
        en: { text: "Mail from 2 weeks ago and a mug I'm reusing." },
        emoji: "📬", scores: { hotdog: 2, taco: 1 }
      },
      {
        ja: { text: "やりかけの何か7つと、心の支えの観葉植物。" },
        en: { text: "Seven half-finished projects and an emotional support plant." },
        emoji: "🌱", scores: { ramen: 2, pizza: 1 }
      }
    ]
  },
  {
    ja: { q: "満員電車でぐいぐい押された。あなたは：" },
    en: { q: "Someone cuts you off in traffic. You:" },
    answers: [
      {
        ja: { text: "睨む。舌打ちする。頭の中で長文のポストを書く。" },
        en: { text: "Honk. Gesture. Compose a LinkedIn post about it mentally." },
        emoji: "📣", scores: { taco: 2, hotdog: 1 }
      },
      {
        ja: { text: "何も言わない。でも4日間引きずる。" },
        en: { text: "Say nothing. Stew. Think about it for 4 days." },
        emoji: "🫥", scores: { ramen: 2, sushi: 1 }
      },
      {
        ja: { text: "「どうぞどうぞ」と一歩譲る。人間を信じてるので。" },
        en: { text: "Wave them in like 'go ahead, I believe in you.'" },
        emoji: "🙏", scores: { donut: 2, friedchicken: 1 }
      },
      {
        ja: { text: "肩をすくめる。別に急いでないし。" },
        en: { text: "Shrug. It's fine. I wasn't in a rush anyway." },
        emoji: "😌", scores: { hamburger: 2, pizza: 1 }
      }
    ]
  },
  {
    ja: { q: "最後に、ランダムな「雰囲気」を選んで：" },
    en: { q: "Finally — pick a totally random vibe:" },
    answers: [
      {
        ja: { text: "深夜のファミレス、点滅するネオン看板。" },
        en: { text: "A neon sign flickering at a roadside diner." },
        emoji: "🛻", scores: { hamburger: 2, hotdog: 1 }
      },
      {
        ja: { text: "雨の窓、温かい丼、エモいプレイリスト。" },
        en: { text: "A rainy window, a warm bowl, and a sad playlist." },
        emoji: "🌧️", scores: { ramen: 2, friedchicken: 1 }
      },
      {
        ja: { text: "夕焼けの屋上、友達全員で騒いでる。" },
        en: { text: "A rooftop at golden hour with all my friends yelling." },
        emoji: "🌇", scores: { pizza: 2, taco: 1 }
      },
      {
        ja: { text: "静かな朝、ラテ、人生がだいたい整ってる気がする。" },
        en: { text: "A quiet morning, a latte, and my life somewhat together." },
        emoji: "☕", scores: { donut: 2, sushi: 1 }
      }
    ]
  }
];

// ============ STATE ============
const state = {
  current: 0,
  scores: Object.fromEntries(Object.keys(TYPES).map(k => [k, 0])),
  lang: (localStorage.getItem('ffti_lang')) || 'ja',
  lastWinner: null
};

// ============ HELPERS ============
const $ = id => document.getElementById(id);
const t = () => UI[state.lang];
const typeT = (key) => TYPES[key][state.lang];
const qT = (q) => q[state.lang];
const aT = (a) => a[state.lang];
const emojiOf = (type) => (type[state.lang]?.emoji) || type.emoji;

// ============ CONFETTI ENGINE ============
const confettiCanvas = document.createElement('canvas');
confettiCanvas.id = 'confettiCanvas';
confettiCanvas.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9999;';
document.body.appendChild(confettiCanvas);
const cctx = confettiCanvas.getContext('2d');

function sizeCanvas() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
sizeCanvas();
window.addEventListener('resize', sizeCanvas);

const particles = [];
const CONFETTI_COLORS = ['#e5202f', '#ffd93d', '#ff8800', '#22aa22', '#ff4a00', '#ffffff', '#ffbf00'];
const FOOD_EMOJIS = ['🍔','🌭','🍕','🍟','🌮','🍣','🍗','🍩','🍜','🥤','🧀','🥓'];

function spawnConfetti(x, y, count = 40, options = {}) {
  const { emojiOnly = false, force = 1, spread = Math.PI * 2, angle = -Math.PI / 2 } = options;
  for (let i = 0; i < count; i++) {
    const isEmoji = emojiOnly || Math.random() < 0.25;
    const dir = angle + (Math.random() - 0.5) * spread;
    const speed = (Math.random() * 8 + 4) * force;
    particles.push({
      x, y,
      vx: Math.cos(dir) * speed,
      vy: Math.sin(dir) * speed - (emojiOnly ? 0 : Math.random() * 3),
      g: 0.25 + Math.random() * 0.15,
      life: 80 + Math.random() * 60,
      age: 0,
      size: isEmoji ? 20 + Math.random() * 16 : 6 + Math.random() * 8,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.4,
      shape: isEmoji ? 'emoji' : (Math.random() < 0.5 ? 'rect' : 'circle'),
      emoji: FOOD_EMOJIS[Math.floor(Math.random() * FOOD_EMOJIS.length)]
    });
  }
  if (!confettiRunning) runConfetti();
}

let confettiRunning = false;
function runConfetti() {
  confettiRunning = true;
  function frame() {
    cctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.age++;
      p.vy += p.g;
      p.vx *= 0.99;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      const alpha = Math.max(0, 1 - p.age / p.life);
      cctx.globalAlpha = alpha;
      cctx.save();
      cctx.translate(p.x, p.y);
      cctx.rotate(p.rot);
      if (p.shape === 'emoji') {
        cctx.font = `${p.size}px serif`;
        cctx.textAlign = 'center';
        cctx.textBaseline = 'middle';
        cctx.fillText(p.emoji, 0, 0);
      } else if (p.shape === 'rect') {
        cctx.fillStyle = p.color;
        cctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      } else {
        cctx.fillStyle = p.color;
        cctx.beginPath();
        cctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        cctx.fill();
      }
      cctx.restore();
      if (p.age > p.life || p.y > confettiCanvas.height + 50) {
        particles.splice(i, 1);
      }
    }
    cctx.globalAlpha = 1;
    if (particles.length > 0) {
      requestAnimationFrame(frame);
    } else {
      confettiRunning = false;
    }
  }
  requestAnimationFrame(frame);
}

function bigConfetti() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  spawnConfetti(0, h * 0.7, 80, { angle: -Math.PI / 3, spread: 1, force: 1.4 });
  spawnConfetti(w, h * 0.7, 80, { angle: -Math.PI + Math.PI / 3, spread: 1, force: 1.4 });
  setTimeout(() => {
    for (let i = 0; i < 6; i++) {
      spawnConfetti(Math.random() * w, -20, 20, { angle: Math.PI / 2, spread: 1.5, force: 0.6 });
    }
  }, 300);
  setTimeout(() => {
    for (let i = 0; i < 3; i++) {
      spawnConfetti(Math.random() * w, -20, 12, { angle: Math.PI / 2, spread: 1.2, force: 0.5, emojiOnly: true });
    }
  }, 600);
}

// ============ BUTTON JUICE ============
function ripple(e) {
  const btn = e.currentTarget;
  const rect = btn.getBoundingClientRect();
  const r = document.createElement('span');
  r.className = 'ripple';
  const size = Math.max(rect.width, rect.height) * 1.2;
  r.style.width = r.style.height = size + 'px';
  r.style.left = (e.clientX - rect.left - size / 2) + 'px';
  r.style.top = (e.clientY - rect.top - size / 2) + 'px';
  btn.appendChild(r);
  setTimeout(() => r.remove(), 700);
}

function buttonBurst(e, opts = {}) {
  spawnConfetti(e.clientX, e.clientY, opts.count || 18, { force: 0.8, spread: Math.PI * 1.2, angle: -Math.PI / 2, ...opts });
}

function shake(el, intensity = 6) {
  el.animate(
    [
      { transform: 'translate(0,0) rotate(0deg)' },
      { transform: `translate(${-intensity}px,${intensity / 2}px) rotate(-1deg)` },
      { transform: `translate(${intensity}px,${-intensity / 2}px) rotate(1deg)` },
      { transform: `translate(${-intensity / 2}px,${intensity}px) rotate(-0.5deg)` },
      { transform: 'translate(0,0) rotate(0deg)' }
    ],
    { duration: 400, easing: 'ease-out' }
  );
}

function floatEmoji(x, y, emoji) {
  const el = document.createElement('div');
  el.textContent = emoji;
  el.style.cssText = `
    position: fixed; left: ${x}px; top: ${y}px;
    font-size: 32px; pointer-events: none; z-index: 10000;
    transform: translate(-50%, -50%);
  `;
  document.body.appendChild(el);
  el.animate(
    [
      { transform: 'translate(-50%, -50%) scale(0.4)', opacity: 1 },
      { transform: 'translate(-50%, -200%) scale(1.4)', opacity: 0 }
    ],
    { duration: 900, easing: 'cubic-bezier(0.2, 0.8, 0.3, 1)' }
  ).onfinish = () => el.remove();
}

// ============ SCREEN TRANSITION ============
function show(id, transition = true) {
  const active = document.querySelector('.screen.active');
  const next = $(id);
  if (active === next) return;
  if (transition && active) {
    active.classList.add('leaving');
    setTimeout(() => {
      active.classList.remove('active', 'leaving');
      next.classList.add('active', 'entering');
      setTimeout(() => next.classList.remove('entering'), 600);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 220);
  } else {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    next.classList.add('active');
  }
}

function swipeTransition(color = '#ffd93d') {
  const s = document.createElement('div');
  s.className = 'page-swipe';
  s.style.background = color;
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 900);
}

// ============ i18n APPLY ============
function applyUI() {
  const L = t();
  document.documentElement.lang = state.lang;
  document.title = L.pageTitle;
  document.body.classList.toggle('lang-ja', state.lang === 'ja');
  document.body.classList.toggle('lang-en', state.lang === 'en');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (L[key] !== undefined) el.textContent = L[key];
  });

  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === state.lang);
  });

  // Menu grid
  const grid = $('menuGrid');
  grid.innerHTML = '';
  Object.entries(TYPES).forEach(([key, type]) => {
    const item = document.createElement('div');
    item.className = 'menu-item';
    item.textContent = `${emojiOf(type)} ${type[state.lang].short}`;
    grid.appendChild(item);
  });

  // If quiz is active, re-render current question
  if ($('quiz').classList.contains('active')) renderQuestion(false);

  // If result is active, re-render current type
  if ($('result').classList.contains('active') && state.lastWinner) {
    renderAllTypes(state.lastWinner);
    showType(state.lastWinner, false);
  }
}

function setLang(lang) {
  if (!UI[lang]) return;
  state.lang = lang;
  localStorage.setItem('ffti_lang', lang);
  applyUI();
}

// ============ QUIZ RENDER ============
function renderQuestion(animate = true) {
  const total = QUESTIONS.length;
  const q = QUESTIONS[state.current];
  $('questionNumber').textContent = 'Q' + (state.current + 1);
  $('questionText').textContent = qT(q).q;
  $('progressLabel').textContent = t().progress(state.current + 1, total);
  $('progressFill').style.width = ((state.current) / total * 100) + '%';

  const list = $('answerList');
  list.innerHTML = '';
  q.answers.forEach((a, i) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.style.animationDelay = (i * 0.06) + 's';
    btn.innerHTML = `<span class="emoji">${a.emoji}</span><span>${aT(a).text}</span>`;
    btn.addEventListener('click', (e) => {
      ripple(e);
      buttonBurst(e, { count: 22, force: 1 });
      floatEmoji(e.clientX, e.clientY - 20, a.emoji);
      shake($('questionCard'), 4);
      pickAnswer(a);
    });
    list.appendChild(btn);
  });

  if (animate) {
    $('questionCard').animate(
      [
        { transform: 'translateY(30px) rotate(-1deg)', opacity: 0 },
        { transform: 'translateY(0) rotate(0deg)', opacity: 1 }
      ],
      { duration: 400, easing: 'cubic-bezier(0.2, 1.4, 0.4, 1)' }
    );
  }
}

function pickAnswer(a) {
  Object.entries(a.scores).forEach(([k, v]) => state.scores[k] += v);
  state.current++;
  if (state.current >= QUESTIONS.length) {
    $('progressFill').style.width = '100%';
    setTimeout(showResult, 500);
  } else {
    setTimeout(renderQuestion, 180);
  }
}

// ============ RESULT ============
function renderAllTypes(activeKey) {
  const grid = $('allTypesGrid');
  grid.innerHTML = '';
  Object.entries(TYPES).forEach(([key, type]) => {
    const card = document.createElement('button');
    card.className = 'type-card';
    card.type = 'button';
    if (key === activeKey) card.classList.add('winner');
    card.innerHTML = `
      <span class="type-emoji">${emojiOf(type)}</span>
      <div class="type-title">${type[state.lang].short}</div>
      <div class="type-tiny">${type[state.lang].tag}</div>
    `;
    card.addEventListener('click', (e) => {
      ripple(e);
      buttonBurst(e, { count: 16, force: 0.8 });
      floatEmoji(e.clientX, e.clientY - 10, emojiOf(type));
      showType(key);
    });
    grid.appendChild(card);
  });
}

function showType(key, animate = true) {
  const tt = TYPES[key];
  const ct = tt[state.lang];
  $('resultEmoji').textContent = emojiOf(tt);
  $('resultName').textContent = ct.name;
  $('resultTag').textContent = `"${ct.tag}"`;
  $('resultDesc').textContent = ct.desc;
  $('bestFriend').textContent = ct.bestFriend;
  $('worstEnemy').textContent = ct.worstEnemy;
  $('catchphrase').textContent = ct.catchphrase;

  if (animate) {
    $('resultEmoji').animate(
      [
        { transform: 'scale(0.6) rotate(-15deg)' },
        { transform: 'scale(1.25) rotate(8deg)', offset: 0.6 },
        { transform: 'scale(1) rotate(0deg)' }
      ],
      { duration: 500, easing: 'cubic-bezier(0.2, 1.6, 0.4, 1)' }
    );
  }

  ['statGrease', 'statChaos', 'statHeart', 'statCrunch'].forEach(id => {
    $(id).style.transition = 'none';
    $(id).style.width = '0%';
  });
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      ['statGrease', 'statChaos', 'statHeart', 'statCrunch'].forEach(id => {
        $(id).style.transition = 'width 0.8s ease';
      });
      $('statGrease').style.width = tt.stats.grease + '%';
      $('statChaos').style.width = tt.stats.chaos + '%';
      $('statHeart').style.width = tt.stats.heart + '%';
      $('statCrunch').style.width = tt.stats.crunch + '%';
    });
  });

  document.querySelectorAll('#allTypesGrid .type-card').forEach(c => c.classList.remove('winner'));
  const cards = document.querySelectorAll('#allTypesGrid .type-card');
  const idx = Object.keys(TYPES).indexOf(key);
  if (cards[idx]) cards[idx].classList.add('winner');

  if (animate) window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showResult() {
  const winner = Object.entries(state.scores).sort((a, b) => b[1] - a[1])[0][0];
  state.lastWinner = winner;
  renderAllTypes(winner);
  swipeTransition('#e5202f');
  setTimeout(() => {
    show('result');
    const emojiEl = $('resultEmoji');
    const pool = Object.values(TYPES).map(emojiOf);
    let spins = 14;
    const spinInt = setInterval(() => {
      emojiEl.textContent = pool[Math.floor(Math.random() * pool.length)];
      spins--;
      if (spins <= 0) {
        clearInterval(spinInt);
        showType(winner);
        bigConfetti();
        setTimeout(bigConfetti, 1200);
      }
    }, 70);
  }, 400);
}

function resetQuiz() {
  state.current = 0;
  Object.keys(state.scores).forEach(k => state.scores[k] = 0);
  state.lastWinner = null;
  swipeTransition('#22aa22');
  setTimeout(() => {
    renderQuestion();
    show('quiz');
  }, 400);
}

// ============ BIND ============
applyUI();

$('startBtn').addEventListener('click', (e) => {
  ripple(e);
  buttonBurst(e, { count: 40, force: 1.2 });
  swipeTransition('#ff8800');
  setTimeout(() => {
    renderQuestion();
    show('quiz');
  }, 400);
});

$('retakeBtn').addEventListener('click', (e) => {
  ripple(e);
  buttonBurst(e, { count: 20 });
  resetQuiz();
});

$('shareBtn').addEventListener('click', (e) => {
  ripple(e);
  buttonBurst(e, { count: 30, emojiOnly: true });
  openShareModal();
});

// ============ SHARE MODAL + EXPORT ============
function shareUrlFor(typeKey) {
  const u = new URL(location.href);
  u.search = '?r=' + encodeURIComponent(typeKey);
  u.hash = '';
  return u.toString();
}

function openShareModal() {
  if (!state.lastWinner) return;
  drawShareCard(state.lastWinner);
  $('shareModal').hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeShareModal() {
  $('shareModal').hidden = true;
  document.body.style.overflow = '';
}

function toast(msg) {
  const el = $('shareToast');
  el.textContent = msg;
  el.hidden = false;
  // force a reflow so the transition fires even on rapid successive calls
  void el.offsetWidth;
  el.classList.add('visible');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => {
    el.classList.remove('visible');
    setTimeout(() => { el.hidden = true; }, 300);
  }, 3200);
}

// --- Canvas drawing ---
function drawShareCard(typeKey) {
  const canvas = $('shareCanvas');
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const tt = TYPES[typeKey];
  const ct = tt[state.lang];
  const L = t();

  // Background: red with sunburst
  ctx.fillStyle = '#e5202f';
  ctx.fillRect(0, 0, W, H);

  const cx = W / 2, cy = H / 2;
  const rayCount = 36;
  ctx.save();
  ctx.translate(cx, cy);
  for (let i = 0; i < rayCount; i++) {
    ctx.rotate((Math.PI * 2) / rayCount);
    ctx.fillStyle = i % 2 === 0 ? 'rgba(255, 215, 61, 0.22)' : 'rgba(255, 255, 255, 0.08)';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(W, -60);
    ctx.lineTo(W, 60);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();

  // Top stamp
  const stampY = 90;
  drawRoundedRect(ctx, W / 2 - 280, stampY, 560, 70, 35, '#ffd93d', '#2a1a00', 6);
  ctx.fillStyle = '#2a1a00';
  ctx.font = '700 32px "Zen Maru Gothic", "Bungee", system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(L.imgHeader, W / 2, stampY + 35);

  // Big emoji in white circle
  const emojiBoxY = 230;
  ctx.save();
  ctx.beginPath();
  ctx.arc(W / 2, emojiBoxY + 150, 170, 0, Math.PI * 2);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.lineWidth = 10;
  ctx.strokeStyle = '#2a1a00';
  ctx.stroke();
  ctx.restore();

  ctx.font = '220px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(emojiOf(tt), W / 2, emojiBoxY + 150);

  // Type name — big yellow block with shadow
  const nameBoxY = 560;
  const nameBoxH = 130;
  ctx.save();
  ctx.fillStyle = '#2a1a00';
  roundRectPath(ctx, 70 + 8, nameBoxY + 8, W - 140, nameBoxH, 22);
  ctx.fill();
  drawRoundedRect(ctx, 70, nameBoxY, W - 140, nameBoxH, 22, '#ffd93d', '#2a1a00', 8);
  ctx.restore();
  ctx.fillStyle = '#e5202f';
  ctx.font = '900 70px "Zen Maru Gothic", "Bungee", system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const nameText = ct.name;
  ctx.fillText(fitText(ctx, nameText, W - 180, 70, 40), W / 2, nameBoxY + nameBoxH / 2);

  // Tag line
  const tagY = nameBoxY + nameBoxH + 50;
  ctx.fillStyle = '#ffffff';
  ctx.font = '600 34px "Zen Maru Gothic", "Rubik Mono One", system-ui, sans-serif';
  ctx.fillText(`"${ct.tag}"`, W / 2, tagY);

  // Stats bars
  const statsTop = tagY + 70;
  const barW = 460;
  const barH = 28;
  const rowGap = 60;
  const labels = [L.imgGrease, L.imgChaos, L.imgHeart, L.imgCrunch];
  const values = [tt.stats.grease, tt.stats.chaos, tt.stats.heart, tt.stats.crunch];
  const leftX = W / 2 - barW / 2;

  labels.forEach((lab, i) => {
    const y = statsTop + i * rowGap;
    ctx.fillStyle = '#ffffff';
    ctx.font = '700 24px "Zen Maru Gothic", "Bungee", system-ui, sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(lab, leftX, y);
    ctx.textAlign = 'right';
    ctx.fillText(values[i] + '%', leftX + barW, y);
    // bar
    const bY = y + 18;
    drawRoundedRect(ctx, leftX, bY, barW, barH, barH / 2, '#ffffff', '#2a1a00', 4);
    const fillW = Math.max(0, (barW - 8) * values[i] / 100);
    ctx.save();
    roundRectPath(ctx, leftX + 4, bY + 4, fillW, barH - 8, (barH - 8) / 2);
    ctx.clip();
    const grad = ctx.createLinearGradient(leftX, bY, leftX + barW, bY);
    grad.addColorStop(0, '#22aa22');
    grad.addColorStop(0.5, '#ffd93d');
    grad.addColorStop(1, '#ff4a00');
    ctx.fillStyle = grad;
    ctx.fillRect(leftX + 4, bY + 4, fillW, barH - 8);
    ctx.restore();
  });

  // Catchphrase box
  const cpY = statsTop + labels.length * rowGap + 40;
  const cpH = 140;
  drawRoundedRect(ctx, 70, cpY, W - 140, cpH, 22, '#2a1a00', '#ffd93d', 6);
  ctx.fillStyle = '#ffd93d';
  ctx.font = '700 28px "Zen Maru Gothic", "Rubik Mono One", system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  wrapText(ctx, ct.catchphrase, W / 2, cpY + cpH / 2, W - 200, 40);

  // Footer
  const footerY = H - 60;
  ctx.fillStyle = '#ffffff';
  ctx.font = '600 26px "Zen Maru Gothic", "Bungee", system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(L.imgFooter, W / 2, footerY - 24);
  ctx.font = '500 22px system-ui, sans-serif';
  ctx.fillText('fizzycoffee.github.io/fast-food-personality', W / 2, footerY + 8);
}

function drawRoundedRect(ctx, x, y, w, h, r, fill, stroke, lw) {
  roundRectPath(ctx, x, y, w, h, r);
  if (fill) { ctx.fillStyle = fill; ctx.fill(); }
  if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = lw || 2; ctx.stroke(); }
}
function roundRectPath(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
function fitText(ctx, text, maxW, startSize, minSize) {
  let size = startSize;
  while (size > minSize) {
    ctx.font = `900 ${size}px "Zen Maru Gothic", "Bungee", system-ui, sans-serif`;
    if (ctx.measureText(text).width <= maxW) break;
    size -= 2;
  }
  return text;
}
function wrapText(ctx, text, x, y, maxW, lineH) {
  // Simple wrap: try to break by char for CJK, by word otherwise
  const hasCJK = /[\u3000-\u30ff\u4e00-\u9fff\uff00-\uffef]/.test(text);
  const tokens = hasCJK ? text.split('') : text.split(' ');
  const sep = hasCJK ? '' : ' ';
  const lines = [];
  let line = '';
  for (const tok of tokens) {
    const test = line ? line + sep + tok : tok;
    if (ctx.measureText(test).width > maxW && line) {
      lines.push(line);
      line = tok;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  const total = lines.length;
  const startY = y - ((total - 1) * lineH) / 2;
  lines.forEach((l, i) => ctx.fillText(l, x, startY + i * lineH));
}

// --- Share helpers ---
function canvasToBlob() {
  return new Promise((r) => $('shareCanvas').toBlob((b) => r(b), 'image/png'));
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

// Try native share with file+text+url. Returns true if succeeded, false if cancelled/unsupported.
async function tryNativeShare(blob, filename) {
  try {
    const file = new File([blob], filename, { type: 'image/png' });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        files: [file],
        title: t().shareTitle,
        text: t().shareText(TYPES[state.lastWinner][state.lang].name),
        url: shareUrlFor(state.lastWinner)
      });
      return true;
    }
  } catch (err) {
    if (err?.name === 'AbortError') return true; // cancelled — don't fall through
  }
  return false;
}

// Open a platform: try native share first (with image), fall back to download image + open intent URL
async function platformShare(intentUrl, toastMsg) {
  const blob = await canvasToBlob();
  if (!blob) return;
  const filename = `ffti-${state.lastWinner}.png`;
  if (await tryNativeShare(blob, filename)) return;
  // Desktop fallback: download image silently, then open platform intent in new tab
  downloadBlob(blob, filename);
  if (intentUrl) window.open(intentUrl, '_blank', 'noopener,noreferrer');
  toast(toastMsg);
}

// --- Download button: explicit save ---
$('downloadBtn').addEventListener('click', async (e) => {
  ripple(e);
  buttonBurst(e, { count: 18, force: 0.8 });
  const blob = await canvasToBlob();
  if (!blob) return;
  const filename = `ffti-${state.lastWinner}.png`;
  if (await tryNativeShare(blob, filename)) { toast(t().imageSaved); return; }
  downloadBlob(blob, filename);
  toast(t().imageSaved);
});

// --- Copy link: keep link-only, but also download image so user has both ---
$('copyLinkBtn').addEventListener('click', async (e) => {
  ripple(e);
  buttonBurst(e, { count: 16, force: 0.7 });
  const url = shareUrlFor(state.lastWinner);
  try {
    await navigator.clipboard.writeText(url);
    toast(t().linkCopied);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = url;
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); toast(t().linkCopied); } catch (_) {}
    ta.remove();
  }
});

// --- Twitter / X: native share w/ image, else download + open intent ---
$('twitterBtn').addEventListener('click', async (e) => {
  ripple(e);
  buttonBurst(e, { count: 14, force: 0.7 });
  const name = TYPES[state.lastWinner][state.lang].name;
  const text = t().shareText(name);
  const url = shareUrlFor(state.lastWinner);
  const intent = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
  await platformShare(intent, t().imgAttached);
});

// --- LINE: native share w/ image, else download + open LINE web intent ---
$('lineBtn').addEventListener('click', async (e) => {
  ripple(e);
  buttonBurst(e, { count: 14, force: 0.7 });
  const name = TYPES[state.lastWinner][state.lang].name;
  const text = t().shareText(name) + ' ' + shareUrlFor(state.lastWinner);
  const intent = `https://line.me/R/msg/text/?${encodeURIComponent(text)}`;
  await platformShare(intent, t().imgAttached);
});

// --- Instagram: two-step flow (save image → open Instagram) ---
// Instagram has no web share API — the only path is save + manual upload.
$('instagramBtn').addEventListener('click', async (e) => {
  ripple(e);
  buttonBurst(e, { count: 14, force: 0.7 });
  const blob = await canvasToBlob();
  if (!blob) return;
  const filename = `ffti-${state.lastWinner}.png`;

  // On mobile: try native share so user can "Save Image" from the sheet
  const shared = await tryNativeShare(blob, filename);
  if (shared) {
    // After they saved, show hint to open Instagram
    toast(t().instagramHint);
    return;
  }

  // Desktop: download image, show step-by-step toast, then open Instagram after a short delay
  downloadBlob(blob, filename);
  toast(t().instagramHint);
  setTimeout(() => {
    window.open('https://www.instagram.com/', '_blank', 'noopener,noreferrer');
  }, 1200);
});

document.querySelectorAll('#shareModal [data-close], #shareModal .share-close').forEach(el => {
  el.addEventListener('click', closeShareModal);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !$('shareModal').hidden) closeShareModal();
});

// ============ DEEP LINK (?r=type) ============
(function handleDeepLink() {
  const params = new URLSearchParams(location.search);
  const r = params.get('r');
  if (r && TYPES[r]) {
    state.lastWinner = r;
    renderAllTypes(r);
    show('result', false);
    showType(r);
    $('fromFriendBanner').hidden = false;
  }
})();

$('takeQuizBtn').addEventListener('click', (e) => {
  ripple(e);
  buttonBurst(e, { count: 20, force: 0.9 });
  $('fromFriendBanner').hidden = true;
  // remove ?r= from url without full reload
  const u = new URL(location.href);
  u.search = '';
  history.replaceState({}, '', u.toString());
  resetQuiz();
});

document.querySelectorAll('.lang-btn').forEach(b => {
  b.addEventListener('click', (e) => {
    ripple(e);
    buttonBurst(e, { count: 12, force: 0.7 });
    setLang(b.dataset.lang);
  });
});

document.querySelector('.logo-burger').addEventListener('click', (e) => {
  buttonBurst(e, { count: 30, force: 1.3, emojiOnly: true });
});
