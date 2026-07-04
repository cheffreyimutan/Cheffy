import { useEffect } from 'react';
import { Nav, Footer } from '../components/Nav';
import { Ic, Spark } from '../components/Icons';
import { useReveal } from '../hooks/useReveal';

const GOOGLE_FORM_SRC = 'https://docs.google.com/forms/d/e/1FAIpQLSf8GRkk7XeuZQhiHKFlXJN6bAPxAitts23VBSc19F7NVSxlhw/viewform?embedded=true';
const SITE_URL = 'https://cheffyscrystals.com';

function SEOMeta() {
  useEffect(() => {
    document.title = "Services — Cheffy's Crystals | Divination, Crystal Healing & Corporate Wellness";
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      "Book a 1:1 crystal consultation, rune & oracle reading, or corporate wellness keynote with Cheffy's Crystals. Serving individuals and organizations across the Philippines."
    );
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "provider": { "@type": "Organization", "name": "Cheffy's Crystals", "url": SITE_URL },
      "name": "Crystal Healing & Wellness Services",
      "description": "1:1 divination and energy consultations, crystal programming, chakra healing, and corporate wellness speaking engagements by Cheffy's Crystals.",
      "areaServed": "Philippines",
      "serviceType": ["Crystal Consultation", "Rune Reading", "Oracle Reading", "Corporate Wellness", "Speaking Engagement"],
    };
    let el = document.getElementById('schema-services');
    if (!el) { el = document.createElement('script'); el.id = 'schema-services'; el.type = 'application/ld+json'; document.head.appendChild(el); }
    el.textContent = JSON.stringify(schema);
    return () => el?.remove();
  }, []);
  return null;
}

const CATEGORIES = [
  {
    tag: '1:1 Sessions',
    title: 'Divination & Energy Consultations',
    blurb: 'A personalized, high-touch experience designed to unblock energy, provide strategic clarity, and align you with your highest potential.',
    c: 'var(--magenta)',
    services: [
      {
        name: 'Rune & Oracle Reading + Crystal Consultation',
        desc: 'A deeply personal session combining rune casting and oracle cards with a tailored crystal recommendation. Ideal for anyone seeking clarity, direction, or energetic unblocking — wherever you are right now.',
        formats: ['Available Online', 'Available In-Person'],
      },
      {
        name: 'Crystal Consultation, Programming & Chakra Healing',
        desc: "A focused session to identify the right crystals for your current energy, program them with your intentions, and address chakra imbalances. Crystals may be provided by the client or sourced directly from Cheffy's premium catalog.",
        formats: ['Available Online', 'Available In-Person'],
      },
    ],
  },
  {
    tag: 'Events & Groups',
    title: 'Speaking Engagements & Event Partnerships',
    blurb: 'Scaling holistic wellness from the individual to the collective — engaging, interactive, and refreshingly modern approaches to energy management.',
    c: 'var(--cyan)',
    services: [
      {
        name: 'Community & Virtual Webinars',
        desc: 'A 30-minute interactive digital or in-person community presentation. Topics include Crystal 101, beginner energy basics, and practical tools for daily wellness. Perfect for wellness groups, barangay programs, and online communities.',
        formats: ['Virtual / Online', 'In-Person Community'],
      },
      {
        name: 'Corporate Wellness Workshop',
        desc: 'A premium 30-minute in-person seminar blending the science of energy, productivity strategies, and holistic wellness tools. Tailored for HR teams, executive groups, and forward-thinking organizations looking to invest in their people.',
        formats: ['In-Person'],
      },
    ],
  },
  {
    tag: 'Corporate Programs',
    title: 'Keynotes & Team Programs',
    blurb: 'Bespoke programs for company summits, executive retreats, and corporate wellness initiatives.',
    c: 'var(--gold)',
    services: [
      {
        name: 'Corporate Keynote: Crystals in the Modern Day World',
        desc: "A signature 30-minute keynote designed for tech startups and corporate networks. Covers the science of piezoelectricity, executive stone selection, and actionable strategies to counter digital fatigue. Includes a live Q&A segment and exclusive curated resource access for attendees.",
        formats: ['In-Person Keynote', 'Live Q&A Included'],
      },
      {
        name: 'Interactive Team Workshops',
        desc: "Two formats available. Crystal 101 & Live Demonstration: an engaging, hands-on primer where participants learn to identify, cleanse, and use foundational stones. Crystal Gridding for Workspace Wellbeing: teams build geometric crystal configurations to manifest focus, synergy, and abundance in their shared environment.",
        formats: ['Crystal 101 & Live Demo', 'Crystal Gridding Workshop'],
      },
    ],
  },
  {
    tag: 'Custom',
    title: 'Anchor Merchant & Bespoke Partnerships',
    blurb: 'For pop-ups, retail tie-ins, VIP retreats, or anything that needs a custom conversation.',
    c: 'var(--magenta-2)',
    services: [
      {
        name: 'Anchor Merchant & Pop-Up Setup',
        desc: "Bring Cheffy's Crystals to your event as a featured vendor or anchor merchant. We handle the setup, the storytelling, and the selling — you get an elevated, memorable experience for your guests. Also available as an add-on to any corporate keynote booking.",
        formats: ['Event Pop-Ups', 'Corporate Retreats', 'VIP Experiences'],
      },
    ],
  },
];

