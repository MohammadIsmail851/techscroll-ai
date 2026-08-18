import React, { useEffect, useRef } from 'react';
import { gsap } from '../animations/gsapSetup';
import { ArrowDown, Sparkles, Brain, Layers, Filter, Compass } from 'lucide-react';

export default function HeroSection({ onRunAnalysis }) {
  const heroRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const line4Ref = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

      tl.fromTo(line1Ref.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, delay: 0.2 })
        .fromTo(line2Ref.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.6')
        .fromTo(line3Ref.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.5')
        .fromTo(line4Ref.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.6')
        .fromTo(subtitleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.4');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} aria-label="Hero Introduction" className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-12 pb-20">
      
      {/* Background Animated Particles & Nodes */}
      <div className="absolute inset-0 pointer-events-none grid-bg opacity-40" aria-hidden="true"></div>
      
      {/* Gradient Glow Spheres */}
      <div className="gradient-glow w-96 h-96 bg-purple-600 top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
      <div className="gradient-glow w-96 h-96 bg-cyan-500 bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2" aria-hidden="true"></div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-8">
        
        {/* Hackathon Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-mono tracking-wide shadow-lg">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" aria-hidden="true" />
          <span>PROMPTWARS x RGMCET HACKATHON PROTOTYPE</span>
        </div>

        {/* Main Headline Reveal */}
        <div className="space-y-2 sm:space-y-4 font-black tracking-tight">
          <h1 className="text-4xl sm:text-6xl md:text-8xl text-white uppercase font-extrabold leading-[1.05]">
            <span ref={line1Ref} className="block">YOUR SCROLL</span>
            <span ref={line2Ref} className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">
              TELLS A STORY.
            </span>
          </h1>
        </div>

        {/* Storytelling Taglines Reveal */}
        <div className="space-y-3 max-w-3xl mx-auto text-slate-300 font-medium text-lg sm:text-2xl leading-relaxed">
          <p ref={line3Ref} className="text-purple-200/90 font-semibold">
            "We don't just see what you watched."
          </p>
          <p ref={line4Ref} className="text-cyan-300 font-bold text-xl sm:text-3xl">
            "We understand why."
          </p>
        </div>

        {/* Secondary Tagline & Subtext */}
        <p ref={subtitleRef} className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-sans leading-relaxed pt-2">
          Turn your short-form Reel scrolling into useful technology discovery. TechScroll AI maps semantic patterns across Reels, infers underlying engineering interests, and filters out hype.
        </p>

        {/* Call to Action Grid */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={onRunAnalysis}
            aria-label="Run multi-reel semantic AI analysis"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-extrabold text-base tracking-wide shadow-xl shadow-purple-600/30 hover:shadow-purple-600/60 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-purple-400"
          >
            <Brain className="w-5 h-5 text-cyan-200" aria-hidden="true" />
            <span>RUN AI REEL ANALYSIS</span>
          </button>
          
          <a
            href="#reel-history"
            className="px-6 py-4 rounded-2xl glass-panel text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 hover:border-slate-500 transition-all flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <span>EXPLORE 8 DEMO REELS</span>
            <ArrowDown className="w-4 h-4 text-purple-400 animate-bounce" aria-hidden="true" />
          </a>
        </div>

        {/* Micro Feature Indicators */}
        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          <div className="p-4 rounded-xl glass-panel border border-white/5 space-y-1">
            <div className="flex items-center gap-2 text-purple-400 text-xs font-mono font-bold uppercase">
              <Brain className="w-4 h-4" aria-hidden="true" /> <span>01 Semantic Analysis</span>
            </div>
            <p className="text-slate-300 text-xs font-medium">Beyond simple keywords</p>
          </div>

          <div className="p-4 rounded-xl glass-panel border border-white/5 space-y-1">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase">
              <Layers className="w-4 h-4" aria-hidden="true" /> <span>02 Cross-Reel Signal</span>
            </div>
            <p className="text-slate-300 text-xs font-medium">Relationships across 8 reels</p>
          </div>

          <div className="p-4 rounded-xl glass-panel border border-white/5 space-y-1">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase">
              <Filter className="w-4 h-4" aria-hidden="true" /> <span>03 Hype Filter</span>
            </div>
            <p className="text-slate-300 text-xs font-medium">Removes clickbait & hype</p>
          </div>

          <div className="p-4 rounded-xl glass-panel border border-white/5 space-y-1">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase">
              <Compass className="w-4 h-4" aria-hidden="true" /> <span>04 Transparent WHY</span>
            </div>
            <p className="text-slate-300 text-xs font-medium">Complete reasoning path</p>
          </div>
        </div>

      </div>

    </section>
  );
}
