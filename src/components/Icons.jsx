export const Ic = {
  cart:     (p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2.5 3h2l2.3 12.2a1.6 1.6 0 0 0 1.6 1.3h8.4a1.6 1.6 0 0 0 1.6-1.3L21 7H6"/></svg>,
  search:   (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...p}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.2-3.2"/></svg>,
  menu:     (p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...p}><path d="M3 6h18M3 12h18M3 18h18"/></svg>,
  x:        (p) => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...p}><path d="M6 6l12 12M18 6L6 18"/></svg>,
  plus:     (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" {...p}><path d="M12 5v14M5 12h14"/></svg>,
  minus:    (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" {...p}><path d="M5 12h14"/></svg>,
  star:     (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2.2l2.9 6.1 6.6.8-4.9 4.5 1.3 6.6L12 17.9 6.1 20.8l1.3-6.6L2.5 9.1l6.6-.8z"/></svg>,
  truck:    (p) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M2 6.5h11v9H2zM13 9h4l3 3v3.5h-7z"/><circle cx="6.5" cy="17.5" r="1.7"/><circle cx="17" cy="17.5" r="1.7"/></svg>,
  shield:   (p) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 2.5l8 3v6c0 5-3.5 8.3-8 10-4.5-1.7-8-5-8-10v-6z"/><path d="m8.7 12 2.2 2.2 4.4-4.4"/></svg>,
  heart:    (p) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 20s-7-4.4-9.2-8.6C1.2 8 3 4.8 6.2 4.8c2 0 3.2 1.1 3.8 2.2.6-1.1 1.8-2.2 3.8-2.2 3.2 0 5 3.2 3.4 6.6C19 15.6 12 20 12 20z"/></svg>,
  sparkles: (p) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 3l1.6 4.6L18 9l-4.4 1.4L12 15l-1.6-4.6L6 9l4.4-1.4z"/><path d="M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8z"/></svg>,
  leaf:     (p) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M4 20c0-8 6-14 16-14 0 10-6 14-14 14"/><path d="M4 20c2-4 5-7 9-9"/></svg>,
  chevron:  (p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m6 9 6 6 6-6"/></svg>,
  arrow:    (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12h14M13 6l6 6-6 6"/></svg>,
  pin:      (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z"/><circle cx="12" cy="10" r="2.4"/></svg>,
  check:    (p) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12.5l4.5 4.5L19 6.5"/></svg>,
};

export function Spark({ size = 18, color = 'var(--gold)', style, className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill={color} style={style} aria-hidden="true">
      <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0z"/>
    </svg>
  );
}

export const SocialGlyph = {
  Shopee:    (p) => <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...p}><path d="M12 2.2c-2.3 0-4.1 1.9-4.2 4.2H4.7c-.5 0-.9.4-1 .9l-.8 12.1c0 1.2.9 2.2 2.1 2.3h13.9c1.2-.1 2.2-1.1 2.1-2.3l-.8-12.1c0-.5-.5-.9-1-.9h-3.1C16.1 4.1 14.3 2.2 12 2.2zm0 1.8c1.3 0 2.3 1 2.4 2.4H9.6C9.7 5 10.7 4 12 4zm-.3 6c1.9 0 3.2 1 3.2 2.6 0 1.4-1.1 2.2-2.5 2.6-1 .3-1.4.5-1.4.9 0 .4.4.6 1.1.6.7 0 1.4-.2 1.9-.5l.4 1.5c-.6.3-1.5.5-2.4.5-1.9 0-3.1-1-3.1-2.5 0-1.3 1-2.2 2.5-2.6 1-.3 1.4-.5 1.4-.9 0-.4-.4-.6-1.1-.6-.8 0-1.7.3-2.2.6l-.4-1.5c.6-.4 1.6-.7 2.7-.7z"/></svg>,
  TikTok:    (p) => <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" {...p}><path d="M16.6 5.8c-1-.7-1.7-1.7-1.9-3h-2.5v10.3c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5c.3 0 .5 0 .8.1V7.6c-.3 0-.5-.1-.8-.1-2.8 0-5 2.3-5 5s2.2 5 5 5 5-2.3 5-5V8.9c1 .7 2.2 1.1 3.5 1.1V7.5c-.7 0-1.4-.2-2.1-.6z"/></svg>,
  Instagram: (p) => <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="3.6"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor"/></svg>,
};

export const SOCIALS = [
  { name: 'Shopee',    color: '#EE4D2D', url: 'https://shopee.ph/cheffyyyy' },
  { name: 'TikTok',   color: '#25F4EE', url: 'https://tiktok.com/@cheffyscrystals' },
  { name: 'Instagram',color: '#FF2E9A', url: 'https://www.instagram.com/cheffyscrystals/' },
];
