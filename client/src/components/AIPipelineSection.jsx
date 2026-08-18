import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../animations/gsapSetup';
import { Eye, Brain, Network, Compass, Filter, Sparkles, CheckCircle2 } from 'lucide-react';

const pipelineSteps = [
  {
    num: "01",
    title: "READ",
    subtitle: "Reel interactions & engagement signals",
    desc: "Ingests student watch time (%), likes, saves, captions, and audio transcripts across recent Instagram Reels.",
    icon: Eye,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/30"
  },
  {
    num: "02",
    title: "UNDERSTAND",
    subtitle: "Context + deep semantics",
    desc: "Extracts language concepts, software patterns, and dev topics using AI semantic understanding.",
    icon: Brain,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/30"
  },
  {
    num: "03",
    title: "CONNECT",
    subtitle: "Cross-reel relationships",
    desc: "Identifies semantic relationships connecting Java memes, LeetCode algorithms, MacBook specs, and microservice debugging.",
    icon: Network,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/30"
  },
  {
    num: "04",
    title: "INFER",
    subtitle: "Broader underlying interest",
    desc: "Discovers that the student's true interest is Software Engineering (91% confidence), rather than basic syntax.",
    icon: Compass,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/30"
  },
  {
    num: "05",
    title: "FILTER",
    subtitle: "Remove hype & clickbait",
    desc: "Filters out exaggerated '10 AI Tools' and 'Get a ₹20 Lakh Job in 7 Days' hype content with a strict hype penalty.",
    icon: Filter,
    color: "text-rose-400",
    bg: "bg-rose-500/10 border-rose-500/30"
  },
  {
    num: "06",
    title: "RECOMMEND",
    subtitle: "Useful technology content",
    desc: "Ranks and presents high-value technical content with explicit, transparent reasoning.",
    icon: Sparkles,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/30"
  }
];

export default function AIPipelineSection() {
  const containerRef = useRef(null);
  const progressLineRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });

      // Animate progress line height
      tl.to(progressLineRef.current, { height: "100%", duration: 6, ease: "none" }, 0);

      // Animate active step reveals
      stepRefs.current.forEach((stepEl, idx) => {
        if (!stepEl) return;
        tl.to(stepEl, {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1,
          ease: "power2.out"
        }, idx * 1);
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-[#07090e] py-16 px-4 flex flex-col justify-center border-b border-white/5">
      <div className="max-w-6xl mx-auto w-full space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI REASONING PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            How TechScroll AI Reasons
          </h2>
          <p className="text-slate-400 text-sm">
            Scroll down to watch the 6-stage semantic inference engine process interactions in real-time.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative max-w-4xl mx-auto pt-6">
          
          {/* Vertical Progress Line Track */}
          <div className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-1 bg-slate-800 -translate-x-1/2 rounded-full overflow-hidden">
            <div ref={progressLineRef} className="w-full h-0 bg-gradient-to-b from-purple-500 via-cyan-400 via-rose-400 to-emerald-400 transition-all"></div>
          </div>

          {/* Steps List */}
          <div className="space-y-12">
            {pipelineSteps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.num}
                  ref={el => stepRefs.current[idx] = el}
                  className={`relative flex items-center gap-6 opacity-20 scale-95 transition-all ${
                    isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  
                  {/* Step Card */}
                  <div className={`w-full sm:w-[45%] p-6 rounded-2xl glass-panel border ${step.bg} shadow-xl space-y-3`}>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-mono font-bold uppercase tracking-wider ${step.color}`}>
                        STAGE {step.num}
                      </span>
                      <Icon className={`w-5 h-5 ${step.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">{step.title}</h3>
                      <h4 className="text-xs font-semibold text-slate-300 mt-0.5">{step.subtitle}</h4>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Central Node Badge */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-2 border-slate-700 flex items-center justify-center text-white font-mono text-xs font-bold shadow-lg z-10">
                    {step.num}
                  </div>

                  <div className="hidden sm:block w-[45%]"></div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
