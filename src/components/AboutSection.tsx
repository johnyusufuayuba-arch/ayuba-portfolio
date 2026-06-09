import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';
import ProfileAvatar from './ProfileAvatar';

const ABOUT_TEXT =
  "I'm Ayuba, a Computer Science student in Nottingham and a full-stack web developer. I'm the remote tech lead for Sayd Hub, a live e-commerce store I built on Next.js and Vercel, and I take on freelance web projects too. I'm currently looking for a 2026 placement year. Let's build something great together!";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
    >
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <div className="flex flex-col items-center gap-6 sm:gap-8">
            <FadeIn delay={0} y={20}>
              <ProfileAvatar />
            </FadeIn>

            <FadeIn
              as="h2"
              delay={0.05}
              y={40}
              className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            >
              <span style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>About me</span>
            </FadeIn>
          </div>

          <AnimatedText
            text={ABOUT_TEXT}
            className="text-center font-medium leading-relaxed max-w-[560px]"
            style={{
              color: '#D7E2EA',
              fontSize: 'clamp(1rem, 2vw, 1.35rem)',
            }}
          />
        </div>

        <FadeIn delay={0.2} y={20} className="mt-16 sm:mt-20 md:mt-24">
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
