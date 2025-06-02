import { Calendar, MapPin, Users, Award } from 'lucide-react';

const GlimpsesSection = () => {
  const glimpses = [
    {
      id: 1,
      image: '/Achievements/25,000.jpeg',
      title: 'Rise of Ventures Winner',
      description: 'Winning moment at the Research & Patent Ideas competition with ₹25,000 prize',
      event: 'Grafest by Graphic Era ',
      date: '2025'
    },
    {
      id: 2,
      image: '/Achievements/31,000.jpeg',
      title: 'National Level Hackathon Winner',
      description: 'Awarded with 31,000 for Securing 1st Place at Promptx by Devbhoomi Univeristy',
      event: 'Promptx by Devbhoomi Univeristy',
      date: '2025'
    },
    {
      id: 3,
      image: '/Achievements/3000.jpg',
      title: 'National Level Ideathon',
      description: 'Securing 1st Runner Up at Entrepreneurship Ideathon and Win 2 lakh Grant',
      event: 'ITS Univeristy Greater Noida',
      date: '2024'
    },
    {
      id: 4,
      image: '/Achievements/4000.jpeg',
      title: 'Technical Festive Events',
      description: 'Win More than 5 Awards in a Single Day in Technical and Coding Related Competetions',
      event: 'Utkrisht by Tula\'s Institute',
      date: '2024'
    },
    {
      id: 5,
      image: '/Achievements/conference.jpeg',
      title: 'Organizing Team of IEEE Conference',
      description: 'Contributed as an organzing team member for the IEEE conference held at Tula\'s Institute',
      event: 'Tula\'s Institute',
      date: '2024'
    },
    {
      id: 6,
      image: '/Achievements/7000.jpg',
      title: 'Youth4Future Winner',
      description: 'Secured 1st Runner Up at National Level Hackahton and won cash prize of 7,000',
      event: 'Maharaja Sujalmal Univeristy at New Delhi',
      date: '2024'
    },
    {
      id: 7,
      image: '/Achievements/techno.jpg',
      title: 'Techathon Winner',
      description: 'Secured 1st Runner up in College Hacakthon competition organized by TULA\'s Institute',
      event: 'College Competition',
      date: '2024'
    },
    {
      id: 8,
      image: '/Achievements/utkrisht trophy.jpeg',
      title: 'Hackathon Winner at Utkrisht',
      description: 'Secured 1st place in Art of Web Competetion and won Trophy',
      event: 'Utkrisht by Tula\'s Institute',
      date: '2024'
    },
    {
      id: 9,
      image: '/Achievements/ieee.jpeg',
      title: 'Paper Presentation at IEEE Conference',
      description: '1st Expereince of Paper Presentation in IEEE Conference and Meeting with Top Researchers and Scholars',
      event: 'Graphic Era Bhimtal Univeristy',
      date: '2025'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-ocean-400 bg-clip-text text-transparent">
            Glimpses of my Professional Journey
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Capturing moments of success, learning, and growth throughout my professional journey
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {glimpses.map((glimpse, index) => (
              <div
                key={glimpse.id}
                className="group bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-ocean-400/50 transition-all duration-500 transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={glimpse.image} 
                    alt={glimpse.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center text-white/80 text-sm mb-2">
                      <Calendar size={14} className="mr-2" />
                      {glimpse.date}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-ocean-300 text-sm font-medium mb-2">
                    <Award size={16} className="mr-2" />
                    {glimpse.event}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-ocean-300 transition-colors">
                    {glimpse.title}
                  </h3>
                  
                  <p className="text-white/80 leading-relaxed">
                    {glimpse.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlimpsesSection;
