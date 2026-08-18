import React from 'react';
import { Sparkles, Play, Sliders, Presentation, Cpu, ShieldCheck } from 'lucide-react';

export default function Navbar({ onRunAnalysis, isAnalyzing, onOpenManual, isJudgeMode, onToggleJudgeMode, activeProvider }) {
  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/10 px-4 lg:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-purple-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-cyan-400 animate-pulse" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-extrabold text-lg tracking-tight text-white font-mono">TECHSCROLL<span className="text-purple-400">.AI</span></h1>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                PROMPTWARS x RGMCET
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">Semantic Short-Form Reel Intelligence</p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Provider Badge */}
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>AI: <strong className="text-emerald-400 font-semibold">{activeProvider}</strong></span>
          </div>

          {/* Manual Input Modal Trigger */}
          <button
            onClick={onOpenManual}
            className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 flex items-center gap-1.5 transition-all"
            title="Manual Reel Input"
          >
            <Sliders className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">Manual Input</span>
          </button>

          {/* Judge Mode Toggle */}
          <button
            onClick={onToggleJudgeMode}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border flex items-center gap-1.5 transition-all ${
              isJudgeMode
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-lg shadow-amber-500/10'
                : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700'
            }`}
          >
            <Presentation className="w-3.5 h-3.5 text-amber-400" />
            <span>{isJudgeMode ? 'JUDGE MODE ON' : 'JUDGE MODE'}</span>
          </button>

          {/* RUN AI ANALYSIS Button */}
          <button
            onClick={onRunAnalysis}
            disabled={isAnalyzing}
            className="relative group px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 flex items-center gap-2 overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            {isAnalyzing ? (
              <>
                <Sparkles className="w-4 h-4 animate-spin text-cyan-300" />
                <span>ANALYZING...</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-white" />
                <span>RUN AI ANALYSIS</span>
              </>
            )}
          </button>

        </div>

      </div>
    </header>
  );
}
