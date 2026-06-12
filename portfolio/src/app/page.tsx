import Navbar from '@/components/layout/navbar/Navbar';
import Footer from '@/components/layout/footer/Footer';
import HeroSection from '@/components/organisms/hero/HeroSection';
import AboutSection from '@/components/organisms/about/AboutSection';
import SkillsSection from '@/components/organisms/skills/SkillsSection';
import CyberSamurai from '@/components/organisms/game/CyberSamurai';
import ProjectsSection from '@/components/organisms/projects/ProjectsSection';
import WorkSection from '@/components/organisms/work/WorkSection';
import ExperienceSection from '@/components/organisms/experience/ExperienceSection';
import ContactSection from '@/components/organisms/contact/ContactSection';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <CyberSamurai />
        <ProjectsSection />
        <WorkSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
