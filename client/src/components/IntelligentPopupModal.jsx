import React, { useEffect, useRef } from 'react';
import { gsap } from '../animations/gsapSetup';
import { Sparkles, ExternalLink, ArrowRight, X, Brain, CheckCircle2 } from 'lucide-react';

export default function IntelligentPopupModal({ isOpen, onClose, primaryInterest, confidence, evidenceChips = [], onExploreTechContent }) {
  const modalRef = useRef(null);

  const interestName = primaryInterest?.title || "SOFTWARE ENGINEERING";
  const confidenceLevel = confidence || primaryInterest?.confidenceScore > 85 ? "STRONG" : "EMERGING";

  useEffect(() => {
    if (isOpen && modalRef.current) {
      gsap.fromTo(modalRef.current,
        { scale: 0.85, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.4)" }
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleExploreInstagram = () => {
    const topicSlug = interestName.toLowerCase().replace(/[^a-z0-9]/g, '');
    const instagramUrl = `https://www.instagram.com/explore/tags/${topicSlug}/`;
    window.open(instagramUrl, '_blank', 'noopener,noreferrer');
  };

  const defaultChips = evidenceChips.length > 0 ? evidenceChips : [
    "Java Meme",
    "Coding Interview",
    "Developer Lifestyle",
    "Laptop Comparison"
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div
        ref={modalRef}
        className="max-w-md w-full glass-panel-glow rounded-3xl border-2 border-purple-500/40 p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden"
      >
        {/* Glow Accent */}
        <div className="gradient-glow w-64 h-64 bg-purple-600/30 -top-20 -right-20 pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center font-bold text-xs transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="text-center space-y-2 pt-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
            <span>TECHSCROLL AI ASSISTANT</span>
          </div>
          <h3 className="text-2xl font-black text-white tracking-tight">We noticed something 👀</h3>
        </div>

        {/* Dynamic Copy */}
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center space-y-2">
          <span className="text-[11px] font-mono font-bold text-slate-400 uppercase">INFERRED INTEREST</span>
          <p className="text-xs text-slate-300">
            {confidenceLevel === "STRONG" 
              ? "You seem strongly interested in" 
              : "We're noticing an emerging interest in"}
          </p>
          <h4 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 font-mono">
            {interestName}
          </h4>
          <span className="inline-block px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold">
            {confidenceLevel} CONFIDENCE MATCH
          </span>
        </div>

        {/* Evidence Chips */}
        <div className="space-y-2">
          <span className="text-xs font-mono text-slate-400 uppercase block font-semibold text-center">
            Based on {defaultChips.length} related interactions:
          </span>
          <div className="flex flex-wrap justify-center gap-1.5">
            {defaultChips.map((chip, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-purple-300 font-mono text-xs font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-cyan-400" /> {chip}
              </span>
            ))}
          </div>
        </div>

        <p className="text-xs text-center text-slate-400">
          Want to discover more high-value content tailored to this interest?
        </p>

        {/* Actions */}
        <div className="space-y-2.5 pt-2">
          {/* Button 1: Explore on Instagram */}
          <button
            onClick={handleExploreInstagram}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-extrabold text-sm tracking-wide shadow-lg shadow-purple-600/30 hover:shadow-purple-600/60 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <span>🚀 Explore on Instagram</span>
            <ExternalLink className="w-4 h-4" />
          </button>

          {/* Button 2: Show me useful tech content */}
          <button
            onClick={() => {
              onClose();
              if (onExploreTechContent) onExploreTechContent();
            }}
            className="w-full py-3 rounded-2xl glass-panel text-cyan-300 hover:text-white font-bold text-xs border border-cyan-500/30 hover:border-cyan-500/60 transition-all flex items-center justify-center gap-2"
          >
            <span>🎯 Show me useful tech content</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Button 3: Maybe later */}
          <button
            onClick={onClose}
            className="w-full py-2 text-slate-500 hover:text-slate-300 font-medium text-xs transition-colors"
          >
            Maybe later
          </button>
        </div>

      </div>
    </div>
  );
}
