import FadeIn from './FadeIn';
import ContactButton from './ContactButton';
import CVButton from './CVButton';
import TypewriterText from './TypewriterText';
import Starfield from './Starfield';

const NAV_LINKS = ['About', 'Services', 'Work', 'Contact'];
const TAGLINE =
  'a full-stack developer building striking, production-ready web apps and e-commerce';

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: '#050509' }}
    >
      <Starfield />

      {/* Navbar */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="relative z-20 flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
          >
            {link}
          </a>
        ))}
      </FadeIn>

      {/* Centred hero content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-10 py-12">
        {/* Availability pill */}
        <FadeIn delay={0.15} y={20}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 rounded-full border border-[#D7E2EA]/30 bg-[#D7E2EA]/[0.04] px-4 py-2 mb-6 sm:mb-8 w-fit transition-colors duration-200 hover:bg-[#D7E2EA]/[0.08]"
          >
            <span
              className="avail-dot inline-block w-2 h-2 rounded-full"
              style={{ background: '#5BD17F', boxShadow: '0 0 8px #5BD17F' }}
            />
            <span className="text-[#D7E2EA] uppercase tracking-widest text-[0.65rem] sm:text-xs">
              Open to 2026 placement
            </span>
          </a>
        </FadeIn>

        {/* Typewriter name */}
        <h1
          className="font-black uppercase tracking-tight leading-[1.02] mb-6 sm:mb-8"
          style={{ fontSize: 'clamp(2.5rem, 8.5vw, 7.5rem)' }}
        >
          <TypewriterText
            text="Hi, I'm Ayuba Yusufu"
            textClassName="hero-heading"
            speed={70}
            startDelay={350}
          />
        </h1>

        {/* Typewriter tagline (types in after the name) */}
        <TypewriterText
          text={TAGLINE}
          speed={22}
          startDelay={1850}
          className="block text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[420px] sm:max-w-[520px] mb-8 sm:mb-10"
          style={{ fontSize: 'clamp(0.8rem, 1.5vw, 1.5rem)' }}
        />

        {/* Calls to action */}
        <FadeIn delay={1.1} y={20} className="flex flex-wrap items-center gap-4">
          <ContactButton />
          <CVButton />
        </FadeIn>
      </div>
    </section>
  );
}
