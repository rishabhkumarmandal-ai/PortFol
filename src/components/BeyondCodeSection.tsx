import { Camera, Users, Award, Pen, Palette, MapPin, BookOpen, Github, Linkedin, Instagram, Mail } from 'lucide-react';

const BeyondCodeSection = () => {
  const activities = [
    {
      id: 1,
      title: 'Photo/Video Editing',
      icon: Camera,
      color: 'from-purple-400 to-pink-500',
      skills: ['Adobe Photoshop', 'Premiere Pro', 'Creative Direction']
    },
    {
      id: 2,
      title: 'Teaching',
      icon: Users,
      color: 'from-blue-400 to-cyan-500',
      skills: ['Programming Concepts', 'Mentoring', 'Technical Communication']
    },
    {
      id: 3,
      title: 'Cricket',
      icon: Award,
      color: 'from-green-400 to-teal-500',
      skills: ['Team Sports', 'Strategy', 'Leadership']
    },
    {
      id: 4,
      title: 'Kabaddi',
      icon: Award,
      color: 'from-red-400 to-orange-500',
      skills: ['Traditional Sports', 'Fitness', 'Team Coordination']
    },
    {
      id: 5,
      title: 'Poetry',
      icon: Pen,
      color: 'from-indigo-400 to-purple-500',
      skills: ['Creative Writing', 'Expression', 'Storytelling']
    },
    {
      id: 6,
      title: 'Art & Sketch',
      icon: Palette,
      color: 'from-pink-400 to-red-500',
      skills: ['Digital Art', 'Sketching', 'Creative Design']
    },
    {
      id: 7,
      title: 'Travelling',
      icon: MapPin,
      color: 'from-yellow-400 to-orange-500',
      skills: ['Cultural Exploration', 'Adventure', 'Photography']
    },
    {
      id: 8,
      title: 'Reading Sci-fi',
      icon: BookOpen,
      color: 'from-cyan-400 to-blue-500',
      skills: ['Science Fiction', 'Future Tech', 'Imagination']
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-green-500/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-20 right-10 w-18 h-18 bg-orange-500/20 rounded-full animate-float" style={{ animationDelay: '6s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-ocean-400 bg-clip-text text-transparent">
            Beyond the Code
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Exploring creativity, sports, and life experiences that shape my perspective beyond programming
          </p>
          
          
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div
                  key={activity.id}
                  className="group bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 hover:border-ocean-400/50 transition-all duration-500 transform hover:scale-105 hover:rotate-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${activity.color} mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-pulse`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-ocean-300 transition-colors">
                      {activity.title}
                    </h3>
                    
                    <p className="text-white/80 text-sm leading-relaxed mb-4">
                      {activity.description}
                    </p>

                    <div className="space-y-1">
                      {activity.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="inline-block px-2 py-1 text-xs font-medium bg-white/10 text-white/70 rounded-lg mr-1 mb-1 hover:bg-ocean-500/20 hover:text-ocean-300 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Creative floating elements */}
        <div className="absolute top-1/4 left-1/4 animate-bounce" style={{ animationDelay: '1s' }}>
          <Camera className="text-purple-400/30" size={32} />
        </div>
        <div className="absolute top-1/3 right-1/3 animate-bounce" style={{ animationDelay: '3s' }}>
          <Palette className="text-pink-400/30" size={28} />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-bounce" style={{ animationDelay: '5s' }}>
          <MapPin className="text-yellow-400/30" size={30} />
        </div>
      </div>
    </section>
  );
};

export default BeyondCodeSection;
