import { useEffect, useMemo, useRef, useState } from 'react';

const GlimpsesSection = () => {
  const glimpses = [
    { id: 1, image: '/img/25,000.jpeg', title: 'Rise of Ventures Winner', event: 'Grafest by Graphic Era', date: '2025' },
    {
      id: 2,
      image: '/img/31,000.jpeg',
      title: 'National Level Hackathon Winner',
      event: 'Promptx by Devbhoomi Univeristy',
      date: '2025',
    },
    {
      id: 3,
      image: '/img/3000.jpg',
      title: 'National Level Ideathon',
      description: 'Securing 1st Runner Up at Entrepreneurship Ideathon and Win 2 lakh Grant',
      event: 'ITS Univeristy Greater Noida',
      date: '2024',
    },
    { id: 4, image: '/img/4000.jpeg', title: 'Technical Festive Events', event: "Utkrisht by Tula's Institute", date: '2024' },
    {
      id: 5,
      image: '/img/conference.jpeg',
      title: 'Organizing Team of IEEE Conference',
      event: "Tula's Institute",
      date: '2024',
    },
    {
      id: 6,
      image: '/img/7000.jpg',
      title: 'Youth4Future Winner',
      event: 'Maharaja Sujalmal Univeristy at New Delhi',
      date: '2024',
    },
    { id: 7, image: '/img/techno.jpg', title: 'Techathon Winner', event: 'College Competition', date: '2024' },
    { id: 8, image: '/img/utkrisht trophy.jpeg', title: 'Hackathon Winner at Utkrisht', event: "Utkrisht by Tula's Institute", date: '2024' },
    {
      id: 9,
      image: '/img/ieee.jpeg',
      title: 'Paper Presentation at IEEE Conference',
      event: 'Graphic Era Bhimtal Univeristy',
      date: '2025',
    },
  ];

  const milestones = useMemo(
    () =>
      glimpses.map((item) => ({
        ...item,
        description: item.description ?? `${item.event} - ${item.date}`,
      })),
    [glimpses],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = milestones[activeIndex];
  const nextItem = milestones[(activeIndex + 1) % milestones.length];
  const nodeRefs = useRef<Array<HTMLDivElement | null>>([]);
  const timelineScrollRef = useRef<HTMLDivElement | null>(null);

  const startX = 120;
  const step = 260;
  const baseY = 90;
  const amplitude = 26;

  const points = useMemo(
    () =>
      milestones.map((_, index) => ({
        x: startX + index * step,
        y: baseY + Math.sin(index * 0.9) * amplitude,
      })),
    [milestones],
  );

  const timelineWidth = useMemo(() => Math.max(1400, startX * 2 + step * (milestones.length - 1)), [milestones.length]);

  const pathData = useMemo(() => {
    if (points.length === 0) return '';
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i += 1) {
      const prev = points[i - 1];
      const curr = points[i];
      const cx = (prev.x + curr.x) / 2;
      d += ` Q ${cx} ${prev.y} ${curr.x} ${curr.y}`;
    }
    return d;
  }, [points]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % milestones.length);
    }, 3400);
    return () => window.clearInterval(timer);
  }, [milestones.length]);

  useEffect(() => {
    const container = timelineScrollRef.current;
    const node = nodeRefs.current[activeIndex];
    if (!container || !node) return;

    const containerRect = container.getBoundingClientRect();
    const nodeRect = node.getBoundingClientRect();
    const currentLeft = container.scrollLeft;
    const targetLeft = currentLeft + (nodeRect.left - containerRect.left) - container.clientWidth / 2 + nodeRect.width / 2;
    const maxLeft = container.scrollWidth - container.clientWidth;
    const clamped = Math.max(0, Math.min(maxLeft, targetLeft));

    container.scrollTo({ left: clamped, behavior: 'smooth' });
  }, [activeIndex]);

  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-4xl font-bold tracking-tight text-white md:text-6xl">Glimpses of my Professional Journey</h2>
          <p className="mx-auto max-w-3xl text-lg text-white/75">
            Capturing moments of success, learning, and growth throughout my professional journey
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-6xl rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur-lg shadow-[0_20px_70px_rgba(14,165,233,0.22)] md:p-6">
            <div className="grid gap-6 md:grid-cols-[1fr_0.95fr]">
              <div className="grid grid-cols-2 gap-3">
                {[activeItem, nextItem].map((item, idx) => (
                  <div key={`${item.id}-${idx}`} className="rounded-2xl border border-white/20 bg-slate-950/85 p-2">
                    <div className="aspect-square overflow-hidden rounded-xl bg-slate-900/70">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-contain"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                    </div>
                    <p className="mt-2 truncate text-center text-xs font-medium text-sky-200/85">
                      {idx === 0 ? 'Current' : 'Next'}: {item.title}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex min-h-[220px] flex-col justify-center">
                <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-sky-200/80">Active Milestone</p>
                <h3 className="text-2xl font-bold leading-tight text-white md:text-3xl">{activeItem.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-white/80">{activeItem.description}</p>
                <p className="mt-4 text-sm text-sky-200/85">
                  {activeItem.event} - {activeItem.date}
                </p>
              </div>
            </div>
          </div>

          <div ref={timelineScrollRef} className="overflow-x-auto pb-4 scroll-smooth" style={{ scrollbarWidth: 'thin' }}>
            <div className="relative h-[260px]" style={{ width: timelineWidth }}>
              <svg
                className="absolute left-0 top-8 z-10 h-32 w-full"
                viewBox={`0 0 ${timelineWidth} 180`}
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <filter id="road-glow">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d={pathData}
                  fill="none"
                  stroke="rgba(56,189,248,0.45)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  filter="url(#road-glow)"
                />
                <path d={pathData} fill="none" stroke="rgba(125,211,252,0.95)" strokeWidth="3" strokeLinecap="round" />
              </svg>

              {milestones.map((item, index) => {
                const point = points[index];
                const isActive = index === activeIndex;

                return (
                  <div
                    key={item.id}
                    ref={(el) => {
                      nodeRefs.current[index] = el;
                    }}
                    className="absolute z-20"
                    style={{ left: point.x, top: point.y + 42, transform: 'translate(-50%, -50%)' }}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-500 ${
                        isActive
                          ? 'scale-110 border-sky-200/90 bg-sky-400/30 shadow-[0_0_34px_rgba(56,189,248,0.9)]'
                          : 'border-white/25 bg-white/10 shadow-[0_0_14px_rgba(56,189,248,0.35)]'
                      }`}
                    >
                      <span className="h-3 w-3 rounded-full bg-sky-100" />
                    </button>

                    <div className="absolute left-1/2 top-[74px] w-[220px] -translate-x-1/2 text-center text-base font-semibold leading-tight text-white/90">
                      {item.title}
                    </div>
                    <div className="absolute left-1/2 top-[114px] -translate-x-1/2 text-center text-xs text-sky-200/85">{item.date}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlimpsesSection;
