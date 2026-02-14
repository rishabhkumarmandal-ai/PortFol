import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Bot,
  CircuitBoard,
  Code,
  Cpu,
  Database,
  FileCode,
  Gamepad2,
  Globe,
  Palette,
  Server,
  Smartphone,
  Wrench,
  Zap,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);
  const skillFillRefs = useRef<Array<HTMLDivElement | null>>([]);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const dotGlowRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  const skills = [
    { name: 'Web Development', level: 80 },
    { name: 'Mobile Apps', level: 60 },
    { name: 'IoT Embedded System', level: 50 },
    { name: 'AI/ML & Analytics', level: 55 },
    { name: 'Research and Development', level: 90 },
    { name: 'Literature and Writing', level: 95 },
    { name: '3D Printing', level: 40 },
    { name: 'Designing', level: 80 },
    { name: 'Project Management', level: 80 },
    { name: 'Leadership & Volunteering', level: 80 },
    { name: 'Teaching', level: 90 },
    { name: 'Problem Solving', level: 90 },
  ];

  const toolbox = [
    { icon: Code, name: 'Git' },
    { icon: Globe, name: 'React' },
    { icon: Cpu, name: 'Python' },
    { icon: Database, name: 'MongoDB' },
    { icon: Smartphone, name: 'Node.js' },
    { icon: Palette, name: 'Figma' },
    { icon: CircuitBoard, name: 'Raspberry Pi' },
    { icon: Wrench, name: 'Microcontroller' },
    { icon: FileCode, name: 'TypeScript' },
    { icon: Bot, name: 'GenAI' },
    { icon: Server, name: 'Django' },
    { icon: Zap, name: 'JavaScript' },
    { icon: Gamepad2, name: 'Arduino' },
    { icon: Bot, name: 'AI Tools' },
    { icon: Server, name: 'AWS' },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const path = pathRef.current;
    const dot = dotRef.current;
    const glow = dotGlowRef.current;

    if (!section || !image || !path || !dot || !glow) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(panelRefs.current, { autoAlpha: 0, y: 40 });
      gsap.set(panelRefs.current[0], { autoAlpha: 1, y: 0 });
      gsap.set(skillFillRefs.current, { scaleX: 0, transformOrigin: 'left center' });
      gsap.set(image, { scale: 1, xPercent: 0, yPercent: 0, rotate: 0 });

      const pathLength = path.getTotalLength();
      const motion = { progress: 0 };
      const stageEase = 'power2.inOut';

      const updateDotPosition = () => {
        const point = path.getPointAtLength(pathLength * motion.progress);
        gsap.set([dot, glow], { x: point.x, y: point.y });
      };
      updateDotPosition();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=240%',
          pin: true,
          scrub: true,
          anticipatePin: 1,
        },
      });

      tl.addLabel('stage1')
        .to(
          image,
          {
            scale: 1.1,
            xPercent: -2,
            yPercent: -1,
            duration: 1,
            ease: stageEase,
          },
          'stage1',
        )
        .to(
          motion,
          {
            progress: 0.25,
            duration: 1,
            ease: stageEase,
            onUpdate: updateDotPosition,
          },
          'stage1',
        )
        .to(dot, { scale: 1.15, duration: 0.5, ease: stageEase }, 'stage1')
        .to(dot, { scale: 1, duration: 0.5, ease: stageEase }, 'stage1+=0.5');

      tl.addLabel('stage2')
        .to(
          panelRefs.current[0],
          { autoAlpha: 0, y: -20, duration: 0.45, ease: stageEase },
          'stage2',
        )
        .fromTo(
          panelRefs.current[1],
          { autoAlpha: 0, y: 40 },
          { autoAlpha: 1, y: 0, duration: 0.6, ease: stageEase },
          'stage2+=0.25',
        )
        .to(
          image,
          {
            scale: 1.2,
            xPercent: -8,
            yPercent: -1,
            rotate: 0,
            duration: 1,
            ease: stageEase,
          },
          'stage2',
        )
        .to(
          motion,
          {
            progress: 0.5,
            duration: 1,
            ease: stageEase,
            onUpdate: updateDotPosition,
          },
          'stage2',
        )
        .to(dot, { scale: 1.18, duration: 0.5, ease: stageEase }, 'stage2')
        .to(dot, { scale: 1, duration: 0.5, ease: stageEase }, 'stage2+=0.5');

      tl.addLabel('stage3')
        .to(
          panelRefs.current[1],
          { autoAlpha: 0, y: -20, duration: 0.45, ease: stageEase },
          'stage3',
        )
        .fromTo(
          panelRefs.current[2],
          { autoAlpha: 0, y: 40 },
          { autoAlpha: 1, y: 0, duration: 0.6, ease: stageEase },
          'stage3+=0.25',
        )
        .to(
          image,
          {
            scale: 1.2,
            xPercent: 8,
            yPercent: 0,
            rotate: 1.2,
            duration: 1,
            ease: stageEase,
          },
          'stage3',
        )
        .to(
          motion,
          {
            progress: 0.75,
            duration: 1,
            ease: stageEase,
            onUpdate: updateDotPosition,
          },
          'stage3',
        )
        .to(dot, { scale: 1.2, duration: 0.5, ease: stageEase }, 'stage3')
        .to(dot, { scale: 1, duration: 0.5, ease: stageEase }, 'stage3+=0.5');

      tl.addLabel('stage4')
        .to(
          panelRefs.current[2],
          { autoAlpha: 0, y: -20, duration: 0.45, ease: stageEase },
          'stage4',
        )
        .fromTo(
          panelRefs.current[3],
          { autoAlpha: 0, y: 40 },
          { autoAlpha: 1, y: 0, duration: 0.6, ease: stageEase },
          'stage4+=0.25',
        )
        .to(
          image,
          {
            scale: 1.05,
            xPercent: 0,
            yPercent: 0,
            rotate: 0,
            duration: 1,
            ease: stageEase,
          },
          'stage4',
        )
        .to(
          motion,
          {
            progress: 1,
            duration: 1,
            ease: stageEase,
            onUpdate: updateDotPosition,
          },
          'stage4',
        )
        .fromTo(
          skillFillRefs.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.7, stagger: 0.06, ease: stageEase },
          'stage4+=0.2',
        )
        .to(dot, { scale: 1.22, duration: 0.5, ease: stageEase }, 'stage4')
        .to(dot, { scale: 1, duration: 0.5, ease: stageEase }, 'stage4+=0.5');
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 relative bg-black">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="w-full text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(34,211,238,0.45)]">
            About Me
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A passionate developer with expertise in innovating software and IoT systems.
          </p>
        </div>

        <div className="w-full max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/35 bg-black/85 shadow-[0_0_40px_rgba(0,245,255,0.22)]">
            <img
              ref={imageRef}
              src="/img/office.jpeg"
              alt="Office command room"
              className="absolute inset-0 h-full w-full object-cover will-change-transform"
            />

            <div className="absolute inset-0 bg-black/60" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at 16% 24%, rgba(0,245,255,0.2), rgba(0,0,0,0) 48%), radial-gradient(circle at 82% 78%, rgba(56,189,248,0.16), rgba(0,0,0,0) 42%)',
              }}
            />
            <div
              className="absolute inset-0 opacity-20 mix-blend-soft-light"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(0deg, rgba(255,255,255,0.07) 0px, rgba(255,255,255,0.07) 1px, transparent 1px, transparent 3px), repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 4px)',
              }}
            />

            <div className="absolute inset-0 pointer-events-none z-20">
              <svg viewBox="0 0 1000 520" preserveAspectRatio="none" className="w-full h-full">
                <path
                  ref={pathRef}
                  d="M 80 420 C 230 120, 460 430, 620 210 C 760 40, 870 320, 940 120"
                  fill="none"
                  stroke="rgba(0,245,255,0.24)"
                  strokeWidth="2"
                  strokeDasharray="6 8"
                />
              </svg>
              <div
                ref={dotGlowRef}
                className="absolute top-0 left-0 w-7 h-7 rounded-full bg-cyan-300/55 blur-md -translate-x-1/2 -translate-y-1/2"
              />
              <div
                ref={dotRef}
                className="absolute top-0 left-0 w-3.5 h-3.5 rounded-full bg-[#00f5ff] shadow-[0_0_18px_rgba(0,245,255,0.95)] -translate-x-1/2 -translate-y-1/2"
              />
            </div>

            <div className="relative z-10 p-6 md:p-10 min-h-[540px] flex flex-col justify-between">
              <div className="flex items-center justify-between text-[10px] md:text-xs uppercase tracking-[0.22em] text-cyan-100/80">
                <span className="px-3 py-1 border border-cyan-400/40 rounded-full bg-black/35">Profile System</span>
                <span className="px-3 py-1 border border-cyan-400/40 rounded-full bg-black/35">Scroll Sequence</span>
              </div>

              <div className="relative min-h-[380px]">
                <div
                  ref={(el) => {
                    panelRefs.current[0] = el;
                  }}
                  className="absolute inset-0"
                >
                  <div className="max-w-3xl bg-black/45 border border-cyan-400/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                    <p className="text-cyan-300 text-xs tracking-[0.28em] mb-3 uppercase">Stage 01 / Identity</p>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-3 drop-shadow-[0_0_16px_rgba(0,245,255,0.35)]">
                      Rishabh Kumar Mandal
                    </h3>
                    <p className="text-cyan-300 text-lg md:text-xl mb-5">CS Engineer</p>
                    <p className="text-white/85 text-base md:text-lg leading-relaxed">
                      Building intelligent products at the intersection of software, embedded systems, and research.
                      Focused on shipping practical solutions with measurable impact.
                    </p>
                  </div>
                </div>

                <div
                  ref={(el) => {
                    panelRefs.current[1] = el;
                  }}
                  className="absolute inset-0"
                >
                  <div className="bg-black/45 border border-cyan-400/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                    <p className="text-cyan-300 text-xs tracking-[0.28em] mb-4 uppercase">Stage 02 / Mission Stats</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {[
                        { value: '4x', label: 'Client Projects' },
                        { value: '4x', label: 'Patents' },
                        { value: '8+', label: 'Conference Papers' },
                        { value: '10x', label: 'Hackathon Wins' },
                        { value: '2x', label: 'Hackathon Judge' },
                        { value: '3x', label: 'Internships' },
                      ].map((item) => (
                        <div key={item.label} className="border border-cyan-400/30 rounded-xl bg-black/35 p-4 text-center">
                          <div className="text-2xl md:text-3xl font-bold text-cyan-300 drop-shadow-[0_0_10px_rgba(0,245,255,0.45)]">
                            {item.value}
                          </div>
                          <div className="text-xs md:text-sm text-white/75 mt-1">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  ref={(el) => {
                    panelRefs.current[2] = el;
                  }}
                  className="absolute inset-0"
                >
                  <div className="bg-black/45 border border-cyan-400/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                    <p className="text-cyan-300 text-xs tracking-[0.28em] mb-4 uppercase">Stage 03 / Toolbox</p>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                      {toolbox.map((tool) => {
                        const Icon = tool.icon;
                        return (
                          <div
                            key={tool.name}
                            className="border border-cyan-400/30 rounded-xl bg-black/35 p-3 flex flex-col items-center justify-center text-center"
                          >
                            <Icon size={22} className="text-cyan-300 mb-2 drop-shadow-[0_0_8px_rgba(0,245,255,0.35)]" />
                            <span className="text-white/85 text-xs md:text-sm">{tool.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div
                  ref={(el) => {
                    panelRefs.current[3] = el;
                  }}
                  className="absolute inset-0"
                >
                  <div className="bg-black/45 border border-cyan-400/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                    <p className="text-cyan-300 text-xs tracking-[0.28em] mb-4 uppercase">Stage 04 / Technical Skills</p>
                    <div className="grid md:grid-cols-2 gap-x-6 gap-y-3">
                      {skills.map((skill, index) => (
                        <div key={skill.name}>
                          <div className="flex justify-between text-xs md:text-sm text-white/80 mb-1.5">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                          </div>
                          <div className="h-2.5 bg-black/50 border border-cyan-400/20 rounded-full overflow-hidden">
                            <div
                              ref={(el) => {
                                skillFillRefs.current[index] = el;
                              }}
                              className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-sky-300"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] md:text-xs uppercase tracking-[0.18em] text-cyan-100/70">
                <span className="border border-cyan-400/35 rounded-full px-3 py-1 bg-black/35">Scroll Controlled</span>
                <span className="border border-cyan-400/35 rounded-full px-3 py-1 bg-black/35">4 Stage Timeline</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
