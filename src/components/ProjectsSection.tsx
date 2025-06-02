import { useState } from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'websites', label: 'Websites' },
    { id: 'iot', label: 'IoT & Embedded' },
    { id: 'ai', label: 'AI/ML+ Web Platforms' },

  ];

  const projects = [
    {
      id: 1,
      title: 'AI Agri-Sarthi Platfrom',
      category: 'ai',
      description: 'The e-commerce system that connects farmers with crop vendors and shopkeepers, along with timely alerts and notifications about government schemes and severe weather conditions through a procedural panel interface.  and the AI, it includes a crop disease prediction model where farmers can upload plant images and answer a questionnaire to receive automated treatment suggestions using a large language model (LLM). It also provides a knowledge-based system for recommending the right manures and fertilizers',
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
      description: 'AI-expert system that integrates skin image analysis with a rule-based questionnaire to deliver comprehensive, patient-centric diagnostics and treatment recommendations. The proposed system comprises two modules:  a Patient Module that enables image upload of the affected area and gathers health data via structured questionnaires, and an Expert Module powered by a dual-inference engine built on Large Language Models (LLMs). ',
      image: '/img/Skin.png',
      technologies: ['AI/ML', 'CNN', 'Rule-Based', 'Knowledge Base' , 'LLM'],
      github: 'https://github.com/rishabhkumarmandal-ai/AI-Driven-Skin-Disease-Diagnosis-and-Holistic-Treatment-System',
      demo: 'https://www.youtube.com/embed/H8-Q8Q2ZasQ?si=XkSzHt80hyQM9OBW',
      date: '2024'
    },
    {
      id: 3,
      title: 'AI Mathematician',
      category: 'ai',
      description: 'The AI-Powered Calculator is a cutting-edge tool that combines traditional calculations with AI-driven features for enhanced learning and problem-solving.',
      image: '/img/calcultor.png',
      technologies: ['AI', 'React', 'NLP','Handwritting Recognition'],
      github: 'https://github.com/rishabhkumarmandal-ai/calculator',
      demo: 'https://calc-fe.vercel.app/',
      date: '2025'
    },
    {
      id: 4,
      title: 'Dual-ThermoCryo Therapy Device',
      category: 'iot', 
      description: 'Advanced thermal therapy system with automated temperature control, user interface for mode selection, sensor feedback loops, and smart app control for therapeutic applications.',
      image: '/img/heat.png',
      technologies: ['ESP32', 'Sensors', 'Mobile App', 'Temperature Control'],
      github: 'https://github.com/rishabhkumarmandal-ai/Thermo-Cryo-Therapy-Device',
      demo: '/img/heatflow.png',
      date: '2025'
    },
    {
      id: 5,
      title: 'Alternate Nostril Breathing Device',
      category: 'iot',
      description: ' The Wearable device designed to automate nostril-specific airflow control for breathing exercises, particularly focused on practices such as Anulom Vilom. Utilizing advanced mini micro servos controlled via Bluetooth commands from a smartphone app ',
      image: '/img/nose.png',
      technologies: ['Embedded Systems', 'ESP32', 'IoT', 'Sensors', 'servomotors'],
      github: 'https://github.com/rishabhkumarmandal-ai/Nostril-Device',
      demo: '/img/kicad.png',
      date: '2025'
    },
    {
      id: 6,
      title: 'Micro Plastic Sensing Device',
      category: 'iot',
      description: ' This Device is used to detect, classify, and report microplastic contamination in water sources with high precision and in real time, without the need for laboratory infrastructure.',
      image: '/img/micro.png',
      technologies: ['Embedded Systems', 'ESP32', 'IoT', 'Sensors'],
      github: 'https://github.com/rishabhkumarmandal-ai/Micro-Plastic-Detection-Device',
      demo: 'Projects/micro2.png',
      date: '2025'
    },
    {
      id: 7,
      title: 'Hi-Tech Waste Segregator ',
      category: 'iot',
      description: 'This project presents the development of a smart dustbin designed to enhance waste management efficiency through advanced sensing and communication technologies. This smart dustbin aims to promote a more efficient and sustainable approach to waste management through the integration of IoT technologies and renewable energy solutions.',
      image: '/img/dustbin.png',
      technologies: ['Raspberry-Pi ', 'BLE', 'Sensor', 'Waste -Segregation'],
      github: 'https://github.com/rishabhkumarmandal-ai/Hi-Tech-Waste-Segregator',
      demo: 'https://www.youtube.com/embed/aL-hPfCvJnk?si=qNKDR0JeQjse2kAU' ,
      date: '2023'
    },
    {
      id: 8,
      title: 'AI-Driven Multi Chambered Filtration System',
      category: 'iot',
      description: 'Our  invention is a multi-stage, intelligent filtration system designed to provide high-quality drinking water through six key processes distributed across four chambers. The system integrates IoT technology for real-time impurity detection, allowing it to adjust the filtration process based on water quality dynamically.',
      image: '/img/water.png',
      technologies: ['Water Treatment', 'Sensors', 'Filtration', 'Automation'],
      github: 'https://github.com/rishabhkumarmandal-ai/AI-Driven-Multi-Chambered-Filtration-System',
      demo: '/img/architect.png',
      date: '2023'
    },
    
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-ocean-400 bg-clip-text text-transparent">
            Projects
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
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-ocean-500 text-white'
                  : 'border-ocean-400 text-ocean-400 hover:bg-ocean-500 hover:text-white'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-ocean-400/50 transition-all duration-500 transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-ocean-500 transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.demo}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-ocean-500 transition-colors"
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

                <p className="text-white/80 mb-4 text-sm">
                  {project.description}
                </p>

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
