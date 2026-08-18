import React, { useState, useEffect } from 'react';
import { Sliders, Sparkles, X, Link, FileText, Send } from 'lucide-react';

export default function ManualReelAnalyzer({ isOpen, onClose, onAnalyzeCustom }) {
  const [url, setUrl] = useState('https://www.instagram.com/p/custom_reel/');
  const [caption, setCaption] = useState('Building a distributed microservices gateway using Spring Boot & Redis caching');
  const [transcript, setTranscript] = useState('How we handle 50,000 requests per second using horizontal auto-scaling and Redis write-behind caches.');
  const [description, setDescription] = useState('System design whiteboard breakdown clip.');
  const [loading, setLoading] = useState(false);

  // Keyboard Esc Listener for Accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      onAnalyzeCustom({
        id: "custom_01",
        platform: "Instagram",
        url,
        title: "Custom Submitted Reel Analysis",
        topic: "Custom System Design",
        creator: "@user_submitted",
        caption,
        transcript,
        description,
        watchPercentage: 98,
        liked: true,
        saved: true,
        tags: ["Custom", "Backend", "Architecture"],
        semanticCategory: "Custom Input Analysis"
      });
      setLoading(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="manual-analyzer-title">
      <div className="max-w-xl w-full glass-panel-glow rounded-3xl border border-purple-500/40 p-6 sm:p-8 space-y-6 shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-cyan-400" aria-hidden="true" />
            <h3 id="manual-analyzer-title" className="text-xl font-bold text-white font-mono">MANUAL REEL MODE</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close manual reel mode dialog"
            className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center font-bold text-sm focus-visible:ring-2 focus-visible:ring-purple-400"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          
          {/* Reel URL */}
          <div className="space-y-1">
            <label htmlFor="manual-reel-url" className="font-mono text-slate-300 font-semibold flex items-center gap-1.5">
              <Link className="w-3.5 h-3.5 text-purple-400" aria-hidden="true" /> INSTAGRAM REEL URL:
            </label>
            <input
              id="manual-reel-url"
              type="text"
              value={url}
              onChange={e => setUrl(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 font-mono text-xs focus:outline-none focus:border-purple-500 focus-visible:ring-2 focus-visible:ring-purple-400"
              required
            />
          </div>

          {/* Caption */}
          <div className="space-y-1">
            <label htmlFor="manual-reel-caption" className="font-mono text-slate-300 font-semibold flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" /> CAPTION / TEXT:
            </label>
            <textarea
              id="manual-reel-caption"
              rows="2"
              value={caption}
              onChange={e => setCaption(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-purple-500 focus-visible:ring-2 focus-visible:ring-purple-400"
            />
          </div>

          {/* Transcript */}
          <div className="space-y-1">
            <label htmlFor="manual-reel-transcript" className="font-mono text-slate-300 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" /> AUDIO TRANSCRIPT:
            </label>
            <textarea
              id="manual-reel-transcript"
              rows="2"
              value={transcript}
              onChange={e => setTranscript(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-purple-500 focus-visible:ring-2 focus-visible:ring-purple-400"
            />
          </div>

          <div className="pt-2 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 font-semibold text-xs hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              {loading ? <Sparkles className="w-4 h-4 animate-spin" aria-hidden="true" /> : <Send className="w-4 h-4" aria-hidden="true" />}
              <span>RUN REEL ANALYSIS</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
