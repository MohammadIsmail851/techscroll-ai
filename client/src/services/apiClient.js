export async function fetchReels() {
  try {
    const res = await fetch('/api/reels');
    if (!res.ok) throw new Error('Server error');
    const data = await res.json();
    return data.reels;
  } catch (err) {
    console.warn('[apiClient] Fetch failed, using client-side fallback demo data:', err.message);
    return getFallbackReels();
  }
}

export async function runAIAnalysis(reels, provider = 'mock') {
  try {
    const res = await fetch('/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reels, provider })
    });
    if (!res.ok) throw new Error('Server error');
    return await res.json();
  } catch (err) {
    console.warn('[apiClient] Analysis endpoint unreachable, returning fallback mock pipeline:', err.message);
    return getFallbackPipelineResult();
  }
}

export async function fetchInterests(reels) {
  try {
    const res = await fetch('/api/interests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reels })
    });
    if (!res.ok) throw new Error('Server error');
    return await res.json();
  } catch (err) {
    return { success: true, graph: getFallbackGraph() };
  }
}

export async function fetchRecommendation() {
  try {
    const res = await fetch('/api/recommend', { method: 'POST' });
    if (!res.ok) throw new Error('Server error');
    return await res.json();
  } catch (err) {
    return getFallbackRecommendationData();
  }
}

function getFallbackReels() {
  return [
    {
      id: "reel_01",
      platform: "Instagram",
      url: "https://www.instagram.com/p/DY7VBQMJoDP/",
      title: "Clean Code vs Messy Java Spikes",
      topic: "Java & Code Structure",
      creator: "@dev_humor",
      duration: "24s",
      watchPercentage: 92,
      liked: true,
      saved: true,
      caption: "When you fix a bug in production vs demo...",
      tags: ["Java", "Clean Code", "Software Patterns"],
      semanticCategory: "Programming & Code Quality"
    },
    {
      id: "reel_02",
      platform: "Instagram",
      url: "https://www.instagram.com/p/DbJOymGK4hH/",
      title: "Mock Technical Interview: Two Pointers Pattern",
      topic: "DSA & Problem Solving",
      creator: "@algo_master",
      duration: "45s",
      watchPercentage: 88,
      liked: true,
      saved: true,
      caption: "Sliding window O(N) optimization...",
      tags: ["DSA", "Algorithms", "Coding Interview"],
      semanticCategory: "Data Structures & Algorithms"
    },
    {
      id: "reel_03",
      platform: "Instagram",
      url: "https://www.instagram.com/p/Db3gJ-0yTPn/",
      title: "Day in the Life of a Backend Software Engineer",
      topic: "Developer Lifestyle & Career",
      creator: "@tech_life_daily",
      duration: "30s",
      watchPercentage: 95,
      liked: true,
      saved: false,
      caption: "Standups, microservices, and PR code reviews...",
      tags: ["Software Engineering", "Backend", "Career"],
      semanticCategory: "Software Engineering Practice"
    },
    {
      id: "reel_04",
      platform: "Instagram",
      url: "https://www.instagram.com/p/DbhqnugsOp9/",
      title: "M3 Max MacBook Pro vs Linux Workstation for Devs",
      topic: "Developer Hardware & Tech Tools",
      creator: "@hardware_geek",
      duration: "38s",
      watchPercentage: 84,
      liked: false,
      saved: true,
      caption: "Docker compilation benchmarks & specs...",
      tags: ["Hardware", "Docker", "Dev Tools"],
      semanticCategory: "Developer Infrastructure & Hardware"
    },
    {
      id: "reel_05",
      platform: "Instagram",
      url: "https://www.instagram.com/p/Db3W2zWpj5f/",
      title: "How Java HashMap Works Under the Hood",
      topic: "Java Internals & Systems",
      creator: "@deep_code",
      duration: "52s",
      watchPercentage: 96,
      liked: true,
      saved: true,
      caption: "Buckets, Hash code, Red-Black Trees...",
      tags: ["Java", "HashMap", "Internals"],
      semanticCategory: "Core Language & Low-Level Mechanics"
    },
    {
      id: "reel_06",
      platform: "Instagram",
      url: "https://www.instagram.com/p/DbdEEYEoD9w/?img_index=1",
      title: "Full-Stack Roadmap: Expectations vs Production Reality",
      topic: "Software Architecture & Roadmaps",
      creator: "@architecture_decoded",
      duration: "40s",
      watchPercentage: 90,
      liked: true,
      saved: true,
      caption: "Redis caching, PostgreSQL, RabbitMQ...",
      tags: ["System Design", "Architecture", "Scaling"],
      semanticCategory: "Software Architecture & Systems"
    },
    {
      id: "reel_07",
      platform: "Instagram",
      url: "https://www.instagram.com/p/DaQVPiHyQX3/",
      title: "Deconstructing High-Availability System Design",
      topic: "Systems Design & Distributed Tech",
      creator: "@scale_systems",
      duration: "48s",
      watchPercentage: 91,
      liked: true,
      saved: true,
      caption: "CDN edge caching, fault tolerance, gateways...",
      tags: ["Distributed Systems", "Cloud", "Microservices"],
      semanticCategory: "Distributed Systems & Cloud"
    },
    {
      id: "reel_08",
      platform: "Instagram",
      url: "https://www.instagram.com/p/DapiYGEyFbK/",
      title: "Fixing Production Memory Leaks at 2 AM",
      topic: "Engineering Reality & Debugging",
      creator: "@dev_memes_daily",
      duration: "26s",
      watchPercentage: 86,
      liked: true,
      saved: false,
      caption: "OOM killer, heap dump profiling...",
      tags: ["Debugging", "Memory Leak", "Backend"],
      semanticCategory: "Software Engineering Practice"
    }
  ];
}

