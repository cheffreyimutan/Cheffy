import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Footer } from '../components/Nav';
import { ProductCard } from '../components/ProductCard';
import { BlogCard } from '../components/BlogCard';
import { Ic, Spark, SocialGlyph } from '../components/Icons';
import { GemGlyph } from '../components/GemGlyph';
import { useReveal } from '../hooks/useReveal';
import { products, categories, intents, guide, reviews, blogs, shopUrl } from '../data';

const SITE_URL = 'https://cheffyscrystals.com';

function SEOMeta() {
  useEffect(() => {
    document.title = "Cheffy's Crystals — Authentic Healing Crystals Philippines | From ₱20";
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      "Shop authentic healing crystals in the Philippines starting at ₱20. Hand-checked by Cheffy, shipped nationwide to Manila, Cebu, Davao and beyond. 4.9★ across Shopee & TikTok. 80k+ pieces sold. Buy direct and save 10%."
    );

    // JSON-LD structured data
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          "name": "Cheffy's Crystals",
          "alternateName": "Cheffys Crystals",
          "url": SITE_URL,
          "logo": `${SITE_URL}/assets/logo.png`,
          "description": "Affordable, authentic healing crystals sourced with love and sold with honesty in the Philippines. Started in 2020 by Cheffy, shipping nationwide.",
          "foundingDate": "2020",
          "founder": { "@type": "Person", "name": "Cheffy" },
          "areaServed": { "@type": "Country", "name": "Philippines" },
          "sameAs": [
            "https://shopee.ph/cheffyyyy",
            "https://tiktok.com/@cheffyscrystals",
            "https://www.instagram.com/cheffyscrystals/"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": ["English", "Filipino"]
          }
        },
        {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          "url": SITE_URL,
          "name": "Cheffy's Crystals",
          "publisher": { "@id": `${SITE_URL}/#organization` }
        },
        {
          "@type": "ItemList",
          "name": "Healing Crystals Philippines",
          "description": "Hand-checked healing crystals sold in the Philippines, starting at ₱20",
          "itemListElement": products.map((p, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "item": {
              "@type": "Product",
              "name": p.name,
              "description": p.blurb,
              "image": `${SITE_URL}${p.img}`,
              "offers": {
                "@type": "Offer",
                "price": p.price,
                "priceCurrency": "PHP",
                "availability": p.stock === 'In stock'
                  ? "https://schema.org/InStock"
                  : "https://schema.org/LimitedAvailability",
                "url": shopUrl,
                "seller": { "@id": `${SITE_URL}/#organization` }
              }
            }
          }))
        },
        {
          "@type": "LocalBusiness",
          "@id": `${SITE_URL}/#localbusiness`,
          "name": "Cheffy's Crystals",
          "description": "Online crystal shop serving all of the Philippines. Also appears at bazaars and markets in Metro Manila and Cavite.",
          "url": SITE_URL,
          "image": `${SITE_URL}/assets/cheffy-booth-neon.jpg`,
          "priceRange": "₱20–₱500",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Imus",
            "addressRegion": "Cavite",
            "addressCountry": "PH"
          },
          "areaServed": ["Metro Manila", "Cavite", "Cebu", "Davao", "Philippines"],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "2400",
            "bestRating": "5",
            "worstRating": "1"
          }
        }
      ]
    };

    let el = document.getElementById('schema-home');
    if (!el) { el = document.createElement('script'); el.id = 'schema-home'; el.type = 'application/ld+json'; document.head.appendChild(el); }
    el.textContent = JSON.stringify(schema);
    return () => el?.remove();
  }, []);
  return null;
}

