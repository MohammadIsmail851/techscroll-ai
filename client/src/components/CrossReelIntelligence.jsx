import React, { useEffect, useRef } from 'react';
import { gsap } from '../animations/gsapSetup';
import { Network, ArrowDown, Cpu, Sparkles, CheckCircle2, Zap } from 'lucide-react';

const signals = [
  { label: "Java Meme", category: "Code Structure", color: "from-amber-500 to-orange-600" },
  { label: "Coding Interview", category: "DSA & Algorithms", color: "from-cyan-500 to-blue-600" },
  { label: "Dev Lifestyle", category: "Engineering Culture", color: "from-purple-500 to-indigo-600" },
  { label: "Laptop Comparison", category: "Hardware Specs", color: "from-emerald-500 to-teal-600" },
  { label: "HashMap Internals", category: "Memory Mechanics", color: "from-rose-500 to-pink-600" },
  { label: "System Design", category: "Architecture Scaling", color: "from-violet-500 to-purple-600" }
];

export default function CrossReelIntelligence() {
  const containerRef = useRef(null);
  const coreRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(coreRef.current,
        { scale: 0.8, opacity: 0.7 },
        { scale: 1.05, opacity: 1, repeat: -1, yoyo: true, duration: 2, ease: "sine.inOut" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-20 px-4 bg-[#07090e] border-b border-white/5 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="gradient-glow w-full h-[500px] bg-purple-900/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto space-y-12 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Network className="w-3.5 h-3.5 text-cyan-400" />
            <span>CROSS-REEL SIGNAL MERGER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Connecting Multimodal Signals Across Reels
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Watch individual isolated Reel watch events merge semantically into a cohesive interest profile.
          </p>
        </div>

        {/* Visual Merger Diagram Canvas */}
        <div className="relative max-w-4xl mx-auto p-8 rounded-3xl glass-panel border border-white/10 shadow-2xl space-y-10">
          
          {/* Signal Cards Top Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {signals.map((sig, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/40 text-left space-y-1.5 transition-all transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">Reel Signal #{idx + 1}</span>
                  <Zap className="w-3 h-3 text-cyan-400" />
                </div>
                <div className="font-bold text-white text-xs sm:text-sm">{sig.label}</div>
                <div className="text-[11px] font-mono text-purple-300">{sig.category}</div>
              </div>
            ))}
          </div>

          {/* Animated Connecting Lines */}
          <div className="flex flex-col items-center justify-center space-y-2 py-2">
            <div className="w-0.5 h-12 bg-gradient-to-b from-purple-500 via-cyan-400 to-indigo-500 rounded-full animate-pulse"></div>
            <div className="px-4 py-1.5 rounded-full bg-slate-900 border border-purple-500/40 text-xs font-mono text-cyan-300 flex items-center gap-2 shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin" />
              <span>SEMANTIC CROSS-RELATIONSHIP SYNTHESIS</span>
            </div>
            <div className="w-0.5 h-12 bg-gradient-to-b from-indigo-500 via-cyan-400 to-emerald-400 rounded-full animate-pulse"></div>
          </div>

          {/* Central Merged Interest Core Node */}
          <div ref={coreRef} className="max-w-md mx-auto p-6 rounded-2xl glass-panel-glow border-2 border-emerald-400/50 shadow-2xl shadow-emerald-500/20 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mx-auto text-emerald-300">
              <Cpu className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">INFERRED CORE INTEREST</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">SOFTWARE ENGINEERING</h3>
              <p className="text-xs text-slate-300 mt-1">Confidence Score: <strong className="text-emerald-400 font-mono">91% (HIGH)</strong></p>
            </div>
            <div className="flex flex-wrap justify-center gap-1.5 pt-2">
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono">System Architecture</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono">DSA & Performance</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono">Code Quality</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
