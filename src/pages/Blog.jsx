import { useEffect } from 'react';
import { Nav, Footer } from '../components/Nav';
import { BlogCard } from '../components/BlogCard';
import { Spark } from '../components/Icons';
import { useReveal } from '../hooks/useReveal';
import { blogs } from '../data';

const SITE_URL = 'https://cheffyscrystals.com';

function SEOMeta() {
  useEffect(() => {
    document.title = "Crystal Journal — Cheffy's Crystals | Beginner Guides, Care Tips & More";
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      "Honest, beginner-friendly crystal guides written for real Filipino homes. Learn how to use, cleanse, and choose healing crystals. Written by Cheffy."
    );

    const schema = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "The Cheffy's Journal",
      "description": "Honest, beginner-friendly guides on healing crystals for Filipinos",
      "url": `${SITE_URL}/blog`,
      "publisher": { "@type": "Organization", "name": "Cheffy's Crystals", "url": SITE_URL },
      "blogPost": blogs.map((b) => ({
        "@type": "BlogPosting",
        "headline": b.title,
        "description": b.excerpt,
        "image": `${SITE_URL}${b.img}`,
        "url": `${SITE_URL}/blog/${b.slug}`,
        "datePublished": b.date,
        "author": { "@type": "Person", "name": "Cheffy" },
        "publisher": { "@type": "Organization", "name": "Cheffy's Crystals" },
        "articleSection": b.cat,
        "timeRequired": b.read
      }))
    };

    let el = document.getElementById('schema-blog');
    if (!el) { el = document.createElement('script'); el.id = 'schema-blog'; el.type = 'application/ld+json'; document.head.appendChild(el); }
    el.textContent = JSON.stringify(schema);
    return () => el?.remove();
  }, []);
  return null;
}

export default function Blog() {
  useReveal();
  const [feature, ...rest] = blogs;
  return (
    <>
      <SEOMeta/>
      <Nav/>
      <main>
        <section className="bg-cosmic" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="nebula nebula-drift"></div>
          <Spark className="spark-twinkle" size={20} color="var(--gold)" style={{ position: 'absolute', top: '22%', right: '10%', opacity: .8 }}/>
          <Spark className="spark-twinkle" size={14} color="var(--cyan)" style={{ position: 'absolute', bottom: '26%', left: '8%', opacity: .7, animationDelay: '1s' }}/>
          <div className="wrap" style={{ position: 'relative', padding: 'clamp(54px,7vw,92px) 28px clamp(40px,5vw,60px)', textAlign: 'center' }}>
            <p className="eyebrow--magenta eyebrow">✦ The Cheffy's journal</p>
            <h1 className="display-xl" style={{ marginTop: 16 }}>
              Crystal wisdom,<br/><span style={{ color: 'var(--magenta-2)', textShadow: 'var(--glow-magenta)' }}>minus the woo.</span>
            </h1>
            <p style={{ fontSize: 'clamp(16px,1.5vw,19px)', color: 'var(--muted)', maxWidth: 560, margin: '22px auto 0' }}>
              Honest, beginner-friendly guides on choosing, cleansing, and living with your crystals — written for real Filipino homes.
            </p>
          </div>
          <div className="hairline"></div>
        </section>

        <section className="bg-aura section">
          <div className="wrap">
            <div className="blog-grid">
              <BlogCard b={feature} big/>
              {rest.map((b) => <BlogCard key={b.slug} b={b}/>)}
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
