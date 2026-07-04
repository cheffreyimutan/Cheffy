import { useState, useEffect } from 'react';
import { Nav, Footer } from '../components/Nav';
import { Ic, Spark } from '../components/Icons';
import { useReveal } from '../hooks/useReveal';

// ─── Replace with your Formspree form ID (formspree.io → New Form → target email: cheff.crystals@gmail.com) ───
const FORMSPREE = 'https://formspree.io/f/YOUR_FORM_ID';

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
        id: 'rune-oracle',
        name: 'Rune & Oracle Reading + Crystal Consultation',
        desc: 'A deeply personal session combining rune casting and oracle cards with a tailored crystal recommendation. Ideal for anyone seeking clarity, direction, or energetic unblocking — wherever you are right now.',
        formats: ['Available Online', 'Available In-Person'],
        label: 'Rune & Oracle Reading + Crystal Consultation',
      },
      {
        id: 'crystal-chakra',
        name: 'Crystal Consultation, Programming & Chakra Healing',
        desc: "A focused session to identify the right crystals for your current energy, program them with your intentions, and address chakra imbalances. Crystals may be provided by the client or sourced directly from Cheffy's premium catalog.",
        formats: ['Available Online', 'Available In-Person'],
        label: 'Crystal Consultation, Programming & Chakra Healing',
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
        id: 'webinar',
        name: 'Community & Virtual Webinars',
        desc: 'A 30-minute interactive digital or in-person community presentation. Topics include Crystal 101, beginner energy basics, and practical tools for daily wellness. Perfect for wellness groups, barangay programs, and online communities.',
        formats: ['Virtual / Online', 'In-Person Community'],
        label: 'Community & Virtual Webinar',
      },
      {
        id: 'corporate-workshop',
        name: 'Corporate Wellness Workshop',
        desc: 'A premium 30-minute in-person seminar blending the science of energy, productivity strategies, and holistic wellness tools. Tailored for HR teams, executive groups, and forward-thinking organizations looking to invest in their people.',
        formats: ['In-Person'],
        label: 'Corporate Wellness Workshop',
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
        id: 'keynote',
        name: 'Corporate Keynote: Crystals in the Modern Day World',
        desc: "A signature 30-minute keynote designed for tech startups and corporate networks. Covers the science of piezoelectricity, how quartz powers our devices and interacts with human energy, executive stone selection for high-performance environments, and actionable strategies to counter digital fatigue. Includes a live Q&A segment and exclusive curated resource access for attendees.",
        formats: ['In-Person Keynote', 'Live Q&A Included'],
        label: 'Corporate Keynote: Crystals in the Modern Day World',
      },
      {
        id: 'team-workshop',
        name: 'Interactive Team Workshops',
        desc: "Two formats available. Crystal 101 & Live Demonstration: an engaging, hands-on primer where participants learn to identify, cleanse, and use foundational stones — with live energy demonstrations. Crystal Gridding for Workspace Wellbeing: a visually stunning workshop teaching teams to build geometric crystal configurations to manifest focus, synergy, and abundance in their shared environment.",
        formats: ['Crystal 101 & Live Demo', 'Crystal Gridding Workshop'],
        label: 'Interactive Team Workshop',
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
        id: 'partnership',
        name: 'Anchor Merchant & Pop-Up Setup',
        desc: "Bring Cheffy's Crystals to your event as a featured vendor or anchor merchant. We handle the setup, the storytelling, and the selling — you get an elevated, memorable experience for your guests. Also available as an add-on to any corporate keynote booking.",
        formats: ['Event Pop-Ups', 'Corporate Retreats', 'VIP Experiences'],
        label: 'Anchor Merchant / Pop-Up Partnership',
      },
    ],
  },
];

const SERVICE_OPTIONS = [
  'Rune & Oracle Reading + Crystal Consultation',
  'Crystal Consultation, Programming & Chakra Healing',
  'Community & Virtual Webinar',
  'Corporate Wellness Workshop',
  'Corporate Keynote: Crystals in the Modern Day World',
  'Interactive Team Workshop',
  'Anchor Merchant / Pop-Up Partnership',
  "I'm not sure yet — help me choose",
];

function ServiceCard({ s, cat, onInquire }) {
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
      <button
        onClick={() => onInquire(s.label)}
        className="btn btn--gold btn--sm"
        style={{ alignSelf: 'flex-start', marginTop: 'auto' }}
      >
        Send an enquiry <Ic.arrow width="15" height="15"/>
      </button>
    </div>
  );
}

