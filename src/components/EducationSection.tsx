import { GraduationCap, Calendar, MapPin, Award, Sparkles } from 'lucide-react';

const EducationSection = () => {
  const cardSizeClass = 'w-[330px] md:w-[420px] h-[520px]';

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'Uttarakhand Technical University',
      location: 'India',
      period: '2022 - 2026',
      status: 'Pursuing',
      gpa: '7.5',
      coursework: [
        'Data Structures & Algorithms',
        'Machine Learning',
        'Computer Vision',
        'Web Development',
        'Database Management',
        'Software Engineering',
      ],
      logo: '/img/1.png',
      track: 'Core Engineering',
    },
    {
      id: 3,
      degree: 'Higher Secondary Education',
      institution: 'Bristol Public School',
      location: 'India',
      period: '2020 - 2022',
      status: 'Completed',
      percentage: '81%',
      coursework: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science', 'English'],
      logo: '/img/2.png',
      track: 'Science Foundation',
    },
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-1/4 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-56 h-56 bg-ocean-500/10 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-ocean-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto">
            Academic milestones in a neon timeline format
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="mb-6 flex items-center justify-center gap-2 text-blue-200/70 text-sm">
            <Sparkles size={14} />
            Drag or scroll horizontally
          </div>

          <div className="overflow-x-auto pb-6">
            <div className="relative min-w-max px-2">
              <div className="absolute left-0 right-0 top-12 h-px bg-gradient-to-r from-transparent via-blue-400/80 to-transparent" />

              <div className="flex gap-7 snap-x snap-mandatory">
                {education.map((edu, index) => (
                  <article
                    key={edu.id}
                    className={`relative ${cardSizeClass} shrink-0 snap-start pt-16 group`}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="absolute top-10 left-8 w-4 h-4 rounded-full bg-blue-400 shadow-[0_0_22px_rgba(30,144,255,0.95)] border border-blue-200/80" />

                    <div className="relative h-full overflow-hidden rounded-3xl border border-blue-300/20 bg-gradient-to-b from-black/70 to-[#030914]/90 p-6 shadow-[0_0_40px_rgba(0,119,255,0.14)] transition-all duration-500 group-hover:border-blue-300/55 group-hover:shadow-[0_0_50px_rgba(30,144,255,0.24)]">
                      <div className="absolute top-0 right-0 w-28 h-28 bg-blue-500/20 blur-2xl rounded-full" />
                      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-300/80 via-ocean-400/70 to-transparent" />
                      <div className="relative z-10 h-full flex flex-col">
                        <div className="mb-4 flex items-start justify-between gap-3">
                          <div className="flex items-start gap-4">
                            <img
                              src={edu.logo}
                              alt={`${edu.institution} logo`}
                              className="w-16 h-16 object-contain rounded-xl bg-blue-500/10 border border-blue-300/20 p-2"
                            />
                            <div>
                              <p className="text-xs uppercase tracking-[0.2em] text-blue-200/70 mb-1">{edu.track}</p>
                              <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">{edu.degree}</h3>
                              <p className="text-ocean-300 text-sm md:text-base mt-1">{edu.institution}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-1 rounded-full text-[10px] tracking-wider border border-blue-300/35 text-blue-100/80 bg-blue-500/10">
                              ID-{edu.id}
                            </span>
                            <GraduationCap className="text-blue-300/90 shrink-0" size={22} />
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3 mb-4 text-sm">
                          <span className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/35 text-blue-200">
                            {edu.status}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/15 text-white/80">
                            {edu.period}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 gap-5 mb-4">
                          <div className="space-y-3 text-white/75 text-sm">
                            <div className="flex items-center">
                              <Calendar size={16} className="mr-2 text-blue-300" />
                              {edu.period}
                            </div>
                            <div className="flex items-center">
                              <MapPin size={16} className="mr-2 text-blue-300" />
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

                        </div>

                        <div className="mt-auto">
                          <h4 className="text-blue-100 font-medium mb-3">Key Coursework</h4>
                          <div className="flex flex-wrap gap-2 max-h-28 overflow-y-auto pr-1">
                            {edu.coursework.map((course, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 rounded-full text-xs bg-blue-500/10 border border-blue-400/25 text-blue-100/90"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