function Hero({ onShop }) {
  return (
    <section className="bg-cosmic" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="nebula nebula-drift"></div>
      <Spark className="spark-twinkle" size={22} color="var(--gold)" style={{ position: 'absolute', top: '14%', left: '7%', opacity: .8 }}/>
      <Spark className="spark-twinkle" size={14} color="var(--cyan)" style={{ position: 'absolute', top: '26%', left: '15%', opacity: .7, animationDelay: '.8s' }}/>
      <Spark className="spark-twinkle" size={16} color="var(--magenta)" style={{ position: 'absolute', bottom: '18%', right: '9%', opacity: .7, animationDelay: '1.4s' }}/>
      <Spark className="spark-twinkle" size={26} color="var(--gold)" style={{ position: 'absolute', top: '60%', left: '4%', opacity: .5, animationDelay: '2s' }}/>

      <div className="wrap" style={{ position: 'relative', padding: 'clamp(56px,8vw,104px) 28px clamp(64px,8vw,110px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 'clamp(28px,5vw,72px)', alignItems: 'center' }} className="hero-grid">
          <div>
            <div className="chip hero-anim d1" style={{ background: 'rgba(255,46,154,.12)', color: 'var(--magenta-2)', boxShadow: 'inset 0 0 0 1px rgba(255,46,154,.3)', marginBottom: 22 }}>
              <Spark size={12} color="var(--magenta-2)"/> Authentic crystals · Philippines
            </div>
            <h1 className="display-xl hero-anim d2">
              Good energy,<br/><span className="hero-headline-pulse" style={{ color: 'var(--magenta-2)', textShadow: 'var(--glow-magenta)' }}>made affordable.</span>
            </h1>
            <p className="hero-anim d3" style={{ fontSize: 'clamp(16px,1.5vw,19px)', color: 'var(--muted)', maxWidth: 480, marginTop: 22 }}>
              Hand-checked healing crystals for stressed minds and curious beginners. Sourced with love, sold with honesty — starting at just <b style={{ color: '#fff' }}>₱20</b>.
            </p>
            <div className="hero-anim d4" style={{ display: 'flex', gap: 14, marginTop: 32, flexWrap: 'wrap' }}>
              <button className="btn btn--neon" onClick={onShop}>Shop the collection <Ic.arrow/></button>
              <a className="btn btn--ghost" href="#guide">Find your crystal</a>
            </div>
            <div className="hero-anim d5" style={{ display: 'flex', gap: 30, marginTop: 40, flexWrap: 'wrap' }}>
              <div className="stat"><b>4.9<span className="u">★</span></b><span style={{ fontSize: 13, color: 'var(--muted)' }}>across Shopee and TikTok</span></div>
              <div style={{ width: 1, background: 'rgba(255,255,255,.12)' }}></div>
              <div className="stat"><b>80k<span className="u">+</span></b><span style={{ fontSize: 13, color: 'var(--muted)' }}>pieces sold nationwide</span></div>
              <div style={{ width: 1, background: 'rgba(255,255,255,.12)' }}></div>
              <div className="stat"><b>30k<span className="u">+</span></b><span style={{ fontSize: 13, color: 'var(--muted)' }}>followers who trust us</span></div>
            </div>
          </div>

          <div style={{ position: 'relative' }} className="hero-media-anim">
            <div style={{ position: 'relative', borderRadius: 'var(--r-xl)', overflow: 'hidden', boxShadow: '0 40px 90px -30px rgba(91,42,157,.7)', aspectRatio: '4/5' }}>
              <img src="/assets/display-table.jpg" alt="Cheffy's Crystals display table full of tumbled stones in wooden bowls at a Philippine bazaar" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 50%,rgba(12,6,23,.55))' }}></div>
              <div style={{ position: 'absolute', left: 18, bottom: 18, right: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 10 }}>
                <span className="badge-glow">✦ Soulstice, 2024</span>
                <span className="badge-glow" style={{ color: 'var(--cyan)' }}>From ₱20</span>
              </div>
            </div>
            <div className="hero-float hero-float-bob" style={{ position: 'absolute', top: -14, left: -18, background: 'var(--plum)', borderRadius: 'var(--r)', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.08), 0 20px 40px -20px rgba(0,0,0,.6)' }}>
              <div style={{ width: 40, height: 40 }}><GemGlyph c1="#9C6BD6" c2="#5B2A9D" size="100%"/></div>
              <div>
                <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 14, color: '#fff' }}>Amethyst</div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)' }}>calm · ₱35</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hairline"></div>
    </section>
  );
}

