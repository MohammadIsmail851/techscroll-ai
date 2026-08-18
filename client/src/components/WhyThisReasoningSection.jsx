import React from 'react';
import { HelpCircle, ArrowDown, Sparkles, CheckCircle2, FileText, Code2, Cpu } from 'lucide-react';

export default function WhyThisReasoningSection({ formattedOutput }) {
  const output = formattedOutput || {
    currentReel: "Reel 01-08 Aggregate History (Java, LeetCode DSA, System Design, Dev Specs)",
    interestDetected: "SOFTWARE ENGINEERING (System Architecture & Algorithmic Problem Solving)",
    why: "The student spends 90%+ watch time on low-level language internals (HashMap), algorithmic optimization (Sliding Window), and system scaling roadmaps, indicating a clear trajectory toward full-spectrum Software Engineering.",
    recommendedTechReel: "How Data Structures & Algorithms Power Real Software Engineering",
    category: "DSA & Software Engineering",
    whyThisRecommendation: "Connects your interest in Java code structures, LeetCode algorithms, and backend systems to real production software engineering principles.",
    difficulty: "Intermediate",
    confidence: "HIGH"
  };

  return (
    <section className="py-20 px-4 bg-[#07090e] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>EXPLAINABLE AI REASONING CHAIN</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            WHY THIS RECOMMENDATION?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            TechScroll AI never recommends content without showing the explicit reasoning path.
          </p>
        </div>

        {/* Decision Tree Flowchart */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 space-y-8">
          
          {/* Step 1: Input Signals */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase">STEP 1 — AGGREGATED INTERACTION SIGNALS</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex justify-between">
                <span className="text-slate-300">Java Meme (Reel 01)</span>
                <span className="text-purple-400">→ Code Architecture</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex justify-between">
                <span className="text-slate-300">Coding Interview (Reel 02)</span>
                <span className="text-cyan-400">→ DSA Optimization</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex justify-between">
                <span className="text-slate-300">Dev Lifestyle (Reel 03)</span>
                <span className="text-indigo-400">→ Career Practice</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex justify-between">
                <span className="text-slate-300">Laptop Specs (Reel 04)</span>
                <span className="text-emerald-400">→ Dev Workstations</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="w-5 h-5 text-purple-400 animate-bounce" />
          </div>

          {/* Step 2: Inferred Interest */}
          <div className="p-5 rounded-2xl bg-purple-950/20 border border-purple-500/40 text-center space-y-2">
            <span className="text-xs font-mono font-bold text-purple-400 uppercase">STEP 2 — UNDERLYING INTEREST INFERENCE</span>
            <h3 className="text-xl sm:text-2xl font-black text-white font-mono">{output.interestDetected}</h3>
            <p className="text-xs text-slate-300 max-w-xl mx-auto italic">"{output.why}"</p>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="w-5 h-5 text-cyan-400 animate-bounce" />
          </div>

          {/* Step 3: Recommended Content */}
          <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/40 text-center space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase">STEP 3 — TARGETED USEFUL RECOMMENDATION</span>
            <h3 className="text-xl sm:text-2xl font-black text-white">"{output.recommendedTechReel}"</h3>
            <p className="text-xs text-emerald-300 max-w-xl mx-auto">{output.whyThisRecommendation}</p>
          </div>

        </div>

        {/* Required Raw Output Format Card (Prompt Section 21) */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl glass-panel border border-slate-800 font-mono text-xs text-slate-300 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-cyan-400 font-bold">
            <span className="flex items-center gap-1.5"><FileText className="w-4 h-4" /> REQUIRED SYSTEM AUDIT OUTPUT FORMAT</span>
            <span>SECTION 21 COMPLIANT</span>
          </div>

          <div className="space-y-2 leading-relaxed">
            <p><strong className="text-purple-400">CURRENT REEL:</strong> {output.currentReel}</p>
            <p><strong className="text-purple-400">INTEREST DETECTED:</strong> {output.interestDetected}</p>
            <p><strong className="text-purple-400">WHY:</strong> {output.why}</p>
            <p><strong className="text-emerald-400">RECOMMENDED TECH REEL:</strong> {output.recommendedTechReel}</p>
            <p><strong className="text-cyan-400">CATEGORY:</strong> {output.category}</p>
            <p><strong className="text-cyan-400">WHY THIS RECOMMENDATION:</strong> {output.whyThisRecommendation}</p>
            <p><strong className="text-amber-400">DIFFICULTY:</strong> {output.difficulty}</p>
            <p><strong className="text-amber-400">CONFIDENCE:</strong> {output.confidence}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
