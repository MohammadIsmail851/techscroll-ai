import React from 'react';
import { ShieldX, CheckCircle, AlertTriangle, Filter, Sparkles } from 'lucide-react';

export default function HypeFilterSection({ recommendation, hypeFiltered }) {
  const rec = recommendation || {
    title: "How Data Structures & Algorithms Power Real Software Engineering",
    educationalValue: 91,
    contentQuality: 90,
    hypeScore: 8,
    calculatedScore: 92.4
  };

  const hype = (hypeFiltered && hypeFiltered.length > 0) ? hypeFiltered[0] : {
    title: "10 AI Tools That Will Get You a ₹20 Lakh Job in 7 Days!",
    educationalValue: 32,
    contentQuality: 41,
    hypeScore: 94,
    filterReason: "Unrealistic career promise, zero technical depth, clickbait title structure.",
    hypeDetails: {
      exaggerationLevel: "CRITICAL (94/100)",
      substanceScore: "POOR (32/100)",
      penaltyApplied: "-35 Hype Penalty",
      verdict: "FILTERED OUT"
    }
  };

  return (
    <section className="py-20 px-4 bg-[#07090e] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono">
            <Filter className="w-3.5 h-3.5 text-rose-400" />
            <span>EXPLICIT HYPE PENALTY ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            The AI Doesn't Chase Hype.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Clickbait reels with 90%+ hype scores are penalized and filtered out automatically.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Recommended Card */}
          <div className="p-6 sm:p-8 rounded-3xl glass-panel-glow border border-emerald-500/40 space-y-6 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
                <h3 className="text-xl font-bold text-white font-mono">RECOMMENDED</h3>
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                HIGH VALUE
              </span>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-extrabold text-white leading-snug">{rec.title}</h4>
              <p className="text-xs text-slate-300 mt-2">Bridges theoretical computer science with real production system engineering.</p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-2 text-center pt-2">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-0.5">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">EDU VALUE</span>
                <span className="text-lg font-bold text-emerald-400 font-mono">{rec.educationalValue}/100</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-0.5">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">QUALITY</span>
                <span className="text-lg font-bold text-cyan-400 font-mono">{rec.contentQuality}/100</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-0.5">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">HYPE</span>
                <span className="text-lg font-bold text-slate-400 font-mono">{rec.hypeScore}/100</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-300 flex items-center justify-between">
              <span>FINAL COMPOSITE SCORE:</span>
              <strong className="text-sm text-white font-bold">{rec.calculatedScore || 92.4} / 100</strong>
            </div>
          </div>

          {/* Filtered Out Hype Card */}
          <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-rose-500/40 space-y-6 relative overflow-hidden bg-rose-950/20 opacity-90">
            <div className="flex items-center justify-between border-b border-rose-500/20 pb-4">
              <div className="flex items-center gap-2">
                <ShieldX className="w-6 h-6 text-rose-400" />
                <h3 className="text-xl font-bold text-white font-mono">FILTERED OUT</h3>
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                HYPE DETECTED
              </span>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-extrabold text-slate-300 line-through leading-snug">{hype.title}</h4>
              <p className="text-xs text-rose-300 mt-2 font-medium">Reason: {hype.filterReason}</p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-2 text-center pt-2">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-0.5">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">EDU VALUE</span>
                <span className="text-lg font-bold text-rose-400 font-mono">{hype.educationalValue}/100</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-0.5">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">QUALITY</span>
                <span className="text-lg font-bold text-slate-400 font-mono">{hype.contentQuality}/100</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-rose-500/30 space-y-0.5">
                <span className="text-[10px] font-mono text-rose-400 uppercase block">HYPE SCORE</span>
                <span className="text-lg font-bold text-rose-400 font-mono">{hype.hypeScore}/100</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs font-mono text-rose-300 flex items-center justify-between">
              <span>PENALTY APPLIED:</span>
              <strong className="text-sm text-rose-400 font-bold">-35 HYPE PENALTY (REJECTED)</strong>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
