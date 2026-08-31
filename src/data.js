export const shopUrl = "https://shop.cheffyscrystals.com/";

export const categories = ["All", "Tumbled Stones", "Raw & Rough", "Points & Towers"];
export const intents = ["All", "Calm", "Protection", "Abundance", "Clarity", "Grounding", "Confidence"];

export const products = [
  { id:"amethyst-tumble", name:"Amethyst", cat:"Tumbled Stones", intent:"Calm",
    price:50, was:null, c1:"#9C6BD6", c2:"#5B2A9D", img:"/assets/amethyst.jpg",
    blurb:"Soothes an overworked mind. The classic starter stone.", stock:"In stock", tag:"Bestseller",
    handle:"cheffy-amethyst-crystals-gemstones-sold-per-pack" },
  { id:"clear-quartz-tumble", name:"Clear Quartz", cat:"Tumbled Stones", intent:"Clarity",
    price:65, was:null, c1:"#E9F4FF", c2:"#A9C7DD", img:"/assets/clear-quartz.jpg",
    blurb:"The master healer. Amplifies intention & energy.", stock:"In stock", tag:"Bestseller",
    handle:"cheffy-clear-quartz-crystal-gemstone-tumbled" },
  { id:"tigers-eye", name:"Tiger's Eye", cat:"Tumbled Stones", intent:"Confidence",
    price:100, was:null, c1:"#C8893C", c2:"#6E3F14", img:"/assets/tigers-eye.jpg",
    blurb:"Courage & willpower when you need to push through.", stock:"In stock", tag:"Bestseller",
    handle:"cheffy-tigers-eye-tumbled-crystals-gemstones-l" },
  { id:"carnelian-tumble", name:"Carnelian", cat:"Tumbled Stones", intent:"Confidence",
    price:50, was:null, c1:"#E97D49", c2:"#B23E1C", img:"/assets/carnelian.jpg",
    blurb:"Fire for motivation, drive & creative spark.", stock:"In stock", tag:null,
    handle:"cheffy-carnelian-crystal-tumbled-gemstone" },
  { id:"lapis-lazuli", name:"Lapis Lazuli", cat:"Tumbled Stones", intent:"Clarity",
    price:50, was:null, c1:"#3F5FC0", c2:"#1E2F73", img:"/assets/lapis-lazuli.jpg",
    blurb:"Stone of truth & wisdom — clear thinking, clear speaking.", stock:"In stock", tag:"New",
    handle:"cheffy-lapis-lazuli-gemstone-crystals" },
  { id:"smoky-quartz-tumble", name:"Smoky Quartz", cat:"Tumbled Stones", intent:"Grounding",
    price:300, was:null, c1:"#9A8C84", c2:"#4A4038", img:"/assets/smoky-quartz-tumbled.jpg",
    blurb:"Pulls you back to earth. Calms anxious overthinking.", stock:"In stock", tag:null,
    handle:"cheffy-smoky-quartz-natural-raw-points-medium-crystals" },
  { id:"black-tourmaline", name:"Black Tourmaline", cat:"Raw & Rough", intent:"Protection",
    price:90, was:null, c1:"#3A3A44", c2:"#111114", img:"/assets/black-tourmaline.jpg",
    blurb:"Shields against negativity. A grounding guardian.", stock:"Sold out", tag:null,
    handle:"cheffy-black-tourmaline-crystals-gemstone-raw" },
  { id:"citrine-raw", name:"Citrine", cat:"Raw & Rough", intent:"Abundance",
    price:300, was:null, c1:"#FBD27A", c2:"#E0992F", img:"/assets/citrine.jpg",
    blurb:"Sunny stone of wealth, joy & new opportunity.", stock:"In stock", tag:null,
    handle:"cheffy-citrine-points-raw-medium-h-q-crystal-gemstone" },
  { id:"blue-calcite", name:"Blue Calcite", cat:"Raw & Rough", intent:"Calm",
    price:40, was:null, c1:"#BCD4E6", c2:"#8FB4D0", img:"/assets/blue-calcite.jpg",
    blurb:"Soft, soothing calm — eases stress and clears the mind.", stock:"In stock", tag:null,
    handle:"cheffy-blue-calcite-crystal-gemstone" },
  { id:"malachite-raw", name:"Malachite", cat:"Raw & Rough", intent:"Protection",
    price:50, was:null, c1:"#4FB07A", c2:"#16553A", img:"/assets/malachite.jpg",
    blurb:"Bold transformation & a fierce protective shield.", stock:"In stock", tag:null,
    handle:"cheffy-malachite-gravel-crystals-gemstones-sold-per-pack-5grms" },
  { id:"selenite-wand", name:"Selenite Wand", cat:"Points & Towers", intent:"Clarity",
    price:50, was:null, c1:"#F3EFE6", c2:"#CDBFA8", img:"/assets/selenite.jpg",
    blurb:"Cleanses & recharges your other crystals — no water needed.", stock:"In stock", tag:null,
    handle:"cheffy-satin-spar-small-wands-crystal-gemstone-selenite-sticks" },
];

