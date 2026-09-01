import { useState } from 'react';
import { Ic } from './Icons';

// Submits straight into the Shopify store's own customer/newsletter list
// (the same list the footer signup on shop.cheffyscrystals.com feeds) via a
// plain cross-domain form POST — forms aren't subject to CORS, so this works
// without any third-party form service or new credentials. Opens Shopify's
// confirmation in a new tab so visitors don't lose their place here, same
// pattern as every other outbound "Shop" link on this site.
export function EmailCapture() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-cosmic section--tight" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="nebula"></div>
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="email-capture reveal">
          <div>
            <p className="eyebrow" style={{ color: 'var(--gold)' }}>✦ Get 10% off your first direct order</p>
            <h2 className="display-m" style={{ marginTop: 10, fontSize: 'clamp(22px,3vw,32px)' }}>Join the crystal community.</h2>
            <p style={{ color: 'var(--muted)', marginTop: 10, maxWidth: 420, fontSize: 15 }}>
              Leave your email for restock alerts, new stone drops, and a 10% code for your first order direct from Cheffy's.
            </p>
          </div>
          {submitted ? (
            <div className="email-capture__success" role="status">
              <Ic.check width="18" height="18"/>
              Almost there — check the tab that just opened to confirm your email.
            </div>
          ) : (
            <form
              className="email-capture__form"
              action="https://shop.cheffyscrystals.com/contact#newsletter"
              method="post"
              target="_blank"
              onSubmit={() => setSubmitted(true)}
            >
              <input type="hidden" name="form_type" value="customer"/>
              <input type="hidden" name="utf8" value="✓"/>
              <input type="hidden" name="contact[tags]" value="newsletter"/>
              <input
                type="email"
                name="contact[email]"
                placeholder="you@email.com"
                required
                aria-label="Email address"
              />
              <button type="submit" className="btn btn--neon">Get 10% off <Ic.arrow/></button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
