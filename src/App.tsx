import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <main style={{ background: '#0C0C0C', overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <EducationSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