export const guide = [
  { name:"Amethyst", intent:"Calm & Sleep", c1:"#9C6BD6", c2:"#5B2A9D",
    text:"For calm and better sleep; eases stress and quiets an overthinking mind." },
  { name:"Rose Quartz", intent:"Love & Self-Worth", c1:"#F6A8C6", c2:"#D46A95",
    text:"For love and self-worth; softens how you treat yourself and others." },
  { name:"Clear Quartz", intent:"Clarity & Focus", c1:"#E9F4FF", c2:"#A9C7DD",
    text:"For clarity and focus; amplifies your intentions and other crystals." },
  { name:"Citrine", intent:"Abundance & Joy", c1:"#FBD27A", c2:"#E0992F",
    text:"For abundance and joy; attracts money, luck and new opportunity." },
  { name:"Black Tourmaline", intent:"Protection", c1:"#3A3A44", c2:"#111114",
    text:"For protection against negative energy; against ill intent from others." },
  { name:"Tiger's Eye", intent:"Confidence", c1:"#C8893C", c2:"#6E3F14",
    text:"For confidence and courage; helps you push through and speak up." },
];

export const reviews = [
  { name:"Mariel A.", city:"Quezon City", stars:5, via:"Shopee",
    text:"Sobrang ganda ng amethyst, mas maganda pa sa pics! Legit and affordable talaga. My new fave shop." },
  { name:"Joaquin R.", city:"Cebu City", stars:5, via:"TikTok",
    text:"Bought a few stones for my gf. Came with a cute card kung ano gamit ng bawat stone. Fast shipping!" },
  { name:"Denise T.", city:"Davao", stars:5, via:"TikTok",
    text:"Been ordering since 2023. Always authentic, always packed with love. Cheffy even answers all my questions." },
  { name:"Patricia L.", city:"Makati", stars:5, via:"Shopee",
    text:"Started at ₱20 lang, now I have a whole shelf 😅 Quality is consistent. Highly recommend for beginners!" },
];

