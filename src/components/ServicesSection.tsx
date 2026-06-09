import FadeIn from './FadeIn';

interface Service {
  num: string;
  name: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    num: '01',
    name: 'Web Development',
    description:
      'Fast, responsive, modern websites with React, Next.js and Tailwind, from landing pages to full applications.',
  },
  {
    num: '02',
    name: 'Full-Stack Apps',
    description:
      'End-to-end web apps with real databases, authentication and APIs, designed, built and deployed.',
  },
  {
    num: '03',
    name: 'E-Commerce',
    description:
      'Online stores that convert, with clean product experiences and easy content management for owners.',
  },
  {
    num: '04',
    name: 'Systems & Software',
    description: 'Backend systems, data handling and desktop tools in Java and C++.',
  },
  {
    num: '05',
    name: 'UI Design',
    description: 'Clean, modern interfaces with care for layout, typography and motion.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <h2
        className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.num} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-5 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
              style={{ borderBottom: '1px solid rgba(12, 12, 12, 0.15)' }}
            >
              <span
                className="font-black leading-none shrink-0"
                style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.num}
              </span>
              <div className="flex flex-col gap-3 pt-1 sm:pt-2">
                <h3
                  className="font-medium uppercase"
                  style={{ color: '#0C0C0C', fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{
                    color: '#0C0C0C',
                    opacity: 0.6,
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
