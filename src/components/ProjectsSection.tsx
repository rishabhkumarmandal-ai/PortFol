import { useState } from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'websites', label: 'Websites' },
    { id: 'apps', label: 'Mobile Apps' },
    { id: 'iot', label: 'IoT & Embedded' },
    { id: 'ai', label: 'AI, Analytics & Backend' },
  ];

  const projects = [
    {
      id: 1,
      title: 'AI Agri-Sarthi Platfrom',
      category: 'ai',
      image: '/img/agri.png',
      technologies: ['AI/ML', 'CNN', 'Speech Recognition', 'LLM'],
      github: 'https://github.com/rishabhkumarmandal-ai/AI_Farmer_agri_sarthi',
      demo: 'https://www.youtube.com/embed/gfiHIPiuoQo?si=MGCbu0zVw5b-Txvn',
      date: '2025'
    },
    {
      id: 2,
      title: 'AI Dermatology Expert System',
      category: 'ai',
      image: '/img/skin.png',
      technologies: ['AI/ML', 'CNN', 'Rule-Based', 'Knowledge Base', 'LLM'],
      github: 'https://github.com/rishabhkumarmandal-ai/AI-Driven-Skin-Disease-Diagnosis-and-Holistic-Treatment-System',
      demo: 'https://www.youtube.com/embed/H8-Q8Q2ZasQ?si=XkSzHt80hyQM9OBW',
      date: '2024'
    },
    {
      id: 3,
      title: 'AI Mathematician',
      category: 'ai',
      image: '/img/maths.png',
      technologies: ['AI', 'React', 'NLP', 'Handwritting Recognition'],
      github: 'https://github.com/rishabhkumarmandal-ai/calculator',
      demo: 'https://calc-fe.vercel.app/',
      date: '2025'
    },
    {
      id: 4,
      title: 'StreeSaathi App',
      category: 'apps',
      image: '/img/stree.png',
      technologies: ['Android', 'iOS', 'React', 'supply chain', 'E-commerece'],
      github: 'https://github.com/rishabhkumarmandal-ai/streesaathi',
      demo: 'https://calc-fe.vercel.app/',
      date: '2025'
    },
    {
      id: 5,
      title: 'Devbhoomi Hyperloop',
      category: 'iot',
      image: '/img/speed.png',
      technologies: ['engineering', 'Sustainaiabilty', 'Mobile App', 'Hyperloop'],
      github: 'https://github.com/rishabhkumarmandal-ai/Speed-measure-dashboard',
      demo: 'https://youtu.be/pUo7h_fB7Ts',
      date: '2025'
    },
    {
      id: 6,
      title: 'Hi-Tech Waste Segregator ',
      category: 'iot',
      image: '/img/dustbin.png',
      technologies: ['Raspberry-Pi ', 'BLE', 'Sensor', 'Waste -Segregation'],
      github: 'https://github.com/rishabhkumarmandal-ai/Hi-Tech-Waste-Segregator',
      demo: 'https://www.youtube.com/embed/aL-hPfCvJnk?si=qNKDR0JeQjse2kAU',
      date: '2023'
    },
    {
      id: 7,
      title: 'AI-Driven Multi Chambered Filtration System',
      category: 'iot',
      image: '/img/water.png',
      technologies: ['Water Treatment', 'Sensors', 'Filtration', 'Automation'],
      github: 'https://github.com/rishabhkumarmandal-ai/AI-Driven-Multi-Chambered-Filtration-System',
      demo: '/img/architect.png',
      date: '2023'
    },
    {
      id: 9,
      title: 'UPSC Freind',
      category: 'websites',
      image: '/img/upsc.png',
      technologies: ['Next.js', 'MERN stack', 'Automation'],
      github: '   ',
      demo: 'https://youtu.be/UePQi256244',
      date: '2023'
    },

    {
      id: 10,
      title: 'Chronic Diseases Detection System through Prakriti Analysis',
      category: 'ai',
      image: '/img/ayur.png',
      technologies: ['Computer Vision', 'LLM', 'NLP', 'Tensorflow'],
      github: '   ',
      demo: 'https://drive.google.com/file/d/1ri0_KM-3w6q4HORxyLxv2co78N8U__Y6/view?usp=drive_link',
      date: '2025'
    },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-ocean-400 bg-clip-text text-transparent">
            Personal Projects
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A showcase of my work across different technologies and domains
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${activeCategory === category.id
                  ? 'bg-ocean-500 text-white'
                  : 'border-ocean-400 text-ocean-400 hover:bg-ocean-500 hover:text-white'
                }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Horizontal Scroll */}
        <div className="-mx-2 flex snap-x snap-mandatory gap-8 overflow-x-auto px-2 pb-4">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group w-[320px] basis-[320px] shrink-0 snap-start overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:scale-[1.02] hover:border-ocean-400/50 md:w-[340px] md:basis-[340px] lg:w-[360px] lg:basis-[360px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                {/* âœ… Changed line below â€” added rounded-[30%] */}
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                  className="w-full h-70 object-cover transition-transform duration-500 group-hover:scale-110 rounded-[10%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors hover:bg-black"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors hover:bg-green-800"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-ocean-300 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-white/60 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {project.date}
                  </div>
                </div>

                <p className="text-white/80 mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-ocean-500/20 text-ocean-300 text-xs rounded-full border border-ocean-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
