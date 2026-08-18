import { demoReels } from '../../data/demoReels.js';
import { candidateReels } from '../../data/candidateReels.js';

export const MockAIProvider = {
  name: "Local Mock AI (Deterministic Semantic Reasoning Engine)",
  
  analyzeReels(reelsList = demoReels) {
    // 1. Semantic Concept Extraction
    const extractedConcepts = reelsList.map(r => ({
      id: r.id,
      title: r.title,
      topic: r.topic,
      category: r.semanticCategory,
      signals: r.semanticSignals || []
    }));

    // 2. Cross-Reel Signal Aggregation
    const signalFrequency = {};
    const clusterWeights = {
      "Software Engineering": 91,
      "Programming & Code Structure": 87,
      "Technology & Infrastructure": 84,
      "Developer Career & Practices": 76,
      "Artificial Intelligence & ML": 68,
      "Developer Hardware & Specs": 61,
      "Cybersecurity & Reliability": 32,
      "Gaming & Entertainment": 25
    };

    // 3. Cross-Reel Intelligence Mapping
    const signalConnections = [
      {
        source: "Java Meme (Reel 01)",
        signal: "Code Architecture & OOP",
        target: "Software Engineering"
      },
      {
        source: "Coding Interview (Reel 02)",
        signal: "DSA & Problem Solving",
        target: "Software Engineering"
      },
      {
        source: "Developer Lifestyle (Reel 03)",
        signal: "Career & Engineering Culture",
        target: "Software Engineering"
      },
      {
        source: "Hardware Comparison (Reel 04)",
        signal: "Performance & Dev Specs",
        target: "Technology Infrastructure"
      },
      {
        source: "Java HashMap Internals (Reel 05)",
        signal: "Low-Level Optimization",
        target: "Software Engineering"
      },
      {
        source: "System Design Roadmap (Reel 06)",
        signal: "Distributed Systems & Scaling",
        target: "Software Engineering"
      },
      {
        source: "High-Availability System (Reel 07)",
        signal: "Fault Tolerance & Architecture",
        target: "Software Engineering"
      },
      {
        source: "Production Debugging (Reel 08)",
        signal: "Resource & Memory Management",
        target: "Software Engineering"
      }
    ];

    // 4. Broader Interest Inference
    const primaryInterest = {
      title: "SOFTWARE ENGINEERING",
      confidenceScore: 91,
      corePillars: ["Systems Architecture", "Data Structures", "Code Quality", "Production Debugging"],
      explanation: "Across 8 Reels watching Java memes, LeetCode algorithms, MacBook specs, HashMap internals, full-stack roadmaps, and 2 AM debugging, TechScroll AI infers that the student is not merely interested in 'Java' syntax, but in building scalable, reliable **Software Engineering** systems."
    };

    // 5. Traditional vs TechScroll Comparison
    const comparison = {
      traditionalRecommender: {
        method: "Keyword Matching ('Java', 'Coding')",
        recommendation: "Another Java Syntax Reel or Basic Meme",
        verdict: "Superficial loop, low educational growth"
      },
      techScrollAI: {
        method: "Multimodal Cross-Reel Semantic Reasoning",
        inferredInterest: "Software Engineering & Production DSA",
        recommendation: "How Data Structures Are Used in Real Software Engineering",
        verdict: "Deep tech discovery, high career impact"
      }
    };

    // 6. Recommendation & Scoring Calculation
    const topRecommended = candidateReels.find(c => c.id === "rec_01") || candidateReels[0];
    const filteredHype = candidateReels.filter(c => c.isHype);

    // Transparent scoring breakdown for top recommended
    const scoringBreakdown = {
      formula: "35% Interest Match + 20% Semantic Relevance + 15% Educational Value + 10% Career Value + 10% Engagement + 10% Content Quality - Hype Penalty",
      metrics: [
        { label: "Interest Match", weight: "35%", score: topRecommended.interestMatch },
        { label: "Semantic Relevance", weight: "20%", score: topRecommended.semanticRelevance },
        { label: "Educational Value", weight: "15%", score: topRecommended.educationalValue },
        { label: "Career Value", weight: "10%", score: topRecommended.careerValue },
        { label: "Engagement Potential", weight: "10%", score: topRecommended.engagementPotential },
        { label: "Content Quality", weight: "10%", score: topRecommended.contentQuality },
        { label: "Hype Penalty", weight: "Deduction", score: `-${topRecommended.hypeScore}` }
      ],
      finalCompositeScore: 92.4,
      confidence: topRecommended.confidence
    };

    // Required Format matching Prompt Section 21
    const formattedOutput = {
      currentReel: "Reel 01-08 Aggregate History (Java, LeetCode DSA, System Design, Dev Hardware)",
      interestDetected: "SOFTWARE ENGINEERING (System Architecture & Algorithmic Problem Solving)",
      why: "The student spends 90%+ watch time on low-level language internals (HashMap), algorithmic optimization (Sliding Window), and system scaling roadmaps, indicating a trajectory toward full-spectrum Software Engineering.",
      recommendedTechReel: topRecommended.title,
      category: "DSA & Software Engineering",
      whyThisRecommendation: topRecommended.whyRecommended,
      difficulty: topRecommended.difficulty,
      confidence: topRecommended.confidence
    };

    return {
      success: true,
      providerUsed: this.name,
      reelsAnalyzedCount: reelsList.length,
      extractedConcepts,
      clusterWeights,
      signalConnections,
      primaryInterest,
      comparison,
      topRecommended,
      filteredHype,
      scoringBreakdown,
      formattedOutput
    };
  }
};
