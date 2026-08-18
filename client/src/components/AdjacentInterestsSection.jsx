import React, { useState } from 'react';
import { Layers, Sparkles, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

const adjacentTopics = [
  { id: "dsa", label: "DSA & Problem Solving", score: 88, desc: "Sliding window, LRU caches & tree data structures", rec: "Practical DSA Patterns for Developers" },
  { id: "sys", label: "System Design", score: 82, desc: "Redis caching, microservices & queue architectures", rec: "Building Scalable Backends with Redis" },
  { id: "cloud", label: "Cloud & Microservices", score: 76, desc: "CDN edge nodes, Docker & Kubernetes load balancing", rec: "Deconstructing High-Availability Architecture" },
  { id: "ai", label: "AI Engineering", score: 72, desc: "LLMs, local Docker containers & prompt agents", rec: "JVM Memory & Garbage Collection Demystified" }
];

export default function AdjacentInterestsSection({ onSelectTopic, activeTopicId }) {
  const [selected, setSelected] = useState(activeTopicId || "dsa");

  const handleTopicClick = (topic) => {
    setSelected(topic.id);
    if (onSelectTopic) onSelectTopic(topic);
  };

  return (
    <section className="py-20 px-4 bg-[#05070a] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>DISCOVERY MODE & ADJACENT CLUSTERS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            You Might Also Like
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Click any adjacent tech domain to explore related discovery topics and adaptively rerank recommendations.
          </p>
        </div>

        {/* Interactive Topic Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {adjacentTopics.map((topic) => {
            const isSelected = selected === topic.id;

            return (
              <div
                key={topic.id}
                onClick={() => handleTopicClick(topic)}
                className={`p-5 rounded-2xl glass-panel cursor-pointer transition-all border transform hover:-translate-y-1 ${
                  isSelected
                    ? 'glass-panel-glow border-purple-500/50 shadow-lg shadow-purple-500/20 scale-[1.02]'
                    : 'border-slate-800 hover:border-slate-700 opacity-80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">ADJACENT CLUSTER</span>
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`}>
                    {topic.score}%
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-white mt-2 font-mono">{topic.label}</h3>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">{topic.desc}</p>

                {isSelected && (
                  <div className="mt-3 pt-2 border-t border-purple-500/30 flex items-center gap-1 text-[11px] font-mono text-purple-300 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> ACTIVE EXPLORATION
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Discovery Mode Strategy Breakdown */}
        <div className="max-w-4xl mx-auto p-6 rounded-3xl glass-panel border border-white/10 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-mono font-bold text-cyan-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" /> DISCOVERY MODE BALANCED RANKING
            </span>
            <span className="text-xs font-mono text-slate-400">AVOIDS TOPIC FILTER BUBBLES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
            <div className="p-3.5 rounded-xl bg-slate-900 border border-emerald-500/30 space-y-1">
              <span className="text-emerald-400 font-bold block">01 — BEST MATCH</span>
              <p className="text-white font-bold">Practical DSA for Developers</p>
              <span className="text-[10px] text-slate-400">Relevance: 92%</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-cyan-500/30 space-y-1">
              <span className="text-cyan-400 font-bold block">02 — ADJACENT INTEREST</span>
              <p className="text-white font-bold">System Design Fundamentals</p>
              <span className="text-[10px] text-slate-400">Adjacent Match: 84%</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-purple-500/30 space-y-1">
              <span className="text-purple-400 font-bold block">03 — EXPLORE NEW</span>
              <p className="text-white font-bold">AI Engineering & Agents</p>
              <span className="text-[10px] text-slate-400">Emerging Curiosity: 72%</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
