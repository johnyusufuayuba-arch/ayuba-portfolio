import FadeIn from './FadeIn';
import { GraduationCap, Award } from 'lucide-react';

interface Edu {
  institution: string;
  qualification: string;
  location: string;
  dates: string;
  note?: string;
}

interface Cert {
  name: string;
  issuer: string;
  year: string;
}

const EDUCATION: Edu[] = [
  {
    institution: 'Nottingham Trent University',
    qualification: 'BSc (Hons) Computer Science',
    location: 'Nottingham, UK',
    dates: '2024 — Present',
    note: 'Seeking 2026 placement',
  },
  {
    institution: 'INTO Manchester',
    qualification: 'Foundation in Science and Engineering',
    location: 'Manchester, UK',
    dates: '2022 — 2023',
  },
];

const CERTIFICATES: Cert[] = [
  { name: 'Fundamentals in Ethical Hacking', issuer: 'Bizmarrow Technologies', year: '2022' },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative px-5 sm:px-8 md:px-10 py-20 sm:py-24"
      style={{ background: '#0C0C0C' }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10 sm:gap-12">
        <FadeIn
          as="h2"
          delay={0}
          y={40}
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
        >
          <span style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>Education</span>
        </FadeIn>

        {/* Education cards */}
        <div className="w-full flex flex-col gap-5 sm:gap-6">
          {EDUCATION.map((e, i) => (
            <FadeIn key={e.institution} delay={i * 0.1} y={30} className="w-full">
              <div className="rounded-[28px] sm:rounded-[36px] border-2 border-[#D7E2EA]/30 p-6 sm:p-8 flex items-start gap-5 sm:gap-7">
                <div className="shrink-0 rounded-2xl border border-[#D7E2EA]/30 p-3 sm:p-4">
                  <GraduationCap size={26} strokeWidth={1.75} className="text-[#D7E2EA]" />
                </div>
                <div className="min-w-0 flex-1 flex flex-col gap-2">
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                    <h3
                      className="text-[#D7E2EA] font-medium uppercase tracking-wide"
                      style={{ fontSize: 'clamp(1.05rem, 2.2vw, 1.85rem)' }}
                    >
                      {e.institution}
                    </h3>
                    <div className="flex flex-col items-start sm:items-end shrink-0">
                      <span className="text-[#D7E2EA]/70 uppercase tracking-widest text-xs sm:text-sm whitespace-nowrap">
                        {e.dates}
                      </span>
                      <span className="text-[#D7E2EA]/40 uppercase tracking-widest text-[0.65rem] sm:text-xs whitespace-nowrap">
                        {e.location}
                      </span>
                    </div>
                  </div>
                  <p
                    className="text-[#D7E2EA]/80 font-light"
                    style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)' }}
                  >
                    {e.qualification}
                  </p>
                  {e.note && (
                    <div className="mt-1">
                      <span className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA]/25 bg-[#D7E2EA]/[0.04] px-3.5 py-1.5">
                        <span
                          className="avail-dot inline-block w-1.5 h-1.5 rounded-full"
                          style={{ background: '#5BD17F' }}
                        />
                        <span className="text-[#D7E2EA]/80 uppercase tracking-widest text-[0.6rem] sm:text-[0.7rem]">
                          {e.note}
                        </span>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Certifications */}
        <FadeIn delay={0.1} y={30} className="w-full flex flex-col gap-4">
          <h3 className="text-[#D7E2EA]/60 uppercase tracking-widest text-sm sm:text-base">
            Certifications
          </h3>
          <div className="flex flex-col gap-3 sm:gap-4">
            {CERTIFICATES.map((c) => (
              <div
                key={c.name}
                className="rounded-2xl sm:rounded-[24px] border border-[#D7E2EA]/20 p-4 sm:p-5 flex items-center gap-4"
              >
                <div className="shrink-0 rounded-xl border border-[#D7E2EA]/25 p-2.5">
                  <Award size={22} strokeWidth={1.75} className="text-[#D7E2EA]" />
                </div>
                <div className="min-w-0 flex-1">
                  <p
                    className="text-[#D7E2EA] font-medium uppercase tracking-wide"
                    style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.35rem)' }}
                  >
                    {c.name}
                  </p>
                  <p className="text-[#D7E2EA]/55 tracking-wide text-sm sm:text-base">
                    {c.issuer}
                  </p>
                </div>
                <span className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs sm:text-sm shrink-0">
                  {c.year}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
