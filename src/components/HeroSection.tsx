
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = 'Engineer- that creates solutions ';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Profile Image - Left Side */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start order-1 lg:order-1">
              <div className="relative">
                <div className="w-64 h-64 lg:w-80 lg:h-80 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-ocean-400 to-ocean-600 rounded-full animate-pulse"></div>
                  <img
                    src="/img/mee.jpeg"
                    alt="Rishabh Kumar Mandal"
                    className="w-full h-full object-cover rounded-full border-4 border-white/20 relative z-10"
                  />
                  <div className="absolute -inset-4 bg-gradient-to-r from-ocean-400 via-blue-500 to-blue-700 rounded-full opacity-20 animate-float"></div>
                </div>
              </div>
            </div>

            {/* Content - Right Side */}
            <div className="lg:col-span-8 text-center lg:text-left order-2 lg:order-2">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-ocean-200 to-blue-400 bg-clip-text text-transparent animate-fade-in">
                Rishabh Kumar Mandal
              </h1>
              
              <div className="text-xl md:text-3xl lg:text-4xl text-ocean-300 mb-6 h-12 flex items-center justify-center lg:justify-start">
                <span className="border-r-2 border-ocean-400 pr-2 animate-pulse">
                  {text}
                </span>
              </div>

              <p className="text-base md:text-lg lg:text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in">
               "Success isn’t always about greatness. It’s about consistency. Consistent hard work gains success. Greatness will come." — Dwayne Johnson
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <a 
  href="/img/" 
  download="Rishabh-cv.pdf"
>
  <Button className="bg-ocean-500 hover:bg-ocean-600 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
    <Download className="mr-2" size={18} />
    Download Resume
  </Button>
</a>

                <a 
                  href="https://www.linkedin.com/in/rishabh-kumar-mandal-2470b0272"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="outline" 
                    className="border-ocean-400 text-ocean-400 hover:bg-ocean-500 hover:text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    View My Work
                  </Button>
                </a>
              </div>

              <div className="flex gap-4 justify-center lg:justify-start">
                <a 
                  href="https://github.com/rishabhkumarmandal-ai" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-ocean-500 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/rishabh-kumar-mandal-2470b0272" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-ocean-500 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/smart.coders.lab/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-ocean-500 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=100081894836003" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-ocean-500 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:rishabh@aicentre.org" 
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-ocean-500 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} className="text-white/60 hover:text-white transition-colors">
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
