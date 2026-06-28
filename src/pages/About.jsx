import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Footer } from '../components/Nav';
import { Ic, Spark, SocialGlyph, SOCIALS } from '../components/Icons';
import { GemGlyph, hexA } from '../components/GemGlyph';
import { useReveal } from '../hooks/useReveal';
import { faq, shopUrl } from '../data';
import { useState } from 'react';

const SITE_URL = 'https://cheffyscrystals.com';

function SEOMeta() {
  useEffect(() => {
    document.title = "Our Story — Cheffy's Crystals | Authentic Healing Crystals Philippines Since 2020";
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      "Learn the story behind Cheffy's Crystals — an honest, affordable healing crystal shop in the Philippines started in 2020. Hand-checked stones, fair prices, nationwide shipping."
    );

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "AboutPage",
          "name": "Our Story — Cheffy's Crystals",
          "url": `${SITE_URL}/about`,
          "description": "The story of Cheffy's Crystals, an authentic healing crystal shop in the Philippines founded in 2020 by Cheffy.",
          "mainEntity": {
            "@type": "Organization",
            "name": "Cheffy's Crystals",
            "foundingDate": "2020",
            "founder": { "@type": "Person", "name": "Cheffy", "jobTitle": "Founder" },
            "description": "Cheffy's Crystals is a Philippine-based online crystal shop committed to affordable, authentic healing stones. Started in 2020, the shop now ships nationwide and attends bazaars across Metro Manila."
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": faq.map((f) => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
        }
      ]
    };

    let el = document.getElementById('schema-about');
    if (!el) { el = document.createElement('script'); el.id = 'schema-about'; el.type = 'application/ld+json'; document.head.appendChild(el); }
    el.textContent = JSON.stringify(schema);
    return () => el?.remove();
  }, []);
  return null;
}

function AboutHero() {
  return (
    <section className="bg-cosmic" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="nebula"></div>
      <Spark size={20} color="var(--gold)" style={{ position: 'absolute', top: '18%', right: '12%', opacity: .8 }}/>
      <Spark size={14} color="var(--cyan)" style={{ position: 'absolute', bottom: '22%', left: '8%', opacity: .7 }}/>
      <div className="wrap" style={{ position: 'relative', padding: 'clamp(56px,7vw,96px) 28px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 'clamp(28px,5vw,72px)', alignItems: 'center' }} className="hero-grid">
          <div>
            <div className="chip" style={{ background: 'rgba(255,46,154,.12)', color: 'var(--magenta-2)', boxShadow: 'inset 0 0 0 1px rgba(255,46,154,.3)', marginBottom: 22 }}>
              <Spark size={12} color="var(--magenta-2)"/> Our story
            </div>
            <h1 className="display-xl">Honest stones,<br/><span style={{ color: 'var(--magenta-2)', textShadow: 'var(--glow-magenta)' }}>fair prices,</span><br/>a lot of heart.</h1>
            <p style={{ fontSize: 'clamp(16px,1.5vw,19px)', color: 'var(--muted)', maxWidth: 480, marginTop: 22 }}>
              Cheffy's Crystals exists to make healing crystals feel welcoming and affordable for every Filipino — not just the lucky few.
            </p>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: 'var(--r-xl)', overflow: 'hidden', aspectRatio: '3/4', boxShadow: '0 40px 90px -30px rgba(91,42,157,.7)' }}>
              <img src="/assets/cheffy-booth.jpg" alt="Cheffy at her crystal booth with the neon Cheffy's Crystals sign at Soulstice 2024" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 55%,rgba(12,6,23,.5))' }}></div>
              <span className="badge-glow" style={{ position: 'absolute', left: 16, bottom: 16 }}>✦ Soulstice, 2024</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hairline"></div>
    </section>
  );
}