function AsSeenTikTok() {
  const url = 'https://www.tiktok.com/@cheffyscrystals/video/7526548660553878791';
  return (
    <section className="bg-cosmic section--tight">
      <div className="wrap">
        <a href={url} target="_blank" rel="noopener noreferrer" className="tiktok-band reveal">
          <div className="tiktok-band__thumb">
            <img src="/assets/cheffy-booth.jpg" alt="Cheffy at her crystal booth — as seen on TikTok @cheffyscrystals"/>
            <span className="tiktok-band__play"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>
          </div>
          <div className="tiktok-band__body">
            <span className="chip" style={{ background: 'rgba(52,227,255,.12)', color: 'var(--cyan)', boxShadow: 'inset 0 0 0 1px rgba(52,227,255,.3)', alignSelf: 'flex-start' }}>
              <SocialGlyph.TikTok/> As seen on TikTok
            </span>
            <h2 className="display-m" style={{ fontSize: 'clamp(22px,3vw,34px)' }}>Learn your crystals with us.</h2>
            <p style={{ color: 'var(--muted)', fontSize: 15.5, maxWidth: 460, margin: 0 }}>Easy, beginner-friendly videos on what each crystal does, how to use them, and how to care for them — follow <b style={{ color: '#fff' }}>@cheffyscrystals</b>.</p>
            <span className="btn btn--neon" style={{ alignSelf: 'flex-start', marginTop: 4 }}>Watch on TikTok <Ic.arrow/></span>
          </div>
        </a>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: <Ic.shield/>, t: 'Hand-checked authentic', d: 'Every piece vetted by Cheffy before it ships.' },
    { icon: <Ic.truck/>,  t: 'Nationwide delivery',   d: 'Manila, Cebu, Davao & everywhere between.' },
    { icon: <Ic.sparkles/>, t: 'Starts at ₱20',       d: 'A real collection on any budget.' },
    { icon: <Ic.heart/>,  t: '10% off direct',        d: 'Buy from our official store and save.' },
  ];
  return (
    <section className="bg-cosmic section--tight" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="trust-bar reveal">
          {items.map((it, i) => (
            <div key={i}>
              <span style={{ color: 'var(--gold)', flexShrink: 0 }}>{it.icon}</span>
              <div>
                <div style={{ fontFamily: 'var(--display)', fontWeight: 600, fontSize: 15, color: '#fff', marginBottom: 3 }}>{it.t}</div>
                <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.45 }}>{it.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Shop() {
  const [cat, setCat] = useState('All');
  const [intent, setIntent] = useState('All');
  const list = products
    .filter((p) => (cat === 'All' || p.cat === cat) && (intent === 'All' || p.intent === intent))
    .slice()
    .sort((a, b) => (a.stock === 'In stock' ? 0 : 1) - (b.stock === 'In stock' ? 0 : 1));
  return (
    <section id="shop" className="bg-aura section">
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20, flexWrap: 'wrap', marginBottom: 8 }}>
          <div>
            <p className="eyebrow" style={{ color: 'var(--price)' }}>✦ Shop the collection</p>
            <h2 className="display-l" style={{ marginTop: 14, color: 'var(--ink)' }}>Find a little magic.</h2>
            <p style={{ color: 'var(--ink-soft)', maxWidth: 440, marginTop: 12, fontSize: 15.5 }}>Browse by what you need — calm, love, protection, abundance. Tap a stone to learn what it's for.</p>
          </div>
          <a className="btn btn--gold btn--sm" href={shopUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', flexShrink: 0 }}>Shop the full store <Ic.arrow/></a>
        </div>
        <p style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--ink-muted)', marginTop: 12 }}>
          Browse a preview below — the complete catalogue &amp; secure checkout live on our official store. {list.length} of {products.length} shown.
        </p>
        <div style={{ display: 'flex', gap: 9, flexWrap: 'wrap', marginTop: 26 }}>
          {categories.map((c) => <button key={c} className={'filter' + (cat === c ? ' active' : '')} onClick={() => setCat(c)}>{c}</button>)}
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12, alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginRight: 4 }}>I need:</span>
          {intents.map((it) => (
            <button key={it} onClick={() => setIntent(it)} className="chip" style={{ cursor: 'pointer', border: 'none', background: intent === it ? 'var(--royal)' : 'var(--cream-2)', color: intent === it ? '#fff' : 'var(--ink-soft)', fontFamily: 'var(--display)', fontWeight: 600, letterSpacing: 0, textTransform: 'none', fontSize: 13, padding: '7px 14px' }}>{it}</button>
          ))}
        </div>
        <div className="grid-products" style={{ marginTop: 32 }}>
          {list.map((p) => <ProductCard key={p.id} p={p}/>)}
        </div>
        {list.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--ink-muted)' }}>
            <p style={{ fontFamily: 'var(--display)', fontWeight: 600, color: 'var(--ink)' }}>No crystals match yet</p>
            <button className="btn btn--gold btn--sm" style={{ marginTop: 8 }} onClick={() => { setCat('All'); setIntent('All'); }}>Reset filters</button>
          </div>
        )}
      </div>
    </section>
  );
}

