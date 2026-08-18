import React, { useState } from 'react';
import { Share2, Sparkles, Info } from 'lucide-react';

const nodes = [
  { id: "se", label: "Software Engineering", score: 91, x: 50, y: 50, color: "#8b5cf6", reels: ["Reel 01", "Reel 05", "Reel 06", "Reel 07", "Reel 08"], explanation: "Central core interest combining code structure, low-level HashMap internals, system design, and production debugging." },
  { id: "dsa", label: "DSA & Problem Solving", score: 88, x: 80, y: 40, color: "#06b6d4", reels: ["Reel 02", "Reel 05"], explanation: "High watch completion on sliding window interviews and HashMap bucket treeification." },
  { id: "prog", label: "Programming", score: 87, x: 20, y: 45, color: "#3b82f6", reels: ["Reel 01", "Reel 02"], explanation: "Focus on clean code vs messy code spikes and language syntax." },
  { id: "career", label: "Developer Career", score: 76, x: 50, y: 82, color: "#10b981", reels: ["Reel 03", "Reel 06"], explanation: "Engagement with day-in-the-life software engineer vlogs and full-stack roadmaps." },
  { id: "hw", label: "Hardware & Tools", score: 61, x: 25, y: 75, color: "#f59e0b", reels: ["Reel 04"], explanation: "Interest in MacBook M3 Max vs Linux benchmarks and Docker memory usage." },
  { id: "ai", label: "AI & Emerging Tech", score: 68, x: 50, y: 18, color: "#ec4899", reels: ["Reel 04", "Reel 06"], explanation: "Interest in running local LLMs and modern backend AI integrations." }
];

const edges = [
  { from: "se", to: "prog" },
  { from: "se", to: "dsa" },
  { from: "se", to: "career" },
  { from: "se", to: "hw" },
  { from: "se", to: "ai" }
];

export default function InterestConstellationGraph() {
  const [activeNode, setActiveNode] = useState(nodes[0]);

  return (
    <section className="py-20 px-4 bg-[#05070a] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Share2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>INTERACTIVE KNOWLEDGE GRAPH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Interest Constellation Graph
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Hover or tap any node to highlight contributing Reels and underlying semantic explanations.
          </p>
        </div>

        {/* Graph + Detail Popover Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Interactive SVG Canvas */}
          <div className="lg:col-span-2 relative min-h-[420px] rounded-3xl glass-panel border border-white/10 p-6 flex items-center justify-center overflow-hidden">
            
            <svg className="w-full h-[400px] overflow-visible">
              {/* Edges */}
              {edges.map((edge, idx) => {
                const source = nodes.find(n => n.id === edge.from);
                const target = nodes.find(n => n.id === edge.to);
                const isHighlighted = activeNode && (activeNode.id === source.id || activeNode.id === target.id);

                return (
                  <line
                    key={idx}
                    x1={`${source.x}%`}
                    y1={`${source.y}%`}
                    x2={`${target.x}%`}
                    y2={`${target.y}%`}
                    stroke={isHighlighted ? activeNode.color : '#334155'}
                    strokeWidth={isHighlighted ? 3 : 1.5}
                    strokeDasharray={isHighlighted ? "none" : "4 4"}
                    className="transition-all duration-300"
                  />
                );
              })}

              {/* Nodes */}
              {nodes.map((node) => {
                const isActive = activeNode?.id === node.id;

                return (
                  <g
                    key={node.id}
                    className="cursor-pointer group"
                    onMouseEnter={() => setActiveNode(node)}
                    onClick={() => setActiveNode(node)}
                  >
                    {/* Glowing outer circle */}
                    <circle
                      cx={`${node.x}%`}
                      cy={`${node.y}%`}
                      r={isActive ? 34 : 24}
                      fill={node.color}
                      fillOpacity={isActive ? 0.3 : 0.15}
                      stroke={node.color}
                      strokeWidth={isActive ? 3 : 1.5}
                      className="transition-all duration-300"
                    />

                    {/* Central core node */}
                    <circle
                      cx={`${node.x}%`}
                      cy={`${node.y}%`}
                      r={isActive ? 14 : 10}
                      fill={node.color}
                      className="transition-all duration-300"
                    />

                    {/* Node Text Label */}
                    <text
                      x={`${node.x}%`}
                      y={`${node.y + (isActive ? 12 : 10)}%`}
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize={isActive ? "13" : "11"}
                      fontWeight="bold"
                      fontFamily="JetBrains Mono, monospace"
                      className="pointer-events-none drop-shadow"
                    >
                      {node.label} ({node.score}%)
                    </text>
                  </g>
                );
              })}
            </svg>

          </div>

          {/* Node Popover Details Card */}
          <div className="p-6 sm:p-8 rounded-3xl glass-panel-glow border border-purple-500/40 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold text-cyan-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-purple-400" /> NODE DETAILS
              </span>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">
                {activeNode.score}% MATCH
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-white font-mono">{activeNode.label}</h3>
              <p className="text-slate-300 text-xs mt-2 leading-relaxed">{activeNode.explanation}</p>
            </div>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase">CONTRIBUTING REELS:</span>
              <div className="flex flex-wrap gap-1.5">
                {activeNode.reels.map((reelId, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-purple-300 font-mono text-xs font-medium">
                    {reelId}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center gap-2 text-[11px] text-slate-400">
              <Info className="w-3.5 h-3.5 text-cyan-400" />
              <span>Hover over other constellation nodes to inspect connections.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