function StoryBody() {
  const blocks = [
    { n:'01', t:'It began with one stressful week.', c1:'#9C6BD6', c2:'#5B2A9D',
      text:'Like a lot of our customers, Cheffy found crystals during a season of burnout — overworked, overstimulated, and looking for something grounding. One amethyst on the nightstand turned into a small, quiet ritual. That calm was worth sharing.' },
    { n:'02', t:'It started online.', c1:'#FF8FC4', c2:'#C81E74',
      text:'Cheffy's Crystals began as an online store — a small shop run from home, bowl by bowl, with handwritten ₱ price tags. The rule from day one: keep it honest and keep it affordable, so anyone could start a collection.' },
    { n:'03', t:'From our home to yours.', c1:'#7FD3CE', c2:'#3C9D9A',
      text:'We're an online store at heart, and we also bring our crystals to bazaars and events around the metro so you can meet them in person. Either way it's still Cheffy hand-checking and packing each order — shipped nationwide, from our home to yours.' },
  ];
  return (
    <section className="bg-aura section">
      <div className="wrap">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {blocks.map((b, i) => (
            <div key={i} className="reveal" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 'clamp(20px,4vw,52px)', padding: '34px 0', borderBottom: i < blocks.length-1 ? '1px solid var(--cream-3)' : 'none', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
                <div style={{ width: 62, height: 62, borderRadius: 16, display: 'grid', placeItems: 'center', background: `linear-gradient(140deg,${hexA(b.c1,.28)},${hexA(b.c2,.16)})`, flexShrink: 0 }}>
                  <GemGlyph c1={b.c1} c2={b.c2} size="66%"/>
                </div>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--ink-muted)' }}>{b.n}</span>
              </div>
              <div>
                <h3 className="display-m" style={{ color: 'var(--ink)', fontSize: 'clamp(22px,2.6vw,32px)' }}>{b.t}</h3>
                <p style={{ color: 'var(--ink-soft)', marginTop: 10, fontSize: 16, lineHeight: 1.7, maxWidth: 680 }}>{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  const vals = [
    { icon: <Ic.shield/>, t: 'Authentic & honest',  d: 'We're upfront about what's natural, dyed or reconstituted. No mystical markups, no half-truths.' },
    { icon: <Ic.sparkles/>, t: 'Affordable for all', d: 'Chips from ₱20 and a 10% direct-shop discount. Good energy shouldn't be a luxury.' },
    { icon: <Ic.heart/>, t: 'Sourced with love',    d: 'Every piece is chosen, cleansed and hand-checked by Cheffy before it ever ships to you.' },
    { icon: <Ic.leaf/>, t: 'Personal service',       d: 'Message us anytime — we'll help you pick the right stone for whatever you're carrying.' },
  ];
  return (
    <section className="bg-cosmic section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="nebula"></div>
      <div className="wrap" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 44px' }}>
          <p className="eyebrow">✦ What we stand for</p>
          <h2 className="display-l" style={{ marginTop: 14 }}>Four promises in every parcel.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }} className="values-grid reviews-grid">
          {vals.map((v, i) => (
            <div key={i} className="review-card reveal">
              <span style={{ color: 'var(--gold)' }}>{v.icon}</span>
              <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 18, color: '#fff' }}>{v.t}</div>
              <p style={{ margin: 0, color: 'var(--muted)', fontSize: 14.5, lineHeight: 1.6 }}>{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteBand() {
  return (
    <section className="bg-aura-2 section--tight">
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '.8fr 1.2fr', gap: 'clamp(24px,4vw,56px)', alignItems: 'center' }} className="hero-grid">
          <div style={{ borderRadius: 'var(--r-xl)', overflow: 'hidden', aspectRatio: '1/1', boxShadow: 'var(--shadow-card)' }}>
            <img src="/assets/bowls-labels.jpg" alt="Bowls of crystals with handwritten peso price tags — Cheffy's Crystals Philippines" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
          </div>
          <div>
            <Spark size={26} color="var(--price)" style={{ opacity: .8, marginBottom: 14 }}/>
            <blockquote className="display-m" style={{ color: 'var(--ink)', fontWeight: 700, fontSize: 'clamp(22px,3vw,34px)', lineHeight: 1.3, maxWidth: 640, margin: 0 }}>
              "I never wanted crystals to feel intimidating or overpriced. I just wanted to share the calm they gave me — at a price a student could say yes to."
            </blockquote>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 24 }}>
              <div className="script" style={{ fontSize: 38, color: 'var(--price)', lineHeight: 1 }}>Cheffy</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--ink-muted)' }}>founder, Cheffy's Crystals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="bg-aura section">
      <div className="wrap" style={{ maxWidth: 840 }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <p className="eyebrow" style={{ color: 'var(--price)' }}>✦ Good to know</p>
          <h2 className="display-l" style={{ marginTop: 14, color: 'var(--ink)' }}>Questions, answered honestly.</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faq.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ background: '#fff', borderRadius: 'var(--r)', boxShadow: 'var(--shadow-card)', overflow: 'hidden' }} itemScope itemType="https://schema.org/Question">
                <button onClick={() => setOpen(isOpen ? -1 : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '20px 24px', textAlign: 'left' }}>
                  <span style={{ fontFamily: 'var(--display)', fontWeight: 600, fontSize: 16.5, color: 'var(--ink)' }} itemProp="name">{f.q}</span>
                  <span style={{ color: 'var(--price)', transition: 'transform .25s', transform: isOpen ? 'rotate(180deg)' : 'none', flexShrink: 0 }}><Ic.chevron/></span>
                </button>
                <div style={{ maxHeight: isOpen ? 260 : 0, transition: 'max-height .3s ease', overflow: 'hidden' }} itemScope itemType="https://schema.org/Answer">
                  <p style={{ margin: 0, padding: '0 24px 22px', color: 'var(--ink-soft)', fontSize: 15, lineHeight: 1.65 }} itemProp="text">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FindUs() {
  const socials = [
    { s: 'Shopee',    h: 'Cheffy\'s Crystals', c: '#EE4D2D', url: 'https://shopee.ph/cheffyscrystals' },
    { s: 'TikTok',   h: '@cheffyscrystals',    c: '#25F4EE', url: 'https://tiktok.com/@cheffyscrystals' },
    { s: 'Instagram', h: '@cheffyscrystals',   c: '#FF2E9A', url: 'https://instagram.com/cheffyscrystals' },
  ];
  return (
    <section className="bg-cosmic section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="nebula"></div>
      <div className="wrap" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 40px' }}>
          <p className="eyebrow--magenta eyebrow">✦ Checkout &amp; follow</p>
          <h2 className="display-l" style={{ marginTop: 14 }}>Find us wherever you shop.</h2>
          <p style={{ color: 'var(--muted)', marginTop: 12, fontSize: 15.5 }}>Buy direct for 10% off, or catch us on your favourite platform. We answer every message.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginBottom: 40 }} className="reviews-grid">
          {socials.map((x, i) => {
            const G = SocialGlyph[x.s];
            return (
              <a key={i} href={x.url} target="_blank" rel="noopener noreferrer" className="review-card reveal" style={{ alignItems: 'flex-start', cursor: 'pointer' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 9, color: x.c }}>{G && <G/>}<span style={{ fontFamily: 'var(--mono)', fontWeight: 700, fontSize: 13, letterSpacing: '.1em' }}>{x.s.toUpperCase()}</span></span>
                <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 17, color: '#fff' }}>{x.h}</div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--muted)', fontSize: 13, marginTop: 'auto' }}>Visit <Ic.arrow width="15" height="15"/></span>
              </a>
            );
          })}
        </div>
        <div style={{ textAlign: 'center' }}>
          <a className="btn btn--neon" href={shopUrl} target="_blank" rel="noopener noreferrer">Start shopping <Ic.arrow/></a>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  useReveal();
  return (
    <>
      <SEOMeta/>
      <Nav/>
      <main>
        <AboutHero/>
        <StoryBody/>
        <Values/>
        <QuoteBand/>
        <FAQ/>
        <FindUs/>
      </main>
      <Footer/>
    </>
  );
}
