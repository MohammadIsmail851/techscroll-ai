import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../animations/gsapSetup';
import { ArrowRight, Film, Network, Target, Award } from 'lucide-react';

export default function HeroScrollTransformation() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });

      // Step 1: 8 REELS
      tl.to(card1Ref.current, { opacity: 1, scale: 1, duration: 1 })
        .to(card1Ref.current, { opacity: 0.2, scale: 0.95, duration: 0.8 }, "+=0.5");

      // Step 2: PATTERNS
      tl.to(card2Ref.current, { opacity: 1, scale: 1, duration: 1 })
        .to(card2Ref.current, { opacity: 0.2, scale: 0.95, duration: 0.8 }, "+=0.5");

      // Step 3: INTEREST
      tl.to(card3Ref.current, { opacity: 1, scale: 1, duration: 1 })
        .to(card3Ref.current, { opacity: 0.2, scale: 0.95, duration: 0.8 }, "+=0.5");

      // Step 4: RECOMMENDATION
      tl.to(card4Ref.current, { opacity: 1, scale: 1, duration: 1 });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen flex flex-col justify-center items-center bg-[#05070a] px-4 overflow-hidden border-y border-white/5">
      
      {/* Background accent */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center space-y-8">
        
        <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400">
          SCROLL-DRIVEN PIPELINE TRANSFORMATION
        </h2>

        {/* Dynamic Transformed View Cards */}
        <div className="relative min-h-[220px] flex items-center justify-center">
          
          {/* Card 1: 8 REELS */}
          <div ref={card1Ref} className="absolute inset-0 opacity-0 scale-90 transition-all flex flex-col items-center justify-center p-8 rounded-3xl glass-panel-glow border-purple-500/40">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-4 text-purple-300">
              <Film className="w-8 h-8" />
            </div>
            <span className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-mono">8 REELS</span>
            <p className="text-slate-300 text-sm mt-2 max-w-md">Aggregating student watch history across Java memes, algorithm mocks, specs & debugging clips.</p>
          </div>

          {/* Card 2: PATTERNS */}
          <div ref={card2Ref} className="absolute inset-0 opacity-0 scale-90 transition-all flex flex-col items-center justify-center p-8 rounded-3xl glass-panel-glow border-cyan-500/40">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-4 text-cyan-300">
              <Network className="w-8 h-8" />
            </div>
            <span className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-mono">PATTERNS</span>
            <p className="text-slate-300 text-sm mt-2 max-w-md">Extracting cross-reel semantic signals beyond isolated keyword matches.</p>
          </div>

          {/* Card 3: INTEREST */}
          <div ref={card3Ref} className="absolute inset-0 opacity-0 scale-90 transition-all flex flex-col items-center justify-center p-8 rounded-3xl glass-panel-glow border-indigo-500/40">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-4 text-indigo-300">
              <Target className="w-8 h-8" />
            </div>
            <span className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-mono">INTEREST</span>
            <p className="text-slate-300 text-sm mt-2 max-w-md">Inferring broader tech interest: <strong>SOFTWARE ENGINEERING (91%)</strong></p>
          </div>

          {/* Card 4: RECOMMENDATION */}
          <div ref={card4Ref} className="absolute inset-0 opacity-0 scale-90 transition-all flex flex-col items-center justify-center p-8 rounded-3xl glass-panel-glow border-emerald-500/40">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-4 text-emerald-300">
              <Award className="w-8 h-8" />
            </div>
            <span className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-mono">RECOMMENDATION</span>
            <p className="text-emerald-300 text-sm font-semibold mt-2 max-w-lg">How Data Structures Power Real Software Engineering (Confidence: HIGH)</p>
          </div>

        </div>

        {/* Pipeline visual indicator footer */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 text-xs font-mono text-slate-400 pt-4">
          <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-purple-400">8 REELS</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-cyan-400">PATTERNS</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-indigo-400">INTEREST</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-emerald-400">RECOMMENDATION</span>
        </div>

      </div>
    </section>
  );
}
