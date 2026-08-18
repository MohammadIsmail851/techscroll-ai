import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../animations/gsapSetup';
import { TrendingUp, ArrowRight, Sparkles, Brain, Cpu, ShieldCheck } from 'lucide-react';

const evolutionSteps = [
  { stage: "01 START", label: "Raw Reel Interactions", desc: "Ingesting 8 Instagram watch events", color: "text-purple-400", border: "border-purple-500/30" },
  { stage: "02 PARSE", label: "Java Code Syntax", desc: "Extracting basic language constructs & memes", color: "text-indigo-400", border: "border-indigo-500/30" },
  { stage: "03 ABSTRACT", label: "Programming & DSA", desc: "Recognizing two pointers & HashMap mechanics", color: "text-cyan-400", border: "border-cyan-500/30" },
  { stage: "04 SYNTHESIZE", label: "Software Engineering", desc: "Inferring core system architecture & scaling interest (91%)", color: "text-emerald-400", border: "border-emerald-500/50" },
  { stage: "05 DISCOVER", label: "Developer Career Growth", desc: "Connecting entertainment scrolling to production learning", color: "text-amber-400", border: "border-amber-500/30" }
];

export default function InterestEvolutionSection() {
  const containerRef = useRef(null);
  const stepsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      stepsRef.current.forEach((el, idx) => {
        if (!el) return;
        gsap.fromTo(el,
          { opacity: 0.2, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 55%",
              scrub: 1
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 px-4 bg-[#05070a] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">
            <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI SEMANTIC EVOLUTION TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            How We Discovered Your Interest
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Watch the AI's understanding evolve step-by-step from isolated content to underlying engineering passion.
          </p>
        </div>

        {/* Horizontal / Vertical Evolution Stepper */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          
          {evolutionSteps.map((step, idx) => (
            <div
              key={idx}
              ref={el => stepsRef.current[idx] = el}
              className={`p-5 rounded-2xl glass-panel border ${step.border} space-y-3 relative flex flex-col justify-between`}
            >
              <div className="space-y-1">
                <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${step.color}`}>
                  {step.stage}
                </span>
                <h3 className="text-base font-extrabold text-white leading-snug">{step.label}</h3>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
              
              {idx < evolutionSteps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-5 h-5 text-purple-400" />
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
