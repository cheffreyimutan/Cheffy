import { Spark } from './Icons';

export function hexA(hex, a) {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0,2),16), g = parseInt(h.slice(2,4),16), b = parseInt(h.slice(4,6),16);
  return `rgba(${r},${g},${b},${a})`;
}

export function GemGlyph({ c1, c2, size = '62%', glow = true }) {
  const gid = 'g' + Math.random().toString(36).slice(2, 8);
  return (
    <svg viewBox="0 0 100 100" style={{ width: size, height: size, overflow: 'visible' }} aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0" stopColor={c1}/>
          <stop offset="1" stopColor={c2}/>
        </linearGradient>
      </defs>
      {glow && <ellipse cx="50" cy="58" rx="34" ry="30" fill={c2} opacity="0.28" style={{ filter: 'blur(10px)' }}/>}
      <g stroke="rgba(255,255,255,.45)" strokeWidth="0.8" strokeLinejoin="round">
        <polygon points="30,30 70,30 85,46 50,90 15,46" fill={`url(#${gid})`}/>
        <polygon points="30,30 50,46 70,30" fill="#ffffff" opacity="0.20"/>
        <polygon points="15,46 50,46 30,30" fill="#ffffff" opacity="0.10"/>
        <polygon points="85,46 50,46 70,30" fill="#000000" opacity="0.10"/>
        <polygon points="15,46 50,46 50,90" fill="#000000" opacity="0.08"/>
        <polygon points="85,46 50,46 50,90" fill="#000000" opacity="0.16"/>
      </g>
      <path d="M37 37 L46 44" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" opacity="0.6"/>
    </svg>
  );
}

export function GemMedia({ p }) {
  if (p.img) return <img src={p.img} alt={p.name} loading="lazy"/>;
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center',
      background: `radial-gradient(120% 120% at 50% 18%, ${hexA(p.c1,.30)}, ${hexA(p.c2,.14)} 60%, #fff 100%)` }}>
      <Spark size={13} color={hexA(p.c1,.8)} style={{ position: 'absolute', top: '16%', left: '18%' }}/>
      <Spark size={9}  color={hexA(p.c2,.7)} style={{ position: 'absolute', top: '24%', right: '22%' }}/>
      <GemGlyph c1={p.c1} c2={p.c2}/>
    </div>
  );
}
