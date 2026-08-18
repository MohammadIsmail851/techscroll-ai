import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HeroScrollTransformation from './components/HeroScrollTransformation';
import AIPipelineSection from './components/AIPipelineSection';
import ReelHistorySection from './components/ReelHistorySection';
import CrossReelIntelligence from './components/CrossReelIntelligence';
import TraditionalVsTechScroll from './components/TraditionalVsTechScroll';
import InterestProfileSection from './components/InterestProfileSection';
import InterestConstellationGraph from './components/InterestConstellationGraph';
import InterestEvolutionSection from './components/InterestEvolutionSection';
import EntertainmentToLearningSection from './components/EntertainmentToLearningSection';
import AdjacentInterestsSection from './components/AdjacentInterestsSection';
import FeedbackLoopSection from './components/FeedbackLoopSection';
import HypeFilterSection from './components/HypeFilterSection';
import RecommendationRevealSection from './components/RecommendationRevealSection';
import WhyThisReasoningSection from './components/WhyThisReasoningSection';
import IntelligentPopupModal from './components/IntelligentPopupModal';
import ManualReelAnalyzer from './components/ManualReelAnalyzer';
import JudgeModeOverlay from './components/JudgeModeOverlay';
import Footer from './components/Footer';

import { fetchReels, runAIAnalysis, fetchRecommendation } from './services/apiClient';

export default function App() {
  const [reels, setReels] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [pipelineData, setPipelineData] = useState(null);
  const [recommendationData, setRecommendationData] = useState(null);
  const [isJudgeMode, setIsJudgeMode] = useState(false);
  const [isManualOpen, setIsManualOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [analysisId, setAnalysisId] = useState(0); // Version ID incremented on every successful analysis
  const [activeProvider, setActiveProvider] = useState('Local Mock AI');
  const [selectedTopic, setSelectedTopic] = useState(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // Initial Data Load
  useEffect(() => {
    async function loadData() {
      const reelsData = await fetchReels();
      setReels(reelsData);

      const recData = await fetchRecommendation();
      setRecommendationData(recData);
    }
    loadData();
  }, []);

  // Handler for RUN AI ANALYSIS button (Rapid click protected & triggers popup EVERY time analysis succeeds)
  const handleRunAnalysis = async () => {
    // 1. Rapid Click Protection: Ignore clicks if an analysis is already running
    if (isAnalyzing) return;

    setIsAnalyzing(true);
    
    setTimeout(async () => {
      try {
        // Close any existing open popup during active analysis
        setIsPopupOpen(false);

        // Perform analysis with latest reels data
        const res = await runAIAnalysis(reels, 'mock');
        if (!res || res.success === false) {
          throw new Error('Analysis failed');
        }

        const recData = await fetchRecommendation();
        
        // Update state with LATEST analysis results
        setPipelineData(res);
        setRecommendationData(recData);
        setAnalysisId(prev => prev + 1);
        setIsAnalyzing(false);
        
        // Smooth scroll to recommendation reveal section
        const recElement = document.getElementById('recommendation-reveal');
        if (recElement) {
          recElement.scrollIntoView({ behavior: 'smooth' });
        }

        // Trigger intelligent popup modal EVERY TIME an analysis completes successfully
        setTimeout(() => {
          setIsPopupOpen(true);
        }, 500);

      } catch (err) {
        console.error('[App] AI Analysis Error:', err.message);
        setIsAnalyzing(false);
        // Do NOT open popup if analysis fails
      }
    }, 3200);
  };

  // Handler for custom reel submission
  const handleCustomReel = (customReel) => {
    const updatedReels = [customReel, ...reels];
    setReels(updatedReels);
    handleRunAnalysis();
  };

  // Handler for selecting adjacent topic
  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    if (recommendationData && recommendationData.recommendation) {
      setRecommendationData({
        ...recommendationData,
        recommendation: {
          ...recommendationData.recommendation,
          title: topic.rec,
          category: topic.label,
          interestMatch: topic.score
        }
      });
    }
  };

  // Handler for feedback submit
  const handleFeedbackSubmit = (feedback) => {
    if (feedback.type === 'positive' && recommendationData) {
      setRecommendationData({
        ...recommendationData,
        recommendation: {
          ...recommendationData.recommendation,
          interestMatch: Math.min(99, (recommendationData.recommendation.interestMatch || 92) + 3)
        }
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans relative selection:bg-purple-500/30 selection:text-purple-200">
      
      {/* Navigation Header */}
      <Navbar
        onRunAnalysis={handleRunAnalysis}
        isAnalyzing={isAnalyzing}
        onOpenManual={() => setIsManualOpen(true)}
        isJudgeMode={isJudgeMode}
        onToggleJudgeMode={() => setIsJudgeMode(!isJudgeMode)}
        activeProvider={activeProvider}
      />

      {/* Hero Section */}
      <HeroSection onRunAnalysis={handleRunAnalysis} />

      {/* Hero Scroll Transformation (8 REELS -> PATTERNS -> INTEREST -> RECOMMENDATION) */}
      <HeroScrollTransformation />

      {/* AI Pipeline 6-Stage Scroll Section */}
      <AIPipelineSection />

      {/* 8 Reels Interaction History Deck */}
      <ReelHistorySection reels={reels} />

      {/* Cross-Reel Signal Merger Canvas */}
      <CrossReelIntelligence />

      {/* Built-in Trap: Shallow Recommender vs TechScroll AI */}
      <TraditionalVsTechScroll />

      {/* Interest Evolution Timeline */}
      <InterestEvolutionSection />

      {/* Entertainment to Learning Bridge */}
      <EntertainmentToLearningSection />

      {/* Interest Profile Spectrum */}
      <InterestProfileSection />

      {/* Interactive Interest Constellation Graph */}
      <InterestConstellationGraph />

      {/* Adjacent Interests & Discovery Mode */}
      <AdjacentInterestsSection
        onSelectTopic={handleTopicSelect}
        activeTopicId={selectedTopic?.id}
      />

      {/* Explicit Hype Filter Section */}
      <HypeFilterSection
        recommendation={recommendationData?.recommendation}
        hypeFiltered={recommendationData?.hypeFiltered}
      />

      {/* Recommendation Reveal Section */}
      <div id="recommendation-reveal">
        <RecommendationRevealSection recommendation={recommendationData?.recommendation} />
      </div>

      {/* Decision Tree & Why Section */}
      <WhyThisReasoningSection formattedOutput={pipelineData?.formattedOutput} />

      {/* Continuous Feedback Loop */}
      <FeedbackLoopSection onFeedbackSubmit={handleFeedbackSubmit} />

      {/* Intelligent Glassmorphism Popup Modal (Appears EVERY TIME an analysis succeeds) */}
      <IntelligentPopupModal
        key={`popup-${analysisId}`}
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        primaryInterest={pipelineData?.primaryInterest}
        confidence="HIGH"
        onExploreTechContent={() => {
          const recElement = document.getElementById('recommendation-reveal');
          if (recElement) recElement.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Manual Input Dialog */}
      <ManualReelAnalyzer
        isOpen={isManualOpen}
        onClose={() => setIsManualOpen(false)}
        onAnalyzeCustom={handleCustomReel}
      />

      {/* Hackathon Judge Mode Overlay */}
      <JudgeModeOverlay
        isOpen={isJudgeMode}
        onClose={() => setIsJudgeMode(false)}
      />

      {/* Footer */}
      <Footer />

    </div>
  );
}
