import { Ic } from './Icons';
import { GemMedia } from './GemGlyph';
import { shopeeUrl, withUtm } from '../data';

export function ProductCard({ p }) {
  const tagColor = { Bestseller: 'var(--magenta)', New: 'var(--cyan)', Starter: 'var(--gold)' }[p.tag] || 'var(--magenta)';
  const rawUrl = p.shopeePath ? `https://shopee.ph/${p.shopeePath}` : shopeeUrl;
  const productUrl = withUtm(rawUrl, `product_card_${p.id}`);
  return (
    <article className="card" itemScope itemType="https://schema.org/Product">
      <div className="card__media">
        <GemMedia p={p}/>
        {p.tag && (
          <span className="badge-glow" style={{ position: 'absolute', top: 12, left: 12, boxShadow: `inset 0 0 0 1px rgba(255,255,255,.18)`, color: '#fff' }}>
            <span style={{ color: tagColor, marginRight: 6 }}>●</span>{p.tag}
          </span>
        )}
      </div>
      <div className="card__body">
        <div className="card__intent">
          {p.intent} · {p.cat.replace(' & ', ' / ')}
          {p.stock !== 'In stock' && <span className="card__stock-badge">{p.stock}</span>}
        </div>
        <div className="card__name" itemProp="name">{p.name}</div>
        <p style={{ margin: 0, fontSize: 13.5, color: 'var(--ink-soft)', lineHeight: 1.5, minHeight: 40 }} itemProp="description">{p.blurb}</p>
        {p.price != null && <meta itemProp="priceCurrency" content="PHP"/>}
        {p.price != null && <meta itemProp="price" content={p.price}/>}
        <p className="card__trust">Ships nationwide · secure checkout on Shopee</p>
        <a className="btn btn--neon btn--sm btn--block" href={productUrl} target="_blank" rel="noopener" style={{ marginTop: 'auto', textDecoration: 'none' }}>
          Shop on Shopee <Ic.arrow width="15" height="15"/>
        </a>
      </div>
    </article>
  );
}
