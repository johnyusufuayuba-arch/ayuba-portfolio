import { useEffect, useRef, useState } from 'react';

interface Tech {
  name: string;
  slug: string; // simpleicons.org slug
}

const TECHS: Tech[] = [
  { name: 'React', slug: 'react' },
  { name: 'Next.js', slug: 'nextdotjs' },
  { name: 'TypeScript', slug: 'typescript' },
  { name: 'JavaScript', slug: 'javascript' },
  { name: 'Python', slug: 'python' },
  { name: 'Java', slug: 'openjdk' },
  { name: 'C++', slug: 'cplusplus' },
  { name: 'Tailwind CSS', slug: 'tailwindcss' },
  { name: 'Framer Motion', slug: 'framer' },
  { name: 'Supabase', slug: 'supabase' },
  { name: 'MySQL', slug: 'mysql' },
  { name: 'SQLite', slug: 'sqlite' },
  { name: 'Docker', slug: 'docker' },
  { name: 'Git', slug: 'git' },
  { name: 'Vercel', slug: 'vercel' },
];

const ROW_1 = TECHS.slice(0, 7);
const ROW_2 = TECHS.slice(7);

function Chip({ tech }: { tech: Tech }) {
  return (
    <div
      className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-[#D7E2EA]/15 bg-[#D7E2EA]/[0.03] px-5 sm:px-7 py-3.5 sm:py-4"
      style={{ flexShrink: 0 }}
    >
      <img
        src={`https://cdn.simpleicons.org/${tech.slug}/D7E2EA`}
        alt=""
        loading="lazy"
        className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
      <span
        className="text-[#D7E2EA] font-medium uppercase tracking-wide whitespace-nowrap"
        style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.25rem)' }}
      >
        {tech.name}
      </span>
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      setOffset((window.scrollY - el.offsetTop + window.innerHeight) * 0.3);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const row1 = [...ROW_1, ...ROW_1, ...ROW_1];
  const row2 = [...ROW_2, ...ROW_2, ...ROW_2];

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      <div className="flex flex-col gap-4">
        <div
          className="flex gap-4"
          style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
        >
          {row1.map((t, i) => (
            <Chip key={`r1-${i}`} tech={t} />
          ))}
        </div>
        <div
          className="flex gap-4"
          style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
        >
          {row2.map((t, i) => (
            <Chip key={`r2-${i}`} tech={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
