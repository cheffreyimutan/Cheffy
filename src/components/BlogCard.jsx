import { Link } from 'react-router-dom';
import { Ic } from './Icons';

const BLOG_CAT_COLOR = {
  'Crystal 101':  'var(--cyan)',
  'Crystal Care': 'var(--magenta-2)',
  'Beginners':    'var(--gold)',
  'Lifestyle':    'var(--cyan)',
  'Trending':     'var(--magenta-2)',
};

export function BlogCard({ b, big }) {
  return (
    <Link to={`/blog/${b.slug}`} className="blog-card reveal" style={big ? { gridColumn: '1 / -1' } : null}>
      <div className="blog-card__media" style={big ? { aspectRatio: '21/9' } : null}>
        <img src={b.img} alt={b.title} loading="lazy"/>
        <span className="chip blog-cat" style={{ '--cat-c': BLOG_CAT_COLOR[b.cat] || 'var(--cyan)' }}>{b.cat}</span>
      </div>
      <div className="blog-card__body">
        <h3 className="blog-card__title" style={big ? { fontSize: 'clamp(24px,3vw,34px)' } : null}>{b.title}</h3>
        <p className="blog-card__excerpt">{b.excerpt}</p>
        <div className="blog-card__meta">
          <span>{b.date}</span><span className="dot">•</span><span>{b.read}</span>
          <span className="blog-card__arrow">Read <Ic.arrow width="15" height="15"/></span>
        </div>
      </div>
    </Link>
  );
}