export const faq = [
  { q:"Are your crystals authentic?", a:"Absolutely! Every piece is carefully checked by our team before it's packed and sent your way. We're always upfront about what's natural, dyed, or reconstituted — no surprises, no hidden markups. Honesty is at the heart of everything we do here." },
  { q:"How much is shipping?", a:"Shipping follows standard Shopee and TikTok Shop rates. Orders ₱1,500 and above get free shipping! For same-day delivery via Lalamove, rates depend on your location — DM us on Instagram for details." },
  { q:"I'm brand new to crystals. Where do I start?", a:"Our honest advice? Follow your heart! Go for the crystal that catches your eye — that little pull you feel is your intuition telling you exactly what you need right now. We wrote a whole blog post about this. Check it out at https://cheffyscrystals.com/blog/what-crystal-is-right-for-you" },
  { q:"Do you really start at ₱20?", a:"Yes, really! Small tumbled chips start at ₱20 so good energy is accessible to everyone. Shop directly at shop.cheffyscrystals.com and you'll also save an extra 10% — always the best price you'll find." },
  { q:"How do I care for my crystals?", a:"A little care goes a long way! For a full guide on cleansing and looking after your stones — including which ones should never touch water — head over to our blog: https://cheffyscrystals.com/blog/crystal-care-101-no-babad" },
  { q:"Where are you based? Do you ship nationwide?", a:"We're based in Imus, Cavite and yes — we ship all over the Philippines via Shopee, TikTok Shop, and our direct store at shop.cheffyscrystals.com. Same-day delivery via Lalamove is also available for nearby areas. DM us on Instagram for details!" },
  { q:"Do you accept returns or exchanges?", a:"We totally understand that change of mind happens! If you have any concerns with your order, please message us first so our team can help sort things out — we want to make sure you're happy. We accept change-of-mind returns and replacements within 7 days of receiving your items. Return shipping fee is to be shouldered by the buyer." },
  { q:"Which crystal is good for anxiety, stress, or sleep?", a:"Amethyst is our go-to for all three — it's so calming and perfect for quieting an overactive mind at bedtime. Blue Calcite is another beautiful pick for stress. Pop one on your nightstand and see how it feels! Still not sure? Message us and our team will help you find the right match." },
  { q:"What is the difference between tumbled stones and raw crystals?", a:"Tumbled stones are smooth and polished — lovely to carry in your pocket or hold during a stressful moment. Raw and rough pieces are closer to how the crystal looks straight from the earth, which many people feel gives them a more intense, unfiltered energy. Both are wonderful; it really just comes down to personal taste and how you plan to use them!" },
  { q:"How do I order? Where can I buy Cheffy's Crystals?", a:"You can shop online at shop.cheffyscrystals.com for the best prices (always 10% cheaper than any marketplace!). We're also on Shopee (shopee.ph/cheffyyyy) and TikTok Shop (@cheffyscrystals). We also pop up at bazaars and events around Metro Manila — follow us on Instagram or TikTok so you never miss one!" },
];

