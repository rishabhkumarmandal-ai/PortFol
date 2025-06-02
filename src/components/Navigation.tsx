import { useState, useEffect } from 'react';
import { Menu, X, User, FolderOpen, Award, GraduationCap, Mail, Sun, Moon, BookOpen, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isDark, setIsDark] = useState(true);

  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'experience', label: 'Experience', icon: Award },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'publications', label: 'Publications', icon: BookOpen },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
          <div className="flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 rounded-hover ${
                    activeSection === item.id
                      ? 'bg-ocean-500 text-white'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  <Icon size={18} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="sm"
              className="text-white/70 hover:text-white rounded-full rounded-hover"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-6 right-6 z-50 md:hidden">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 rounded-full w-12 h-12 rounded-hover"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="absolute top-20 right-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 rounded-hover ${
                      activeSection === item.id
                        ? 'bg-ocean-500 text-white'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
              <Button
                onClick={toggleTheme}
                variant="ghost"
                className="flex items-center space-x-3 px-4 py-3 text-white/70 hover:text-white rounded-xl justify-start rounded-hover"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
                <span className="font-medium">Toggle Theme</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
