import { Calendar, MapPin, Award } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: 'Research Intern',
      company: 'IAI Lab, DSVV, Haridwar',
      location: 'Haridwar, India',
      period: 'July 2024 - Working',
      description: 'Worked as an intern at the Institute of Artificial Intelligence at Dev Sanskriti Vishwavidyalaya, under the supervision of Dr. Neel Mani. Engaged in research for different ongoing projects demonstrating commitment and professionalism.',
      achievements: [
        'Working on Government Projects & International Projects',
        'Research Papers and Patents in Medical Technology Inventions',
        'Gained valuable practical experience in Scientific Writing, Report Writing and Programming',
        'Showed good aptitude and dedication to the project'
      ],
      type: 'work',
      certificate: '/img/DSVV-certificate.jpg'
    },
    {
      id: 2,
      title: 'Junior Software Developer Intern',
      company: 'International MUN',
      location: 'Remote',
      period: 'Jan 2023 - April 2023',
      achievements: [
        'Work on Web Projects and Solving Key Problems',
        'Developed proposals and conducted marketing campaigns',
        'Interacted with IMUN partners and delegates across the world',
        'Gained experience in business development and day-to-day operations',
      ],
      type: 'work',
      certificate: '/img/IMUN.jpeg'
    },

    /*{
      id: 3,
      title: 'Full-Stack Developer Intern',
      company: 'AINRION',
      location: 'Remote',
      period: '25 May 2025 - 25 Aug 2025',
      achievements: [
        'Work on Web Projects and Solving Key Problems',
        'Integrate AI Solutions into Web Applications',
        'Gained experience in business development and day-to-day operations'
      ],
      type: 'work',
      certificate: '/img/Rishab kumar mandal.pdf'
    }, */
    {
      id: 4,
      title: 'Freelance Developer',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2023 - Present',
      achievements: [
        'Completed 3+ web development projects',
        'Provide AI integrated Projects to Clients',
        'Specialized in React and Node.js applications',
        'Maintained 100% client satisfaction rate'
      ],
      type: 'work'
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-ocean-400 bg-clip-text text-transparent">
            Experience 
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            My professional journey through internships, research, and development projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ocean-400 to-blue-500 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className="relative flex items-start group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-6 w-4 h-4 bg-ocean-500 rounded-full border-4 border-slate-900 z-10 group-hover:scale-125 transition-transform duration-300" />

                  {/* Content */}
                  <div className="md:ml-20 w-full">
                    <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-ocean-400/50 transition-all duration-500 transform hover:scale-105">
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-ocean-300 transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-ocean-300 text-lg font-medium mb-2">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="px-4 py-2 rounded-full text-sm font-medium bg-ocean-500/20 text-ocean-300 border border-ocean-500/30">
                            Experience
                          </div>
                          {exp.certificate && (
                            <div className="px-4 py-2 rounded-full text-sm font-medium bg-green-500/20 text-green-300 border border-green-500/30">
                              Certified
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-white/60 text-sm mb-4">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-white/80 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-center text-ocean-300 font-medium">
                          <Award size={18} className="mr-2" />
                          Key Achievements
                        </div>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-white/80 flex items-start">
                              <span className="w-2 h-2 bg-ocean-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {exp.certificate && (
                        <div className="mt-6 pt-6 border-t border-white/10">
                          <div className="flex items-center justify-between">
                            <span className="text-ocean-300 font-medium">Certificate</span>
                            <a 
                              href={exp.certificate} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="px-4 py-2 bg-ocean-500/20 hover:bg-ocean-500/30 text-ocean-300 rounded-lg transition-colors duration-300 text-sm font-medium"
                            >
                              View Certificate
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
