import { Calendar, MapPin, Award } from 'lucide-react';

const ExperienceSection = () => {
  const cardSizeClass = 'w-[330px] md:w-[420px] h-[520px]';

  const experiences = [

    {
      id: 1,
      title: 'Lead SDE & AI Application Dev ',
      company: 'Kalskinso',
      location: 'Greater Noida, India',
      period: '2026 - Present',
      achievements: [
        'Leading the Team and Developing 1st AI SaaS Project for the Company',
        'Automation for Social Media management & Content Creation',
        'Fine Tuning LLMs & Building Prompt Engine & Fusion Models',
      ],
      type: 'work'
    },

    {
      id: 2,
      title: 'Research Intern',
      company: 'IAI Lab, DSVV, Haridwar',
      location: 'Haridwar, India',
      period: 'July 2024 - Feb 2025',
      achievements: [
        'Working on Government Projects & International Projects',
        'Research Papers and Patents in Medical Technology Inventions',
        'Gained valuable practical experience in Scientific Research, and Building Projects',
      ],
      /*type: 'work',
      certificate: '/img/DSVV-certificate.jpg' */
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
      id: 3,
      title: 'Freelance Developer',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2025 - 2026',
      achievements: [
        'Completed 3+ web development projects',
        'Provide AI integrated Projects to Clients',
        'Specialized in React and Node.js applications',
        'Maintained 100% client satisfaction rate'
      ],
      type: 'work'
    },

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

        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white/60 text-sm mb-6">
            Scroll horizontally to explore the journey
          </div>
          <div className="overflow-x-auto pb-6">
            <div className="relative min-w-max px-2">
              <div className="absolute left-0 right-0 top-10 h-0.5 bg-gradient-to-r from-ocean-400 via-blue-500 to-ocean-400" />
              <div className="flex gap-6 snap-x snap-mandatory">
                {experiences.map((exp, index) => (
                  <div
                    key={exp.id}
                    className={`relative ${cardSizeClass} shrink-0 snap-start pt-14 group`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-4 h-4 bg-ocean-500 rounded-full border-4 border-slate-900 z-10 group-hover:scale-125 transition-transform duration-300" />
                    <div className="relative h-full bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 hover:border-ocean-400/50 transition-all duration-500 transform hover:scale-[1.02] overflow-hidden">
                      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-ocean-300/80 via-blue-400/70 to-transparent" />
                      <div className="relative z-10 h-full flex flex-col">
                      <div className="flex flex-wrap items-start justify-between mb-4 gap-3">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-ocean-300 transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-ocean-300 text-lg font-medium mb-2">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="px-2 py-1 rounded-full text-[10px] tracking-wider border border-ocean-400/35 text-ocean-200/80 bg-ocean-500/10">
                            ID-{exp.id}
                          </div>
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

                      {exp.description && (
                        <p className="text-white/80 mb-6 leading-relaxed">
                          {exp.description}
                        </p>
                      )}

                      <div className="space-y-3 mt-2">
                        <div className="flex items-center text-ocean-300 font-medium">
                          <Award size={18} className="mr-2" />
                          Key Achievements
                        </div>
                        <ul className="space-y-2 max-h-48 overflow-y-auto pr-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-white/80 flex items-start">
                              <span className="w-2 h-2 bg-ocean-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {exp.certificate && (
                        <div className="mt-auto pt-6 border-t border-white/10">
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
      </div>
    </section>
  );
};

export default ExperienceSection;
