import { Github } from 'lucide-react';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

interface Project {
  num: string;
  category: string;
  name: string;
  liveUrl?: string;
  repoUrl?: string;
  // Image card (live project)
  col1?: [string, string];
  col2?: string;
  // Code card (coursework / systems project)
  blurb?: string;
  tech?: string[];
  features?: string[];
}

const PROJECTS: Project[] = [
  {
    num: '01',
    category: 'Live',
    name: 'Sayd Hub',
    liveUrl: 'https://saydhub.net',
    col1: ['/projects/saydhub-1.png', '/projects/saydhub-2.png'],
    col2: '/projects/saydhub-3.png',
  },
  {
    num: '02',
    category: 'Coursework',
    name: 'Cloud-Based Load Balancer',
    repoUrl: 'https://github.com/johnyusufuayuba-arch/cloud-load-balancer',
    blurb:
      'A JavaFX + Docker app that spreads file operations across a cluster of containers, deciding what runs where and when so the system stays fast and reliable under load.',
    tech: ['Java', 'JavaFX', 'Docker', 'JSch / SSH', 'MQTT', 'MySQL', 'SQLite', 'AES'],
    features: [
      'Real CPU scheduling — FCFS, Shortest Job Next, Round Robin',
      'SSH health checks with automatic failover',
      'AES-encrypted distributed file storage',
    ],
  },
  {
    num: '03',
    category: 'Coursework',
    name: 'Warehouse Inventory System',
    repoUrl: 'https://github.com/johnyusufuayuba-arch/warehouse-inventory-system',
    blurb:
      'A C++ inventory system for warehouse stock, suppliers and orders, with role-based access and file persistence between sessions.',
    tech: ['C++17', 'STL', 'CMake', 'CSV persistence', 'Unit tests', 'UML'],
    features: [
      'Clean six-class OOP architecture',
      'Documented with a full UML suite',
      'Custom unit-test suite',
    ],
  },
];

function RepoButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 shrink-0 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-3 sm:px-8 sm:py-3.5 text-xs sm:text-sm md:text-base transition-colors duration-200 hover:bg-[#D7E2EA]/10"
    >
      <Github size={18} strokeWidth={2} />
      View Code
    </a>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const isCode = !!project.repoUrl;

  return (
    <FadeIn y={40} className="w-full">
      <div
        className="relative w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8"
        style={{ background: '#0C0C0C' }}
      >
        {/* Top row */}
        <div className="flex items-center justify-between gap-4 mb-4 sm:mb-6">
          <div className="flex items-center gap-4 sm:gap-6 min-w-0">
            <span
              className="font-black leading-none shrink-0 text-[#D7E2EA]"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.num}
            </span>
            <div className="min-w-0">
              <div className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm">
                {project.category}
              </div>
              <div
                className="text-[#D7E2EA] font-medium uppercase truncate"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {project.name}
              </div>
            </div>
          </div>
          {project.repoUrl ? (
            <RepoButton href={project.repoUrl} />
          ) : (
            <LiveProjectButton href={project.liveUrl} />
          )}
        </div>

        {isCode ? (
          /* Code-project body: description, tech tags, key features */
          <div className="flex flex-col gap-5 sm:gap-6 px-1 sm:px-2 pb-2 sm:pb-4">
            <p
              className="text-[#D7E2EA]/80 font-light leading-relaxed max-w-3xl"
              style={{ fontSize: 'clamp(0.95rem, 1.6vw, 1.35rem)' }}
            >
              {project.blurb}
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {project.tech!.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[#D7E2EA]/25 text-[#D7E2EA]/80 uppercase tracking-wider text-[0.65rem] sm:text-xs px-3 py-1.5"
                >
                  {t}
                </span>
              ))}
            </div>
            <ul className="flex flex-col gap-2.5">
              {project.features!.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-[#D7E2EA]/70"
                  style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)' }}
                >
                  <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-[#D7E2EA]/50 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          /* Image grid (live project) */
          <div className="flex gap-3 sm:gap-4">
            <div className="flex flex-col gap-3 sm:gap-4" style={{ width: '40%' }}>
              <img
                src={project.col1![0]}
                alt={`${project.name} preview 1`}
                loading="lazy"
                className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
                style={{ height: 'clamp(130px, 16vw, 230px)' }}
              />
              <img
                src={project.col1![1]}
                alt={`${project.name} preview 2`}
                loading="lazy"
                className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
                style={{ height: 'clamp(160px, 22vw, 340px)' }}
              />
            </div>
            <div style={{ width: '60%' }}>
              <img
                src={project.col2!}
                alt={`${project.name} preview 3`}
                loading="lazy"
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              />
            </div>
          </div>
        )}
      </div>
    </FadeIn>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="work"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-12 sm:mb-16"
      >
        <span style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>Projects</span>
      </FadeIn>

      <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.num} project={project} />
        ))}
      </div>
    </section>
  );
}