function Guide() {
  return (
    <section id="guide" className="bg-aura-2 section">
      <div className="wrap">
        <div style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 44px' }}>
          <p className="eyebrow" style={{ color: 'var(--price)' }}>✦ Crystal guide for beginners</p>
          <h2 className="display-l" style={{ marginTop: 14, color: 'var(--ink)' }}>New to crystals? Start here.</h2>
          <p style={{ color: 'var(--ink-soft)', marginTop: 12, fontSize: 15.5 }}>No mysticism degree required. Here's what each of our most-loved stones is actually for.</p>
          <Link className="btn btn--gold btn--sm" to="/blog" style={{ marginTop: 22, display: 'inline-flex' }}>Read the blog — crystal guides &amp; care <Ic.arrow/></Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="guide-grid">
          {guide.map((g, i) => (
            <div className="guide-card reveal" key={i}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 54, height: 54, flexShrink: 0, borderRadius: 14, display: 'grid', placeItems: 'center', background: `linear-gradient(140deg,rgba(${parseInt(g.c1.slice(1,3),16)},${parseInt(g.c1.slice(3,5),16)},${parseInt(g.c1.slice(5,7),16)},.28),rgba(${parseInt(g.c2.slice(1,3),16)},${parseInt(g.c2.slice(3,5),16)},${parseInt(g.c2.slice(5,7),16)},.16))` }}>
                  <GemGlyph c1={g.c1} c2={g.c2} size="68%"/>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 18, color: 'var(--ink)' }}>{g.name}</div>
                  <div className="card__intent" style={{ color: 'var(--price)' }}>{g.intent}</div>
                </div>
              </div>
              <p style={{ margin: 0, color: 'var(--ink-soft)', fontSize: 14.5, lineHeight: 1.6 }}>{g.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Events() {
  const events = [
    { mo: 'JUL', day: '12', year: '2026', name: 'May–December Affair', venue: 'San Lorenzo Village, Makati' },
    { mo: 'JUL', day: '25', year: '2026', name: 'Enchanté Fair',       venue: 'Festival Mall, Alabang' },
  ];
  return (
    <section id="events" className="bg-aura section">
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20, flexWrap: 'wrap', marginBottom: 34 }}>
          <div>
            <p className="eyebrow" style={{ color: 'var(--price)' }}>✦ Catch us in person</p>
            <h2 className="display-l" style={{ marginTop: 14, color: 'var(--ink)' }}>Events &amp; bazaars.</h2>
            <p style={{ color: 'var(--ink-soft)', maxWidth: 460, marginTop: 12, fontSize: 15.5 }}>We're online first, but we love meeting our community face to face. Come say hi and shop the collection in person.</p>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }} className="events-grid">
          {events.map((e, i) => (
            <div key={i} className="event-card reveal">
              <div className="event-card__date">
                <span className="event-card__mo">{e.mo}</span>
                <span className="event-card__day">{e.day}</span>
                <span className="event-card__yr">{e.year}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <h3 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 22, color: 'var(--ink)', letterSpacing: '-.01em' }}>{e.name}</h3>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--ink-soft)', fontSize: 14.5 }}>
                  <span style={{ color: 'var(--price)' }}><Ic.pin width="16" height="16"/></span>{e.venue}
                </span>
                <span className="chip" style={{ alignSelf: 'flex-start', marginTop: 4, background: 'var(--cream-2)', color: 'var(--ink-soft)' }}>Free entry · come say hi</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeliveryBand() {
  return (
    <section className="bg-cosmic section--tight" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="nebula"></div>
      <div className="wrap" style={{ position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center' }} className="hero-grid">
          <div>
            <p className="eyebrow">✦ Always cheapest direct</p>
            <h2 className="display-m" style={{ marginTop: 14, maxWidth: 440 }}>Buy direct, get an extra <span style={{ color: 'var(--cyan)' }}>10% off</span>.</h2>
            <p style={{ color: 'var(--muted)', marginTop: 14, maxWidth: 460, fontSize: 15.5 }}>
              Order straight from <b style={{ color: '#fff' }}>shop.cheffyscrystals.com</b> and your <b style={{ color: 'var(--cyan)' }}>10% direct discount</b> is applied automatically — it's always the best price you'll find. We hand-pack every parcel and ship nationwide via J&amp;T, Shopee &amp; TikTok.
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 24, flexWrap: 'wrap', alignItems: 'center' }}>
              <a className="btn btn--neon" href={shopUrl} target="_blank" rel="noopener noreferrer">Buy direct &amp; save 10% <Ic.arrow/></a>
              <span className="chip" style={{ background: 'rgba(52,227,255,.12)', color: 'var(--cyan)', boxShadow: 'inset 0 0 0 1px rgba(52,227,255,.3)' }}>
                <Ic.pin width="14" height="14"/> Nationwide delivery
              </span>
            </div>
            <p style={{ color: 'var(--muted)', marginTop: 16, fontSize: 14.5 }}>
              We ship nationwide. Same-day delivery also available in select areas — <a href="https://www.instagram.com/cheffyscrystals/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--cyan)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>inquire here</a>.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div style={{ borderRadius: 'var(--r-lg)', overflow: 'hidden', aspectRatio: '3/4', boxShadow: 'var(--shadow-soft)' }}>
              <img src="/assets/bowls-labels.jpg" alt="Bowls of tumbled healing crystals with handwritten Philippine peso price labels" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ flex: 1, borderRadius: 'var(--r-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-soft)' }}>
                <img src="/assets/smoky-quartz.jpg" alt="Close up of smoky quartz tumbled stone" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
              </div>
              <div style={{ background: 'var(--plum)', borderRadius: 'var(--r-lg)', padding: '20px 18px', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.07)' }}>
                <div className="stat"><b style={{ fontSize: 34 }}>₱20</b><span style={{ fontSize: 12.5, color: 'var(--muted)' }}>where every collection begins</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="bg-cosmic section">
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20, flexWrap: 'wrap', marginBottom: 38 }}>
          <div>
            <p className="eyebrow--magenta eyebrow">✦ Loved by collectors</p>
            <h2 className="display-l" style={{ marginTop: 14 }}>Real reviews from<br/>real Filipino homes.</h2>
          </div>
          <div style={{ display: 'flex', gap: 7, alignItems: 'center' }}>
            <span style={{ display: 'flex', color: 'var(--gold)' }}>{[0,1,2,3,4].map((i) => <Ic.star key={i}/>)}</span>
            <span style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 16, color: '#fff' }}>4.9</span>
            <span style={{ color: 'var(--muted)', fontSize: 14 }}>· 2,400+ ratings</span>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }} className="reviews-grid">
          {reviews.map((r, i) => (
            <div className="review-card reveal" key={i} itemScope itemType="https://schema.org/Review">
              <span style={{ display: 'flex', color: 'var(--gold)', gap: 1 }}>{[...Array(r.stars)].map((_, k) => <Ic.star key={k}/>)}</span>
              <p style={{ margin: 0, color: 'var(--text)', fontSize: 14.5, lineHeight: 1.6 }} itemProp="reviewBody">"{r.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginTop: 'auto' }}>
                <div style={{ width: 38, height: 38, borderRadius: 99, display: 'grid', placeItems: 'center', background: 'linear-gradient(140deg,var(--royal),var(--magenta))', fontFamily: 'var(--display)', fontWeight: 700, color: '#fff', fontSize: 14 }}>{r.name[0]}</div>
                <div>
                  <div style={{ fontFamily: 'var(--display)', fontWeight: 600, fontSize: 13.5, color: '#fff' }} itemProp="author">{r.name}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)' }}>{r.city} · via {r.via}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StoryTeaser() {
  return (
    <section className="bg-aura section">
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '.9fr 1.1fr', gap: 'clamp(28px,5vw,64px)', alignItems: 'center' }} className="hero-grid">
          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: 'var(--r-xl)', overflow: 'hidden', aspectRatio: '4/5', boxShadow: 'var(--shadow-card)' }}>
              <img src="/assets/cheffy-booth.jpg" alt="Cheffy at her crystal booth with the neon Cheffy's Crystals sign" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
            </div>
            <div style={{ position: 'absolute', right: -14, bottom: -14, background: 'var(--ink)', color: '#fff', borderRadius: 'var(--r)', padding: '16px 20px', boxShadow: 'var(--shadow-soft)' }}>
              <div className="script" style={{ fontSize: 30, color: 'var(--magenta-2)', lineHeight: 1 }}>Hi, I'm Cheffy</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', marginTop: 4 }}>founder</div>
            </div>
          </div>
          <div>
            <p className="eyebrow" style={{ color: 'var(--price)' }}>✦ Our story</p>
            <h2 className="display-l" style={{ marginTop: 14, color: 'var(--ink)' }}>From our home to yours.</h2>
            <p style={{ color: 'var(--ink-soft)', marginTop: 16, fontSize: 16, lineHeight: 1.7, maxWidth: 520 }}>
              Cheffy's Crystals started as an online store — a way to bring calm, affordable healing stones to fellow Filipinos who needed a little grounding. No gatekeeping, no overpriced mysticism. Today we ship nationwide and bring our stones to bazaars and events in person, too — same honest prices, same heart.
            </p>
            <div style={{ display: 'flex', gap: 30, margin: '28px 0', flexWrap: 'wrap' }}>
              <div className="stat"><b style={{ color: 'var(--ink)' }}>2020</b><span style={{ fontSize: 13, color: 'var(--ink-muted)' }}>legit seller of crystals since</span></div>
              <div className="stat"><b style={{ color: 'var(--ink)' }}>80k+</b><span style={{ fontSize: 13, color: 'var(--ink-muted)' }}>pieces sold nationwide</span></div>
              <div className="stat"><b style={{ color: 'var(--ink)' }}>30K+</b><span style={{ fontSize: 13, color: 'var(--ink-muted)' }}>total followers who trust Cheffy's</span></div>
            </div>
            <Link className="btn btn--ink" to="/about">Read our full story <Ic.arrow/></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function JournalTeaser() {
  const posts = blogs.slice(0, 3);
  return (
    <section className="bg-aura-2 section">
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20, flexWrap: 'wrap', marginBottom: 34 }}>
          <div>
            <p className="eyebrow" style={{ color: 'var(--price)' }}>✦ From the journal</p>
            <h2 className="display-l" style={{ marginTop: 14, color: 'var(--ink)' }}>Crystal wisdom, minus the woo.</h2>
            <p style={{ color: 'var(--ink-soft)', maxWidth: 440, marginTop: 12, fontSize: 15.5 }}>Honest, beginner-friendly guides on choosing, cleansing, and living with your stones.</p>
          </div>
          <Link className="btn btn--gold btn--sm" to="/blog" style={{ flexShrink: 0 }}>All articles <Ic.arrow/></Link>
        </div>
        <div className="blog-grid blog-grid--3">
          {posts.map((b) => <BlogCard key={b.slug} b={b}/>)}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useReveal();
  return (
    <>
      <SEOMeta/>
      <Nav/>
      <main>
        <Hero onShop={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}/>
        <Shop/>
        <TrustBar/>
        <AsSeenTikTok/>
        <Guide/>
        <Reviews/>
        <DeliveryBand/>
        <Events/>
        <JournalTeaser/>
        <StoryTeaser/>
      </main>
      <Footer/>
    </>
  );
}