function getFallbackPipelineResult() {
  return {
    success: true,
    providerUsed: "Client Fallback AI Engine",
    reelsAnalyzedCount: 8,
    clusterWeights: {
      "Software Engineering": 91,
      "Programming & Code Structure": 87,
      "Technology & Infrastructure": 84,
      "Developer Career & Practices": 76,
      "Artificial Intelligence & ML": 68,
      "Developer Hardware & Specs": 61,
      "Cybersecurity & Reliability": 32,
      "Gaming & Entertainment": 25
    },
    primaryInterest: {
      title: "SOFTWARE ENGINEERING",
      confidenceScore: 91,
      corePillars: ["Systems Architecture", "Data Structures", "Code Quality", "Production Debugging"],
      explanation: "Across 8 Reels watching Java memes, LeetCode algorithms, MacBook specs, HashMap internals, full-stack roadmaps, and 2 AM debugging, TechScroll AI infers that the student is not merely interested in 'Java' syntax, but in building scalable, reliable Software Engineering systems."
    },
    formattedOutput: {
      currentReel: "Reel 01-08 Aggregate History (Java, LeetCode DSA, System Design, Dev Hardware)",
      interestDetected: "SOFTWARE ENGINEERING (System Architecture & Algorithmic Problem Solving)",
      why: "The student spends 90%+ watch time on low-level language internals, algorithmic optimization, and system scaling roadmaps.",
      recommendedTechReel: "How Data Structures & Algorithms Power Real Software Engineering",
      category: "DSA & Software Engineering",
      whyThisRecommendation: "Connects your interest in Java code structures, LeetCode algorithms, and backend systems to real production software engineering principles.",
      difficulty: "Intermediate",
      confidence: "HIGH"
    }
  };
}

function getFallbackGraph() {
  return {
    primaryInterest: "Software Engineering",
    confidence: 91,
    constellationNodes: [
      { id: "node_se", label: "Software Engineering", score: 91, category: "Core", x: 50, y: 50 },
      { id: "node_prog", label: "Programming", score: 87, category: "Foundation", x: 25, y: 50 },
      { id: "node_hw", label: "Hardware", score: 61, category: "Infrastructure", x: 15, y: 35 },
      { id: "node_career", label: "Career", score: 76, category: "Domain", x: 50, y: 80 },
      { id: "node_dsa", label: "DSA & Problem Solving", score: 88, category: "Core", x: 75, y: 50 },
      { id: "node_ai", label: "AI & Tools", score: 68, category: "Emerging", x: 50, y: 20 }
    ],
    constellationEdges: [
      { from: "node_se", to: "node_prog" },
      { from: "node_se", to: "node_hw" },
      { from: "node_se", to: "node_career" },
      { from: "node_se", to: "node_dsa" },
      { from: "node_se", to: "node_ai" }
    ]
  };
}

function getFallbackRecommendationData() {
  return {
    success: true,
    recommendation: {
      id: "rec_01",
      title: "How Data Structures & Algorithms Power Real Software Engineering",
      topic: "DSA in Production Systems",
      creator: "@engineering_realities",
      duration: "58s",
      category: "DSA & Software Engineering",
      difficulty: "Intermediate",
      interestMatch: 92,
      semanticRelevance: 94,
      educationalValue: 91,
      careerValue: 89,
      engagementPotential: 85,
      contentQuality: 91,
      hypeScore: 8,
      isHype: false,
      confidence: "HIGH",
      calculatedScore: 92.4,
      summary: "Explains how hash tables, LRU caches, and B-Trees directly underpin database indexes, operating system page tables, and web application routing.",
      whyRecommended: "Connects your interest in Java code structures, LeetCode algorithms, and backend systems to real production software engineering principles.",
      whyNotShallow: "Unlike a basic 'Learn Java in 10 minutes' clip, this reel bridges theoretical computer science with high-impact software design."
    },
    hypeFiltered: [
      {
        id: "hype_01",
        title: "10 AI Tools That Will Get You a ₹20 Lakh Job in 7 Days!",
        topic: "Hype & Clickbait AI",
        creator: "@tech_influencer_hype",
        duration: "42s",
        category: "AI Hype",
        difficulty: "Beginner",
        interestMatch: 35,
        educationalValue: 32,
        contentQuality: 41,
        hypeScore: 94,
        isHype: true,
        filterReason: "Unrealistic career promise, zero technical depth, clickbait title structure.",
        hypeDetails: {
          exaggerationLevel: "CRITICAL (94/100)",
          substanceScore: "POOR (32/100)",
          penaltyApplied: "-35 Hype Penalty",
          verdict: "FILTERED OUT"
        }
      }
    ]
  };
}