export const blogs = [
  {
    slug: "what-crystal-is-right-for-you",
    title: "What Crystal Is Right for You? Follow Your Heart.",
    cat: "Crystal 101",
    excerpt: "With so many crystals to choose from, how do you know which one is yours? Our answer is simple: follow your heart. The one that catches your eye is usually exactly what you need right now.",
    img: "/assets/display-table.jpg",
    read: "3 min read",
    date: "Jun 2026",
    isoDate: "2026-06-15",
    body: [
      { p: "Walking into a crystal shop — or scrolling through one online — can feel completely overwhelming. Hundreds of shapes, colors, and names, each with its own list of properties and meanings. So how do you pick? How do you know which crystal is actually yours?" },
      { h: "Our mantra: follow your heart." },
      { p: "At Cheffy's Crystals, we genuinely believe that the crystal that catches your attention is the one you need. That little spark of 'oh, I love that one' is not random — it is your intuition doing its job. You are drawn to a stone because something in you already knows what it offers. Trust that feeling. It is almost always right." },
      { p: "You do not need a crystal encyclopedia to start. You do not need to memorize chakras or match stones to star signs. You just need to pay attention to what pulls you in. Maybe it is the deep purple of an amethyst. Maybe it is the warm golden shimmer of a citrine. Maybe it is the quiet, steady darkness of a black tourmaline. Whatever it is — that is your starting point." },
      { h: "A little guidance, just in case." },
      { p: "If you want a gentle nudge, here is a simple way to think about it: notice what you have been feeling lately. Stressed and overwhelmed? You might be drawn to something soft and calming — amethyst, blue calcite, or rose quartz. Feeling scattered or foggy? Clear quartz or fluorite might be catching your eye. Anxious or in need of protection? Black tourmaline tends to call to people who need grounding and a sense of safety. Looking to attract something new — abundance, love, a fresh start? Citrine, carnelian, and green aventurine have a way of showing up for people in that season." },
      { p: "But here is the thing: these are just starting points. If none of that resonates and you simply keep coming back to one particular stone — trust it. The logic can come later. The connection comes first." },
      { h: "What if I pick the wrong one?" },
      { p: "There is no wrong crystal. Every stone you are drawn to has something to offer you at this point in your life. Some people find that the crystal they least expected to like becomes their most important one. Others discover that a stone they bought for one reason ends up helping them in a completely different way. Crystals are not rigid rules. They are tools for reflection, intention, and energy — and your relationship with them is personal." },
      { p: "So the next time you are browsing and one stone keeps pulling your eyes back to it — that is your answer. Add it to your cart. Bring it home. See what it has to say." },
      { p: "And if you ever want a second opinion, we are always happy to help. Message us on Instagram or TikTok and tell us what you have been feeling lately — we love helping people find their stone." },
    ]
  },
  {
    slug: "how-to-use-your-crystals",
    title: "How to Use Your New Crystals (And Look Good Doing It!)",
    cat: "Crystal 101",
    excerpt: "Your latest haul just arrived and you're officially obsessed — so what do you actually do with these gorgeous stones? Three foolproof ways to use them.",
    img: "/assets/display-table.jpg",
    read: "3 min read",
    date: "Jun 2026",
    isoDate: "2026-06-08",
    body: [
      { p: "So, your latest haul from Cheffy's Crystals just arrived, and you are officially obsessed. But now that you have these gorgeous stones, what exactly are you supposed to do with them? Do they just sit there? Absolutely not! Integrating crystals into your daily life is incredibly easy, fun, and can seriously elevate your personal space. Here are three foolproof ways to use your new gems." },
      { h: "1. Display them with pride" },
      { p: "Crystals are natural works of art. Turn your home or workspace into a sanctuary by placing larger pieces — like a stunning raw quartz point or a vibrant dioptase on matrix — on your work desk, your nightstand, or your living room shelves. They act as incredible interior decor while quietly shifting the energy of the room to match your vibe." },
      { h: "2. Put them in your bag" },
      { p: "If you are always on the go, navigating the busy streets of the metro, keep small tumbled stones or raw pieces in your purse, backpack, or even your pocket. It is essentially like carrying a little pocket-sized cheerleader wherever you travel. Whenever you feel stressed, just reach into your bag and hold the stone for a quick grounding moment." },
      { h: "3. Create crystal grids" },
      { p: "If you are feeling creative and want to supercharge your intentions, arranging your crystals in geometric patterns is the way to go. You can use a custom wood storage board designed specifically for grids. Place a master stone in the center and surround it with complementary crystals. This method is perfect for amplifying your goals — whether you are manifesting wealth, peace, or simply a really good, stress-free weekend. Don't overthink it; just let your intuition guide where the stones should go!" }
    ]
  },
  {
    slug: "crystal-care-101-no-babad",
    title: "Crystal Care 101: Please Don't 'Babad' Your Gems!",
    cat: "Crystal Care",
    excerpt: "It's a common misconception that all crystals love a good bath. The golden rule of crystal care is simple: do not soak them in water!",
    img: "/assets/selenite.jpg",
    read: "3 min read",
    date: "Jun 2026",
    isoDate: "2026-06-01",
    body: [
      { p: "Listen up, crystal lovers! We need to have a serious talk about how you treat your stones. It is a common misconception that all crystals love a good bath. The golden rule of crystal care is simple: do not 'babad' (soak) them in water!" },
      { h: "Why water is the enemy" },
      { p: "In our humid Philippine climate, moisture is already everywhere. Many popular crystals, like selenite or angelite rough, are incredibly soft and water-soluble. If you leave them submerged in a bowl of water, they can literally dissolve, rust, or crack. You do not want your beautiful new investment turning into a cloudy puddle. If you are 100% sure your stone is water-safe (like clear quartz), a very quick rinse under running tap water is all it takes to physically clean off any dust." },
      { h: "So how do you cleanse their energy?" },
      { p: "Opt for safe, dry methods. A dry salt bath works wonders — just bury the stone in sea salt for a few hours. Alternatively, let them bask in a moon bath overnight on your windowsill to recharge under the lunar energy. You can also use a sound bath; placing them near a singing bowl or even playing a high-frequency video next to them will clear out stagnant vibes instantly." },
      { h: "Keep your hands to yourself" },
      { p: "Finally, once you have cleansed your crystal, keep your hands to yourself. Crystals absorb energy, and you want them tuned exclusively to your unique frequency. While it's tempting to let friends admire and hold your new pieces, politely ask them to look but not touch. Your crystals are working for you, so keep their energy pure and focused on your goals!" }
    ]
  },
  {
    slug: "unboxing-magic",
    title: "Unboxing Magic: What to Do As Soon As You Get Your Crystals",
    cat: "Crystal 101",
    excerpt: "That delivery notification pops up, the rider arrives, and your package is finally in your hands. Before you toss that stone on your desk, follow this two-step ritual.",
    img: "/assets/bowls-labels.jpg",
    read: "2 min read",
    date: "May 2026",
    isoDate: "2026-05-20",
    body: [
      { p: "We know the feeling. That delivery notification pops up, the rider arrives, and you finally have your Cheffy's Crystals package in your hands. Ripping open the bubble wrap is the best part, but before you immediately toss that new stone into your pocket or onto your desk, there is a crucial two-step process you need to follow. Welcome to Unboxing Magic." },
      { h: "Step One: Cleanse the slate" },
      { p: "Think about the journey your crystal has been on. It was mined from the earth, packaged, shipped, handed over to couriers, and finally delivered to your door. It has passed through a lot of different hands and environments, picking up residual energy along the way. You need to hit the reset button immediately. Before you use it, cleanse it to wipe the slate completely clean. Since we know better than to soak our delicate stones (remember, no 'babad'!), you can use a quick smoke cleanse with incense, pass it over the flame of a candle, or set it on top of a selenite charging plate for a few hours." },
      { h: "Step Two: Program with intention" },
      { p: "Now that your crystal is energetically clean, it is essentially a blank canvas waiting for instructions. Crystals need a job to do! Find a quiet spot, hold the newly cleansed stone comfortably in your hands, and take a deep breath. State your intention clearly — you can say it out loud or hold the thought firmly in your mind. Whether your goal is 'protect my energy during office meetings,' 'bring me focus for my university thesis,' or 'attract abundance into my business,' programming your crystal connects its natural frequencies directly to your personal aspirations. Once programmed, it is officially yours!" }
    ]
  },
  {
    slug: "top-5-crystals-for-beginners",
    title: "New to the Crystal World? Top 5 Crystals for Beginners",
    cat: "Beginners",
    excerpt: "With so many colors, shapes, and mystical properties to choose from, where do you even begin? Build your ultimate starter pack with these five foolproof stones.",
    img: "/assets/amethyst.jpg",
    read: "4 min read",
    date: "May 2026",
    isoDate: "2026-05-05",
    body: [
      { p: "Starting your crystal journey can feel totally overwhelming. With so many colors, shapes, and mystical properties to choose from, where do you even begin? Don't worry — building your ultimate starter pack is easy. At Cheffy's Crystals, we always recommend building a foundation with versatile, easy-to-use stones. Here are the top 5 foolproof crystals every beginner needs in their collection." },
      { list: [
        "Clear Quartz — Consider this the master healer of the crystal world. Raw quartz points are absolute must-haves. They are perfect for amplifying energy, bringing total clarity to a cluttered mind, and they even boost the energy of other crystals placed nearby.",
        "Amethyst — This is your go-to stone for chill vibes. Known for its stunning purple hues, amethyst is incredible for stress relief. Keep it on your nightstand to promote a peaceful, deep night's sleep and quiet an overactive mind.",
        "Rose Quartz — The classic stone of unconditional love. It isn't just about romance; rose quartz is vital for boosting self-love, compassion, and attracting positive, healthy relationships into your life.",
        "Citrine — We like to call this the ultimate hype-man stone. Radiant and sunny, citrine is a powerhouse for manifesting success, joy, and financial abundance. It is a fantastic stone to keep near your wallet or workspace.",
        "Black Tourmaline — Everyone needs an energetic bodyguard. Black tourmaline is the premier stone for protection. It absorbs negative energy, blocks out bad vibes, and keeps you deeply grounded when the world around you feels chaotic."
      ]},
      { p: "Start with these five, and you will have a perfectly balanced toolkit to handle whatever life throws your way!" }
    ]
  },
  {
    slug: "top-5-crystals-for-employees-students",
    title: "Hustle Harder: Top 5 Crystals for Employees and Students",
    cat: "Lifestyle",
    excerpt: "Between endless meetings, looming deadlines, and balancing studies with daily life, burnout is real. Keep these five powerhouse crystals on your desk to survive the grind.",
    img: "/assets/tigers-eye.jpg",
    read: "4 min read",
    date: "Apr 2026",
    isoDate: "2026-04-20",
    body: [
      { p: "Between endless office meetings, looming project deadlines, and the pressure of balancing university studies with daily life, burnout is incredibly real. Whether you are climbing the corporate ladder, managing a business, or writing a massive academic manuscript, you need energetic support. Keep these five powerhouse crystals on your desk to survive the daily grind and hustle harder." },
      { list: [
        "Fluorite — This is the ultimate focus stone. If you are dealing with brain fog or struggling to memorize data, fluorite clears mental confusion. It helps you absorb new information like a sponge, making it perfect for intense study sessions or deep-focus work.",
        "Aquamarine — Deadlines approaching? Pressure on? Aquamarine brings the cool, calming energy of the ocean. It promotes soothing, articulate communication, ensuring you stay calm and collected during high-stakes presentations or difficult client calls.",
        "Tiger's Eye — For the days when imposter syndrome creeps in. Tiger's Eye provides a massive boost of courage and confidence. It is the perfect energetic wingman when you need to tackle massive projects, make tough executive decisions, or ask for that well-deserved promotion.",
        "Angelite — If you are working or studying in a highly chaotic environment, rough angelite is your sanctuary. It brings a profound wave of peace and tranquility, helping you stay completely centered and unbothered amidst office politics or classroom drama.",
        "Carnelian — Consider this the espresso shot of the crystal world. When you are hitting that dreaded 3:00 PM slump and your motivation is fading, carnelian reignites your inner fire. It boosts your creative energy and gives you the stamina to cross the finish line."
      ]},
      { p: "Stack these five on your desk and you'll have an energetic support team for every deadline, exam, and Monday morning." }
    ]
  },
  {
    slug: "top-5-most-popular-crystals",
    title: "Crowd Favorites: The Top 5 Most Popular Crystals Right Now",
    cat: "Trending",
    excerpt: "Curious about what everyone else is adding to their carts? These are the heavy hitters dominating our best-seller list right now.",
    img: "/assets/malachite.jpg",
    read: "4 min read",
    date: "Apr 2026",
    isoDate: "2026-04-01",
    body: [
      { p: "Curious what's trending in the wider crystal world right now? These are five stones collectors keep talking about — some rare finds we source occasionally, and one honest staple that's in our regular lineup today." },
      { list: [
        "Multi-Flash Uncut Ethiopian Opals — These are absolutely mesmerizing. Shimmering with a rainbow of colors trapped inside, uncut Ethiopian opals are beloved for their incredible play of color and mystical, high-vibrational energy. They are a favorite among collectors looking for something truly unique. A rare, occasional find — not always in stock.",
        "Fire Agate — A stone of deep passion and fierce protection. Fire agate is highly sought after by those looking to light a fire under their ambitions. It provides a shield of absolute security while pushing you to take bold actions in your life. A rare, occasional find — not always in stock.",
        "Dioptase on Matrix — A stunning, vibrant emerald-green showstopper. Dioptase is incredibly rare and highly prized. Beyond its breathtaking appearance on the matrix, it is widely considered one of the most powerful stones for deep heart-healing and emotional release. A rare, occasional find — not always in stock.",
        "Moldavite — Known as the stone of rapid, undeniable transformation. Born from a meteorite impact, moldavite has a reputation for shaking up your life in the best way possible. It is highly sought after by those ready for intense, life-changing shifts. A rare, occasional find — not always in stock.",
        "Malachite — The tough-love stone. Known for its gorgeous, hypnotic green swirls, malachite is a favorite for those ready to do the hard work. It is brilliant for clearing out toxic patterns, breaking bad habits, and ruthlessly encouraging positive change. Part of our current lineup — see it in the shop below."
      ]},
      { p: "Malachite is part of our current lineup — tap the shop link below to grab one. The other four are rarer sourcing finds we bring in occasionally — follow our socials if one of those is the piece you're after, so you don't miss the restock." }
    ]
  }
];
