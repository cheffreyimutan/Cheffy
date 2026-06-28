import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Nav, Footer } from '../components/Nav';
import { BlogCard } from '../components/BlogCard';
import { Ic } from '../components/Icons';
import { useReveal } from '../hooks/useReveal';
import { blogs, shopUrl } from '../data';

const SITE_URL = 'https://cheffyscrystals.com';
const BLOG_CAT_COLOR = {
  'Crystal 101':  'var(--cyan)',
  'Crystal Care': 'var(--magenta-2)',
  'Beginners':    'var(--gold)',
  'Lifestyle':    'var(--cyan)',
  'Trending':     'var(--magenta-2)',
};

function SEOMeta({ b }) {
  useEffect(() => {
    document.title = `${b.title} — Cheffy's Crystals`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', b.excerpt);

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BlogPosting",
          "headline": b.title,
          "description": b.excerpt,
          "image": `${SITE_URL}${b.img}`,
          "url": `${SITE_URL}/blog/${b.slug}`,
          "datePublished": b.date,
          "author": { "@type": "Person", "name": "Cheffy", "url": `${SITE_URL}/about` },
          "publisher": {
            "@type": "Organization",
            "name": "Cheffy's Crystals",
            "url": SITE_URL,
            "logo": `${SITE_URL}/assets/logo.png`
          },
          "articleSection": b.cat,
          "timeRequired": b.read,
          "mainEntityOfPage": { "@type": "WebPage", "@id": `${SITE_URL}/blog/${b.slug}` }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home",  "item": SITE_URL },
            { "@type": "ListItem", "position": 2, "name": "Blog",  "item": `${SITE_URL}/blog` },
            { "@type": "ListItem", "position": 3, "name": b.title, "item": `${SITE_URL}/blog/${b.slug}` },
          ]
        }
      ]
    };

    let el = document.getElementById('schema-post');
    if (!el) { el = document.createElement('script'); el.id = 'schema-post'; el.type = 'application/ld+json'; document.head.appendChild(el); }
    el.textContent = JSON.stringify(schema);
    return () => el?.remove();
  }, [b]);
  return null;
}

export default function BlogPost() {
  useReveal();
  const { slug } = useParams();
  const b = blogs.find((x) => x.slug === slug) || blogs[0];
  const related = blogs.filter((x) => x.slug !== b.slug).slice(0, 3);

  return (
    <>
      <SEOMeta b={b}/>
      <Nav/>
      <main>
        <section className="bg-cosmic" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="nebula"></div>
          <div className="wrap" style={{ position: 'relative', padding: 'clamp(40px,5vw,64px) 28px clamp(28px,4vw,40px)', maxWidth: 880 }}>
            <Link to="/blog" className="back-link">
              <Ic.arrow width="16" height="16" style={{ transform: 'rotate(180deg)' }}/> All articles
            </Link>
            <span className="chip blog-cat" style={{ '--cat-c': BLOG_CAT_COLOR[b.cat] || 'var(--cyan)', marginTop: 18 }}>{b.cat}</span>
            <h1 className="display-l" style={{ marginTop: 16, maxWidth: 760 }}>{b.title}</h1>
            <div className="blog-card__meta" style={{ color: 'var(--muted)', marginTop: 18 }}>
              <span>By Cheffy</span><span className="dot">•</span><span>{b.date}</span><span className="dot">•</span><span>{b.read}</span>
            </div>
          </div>
        </section>

        <div className="bg-cosmic" style={{ paddingBottom: 0 }}>
          <div className="wrap" style={{ maxWidth: 980 }}>
            <div className="post-cover">
              <img src={b.img} alt={b.title}/>
            </div>
          </div>
        </div>

        <section className="bg-aura" style={{ paddingTop: 'clamp(48px,6vw,72px)', paddingBottom: 'clamp(56px,7vw,88px)' }}>
          <div className="wrap article">
            {b.body.map((blk, i) => {
              if (blk.h) return <h2 key={i} className="article__h">{blk.h}</h2>;
              if (blk.list) return (
                <ul key={i} className="article__list">
                  {blk.list.map((it, k) => {
                    const m = it.split(' — ');
                    return <li key={k}>{m.length > 1 ? <><strong>{m[0]}</strong> — {m.slice(1).join(' — ')}</> : it}</li>;
                  })}
                </ul>
              );
              return <p key={i} className="article__p">{blk.p}</p>;
            })}

            <div className="article__cta">
              <div>
                <div className="script" style={{ fontSize: 28, color: 'var(--magenta-2)', lineHeight: 1 }}>Ready to start?</div>
                <p style={{ margin: '6px 0 0', color: 'var(--ink-soft)', fontSize: 15 }}>Browse hand-checked, affordable crystals — from ₱20.</p>
              </div>
              <a className="btn btn--neon" href={shopUrl} target="_blank" rel="noopener noreferrer">Shop crystals <Ic.arrow/></a>
            </div>
          </div>
        </section>

        <section className="bg-aura-2 section--tight">
          <div className="wrap">
            <h2 className="display-m" style={{ color: 'var(--ink)', marginBottom: 26 }}>Keep reading</h2>
            <div className="blog-grid blog-grid--3">
              {related.map((r) => <BlogCard key={r.slug} b={r}/>)}
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
