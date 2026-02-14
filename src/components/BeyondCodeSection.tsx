import { useMemo, useState } from 'react';
import { Camera, Users, Award, Pen, Palette, MapPin, BookOpen } from 'lucide-react';

const BeyondCodeSection = () => {
  const activities = [
    {
      id: 1,
      title: 'Photo/Video Editing',
      icon: Camera,
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1400&q=80',
      tags: ['Adobe Photoshop', 'Premiere Pro', 'Creative Direction'],
      summary: 'Visual storytelling through edits, pacing, and cinematic framing.',
    },
    {
      id: 2,
      title: 'Teaching',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80',
      tags: ['Programming Concepts', 'Mentoring', 'Communication'],
      summary: 'Breaking complex ideas into clear and practical learning paths.',
    },
    {
      id: 3,
      title: 'Cricket',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1400&q=80',
      tags: ['Team Sports', 'Strategy', 'Leadership'],
      summary: 'High-pressure decision making with disciplined teamwork.',
    },
    {
      id: 4,
      title: 'Kabaddi',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1400&q=80',
      tags: ['Fitness', 'Speed', 'Coordination'],
      summary: 'Reflex, timing, and tactical aggression in fast game scenarios.',
    },
    {
      id: 5,
      title: 'Poetry',
      icon: Pen,
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=80',
      tags: ['Writing', 'Expression', 'Storytelling'],
      summary: 'Turning feelings and thoughts into structured creative form.',
    },
    {
      id: 6,
      title: 'Art & Sketch',
      icon: Palette,
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1400&q=80',
      tags: ['Sketching', 'Digital Art', 'Design Thinking'],
      summary: 'Observation-first creativity translated into visual ideas.',
    },
    {
      id: 7,
      title: 'Travelling',
      icon: MapPin,
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80',
      tags: ['Adventure', 'Culture', 'Photography'],
      summary: 'Learning from people, places, and unfamiliar environments.',
    },
    {
      id: 8,
      title: 'Reading Sci-fi',
      icon: BookOpen,
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=80',
      tags: ['Science Fiction', 'Future Tech', 'Imagination'],
      summary: 'Future-world thinking that influences product vision and direction.',
    },
  ];

  const [activeId, setActiveId] = useState(activities[0].id);
  const active = useMemo(() => activities.find((item) => item.id === activeId) ?? activities[0], [activities, activeId]);
  const ActiveIcon = active.icon;

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(14,165,233,0.18),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(249,115,22,0.1),transparent_35%)]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-14 text-center">
          <h2 className="mb-4 bg-gradient-to-r from-white to-ocean-400 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            Beyond the Code
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-white/80">
            Personal pursuits that sharpen creativity, resilience, and perspective.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-950/45 p-4 backdrop-blur-xl md:p-5">
            <div className="max-h-[620px] space-y-3 overflow-y-auto pr-1">
              {activities.map((activity) => {
                const Icon = activity.icon;
                const isActive = activity.id === active.id;
                return (
                  <button
                    key={activity.id}
                    type="button"
                    onClick={() => setActiveId(activity.id)}
                    className={`w-full rounded-2xl border p-3 text-left transition-all duration-300 ${
                      isActive
                        ? 'border-sky-300/50 bg-sky-500/15 shadow-[0_0_30px_rgba(56,189,248,0.22)]'
                        : 'border-white/10 bg-white/5 hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-slate-900/80">
                        <Icon size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-white">{activity.title}</p>
                        <p className="text-xs text-white/65">{activity.tags[0]}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl md:p-6">
            <div className="relative mb-5 overflow-hidden rounded-2xl border border-white/15">
              <img src={active.image} alt={active.title} className="h-64 w-full object-cover md:h-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="inline-flex items-center rounded-full border border-white/30 bg-black/30 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-sky-100">
                  PASSION SPOTLIGHT
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/25 bg-black/30">
                  <ActiveIcon size={18} className="text-white" />
                </div>
              </div>
            </div>

            <h3 className="mb-2 text-3xl font-bold text-white">{active.title}</h3>
            <p className="mb-5 text-white/80">{active.summary}</p>

            <div className="flex flex-wrap gap-2">
              {active.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/20 bg-slate-900/60 px-3 py-1 text-xs font-medium text-sky-100">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondCodeSection;
