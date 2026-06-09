import { useMemo } from 'react';

interface Star {
  top: number;
  left: number;
  size: number;
  opacity: number;
  twinkle: boolean;
  delay: number;
  dur: number;
}

/**
 * One continuous deep-space backdrop for the whole page: soft nebula glows
 * layered at different scroll depths plus a calm starfield (only some stars
 * twinkle, to stay subtle). Spans the full document height behind all content.
 */
export default function SpaceBackground() {
  const stars = useMemo<Star[]>(() => {
    const out: Star[] = [];
    for (let i = 0; i < 200; i += 1) {
      out.push({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 1.6 + 0.5,
        opacity: 0.12 + Math.random() * 0.5,
        twinkle: Math.random() < 0.28,
        delay: Math.random() * 6,
        dur: 3 + Math.random() * 5,
      });
    }
    return out;
  }, []);

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          background: [
            'radial-gradient(45% 26% at 20% 5%, rgba(118,33,176,0.18), transparent 60%)',
            'radial-gradient(40% 20% at 84% 20%, rgba(20,60,150,0.15), transparent 55%)',
            'radial-gradient(45% 22% at 12% 45%, rgba(33,80,176,0.12), transparent 60%)',
            'radial-gradient(48% 22% at 88% 66%, rgba(118,33,176,0.12), transparent 55%)',
            'radial-gradient(46% 20% at 28% 88%, rgba(20,60,150,0.13), transparent 55%)',
          ].join(', '),
        }}
      />
      {stars.map((s, i) => (
        <span
          key={i}
          className={`absolute rounded-full bg-white${s.twinkle ? ' star' : ''}`}
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.dur}s`,
          }}
        />
      ))}
    </div>
  );
}
