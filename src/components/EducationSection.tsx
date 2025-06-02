import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'Uttarakhand Technical University',
      location: 'India',
      period: '2022 - 2026',
      status: 'Pursuing',
      gpa: '7.5',
      description: 'Specializing in Artificial Intelligence, Machine Learning, and Software Development. Active participant in coding competitions and research projects.',
      coursework: [
        'Data Structures & Algorithms',
        'Machine Learning',
        'Computer Vision',
        'Web Development',
        'Database Management',
        'Software Engineering'
      ],
      logo: '/assests/edu logos/1.png'
    },
    {
      id: 2,
      degree: 'Bachelor of Computer Science and Engineering',
      institution: "Tula's Institute",
      location: 'India',
      period: '2022 - 2026',
      status: 'Pursuing',
      gpa: '7.5',
      description: 'Specializing in Artificial Intelligence, Machine Learning, and Software Development. Active participant in coding competitions and research projects.',
      coursework: [
        'Data Structures & Algorithms',
        'Machine Learning',
        'Computer Vision',
        'Web Development',
        'Database Management',
        'Software Engineering'
      ],
      achievements: [
        'Maintained GPA of 7.5+',
        'Executive of IEEE',
        'Winner of multiple coding competitions',
        'Published research papers on AI/ML'
      ],
      logo: '/assests/edu logos/3.png'
    },
    {
      id: 3,
      degree: 'Higher Secondary Education',
      institution: 'Bristol Public School',
      location: 'India',
      period: '2020 - 2022',
      status: 'Completed',
      percentage: '81%',
      description: 'Completed with focus on Mathematics, Physics, and Computer Science.',
      coursework: [
        'Mathematics',
        'Physics',
        'Chemistry',
        'Computer Science',
        'English'
      ],
      achievements: [
        'Scored 81% overall',
        'Wins Student of the Year',
        'Tagged Top Performer in Every Field & Named as all Rounder',
        'District in Kabaddi and Cricket',
        'Win GK Quiz, Poetry and Art Competition in State Level'
      ],
      logo: '/assests/edu logos/2.png'
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-ocean-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            My academic journey and educational background
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-ocean-400/50 transition-all duration-500 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-start mb-4">
                      <div className="flex items-center mr-4">
                        <img 
                          src={edu.logo} 
                          alt={`${edu.institution} logo`}
                          className="w-16 h-16 object-contain rounded-lg bg-white/10 p-2"
                        />
                        <GraduationCap className="text-ocean-400 ml-3" size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-ocean-300 text-lg font-medium mb-2">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:ml-6">
                    <div className={`px-4 py-2 rounded-full text-sm font-medium mb-4 ${
                      edu.status === 'Pursuing' 
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                        : 'bg-green-500/20 text-green-300 border border-green-500/30'
                    }`}>
                      {edu.status}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-center text-white/60 text-sm">
                      <Calendar size={16} className="mr-2" />
                      {edu.period}
                    </div>
                    <div className="flex items-center text-white/60 text-sm">
                      <MapPin size={16} className="mr-2" />
                      {edu.location}
                    </div>
                    {edu.gpa && (
                      <div className="flex items-center text-ocean-300 font-medium">
                        <Award size={16} className="mr-2" />
                        GPA: {edu.gpa}
                      </div>
                    )}
                    {edu.percentage && (
                      <div className="flex items-center text-ocean-300 font-medium">
                        <Award size={16} className="mr-2" />
                        Score: {edu.percentage}
                      </div>
                    )}
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-3">Key Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, idx) => (
                        <span
                          key={idx}
                          className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-white/80 mb-6 leading-relaxed">
                  {edu.description}
                </p>

                {edu.achievements && (
                  <div>
                    <h4 className="text-ocean-300 font-medium mb-3 flex items-center">
                      <Award size={18} className="mr-2" />
                      Achievements
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-white/80 flex items-start">
                          <span className="w-2 h-2 bg-ocean-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
