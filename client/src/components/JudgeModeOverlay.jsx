import React, { useState } from 'react';
import { Presentation, X, ArrowRight, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';

const slides = [
  {
    stage: "01 / THE PROBLEM",
    title: "Students scroll endlessly.",
    subtitle: "Short-form video apps captivate hours of daily attention, but provide negligible educational or career ROI.",
    color: "text-rose-400",
    border: "border-rose-500/40"
  },
  {
    stage: "02 / THE INSIGHT",
    title: "Scrolling behavior reveals hidden interests.",
    subtitle: "Watch completion rates, repeat views, and likes across seemingly random memes implicitly reveal underlying engineering passion.",
    color: "text-purple-400",
    border: "border-purple-500/40"
  },
  {
    stage: "03 / THE AI",
    title: "We understand patterns across multiple Reels.",
    subtitle: "Instead of simplistic keyword matching ('Java' -> 'Java Reel'), TechScroll AI connects multimodal signals into holistic interest clusters.",
    color: "text-cyan-400",
    border: "border-cyan-500/40"
  },
  {
    stage: "04 / THE FILTER",
    title: "We remove hype & clickbait content.",
    subtitle: "Our transparent scoring engine applies heavy penalties to exaggerated '₹20 Lakh Job in 7 Days' promises, keeping recommendations high-substance.",
    color: "text-amber-400",
    border: "border-amber-500/40"
  },
  {
    stage: "05 / THE RESULT",
    title: "Useful technology discovery.",
    subtitle: "Turns unproductive scrolling into targeted, high-impact career learning with full explainable decision trees.",
    color: "text-emerald-400",
    border: "border-emerald-500/40"
  }
];

export default function JudgeModeOverlay({ isOpen, onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!isOpen) return null;

  const slide = slides[currentSlide];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-12 overflow-y-auto">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
            <Presentation className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-extrabold text-lg text-white font-mono">HACKATHON JUDGE PRESENTATION MODE</h2>
            <span className="text-xs text-amber-400 font-mono">3-MINUTE PITCH WALKTHROUGH</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-2 border border-slate-700"
        >
          <span>Exit Judge Mode</span>
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Main Slide Content */}
      <div className="my-auto max-w-4xl mx-auto w-full py-12 space-y-8 text-center sm:text-left">
        <div className={`p-8 sm:p-12 rounded-3xl glass-panel-glow border-2 ${slide.border} space-y-6 shadow-2xl`}>
          <span className={`text-xs font-mono font-extrabold tracking-widest uppercase ${slide.color}`}>
            {slide.stage}
          </span>
          <h1 className="text-3xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            {slide.title}
          </h1>
          <p className="text-slate-300 text-base sm:text-2xl leading-relaxed font-light">
            "{slide.subtitle}"
          </p>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full cursor-pointer transition-all ${
                idx === currentSlide ? 'w-12 bg-amber-400' : 'w-4 bg-slate-800 hover:bg-slate-700'
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Slide Navigation Footer */}
      <div className="flex items-center justify-between border-t border-slate-800 pt-4">
        <button
          onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
          disabled={currentSlide === 0}
          className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono disabled:opacity-30 flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" /> Previous
        </button>

        <span className="text-xs font-mono text-slate-400">
          Slide {currentSlide + 1} of {slides.length}
        </span>

        <button
          onClick={() => setCurrentSlide(prev => Math.min(slides.length - 1, prev + 1))}
          disabled={currentSlide === slides.length - 1}
          className="px-5 py-2.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono disabled:opacity-30 flex items-center gap-2"
        >
          Next Slide <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
