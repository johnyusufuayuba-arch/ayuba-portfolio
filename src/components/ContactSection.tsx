import FadeIn from './FadeIn';
import ContactButton from './ContactButton';

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/johnyusufuayuba-arch' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ayuba-john-yusufu-4b2133363',
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-10 px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <div className="flex flex-col items-center gap-10 sm:gap-12 md:gap-14">
        <FadeIn
          as="h2"
          delay={0}
          y={40}
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
        >
          <span style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>Contact</span>
        </FadeIn>

        <FadeIn
          as="p"
          delay={0.1}
          y={20}
          className="text-center font-light leading-relaxed max-w-[560px]"
        >
          <span style={{ color: '#D7E2EA', fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}>
            Have a project in mind or a placement opportunity? Let&apos;s talk.
          </span>
        </FadeIn>

        <FadeIn delay={0.2} y={20}>
          <ContactButton />
        </FadeIn>

        <FadeIn delay={0.3} y={20} className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block shrink-0 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors duration-200 hover:bg-[#D7E2EA]/10"
            >
              {link.label}
            </a>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
