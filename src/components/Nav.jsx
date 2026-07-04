import { Link, useLocation } from 'react-router-dom';
import { Ic, SocialGlyph, SOCIALS } from './Icons';
import { shopUrl } from '../data';

function Wordmark() {
  return (
    <Link to="/" aria-label="Cheffy's Crystals home" style={{ display: 'inline-flex', lineHeight: 0 }}>
      <img src="/assets/logo.png" alt="Cheffy's Crystals logo" style={{ height: 56, width: 56, borderRadius: 14, display: 'block', boxShadow: '0 0 0 1px rgba(255,255,255,.06)' }}/>
    </Link>
  );
}

function Announce() {
  return (
    <div className="announce">✦ Buy direct &amp; save <b>10% OFF</b> · Nationwide delivery · Starting at <b>₱20</b> ✦</div>
  );
}

export function Nav() {
  const { pathname } = useLocation();
  const is = (p) => pathname === p ? ' active' : '';

  return (
    <>
      <Announce/>
      <header className="nav">
        <div className="wrap nav__inner">
          <Wordmark/>
          <nav className="nav__links" aria-label="Main navigation">
            <a className={'nav__link' + (pathname === '/' ? ' active' : '')} href={shopUrl} target="_blank" rel="noopener noreferrer">Shop</a>
            <a className="nav__link" href="/#guide">Crystal Guide</a>
            <Link className={'nav__link' + is('/blog')} to="/blog">Blog</Link>
            <Link className={'nav__link' + is('/about')} to="/about">Our Story</Link>
            <a className="nav__link" href="/#reviews">Reviews</a>
            <Link className={'nav__link' + is('/services')} to="/services">Services</Link>
            <Link className={'nav__link' + is('/community')} to="/community">Community</Link>
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <a className="btn btn--neon btn--sm" href={shopUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Shop <Ic.arrow width="15" height="15"/></a>
          </div>
        </div>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="nebula" style={{ opacity: .5 }}></div>
      <div className="wrap" style={{ position: 'relative', padding: '72px 28px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1.2fr', gap: 40, marginBottom: 48 }} className="foot-grid">
          <div>
            <Link to="/" aria-label="Cheffy's Crystals home" style={{ display: 'inline-flex', lineHeight: 0 }}>
              <img src="/assets/logo.png" alt="Cheffy's Crystals" style={{ height: 64, width: 64, borderRadius: 14, display: 'block' }}/>
            </Link>
            <p style={{ maxWidth: 300, marginTop: 18, color: 'var(--muted)', fontSize: 14.5 }}>
              Affordable, authentic healing crystals — sourced with love, sold with honesty. Bringing good energy to every Filipino home.
            </p>
            <p className="script" style={{ fontSize: 26, color: 'var(--magenta-2)', marginTop: 10, transform: 'rotate(-3deg)' }}>— Cheffy 💜</p>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Explore</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <a className="foot-link" href={shopUrl} target="_blank" rel="noopener noreferrer">Shop</a>
              <a className="foot-link" href="/#guide">Crystal Guide</a>
              <Link className="foot-link" to="/blog">Blog</Link>
              <Link className="foot-link" to="/about">Our Story</Link>
              <a className="foot-link" href="/#reviews">Reviews</a>
              <Link className="foot-link" to="/services">Services</Link>
              <Link className="foot-link" to="/community">Community</Link>
              <a className="foot-link" href="/about#faq">FAQ</a>
            </div>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Find us</div>
            <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
              {SOCIALS.map((s) => {
                const G = SocialGlyph[s.name];
                return <a key={s.name} className="soc" href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name} title={s.name} style={{ '--soc-c': s.color }}><G/></a>;
              })}
            </div>
            <p style={{ color: 'var(--muted)', fontSize: 13.5, margin: 0 }}>@cheffyscrystals · Cheffy's Crystals</p>
          </div>
        </div>
        <div className="hairline" style={{ marginBottom: 24 }}></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 12.5, color: 'var(--muted-2)', fontFamily: 'var(--mono)' }}>
          <span>© 2026 Cheffy's Crystals · Philippines</span>
          <span>Crystals support wellbeing — they are not a substitute for medical care.</span>
        </div>
      </div>
    </footer>
  );
}
