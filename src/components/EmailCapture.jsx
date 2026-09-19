import { Ic, SocialGlyph } from './Icons';
import { shopeeUrl, tiktokUrl, withUtm } from '../data';

function WhatsAppGlyph(p) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...p}>
      <path d="M12 2.2c-5.4 0-9.8 4.4-9.8 9.8 0 1.8.5 3.4 1.3 4.9L2.2 22l5.2-1.3c1.4.8 3 1.2 4.6 1.2 5.4 0 9.8-4.4 9.8-9.8s-4.4-9.9-9.8-9.9zm0 17.8c-1.5 0-2.9-.4-4.1-1.2l-.3-.2-2.9.8.8-2.8-.2-.3c-.9-1.3-1.3-2.8-1.3-4.4 0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-1.4-.7-2.3-1.3-3.3-2.8-.2-.3 0-.5.1-.7.1-.1.4-.4.5-.6.1-.2.1-.4 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-1 .9-1 2.3s1 2.7 1.1 2.9c.1.2 1.9 3 4.7 4.1 2.3.9 2.8.7 3.3.7.5-.1 1.4-.6 1.6-1.1.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.6-.3z"/>
    </svg>
  );
}

export function EmailCapture() {
  return (
    <section className="bg-cosmic section--tight" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="nebula"></div>
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="email-capture reveal">
          <div>
            <p className="eyebrow" style={{ color: 'var(--gold)' }}>✦ Never miss a restock</p>
            <h2 className="display-m" style={{ marginTop: 10, fontSize: 'clamp(22px,3vw,32px)' }}>Follow us for restock alerts.</h2>
            <p style={{ color: 'var(--muted)', marginTop: 10, maxWidth: 420, fontSize: 15 }}>
              Follow our Shopee and TikTok shops to get notified the moment new stones and rare finds drop — or message us directly and we'll answer any questions.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a className="btn btn--neon" href={withUtm(shopeeUrl, 'email_capture_shopee')} target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <SocialGlyph.Shopee width="16" height="16"/> Follow on Shopee <Ic.arrow/>
            </a>
            <a className="btn btn--ghost" href={withUtm(tiktokUrl, 'email_capture_tiktok')} target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <SocialGlyph.TikTok width="16" height="16"/> Follow on TikTok <Ic.arrow/>
            </a>
            <a className="btn btn--gold" href="https://wa.me/639258865615?text=Hi%20Cheffy!%20I%20have%20a%20question%20about%20your%20crystals." target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <WhatsAppGlyph/> Message us <Ic.arrow/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
