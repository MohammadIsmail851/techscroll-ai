import React, { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '../animations/gsapSetup';
import { Instagram, Heart, Bookmark, Eye, Tag, Sparkles, ExternalLink, Play } from 'lucide-react';

export default function ReelHistorySection({ reels = [] }) {
  const targetRef = useRef(null);
  const sectionRef = useRef(null);
  const [selectedReel, setSelectedReel] = useState(null);

  useEffect(() => {
    if (!reels || reels.length === 0) return;

    const ctx = gsap.context(() => {
      const totalWidth = sectionRef.current.scrollWidth;
      const windowWidth = window.innerWidth;

      gsap.to(sectionRef.current, {
        x: () => -(totalWidth - windowWidth + 60),
        ease: "none",
        scrollTrigger: {
          trigger: targetRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1
        }
      });
    }, targetRef);

    return () => ctx.revert();
  }, [reels]);

  return (
    <section id="reel-history" ref={targetRef} className="relative min-h-screen bg-[#05070a] py-16 overflow-hidden flex flex-col justify-center border-b border-white/5">
      
      {/* Header */}
      <div className="px-6 lg:px-12 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono mb-2">
            <Instagram className="w-3.5 h-3.5 text-rose-400" />
            <span>INTERACTION HISTORY (8 REELS)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Student Reel Scroll Stream
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Horizontal horizontal scroll deck. Click any card to inspect extracted AI semantic context.
          </p>
        </div>

        <div className="text-xs font-mono text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded-lg border border-purple-500/20">
          DEMO CONTENT ANALYSIS ACTIVE
        </div>
      </div>

      {/* Horizontal Scrolling Deck Container */}
      <div className="w-full overflow-hidden">
        <div ref={sectionRef} className="flex gap-6 px-6 lg:px-12 w-max">
          
          {reels.map((reel, idx) => (
            <div
              key={reel.id || idx}
              onClick={() => setSelectedReel(reel)}
              className="w-[320px] sm:w-[360px] h-[460px] flex-shrink-0 rounded-2xl glass-panel hover:glass-panel-glow border border-white/10 hover:border-purple-500/40 p-5 flex flex-col justify-between cursor-pointer group transition-all transform hover:-translate-y-2 shadow-2xl relative overflow-hidden"
            >
              
              {/* Card Header */}
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    #{String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                    <Instagram className="w-3 h-3 text-rose-400" /> Instagram
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="flex items-center gap-1 font-mono text-cyan-400">
                    <Eye className="w-3.5 h-3.5" /> {reel.watchPercentage}%
                  </span>
                </div>
              </div>

              {/* Card Visual / Thumbnail Mock */}
              <div className="relative my-4 h-40 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-center items-center p-4 text-center group-hover:border-purple-500/40 transition-colors overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20"></div>
                <div className="w-10 h-10 rounded-full bg-purple-600/30 border border-purple-400/40 flex items-center justify-center text-white mb-2 group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                </div>
                <h4 className="font-bold text-sm text-white line-clamp-2 z-10 px-2">{reel.title}</h4>
                <span className="text-[11px] text-cyan-400 font-mono mt-1 z-10">{reel.topic}</span>
              </div>

              {/* Reel Metrics & Caption */}
              <div className="space-y-3 z-10">
                <p className="text-slate-300 text-xs line-clamp-2 italic">"{reel.caption}"</p>
                
                {/* Semantic Interpretation Pill */}
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] text-slate-300 space-y-1">
                  <div className="flex items-center justify-between font-mono text-purple-400 font-semibold text-[10px]">
                    <span className="flex items-center gap-1"><Sparkles className="w-3 h-3 text-cyan-400" /> AI SEMANTIC SIGNAL</span>
                    <span>{reel.semanticCategory}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 z-10">
                <div className="flex items-center gap-3">
                  <span className={`flex items-center gap-1 ${reel.liked ? 'text-rose-400 font-semibold' : 'text-slate-500'}`}>
                    <Heart className={`w-3.5 h-3.5 ${reel.liked ? 'fill-rose-400' : ''}`} /> {reel.liked ? 'Liked' : 'Viewed'}
                  </span>
                  <span className={`flex items-center gap-1 ${reel.saved ? 'text-cyan-400 font-semibold' : 'text-slate-500'}`}>
                    <Bookmark className={`w-3.5 h-3.5 ${reel.saved ? 'fill-cyan-400' : ''}`} /> {reel.saved ? 'Saved' : ''}
                  </span>
                </div>
                <a
                  href={reel.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="hover:text-purple-300 transition-colors flex items-center gap-1 font-mono text-[11px]"
                >
                  URL <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* Reel Modal Detail */}
      {selectedReel && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="max-w-xl w-full glass-panel-glow rounded-3xl border border-purple-500/40 p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Instagram className="w-5 h-5 text-rose-400" /> {selectedReel.title}
              </h3>
              <button
                onClick={() => setSelectedReel(null)}
                className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <p><strong>Topic:</strong> <span className="text-cyan-400">{selectedReel.topic}</span></p>
              <p><strong>Creator:</strong> <span className="text-purple-300">{selectedReel.creator}</span></p>
              <p><strong>Watch Completion:</strong> <span className="text-emerald-400 font-mono">{selectedReel.watchPercentage}%</span></p>
              <p><strong>Caption:</strong> "{selectedReel.caption}"</p>
              {selectedReel.transcript && (
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <span className="font-mono text-xs font-bold text-purple-400">AUDIO TRANSCRIPT:</span>
                  <p className="text-slate-300 italic text-xs">"{selectedReel.transcript}"</p>
                </div>
              )}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {selectedReel.tags && selectedReel.tags.map((t, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono text-[11px]">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <a
                href={selectedReel.url}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-purple-600 text-white font-semibold text-xs flex items-center gap-2"
              >
                <span>OPEN ON INSTAGRAM</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