function ServiceCard({ s, cat }) {
  return (
    <div className="reveal" style={{
      background: '#fff',
      borderRadius: 'var(--r-xl)',
      padding: 'clamp(24px,3vw,36px)',
      boxShadow: 'var(--shadow-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
    }}>
      <div>
        <h3 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 'clamp(17px,2vw,22px)', color: 'var(--ink)', marginBottom: 12, lineHeight: 1.3 }}>
          {s.name}
        </h3>
        <p style={{ color: 'var(--ink-soft)', fontSize: 15, lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 4 }}>
        {s.formats.map((f, i) => (
          <span key={i} className="chip" style={{ background: 'var(--cream-2)', color: 'var(--ink-soft)', fontSize: 12.5, letterSpacing: 0, textTransform: 'none' }}>{f}</span>
        ))}
      </div>
      <a
        href="#inquire"
        className="btn btn--gold btn--sm"
        style={{ alignSelf: 'flex-start', marginTop: 'auto', textDecoration: 'none' }}
      >
        Send an enquiry <Ic.arrow width="15" height="15"/>
      </a>
    </div>
  );
}

export default function Services() {
  useReveal();

  return (
    <>
      <SEOMeta/>
      <Nav/>
      <main>
        {/* ── Hero ── */}
        <section className="bg-cosmic" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="nebula nebula-drift"></div>
          <Spark size={22} color="var(--gold)" style={{ position: 'absolute', top: '18%', right: '10%', opacity: .8 }}/>
          <Spark size={15} color="var(--cyan)" style={{ position: 'absolute', bottom: '24%', left: '7%', opacity: .7 }}/>
          <div className="wrap" style={{ position: 'relative', padding: 'clamp(56px,7vw,104px) 28px clamp(48px,6vw,80px)' }}>
            <div style={{ maxWidth: 720 }}>
              <div className="chip" style={{ background: 'rgba(255,46,154,.12)', color: 'var(--magenta-2)', boxShadow: 'inset 0 0 0 1px rgba(255,46,154,.3)', marginBottom: 22 }}>
                <Spark size={12} color="var(--magenta-2)"/> Services & engagements
              </div>
              <h1 className="display-xl">Curating energetic<br/><span style={{ color: 'var(--cyan)', textShadow: '0 0 40px rgba(52,227,255,.5)' }}>alignment.</span></h1>
              <p style={{ fontSize: 'clamp(16px,1.5vw,19px)', color: 'var(--muted)', maxWidth: 540, marginTop: 22, lineHeight: 1.7 }}>
                From intimate 1:1 consultations to corporate wellness keynotes — Cheffy brings modern, grounded holistic wellness to individuals, teams, and events across the Philippines.
              </p>
              <a href="#inquire" className="btn btn--neon" style={{ marginTop: 32, display: 'inline-flex', textDecoration: 'none' }}>
                Send an enquiry <Ic.arrow/>
              </a>
            </div>
          </div>
          <div className="hairline"></div>
        </section>

        {/* ── Featured at ── */}
        <section className="bg-aura section--tight">
          <div className="wrap">
            <p className="eyebrow" style={{ textAlign: 'center', marginBottom: 28 }}>✦ As seen & featured at</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, maxWidth: 860, margin: '0 auto' }} className="hero-grid">
              <div style={{ borderRadius: 'var(--r-xl)', overflow: 'hidden', aspectRatio: '16/9', boxShadow: 'var(--shadow-card)' }}>
                <img src="/assets/tarot-con-2025.png" alt="Cheffy's Crystals — Featured Speaker at Tarot Con 2025" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}/>
              </div>
              <div style={{ borderRadius: 'var(--r-xl)', overflow: 'hidden', aspectRatio: '16/9', boxShadow: 'var(--shadow-card)' }}>
                <img src="/assets/cheffy-speaking.png" alt="Cheffy speaking on stage as Founder of Cheffy's Crystals" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 70%' }}/>
              </div>
            </div>
          </div>
        </section>

        {/* ── Service Categories ── */}
        {CATEGORIES.map((cat, ci) => {
          const photos = ci === 1
            ? [{ src: '/assets/cheffy-workshop-grid.jpg', alt: "Cheffy leading a Let's Grid workshop — Tarot Reader's Crystal Grid" },
               { src: '/assets/cheffy-workshop-demo.jpg', alt: 'Cheffy doing a live crystal grid demo with a workshop participant' }]
            : null;
          return (
            <section key={ci} className={ci % 2 === 0 ? 'bg-aura section' : 'bg-aura-2 section'}>
              <div className="wrap">
                <div style={{ marginBottom: 36 }}>
                  <p className="eyebrow" style={{ color: cat.c }}>✦ {cat.tag}</p>
                  <h2 className="display-l" style={{ marginTop: 14, color: 'var(--ink)' }}>{cat.title}</h2>
                  <p style={{ color: 'var(--ink-soft)', marginTop: 12, fontSize: 16, maxWidth: 640 }}>{cat.blurb}</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cat.services.length > 1 ? 2 : 1},1fr)`, gap: 20 }} className={cat.services.length > 1 ? 'hero-grid' : ''}>
                  {cat.services.map((s, si) => (
                    <ServiceCard key={si} s={s} cat={cat}/>
                  ))}
                </div>
                {photos && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 28 }} className="hero-grid">
                    {photos.map((p, i) => (
                      <div key={i} style={{ borderRadius: 'var(--r-xl)', overflow: 'hidden', aspectRatio: '4/3', boxShadow: 'var(--shadow-card)' }}>
                        <img src={p.src} alt={p.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}/>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          );
        })}

        {/* ── Inquiry Form ── */}
        <section id="inquire" className="bg-cosmic section" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="nebula"></div>
          <div className="wrap" style={{ position: 'relative', maxWidth: 760 }}>
            <div style={{ textAlign: 'center', marginBottom: 44 }}>
              <p className="eyebrow--magenta eyebrow">✦ Let's talk</p>
              <h2 className="display-l" style={{ marginTop: 14 }}>Send us an enquiry.</h2>
              <p style={{ color: 'var(--muted)', marginTop: 12, fontSize: 16, maxWidth: 520, margin: '12px auto 0' }}>
                No commitment needed — just tell us what you're looking for and we'll get back to you within 24–48 hours.
              </p>
            </div>
            <div style={{ borderRadius: 'var(--r-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
              <iframe
                src={GOOGLE_FORM_SRC}
                width="100%"
                height="1845"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Service Enquiry Form"
                style={{ display: 'block' }}
              >
                Loading…
              </iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
