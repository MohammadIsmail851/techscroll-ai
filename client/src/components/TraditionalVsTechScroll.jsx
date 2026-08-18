import React from 'react';
import { XCircle, CheckCircle, ArrowRight, ShieldAlert, Sparkles, RefreshCw } from 'lucide-react';

export default function TraditionalVsTechScroll() {
  return (
    <section className="py-20 px-4 bg-[#05070a] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
            <span>THE BUILT-IN TRAP COMPARISON</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Shallow Recommender vs TechScroll AI
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Weak recommendation engines get stuck in repetitive keyword loops. TechScroll AI extracts broader underlying engineering intent.
          </p>
        </div>

        {/* Comparison Side-by-Side Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Left Column: Shallow Recommender (TRAP) */}
          <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-rose-500/30 space-y-6 relative overflow-hidden bg-rose-950/10">
            <div className="flex items-center justify-between border-b border-rose-500/20 pb-4">
              <div className="flex items-center gap-2">
                <XCircle className="w-6 h-6 text-rose-400" />
                <h3 className="text-xl font-bold text-white">Shallow Recommender</h3>
              </div>
              <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 uppercase">
                Keyword Loop Trap
              </span>
            </div>

            {/* Input Signals */}
            <div className="space-y-2 text-xs font-mono text-slate-300">
              <span className="text-slate-400">INPUT REELS WATCHED:</span>
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <p>• Reel 01: Java Meme</p>
                <p>• Reel 02: Coding Interview</p>
                <p>• Reel 03: Dev Lifestyle</p>
                <p>• Reel 04: Laptop Comparison</p>
              </div>
            </div>

            {/* Shallow Deduction */}
            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs space-y-1 text-center">
              <span className="font-mono text-rose-400 font-bold block">WEAK KNOWLEDGE DEDUCTION:</span>
              <p className="text-white font-semibold text-sm">"User likes string 'Java'"</p>
            </div>

            {/* Repetitive Recommendation Result */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs text-rose-400 font-mono font-bold">
                <span>RECOMMENDED RESULT:</span>
                <span className="flex items-center gap-1"><RefreshCw className="w-3 h-3 animate-spin" /> Repetitive Loop</span>
              </div>
              <h4 className="text-sm font-bold text-slate-200">"Top 5 Java Syntax Tips You Need to Know"</h4>
              <p className="text-xs text-slate-400">Offers zero career growth or architectural depth. Keeps student scrolling mindlessly in circles.</p>
            </div>
          </div>

          {/* Right Column: TechScroll AI (SOLUTION) */}
          <div className="p-6 sm:p-8 rounded-3xl glass-panel-glow border border-emerald-500/40 space-y-6 relative overflow-hidden bg-emerald-950/10">
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
                <h3 className="text-xl font-bold text-white">TechScroll AI</h3>
              </div>
              <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase">
                Semantic Reasoning
              </span>
            </div>

            {/* Input Signals */}
            <div className="space-y-2 text-xs font-mono text-slate-300">
              <span className="text-slate-400">MULTIMODAL SEMANTIC PIPELINE:</span>
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                <p>• Code Architecture + LeetCode Optimization</p>
                <p>• HashMap Internals + Dev Specs & Microservices</p>
                <p>• Production Memory Leak Troubleshooting</p>
              </div>
            </div>

            {/* Deep Deduction */}
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs space-y-1 text-center">
              <span className="font-mono text-emerald-400 font-bold block">INFERRED BROADER INTEREST:</span>
              <p className="text-white font-bold text-base font-mono">SOFTWARE ENGINEERING (91%)</p>
            </div>

            {/* Intelligent Recommendation Result */}
            <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 space-y-2">
              <div className="flex items-center justify-between text-xs text-emerald-400 font-mono font-bold">
                <span>VALUABLE TECH RECOMMENDATION:</span>
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <h4 className="text-sm font-extrabold text-white">"How Data Structures & Algorithms Power Real Software Engineering"</h4>
              <p className="text-xs text-slate-300">Bridges theoretical CS with real software design, turning scrolling time into career advancement.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
