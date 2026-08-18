import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, CheckCircle2, RefreshCw, Sparkles, Filter } from 'lucide-react';

const negativeOptions = [
  "Too difficult",
  "Too generic",
  "Wrong topic",
  "Too much hype",
  "Not interested",
  "Too career-focused"
];

export default function FeedbackLoopSection({ onFeedbackSubmit }) {
  const [feedbackGiven, setFeedbackGiven] = useState(null); // 'positive' | 'negative' | 'submitted'
  const [selectedReasons, setSelectedReasons] = useState([]);

  const handlePositive = () => {
    setFeedbackGiven('positive');
    if (onFeedbackSubmit) onFeedbackSubmit({ type: 'positive' });
  };

  const handleNegativeClick = () => {
    setFeedbackGiven('negative');
  };

  const toggleReason = (reason) => {
    if (selectedReasons.includes(reason)) {
      setSelectedReasons(selectedReasons.filter(r => r !== reason));
    } else {
      setSelectedReasons([...selectedReasons, reason]);
    }
  };

  const submitNegativeFeedback = () => {
    setFeedbackGiven('submitted');
    if (onFeedbackSubmit) onFeedbackSubmit({ type: 'negative', reasons: selectedReasons });
  };

  return (
    <section className="py-16 px-4 bg-[#07090e] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        
        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
            <RefreshCw className="w-3.5 h-3.5 text-emerald-400" />
            <span>CONTINUOUS FEEDBACK LOOP</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Your AI Learns From Your Feedback
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Was this recommendation useful for your technology discovery journey?
          </p>
        </div>

        {/* Initial Question & Feedback Buttons */}
        {feedbackGiven === null && (
          <div className="flex items-center justify-center gap-4 pt-2">
            <button
              onClick={handlePositive}
              className="px-6 py-3 rounded-2xl glass-panel hover:glass-panel-glow border border-emerald-500/40 hover:border-emerald-400 text-slate-100 hover:text-white font-bold text-sm flex items-center gap-2 transition-all transform hover:scale-105"
            >
              <ThumbsUp className="w-4 h-4 text-emerald-400" />
              <span>👍 Yes</span>
            </button>

            <button
              onClick={handleNegativeClick}
              className="px-6 py-3 rounded-2xl glass-panel border border-slate-800 hover:border-rose-500/40 text-slate-300 hover:text-white font-bold text-sm flex items-center gap-2 transition-all transform hover:scale-105"
            >
              <ThumbsDown className="w-4 h-4 text-rose-400" />
              <span>👎 Not really</span>
            </button>
          </div>
        )}

        {/* Positive Confirmation State */}
        {feedbackGiven === 'positive' && (
          <div className="p-6 rounded-2xl glass-panel-glow border border-emerald-500/40 space-y-2 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 text-emerald-400 font-bold text-sm font-mono">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>✓ Got it!</span>
            </div>
            <p className="text-xs text-slate-300">
              We'll use this positive signal to boost similar high-value technology recommendations in your next session.
            </p>
          </div>
        )}

        {/* Negative Feedback Options Modal Panel */}
        {feedbackGiven === 'negative' && (
          <div className="p-6 rounded-3xl glass-panel-glow border border-rose-500/40 space-y-4 max-w-lg mx-auto text-left">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                <Filter className="w-4 h-4 text-rose-400" /> WHAT DIDN'T MATCH?
              </h3>
              <span className="text-[11px] text-slate-400 font-mono">SELECT ALL THAT APPLY</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {negativeOptions.map((opt, idx) => {
                const isSelected = selectedReasons.includes(opt);

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleReason(opt)}
                    className={`px-3 py-2 rounded-xl text-xs font-mono font-medium border text-left transition-all ${
                      isSelected
                        ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 font-bold'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    {isSelected ? '✓ ' : '○ '}{opt}
                  </button>
                );
              })}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={submitNegativeFeedback}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-rose-500 text-white font-bold text-xs shadow-lg"
              >
                SUBMIT FEEDBACK & RERANK
              </button>
            </div>
          </div>
        )}

        {/* Submitted Confirmation State */}
        {feedbackGiven === 'submitted' && (
          <div className="p-6 rounded-2xl glass-panel border border-cyan-500/40 space-y-2 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 text-cyan-400 font-bold text-sm font-mono">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>Thanks — we'll adjust your recommendations!</span>
            </div>
            <p className="text-xs text-slate-300">
              Updated session preferences: {selectedReasons.length > 0 ? selectedReasons.join(', ') : 'Standard adjustment'}.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
