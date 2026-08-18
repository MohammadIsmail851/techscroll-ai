import React from 'react';
import { Cpu, Github, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#030407] border-t border-white/5 py-12 px-6 lg:px-12 text-xs text-slate-400 font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-white text-sm">TECHSCROLL AI</h3>
            <p className="text-[11px] text-slate-400">PromptWars × RGMCET Live Hackathon Submission</p>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center md:text-left">
          <p className="text-slate-400">"We don't just see what you watched. We understand why."</p>
        </div>

        {/* Stack summary */}
        <div className="flex items-center gap-4 text-slate-400">
          <span>React • Express • GSAP • Tailwind</span>
        </div>

      </div>
    </footer>
  );
}
