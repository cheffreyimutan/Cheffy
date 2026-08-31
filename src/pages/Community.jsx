import { useEffect } from 'react';
import { Nav, Footer } from '../components/Nav';
import { Ic, Spark } from '../components/Icons';
import { useReveal } from '../hooks/useReveal';
import { shopUrl } from '../data';

const SITE_URL = 'https://cheffyscrystals.com';
const FB_GROUP = 'https://www.facebook.com/groups/681461420992552';

function SEOMeta() {
  useEffect(() => {
    document.title = "Community — Cheffy's Crystals | Join the Filipino Crystal Lovers Group";
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      "Join the Cheffy's Crystals Facebook community — a warm space for Filipino crystal lovers. Get first dibs on restocks, ask Cheffy anything, and join exclusive giveaways."
    );

    const schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Cheffy's Crystals Community",
      "description": "A Facebook community for Filipino crystal lovers — beginners and collectors alike.",
      "url": `${SITE_URL}/community`,
      "mainEntity": {
        "@type": "OnlineBusiness",
        "name": "Cheffy's Crystals Community",
        "url": FB_GROUP,
        "description": "A warm corner of the internet for Filipino crystal lovers. Share your finds, ask questions, and grow your collection with good people and good energy."
      }
    };

    let el = document.getElementById('schema-community');
    if (!el) { el = document.createElement('script'); el.id = 'schema-community'; el.type = 'application/ld+json'; document.head.appendChild(el); }
    el.textContent = JSON.stringify(schema);
    return () => el?.remove();
  }, []);
  return null;
}

function FbGlyph(p) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" {...p}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z"/>
    </svg>
  );
}

export default function Community() {
  useReveal();
  const perks = [
    { icon: <Ic.sparkles/>, t: 'First dibs on restocks',   d: 'Members hear about new arrivals and restocks before anyone else.' },
    { icon: <Ic.heart/>,    t: 'Ask Cheffy anything',       d: 'Crystal questions, care tips, and honest advice from the whole community.' },
    { icon: <Ic.star/>,     t: 'Members-only giveaways',    d: 'Exclusive drops, freebies and discounts shared just for the group.' },
  ];
  return (
    <>
      <SEOMeta/>
      <Nav/>
      <main>
        <section className="bg-cosmic" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="nebula nebula-drift"></div>
          <Spark className="spark-twinkle" size={20} color="var(--gold)" style={{ position: 'absolute', top: '20%', right: '12%', opacity: .8 }}/>
          <Spark className="spark-twinkle" size={14} color="var(--cyan)" style={{ position: 'absolute', bottom: '24%', left: '9%', opacity: .7, animationDelay: '1s' }}/>
          <div className="wrap" style={{ position: 'relative', padding: 'clamp(56px,8vw,104px) 28px clamp(56px,8vw,96px)', textAlign: 'center' }}>
            <span className="chip" style={{ background: 'rgba(52,114,235,.14)', color: '#7AB0FF', boxShadow: 'inset 0 0 0 1px rgba(52,114,235,.4)', marginBottom: 22 }}>
              <FbGlyph width="15" height="15"/> Facebook group
            </span>
            <h1 className="display-xl" style={{ maxWidth: 880, margin: '0 auto' }}>
              Join the <span style={{ color: 'var(--magenta-2)', textShadow: 'var(--glow-magenta)' }}>Cheffy's Crystals</span> Community.
            </h1>
            <p style={{ fontSize: 'clamp(16px,1.5vw,19px)', color: 'var(--muted)', maxWidth: 560, margin: '22px auto 0' }}>
              A warm corner of the internet for Filipino crystal lovers — beginners and collectors alike. Share your finds, ask questions, and grow your collection with good people and good energy.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 34, flexWrap: 'wrap' }}>
              <a className="btn btn--neon" href={FB_GROUP} target="_blank" rel="noopener">Join the group <Ic.arrow/></a>
              <a className="btn btn--ghost" href={shopUrl} target="_blank" rel="noopener">Shop crystals</a>
            </div>
          </div>
          <div className="hairline"></div>
        </section>

        <section className="bg-aura section">
          <div className="wrap">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="values-grid reviews-grid">
              {perks.map((p, i) => (
                <div key={i} className="guide-card reveal">
                  <span style={{ color: 'var(--price)' }}>{p.icon}</span>
                  <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 18, color: 'var(--ink)' }}>{p.t}</div>
                  <p style={{ margin: 0, color: 'var(--ink-soft)', fontSize: 14.5, lineHeight: 1.6 }}>{p.d}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 40, padding: 'clamp(28px,4vw,44px)', borderRadius: 'var(--r-xl)', background: 'linear-gradient(120deg, #1877F2, #3B5BB5)', textAlign: 'center', boxShadow: 'var(--shadow-card)' }}>
              <span style={{ color: '#fff', display: 'inline-flex', marginBottom: 12 }}><FbGlyph width="34" height="34"/></span>
              <h2 className="display-m" style={{ color: '#fff', fontSize: 'clamp(22px,3vw,32px)' }}>Cheffy's Crystals Community</h2>
              <p style={{ color: 'rgba(255,255,255,.9)', maxWidth: 460, margin: '10px auto 22px', fontSize: 15.5 }}>Join the group on Facebook — it's free, friendly, and full of crystal goodness.</p>
              <a className="btn" href={FB_GROUP} target="_blank" rel="noopener" style={{ background: '#fff', color: '#1877F2' }}>Join the community <Ic.arrow/></a>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
