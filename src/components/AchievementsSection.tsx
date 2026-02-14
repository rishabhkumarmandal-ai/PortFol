import { useEffect, useRef, type WheelEvent } from 'react';
import { Trophy, Star, Award, Medal, Pen, Palette } from 'lucide-react';

const AchievementsSection = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<number | null>(null);
  const pauseUntilRef = useRef(0);

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

  const shapeVariants = [
    'rounded-full',
    'rounded-[44%_56%_61%_39%/41%_39%_61%_59%]',
    '[clip-path:polygon(50%_0%,61%_35%,98%_35%,68%_57%,79%_91%,50%_70%,21%_91%,32%_57%,2%_35%,39%_35%)]',
    '[clip-path:polygon(50%_92%,87%_62%,91%_34%,76%_14%,58%_18%,50%_30%,42%_18%,24%_14%,9%_34%,13%_62%)]',
  ];
  const loopAchievements = [...achievements, ...achievements];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const pxPerTick = 1;
    const tickMs = 20;

    const tick = () => {
      const current = scrollRef.current;
      if (!current) return;

      if (performance.now() >= pauseUntilRef.current) {
        current.scrollLeft += pxPerTick;
      }

      const loopWidth = current.scrollWidth / 2;
      if (current.scrollLeft >= loopWidth) {
        current.scrollLeft -= loopWidth;
      }
    };

    intervalRef.current = window.setInterval(tick, tickMs);

    return () => {
      if (intervalRef.current !== null) window.clearInterval(intervalRef.current);
    };
  }, []);

  const handleHorizontalWheel = (event: WheelEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;

    if (el.scrollWidth <= el.clientWidth) return;

    const isMostlyVertical = Math.abs(event.deltaY) > Math.abs(event.deltaX);
    if (isMostlyVertical && !event.shiftKey) return;

    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
    if (delta === 0) return;

    event.preventDefault();
    pauseUntilRef.current = performance.now() + 2200;
    el.scrollLeft += delta;
  };

  return (
    <section id="achievements" className="py-20 relative">
      <style>{`
        .achievements-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(56, 189, 248, 0.8) rgba(15, 23, 42, 0.45);
        }
        .achievements-scroll::-webkit-scrollbar {
          height: 5px;
        }
        .achievements-scroll::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.45);
          border-radius: 9999px;
        }
        .achievements-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, rgba(56, 189, 248, 0.9), rgba(14, 165, 233, 0.9));
          border-radius: 9999px;
        }
      `}</style>

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
          <div className="relative">
            <svg
              viewBox="0 0 1200 100"
              preserveAspectRatio="none"
              className="h-16 w-full opacity-80"
              aria-hidden="true"
            >
              <path
                d="M 0 40 C 150 80, 300 5, 450 40 C 600 75, 750 8, 900 38 C 1020 62, 1110 20, 1200 38"
                fill="none"
                stroke="rgba(56,189,248,0.75)"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>

            <div
              ref={scrollRef}
              onWheel={handleHorizontalWheel}
              onTouchStart={() => {
                pauseUntilRef.current = performance.now() + 2500;
              }}
              onTouchEnd={() => {
                pauseUntilRef.current = performance.now() + 1200;
              }}
              className="achievements-scroll -mx-2 flex gap-6 overflow-x-auto px-2 pb-4 touch-pan-x"
            >
            {loopAchievements.map((achievement, index) => {
              const Icon = achievement.icon;
              const shapeClass = shapeVariants[index % shapeVariants.length];
              return (
                <article
                  key={`${achievement.id}-${index}`}
                  className="group relative w-[280px] shrink-0 pt-10 text-center md:w-[320px]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute left-1/2 top-0 h-10 w-px -translate-x-1/2 bg-gradient-to-b from-sky-300/90 to-transparent" />

                  <div className="mx-auto flex w-full max-w-[320px] flex-col items-center">
                    <div className="relative mb-5">
                      <div className={`absolute -inset-2 bg-gradient-to-br ${achievement.color} opacity-35 blur-xl`} />
                      <div
                        className={`relative flex h-44 w-44 items-center justify-center border border-white/20 bg-slate-900/80 backdrop-blur-md transition-transform duration-300 group-hover:scale-105 md:h-52 md:w-52 ${shapeClass}`}
                      >
                        {/* PHOTO HERE - I will replace manually */}
                        <Icon size={28} className="text-white/75" />
                      </div>
                    </div>

                    <div className="mb-3">
                      <span className="mb-2 inline-block rounded-full border border-ocean-500/30 bg-ocean-500/20 px-3 py-1 text-sm font-medium text-ocean-300">
                        {achievement.category}
                      </span>
                      <span className="block text-sm text-white/60">{achievement.year}</span>
                    </div>

                    <h3 className="text-balance text-lg font-semibold tracking-tight text-white transition-colors group-hover:text-ocean-300 md:text-xl">
                      {achievement.title}
                    </h3>
                  </div>
                </article>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
