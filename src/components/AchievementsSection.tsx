import { Trophy, Star, Award, Medal, Target, Pen, Palette, } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      id: 1,
      title: "2 times National Level Hackathon Winner ",
      category: "National Hackahon",
      year: "2024-25",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500"
    },
    {
      id: 2,
      title: "5 times Inter-University Hackathon Winner",
      category: "Hackathon",
      year: "2023-25",
      icon: Medal,
      color: "from-blue-400 to-purple-500"
    },
    {
      id: 3,
      title: "2 Times National Level Ideathon Winner",
      category: "National Ideathon",
      year: "2024-25",
      icon: Star,
      color: "from-green-400 to-blue-500"
    },
    {
      id: 4,
      title: "11+ Awards in Tech Events",
      category: "Technical Awards",
      year: "2023",
      icon: Award,
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 5,
      title: "Global AD Scientist Certificate",
      category: "Certificate",
      year: "2025",
      icon: Pen ,
      color: "from-teal-400 to-cyan-500"
    },
    {
      id: 6,
      title: "Student of the Year Award",
      category: "Academics",
      year: "2020-2022",
      icon: Medal,
      color: "from-indigo-400 to-blue-500"
    },

    {
      id: 7,
      title: "State and District level in Arts and Poetry",
      category: "Creative Arts",
      year: "2017-2022",
      icon: Palette,
      color: "from-indigo-400 to-blue-500"
    },

    {
      id: 8,
      title: "District level in Cricket and Kabaddi",
      category: "Sports",
      year: "2017-2022",
      icon: Star,
      color: "from-blue-400 to-purple-500"
    }
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-ocean-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Recognition and awards for excellence in academics, research, and innovation
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={achievement.id}
                  className="group bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-ocean-400/50 transition-all duration-500 transform hover:scale-105 animate-fade-in hover:animate-float"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${achievement.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-ocean-500/20 text-ocean-300 border border-ocean-500/30 mb-3">
                        {achievement.category}
                      </span>
                      <span className="block text-white/60 text-sm">
                        {achievement.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-ocean-300 transition-colors">
                      {achievement.title}
                    </h3>

                    <p className="text-white/80 leading-relaxed">
                      {achievement.description}
                    </p> 
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