function InquiryForm({ preset }) {
  const [fields, setFields] = useState({ name: '', email: '', phone: '', service: preset || '', message: '' });
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (preset) setFields(f => ({ ...f, service: preset }));
  }, [preset]);

  const set = (k) => (e) => setFields(f => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          phone: fields.phone || 'Not provided',
          service: fields.service,
          message: fields.message,
          _subject: `Service Inquiry: ${fields.service}`,
        }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  const inputStyle = {
    width: '100%', boxSizing: 'border-box',
    padding: '13px 16px',
    border: '1.5px solid var(--cream-3)',
    borderRadius: 'var(--r)',
    fontFamily: 'var(--body)',
    fontSize: 15,
    color: 'var(--ink)',
    background: '#fff',
    outline: 'none',
    transition: 'border-color .2s',
  };
  const labelStyle = { fontFamily: 'var(--display)', fontWeight: 600, fontSize: 13.5, color: 'var(--ink)', marginBottom: 6, display: 'block' };

  if (status === 'success') return (
    <div style={{ textAlign: 'center', padding: '60px 24px' }}>
      <Spark size={36} color="var(--gold)" style={{ margin: '0 auto 20px' }}/>
      <h3 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 26, color: 'var(--ink)' }}>Message received!</h3>
      <p style={{ color: 'var(--ink-soft)', fontSize: 16, marginTop: 10, maxWidth: 420, margin: '10px auto 0' }}>
        We'll get back to you within 24–48 hours. In the meantime, feel free to browse our shop or follow us on Instagram and TikTok.
      </p>
    </div>
  );

  return (
    <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="hero-grid">
        <div>
          <label style={labelStyle}>Full Name *</label>
          <input required style={inputStyle} value={fields.name} onChange={set('name')} placeholder="Your name"/>
        </div>
        <div>
          <label style={labelStyle}>Email Address *</label>
          <input required type="email" style={inputStyle} value={fields.email} onChange={set('email')} placeholder="you@email.com"/>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="hero-grid">
        <div>
          <label style={labelStyle}>Phone / WhatsApp <span style={{ fontWeight: 400, color: 'var(--ink-muted)' }}>(optional)</span></label>
          <input style={inputStyle} value={fields.phone} onChange={set('phone')} placeholder="+63 9XX XXX XXXX"/>
        </div>
        <div>
          <label style={labelStyle}>Service I'm interested in *</label>
          <select required style={{ ...inputStyle, appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%237A6B96' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', paddingRight: 40 }}
            value={fields.service} onChange={set('service')}>
            <option value="">Select a service…</option>
            {SERVICE_OPTIONS.map((o, i) => <option key={i} value={o}>{o}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label style={labelStyle}>Tell us more *</label>
        <textarea required rows={5} style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
          value={fields.message} onChange={set('message')}
          placeholder="What are you hoping to get out of this session? Any questions, dates in mind, group size, or context you'd like to share — the more you tell us, the better we can help."/>
      </div>
      {status === 'error' && (
        <p style={{ color: '#d93025', fontSize: 14, margin: 0 }}>
          Something went wrong. Please try again or email us directly at <a href="mailto:cheff.crystals@gmail.com" style={{ color: 'var(--price)' }}>cheff.crystals@gmail.com</a>.
        </p>
      )}
      <button type="submit" disabled={status === 'sending'} className="btn btn--neon" style={{ alignSelf: 'flex-start' }}>
        {status === 'sending' ? 'Sending…' : 'Send enquiry'} {status !== 'sending' && <Ic.arrow/>}
      </button>
    </form>
  );
}

export default function Services() {
  useReveal();
  const [preset, setPreset] = useState('');

  const handleInquire = (label) => {
    setPreset(label);
    document.getElementById('inquire')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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

        {/* ── Service Categories ── */}
        {CATEGORIES.map((cat, ci) => (
          <section key={ci} className={ci % 2 === 0 ? 'bg-aura section' : 'bg-aura-2 section'}>
            <div className="wrap">
              <div style={{ marginBottom: 36 }}>
                <p className="eyebrow" style={{ color: cat.c }}>✦ {cat.tag}</p>
                <h2 className="display-l" style={{ marginTop: 14, color: 'var(--ink)' }}>{cat.title}</h2>
                <p style={{ color: 'var(--ink-soft)', marginTop: 12, fontSize: 16, maxWidth: 640 }}>{cat.blurb}</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cat.services.length > 1 ? 2 : 1},1fr)`, gap: 20 }} className={cat.services.length > 1 ? 'hero-grid' : ''}>
                {cat.services.map((s, si) => (
                  <ServiceCard key={si} s={s} cat={cat} onInquire={handleInquire}/>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* ── Inquiry Form ── */}
        <section id="inquire" className="bg-cosmic section" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="nebula"></div>
          <div className="wrap" style={{ position: 'relative', maxWidth: 860 }}>
            <div style={{ textAlign: 'center', marginBottom: 44 }}>
              <p className="eyebrow--magenta eyebrow">✦ Let's talk</p>
              <h2 className="display-l" style={{ marginTop: 14 }}>Send us an enquiry.</h2>
              <p style={{ color: 'var(--muted)', marginTop: 12, fontSize: 16, maxWidth: 520, margin: '12px auto 0' }}>
                No commitment needed — just tell us what you're looking for and we'll get back to you within 24–48 hours.
              </p>
            </div>
            <div style={{ background: 'var(--cream)', borderRadius: 'var(--r-xl)', padding: 'clamp(28px,4vw,48px)', boxShadow: 'var(--shadow-card)' }}>
              <InquiryForm preset={preset}/>
            </div>
            <p style={{ textAlign: 'center', marginTop: 20, fontSize: 13.5, color: 'var(--muted)' }}>
              Prefer to email directly? Reach us at{' '}
              <a href="mailto:cheff.crystals@gmail.com" style={{ color: 'var(--cyan)', textDecoration: 'underline' }}>cheff.crystals@gmail.com</a>
            </p>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
