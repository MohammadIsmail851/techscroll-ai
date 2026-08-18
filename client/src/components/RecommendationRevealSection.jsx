import React, { useEffect, useRef, useState } from 'react';
import { gsap } from '../animations/gsapSetup';
import { Award, Sparkles, CheckCircle2, ShieldCheck, Play, Layers, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function RecommendationRevealSection({ recommendation }) {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const [showWhy, setShowWhy] = useState(false);

  const rec = recommendation || {
    title: "How Data Structures & Algorithms Power Real Software Engineering",
    topic: "DSA in Production Systems",
    creator: "@engineering_realities",
    category: "DSA & Software Engineering",
    difficulty: "Intermediate",
    interestMatch: 92,
    semanticRelevance: 94,
    educationalValue: 91,
    careerValue: 89,
    engagementPotential: 85,
    contentQuality: 91,
    hypeScore: 8,
    calculatedScore: 92.4,
    confidence: "HIGH",
    summary: "Explains how hash tables, LRU caches, and B-Trees directly underpin database indexes, operating system page tables, and web application routing."
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current,
        { scale: 0.9, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 1, ease: "back.out(1.4)" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [recommendation]);

  return (
    <section ref={containerRef} className="py-20 px-4 bg-[#05070a] border-b border-white/5 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="gradient-glow w-[500px] h-[500px] bg-emerald-600/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-5xl mx-auto space-y-10 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>AI RECOMMENDATION REVEAL</span>
          </div>
          <h2 className="text-3xl sm:text-6xl font-black text-white tracking-tight uppercase font-mono">
            YOUR NEXT TECH REEL
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Inferred from semantic multi-Reel interaction patterns with zero keyword matching.
          </p>
        </div>

        {/* Dramatic Reveal Card */}
        <div ref={cardRef} className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl glass-panel-glow border-2 border-emerald-500/40 text-left space-y-8 shadow-2xl shadow-emerald-500/10">
          
          {/* Card Top Badges */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-emerald-500/20 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
                <Play className="w-6 h-6 fill-emerald-300 ml-0.5" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase">{rec.category}</span>
                <h3 className="text-xs text-slate-400 font-mono">Difficulty: <strong className="text-white">{rec.difficulty}</strong></h3>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                Confidence: <strong className="text-emerald-400">{rec.confidence || 'HIGH'}</strong>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-xs font-mono font-bold text-emerald-300">
                COMPOSITE SCORE: {rec.calculatedScore || 92.4}
              </div>
            </div>
          </div>

          {/* Main Title & Summary */}
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              "{rec.title}"
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {rec.summary}
            </p>
          </div>

          {/* Transparent Metric Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center space-y-1">
              <span className="text-[10px] font-mono text-slate-400 uppercase block">Interest Match</span>
              <span className="text-lg font-extrabold text-purple-400 font-mono">{rec.interestMatch}%</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center space-y-1">
              <span className="text-[10px] font-mono text-slate-400 uppercase block">Educational Value</span>
              <span className="text-lg font-extrabold text-cyan-400 font-mono">{rec.educationalValue}%</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center space-y-1">
              <span className="text-[10px] font-mono text-slate-400 uppercase block">Content Quality</span>
              <span className="text-lg font-extrabold text-emerald-400 font-mono">{rec.contentQuality}%</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center space-y-1">
              <span className="text-[10px] font-mono text-slate-400 uppercase block">Hype Score</span>
              <span className="text-lg font-extrabold text-slate-400 font-mono">{rec.hypeScore}%</span>
            </div>

            <div className="col-span-2 sm:col-span-1 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center space-y-1">
              <span className="text-[10px] font-mono text-slate-400 uppercase block">Career Impact</span>
              <span className="text-lg font-extrabold text-amber-400 font-mono">{rec.careerValue || 89}%</span>
            </div>
          </div>

          {/* Why Am I Seeing This Expandable Button */}
          <div className="pt-2">
            <button
              onClick={() => setShowWhy(!showWhy)}
              className="w-full py-3 px-4 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 font-mono text-xs font-bold flex items-center justify-between transition-all"
            >
              <span className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400" /> WHY AM I SEEING THIS RECOMMENDATION?
              </span>
              {showWhy ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {showWhy && (
              <div className="mt-3 p-5 rounded-2xl bg-slate-900/95 border border-purple-500/30 text-xs font-mono text-slate-300 space-y-3 animate-fadeIn">
                <div className="text-cyan-400 font-bold uppercase">EXPLICIT SEMANTIC REASONING:</div>
                <p className="text-slate-300 leading-relaxed font-sans text-xs">
                  {rec.whyRecommended || "Your interactions across Java memes, sliding window mocks, and PagerDuty debugging show a repeated pattern around programming, software engineering, developer culture, and technology."}
                </p>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400">
                  <strong className="text-purple-400 font-bold">WHY NOT A SHALLOW RECOMMENDATION?</strong>
                  <p className="mt-0.5">{rec.whyNotShallow || "Unlike a basic 'Learn Java in 10 minutes' clip, this reel bridges theoretical computer science with high-impact software design."}</p>
                </div>
              </div>
            )}
          </div>

          {/* Scoring Formula Transparency Note */}
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 space-y-1">
            <div className="flex items-center gap-2 text-purple-400 font-bold text-[11px]">
              <Layers className="w-3.5 h-3.5" /> TRANSPARENT SCORING MODEL
            </div>
            <p className="text-slate-400 text-[11px]">
              Formula: 35% Interest Match + 20% Semantic Relevance + 15% Educational Value + 10% Career Value + 10% Engagement Potential + 10% Content Quality - Hype Penalty
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
