import React from 'react';
import { ArrowRight, Sparkles, Tv, Compass, Cpu, Layers } from 'lucide-react';

export default function EntertainmentToLearningSection() {
  return (
    <section className="py-20 px-4 bg-[#07090e] border-b border-white/5 relative overflow-hidden">
      
      {/* Glow background */}
      <div className="gradient-glow w-96 h-96 bg-indigo-600/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>ENTERTAINMENT TO LEARNING BRIDGE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            From What You Watch → To What You Can Discover
          </h2>
          <p className="text-slate-300 font-semibold text-base sm:text-xl">
            "We don't remove entertainment. We connect it to useful discovery."
          </p>
        </div>

        {/* 3-Column Visual Flow Canvas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          
          {/* Column 1: WHAT YOU WATCHED */}
          <div className="p-6 rounded-3xl glass-panel border border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase">
                <Tv className="w-4 h-4" /> <span>01 WHAT YOU WATCHED</span>
              </div>
              <h3 className="text-xl font-bold text-white">Entertainment Scrolling</h3>
            </div>

            <div className="space-y-2 text-xs font-mono text-slate-300">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <span>😂 Java Meme</span>
                <span className="text-slate-500">24s</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <span>😂 Dev Joke</span>
                <span className="text-slate-500">30s</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <span>💻 Laptop Specs</span>
                <span className="text-slate-500">38s</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <span>👨‍💻 Engineer Lifestyle</span>
                <span className="text-slate-500">45s</span>
              </div>
            </div>
          </div>

          {/* Column 2: WHAT WE UNDERSTOOD */}
          <div className="p-6 rounded-3xl glass-panel-glow border-2 border-purple-500/50 space-y-4 flex flex-col justify-between text-center relative overflow-hidden bg-purple-950/20">
            <div className="space-y-1">
              <div className="flex items-center justify-center gap-2 text-purple-400 font-mono text-xs font-bold uppercase">
                <Cpu className="w-4 h-4" /> <span>02 WHAT WE UNDERSTOOD</span>
              </div>
              <h3 className="text-xl font-bold text-white">Underlying Interest</h3>
            </div>

            <div className="my-auto space-y-2">
              <span className="text-xs font-mono font-bold text-purple-300 uppercase block">INFERRED CATEGORY</span>
              <h4 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 font-mono">
                SOFTWARE ENGINEERING
              </h4>
              <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono font-bold border border-purple-500/30">
                91% MATCH SCORE
              </span>
            </div>

            <p className="text-[11px] text-slate-300 italic">
              Synthesized across 8 interactions beyond keyword syntax.
            </p>
          </div>

          {/* Column 3: WHAT WE RECOMMEND */}
          <div className="p-6 rounded-3xl glass-panel border border-emerald-500/40 space-y-4 flex flex-col justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase">
                <Sparkles className="w-4 h-4" /> <span>03 WHAT WE RECOMMEND</span>
              </div>
              <h3 className="text-xl font-bold text-white">High-Impact Discovery</h3>
            </div>

            <div className="space-y-2 text-xs font-mono text-slate-300">
              <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/30 flex items-center justify-between font-bold text-emerald-300">
                <span>🎯 Production DSA</span>
                <span className="text-emerald-400">92%</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <span>⚡ System Design</span>
                <span className="text-cyan-400">84%</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <span>🛠️ Developer Tools</span>
                <span className="text-purple-400">79%</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <span>🤖 AI Engineering</span>
                <span className="text-amber-400">72%</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
