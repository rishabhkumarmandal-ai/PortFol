import { useEffect } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import PublicationsSection from '@/components/PublicationsSection';
import AchievementsSection from '@/components/AchievementsSection';
import GlimpsesSection from '@/components/GlimpsesSection';
import BeyondCodeSection from '@/components/BeyondCodeSection';
import MyReadsSection from '@/components/MyReadsSection';
import ContactSection from '@/components/ContactSection';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  useEffect(() => {
    // Add dark class to html element
    document.documentElement.classList.add('dark');

    // Custom cursor functionality
    const cursor = document.createElement('div');
    const cursorDot = document.createElement('div');
    
    cursor.className = 'custom-cursor';
    cursorDot.className = 'custom-cursor-dot';
    
    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      cursorDot.style.left = (e.clientX - 2) + 'px';
      cursorDot.style.top = (e.clientY - 2) + 'px';
    };

    const addHoverEffect = () => {
      cursor.classList.add('hover');
    };

    const removeHoverEffect = () => {
      cursor.classList.remove('hover');
    };

    document.addEventListener('mousemove', moveCursor);
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', addHoverEffect);
      el.addEventListener('mouseleave', removeHoverEffect);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', addHoverEffect);
        el.removeEventListener('mouseleave', removeHoverEffect);
      });
      cursor.remove();
      cursorDot.remove();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <PublicationsSection />
        <AchievementsSection />
        <GlimpsesSection />
        <BeyondCodeSection />
        <MyReadsSection />
        <ContactSection />
      </main>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-ocean-500 hover:bg-ocean-600 text-white shadow-lg transition-all duration-300 transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} />
      </Button>

      {/* Footer */}
      <footer className="relative z-10 bg-black/20 backdrop-blur-sm py-8 mt-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60">
            © 2024 Rishabh Kumar Mandal. All rights reserved.
          </p>
          <p className="text-white/40 text-sm mt-2">
            Love to Design the Web, Build the Future and Explore the Universe
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
