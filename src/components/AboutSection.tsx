
import { Code, Palette, Globe, Cpu, Database, Smartphone, Layers, Brain, CircuitBoard, Server, FileCode, Zap, Bot, Camera, Wrench, Gamepad2 } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { name: 'Web Development', level: 80 },
    { name: 'IoT Embedded System', level: 50 },
    { name: 'AI/ML Systems', level: 85 },
    { name: 'Research', level: 90 },
    { name: 'Literature and Writing', level: 95 },
    { name: '3D Printing', level: 40 },
    { name: 'Designing', level: 80 },
    { name: 'Frontend', level: 80 },
    { name: 'Backend', level: 70 },
    { name: 'Project Management', level: 80 },
    { name: 'Leadership & Volunterring', level: 80 },
    { name: 'Teaching', level: 90 },
    { name: 'Problem Solving', level: 90 },
  ];

  const toolbox = [
    { icon: Code, name: 'Git', color: 'text-orange-400' },
    { icon: Globe, name: 'React', color: 'text-blue-400' },
    { icon: Cpu, name: 'Python', color: 'text-yellow-400' },
    { icon: Database, name: 'MongoDB', color: 'text-green-400' },
    { icon: Smartphone, name: 'Node.js', color: 'text-green-500' },
    { icon: Palette, name: 'Figma', color: 'text-purple-400' },
    { icon: Brain, name: 'TensorFlow', color: 'text-red-400' },
    { icon: CircuitBoard, name: 'Raspberry Pi', color: 'text-pink-400' },
    { icon: Wrench, name: 'Microcontroller', color: 'text-blue-300' },
    { icon: FileCode, name: 'TypeScript', color: 'text-blue-600' },
    { icon: Layers, name: 'CNN', color: 'text-purple-600' },
    { icon: Bot, name: 'Scikit-learn', color: 'text-yellow-600' },
    { icon: Server, name: 'Django', color: 'text-green-600' },
    { icon: Zap, name: 'JavaScript', color: 'text-yellow-500' },
    { icon: Camera, name: 'OpenCV', color: 'text-indigo-400' },
    { icon: Gamepad2, name: 'Arduino', color: 'text-teal-400' },
    { icon: Brain, name: 'PyTorch', color: 'text-orange-600' },
    { icon: Layers, name: 'Keras', color: 'text-red-500' },
    { icon: Code, name: 'NLTK', color: 'text-blue-500' },
    { icon: Bot, name: 'AI Tools', color: 'text-purple-500'},
    { icon: Server, name: 'AWS', color: 'text-yellow-300' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-ocean-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A passionate developer with expertise in AI/ML, web development, and embedded systems
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 rounded-hover">
            {/* Profile Image - Top Center */}
            <div className="text-center mb-8">
              <div className="relative inline-block">
                <div className="w-48 h-48 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-ocean-400 to-ocean-600 rounded-full animate-pulse"></div>
                  <img
                    src="/img/Me2.png"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full border-4 border-ocean-400 relative z-10"
                  />
                  <div className="absolute -inset-4 bg-gradient-to-r from-ocean-400 via-blue-500 to-purple-600 rounded-full opacity-20 animate-float"></div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* Personal Info */}
              <div className="text-center">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-white mb-2">Rishabh Kumar Mandal</h3>
                  <p className="text-ocean-300 text-xl">AI Engineer</p>
                </div>
                
                <div className="space-y-4 text-white/80 text-lg leading-relaxed max-w-3xl mx-auto">
                  <p>
                    Hi! I'm Rishabh Kumar Mandal, pursuing Bachelor's in Computer Science and Engineering.
                  </p>
                  <p>
                    Proficient in AI/ML, CNN, OpenCV with expertise in Web Development.
                    Hands-on experience with 3D Printing, IoT, Embedded systems, ESP-32, RaspPi, and Arduino.
                  </p>
                  <p>
                    Love to Research & Innovate with important hands-on experience in International and Government Projects.
                    Currently an Intern at IAI Lab, DSVV, Haridwar.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-6 max-w-4xl mx-auto">
                  <div className="text-center p-4 bg-white/5 rounded-xl rounded-hover">
                    <div className="text-2xl font-bold text-ocean-400">15+</div>
                    <div className="text-sm text-white/60">Projects</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl rounded-hover">
                    <div className="text-2xl font-bold text-ocean-400">4+</div>
                    <div className="text-sm text-white/60">Patents</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl rounded-hover">
                    <div className="text-2xl font-bold text-ocean-400">8+</div>
                    <div className="text-sm text-white/60">Conference Papers</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl rounded-hover">
                    <div className="text-2xl font-bold text-ocean-400">7+</div>
                    <div className="text-sm text-white/60">Hackathon Wins</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl rounded-hover">
                    <div className="text-2xl font-bold text-ocean-400">11+</div>
                    <div className="text-sm text-white/60">Technical Wins</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl rounded-hover">
                    <div className="text-2xl font-bold text-ocean-400">15+</div>
                    <div className="text-sm text-white/60">Non Tech Wins</div>
                  </div>
                </div>
              </div>

              {/* Skills and Toolbox */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Toolbox */}
                <div>
                  <h4 className="text-2xl font-bold text-white mb-6 text-center">ToolBox</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {toolbox.map((tool, index) => {
                      const Icon = tool.icon;
                      return (
                        <div
                          key={tool.name}
                          className="bg-white/5 rounded-xl p-4 flex flex-col items-center justify-center transition-all duration-300 transform rounded-hover"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <Icon size={28} className={`${tool.color} mb-2`} />
                          <span className="text-white text-sm font-medium">{tool.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Technical Skills */}
                <div>
                  <h4 className="text-2xl font-bold text-white mb-6 text-center">Technical Skills</h4>
                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <div key={skill.name} className="group">
                        <div className="flex justify-between text-sm text-white/80 mb-2">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-ocean-400 to-blue-500 rounded-full transform transition-all duration-1000 ease-out"
                            style={{
                              width: `${skill.level}%`,
                              animationDelay: `${index * 0.2}s`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
