import { useMemo } from 'react';

interface Star {
  top: number;
  left: number;
  size: number;
  delay: number;
  dur: number;
  opacity: number;
}

/**
 * Decorative deep-space backdrop: a soft nebula glow plus a field of
 * twinkling stars. Purely visual — aria-hidden and non-interactive.
 */
export default function Starfield() {
  const stars = useMemo<Star[]>(() => {
    const out: Star[] = [];
    for (let i = 0; i < 120; i += 1) {
      out.push({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 0.6,
        delay: Math.random() * 5,
        dur: 2.5 + Math.random() * 4,
        opacity: 0.25 + Math.random() * 0.7,
      });
    }
    return out;
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Nebula glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 24% 16%, rgba(118,33,176,0.22), transparent 60%), radial-gradient(55% 45% at 82% 72%, rgba(20,60,150,0.20), transparent 55%)',
        }}
      />
      {/* Stars */}
      {stars.map((s, i) => (
        <span
          key={i}
          className="star absolute rounded-full bg-white"
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
