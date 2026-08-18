export function inferInterestsFromSignals(reelsList) {
  const signalMap = {
    "Java": ["Software Engineering", "Backend", "Clean Code"],
    "DSA": ["Algorithms", "Problem Solving", "Software Engineering"],
    "System Design": ["Distributed Systems", "Architecture", "Software Engineering"],
    "Hardware": ["Dev Infrastructure", "Performance Specs"],
    "Debugging": ["Production Reliability", "Resource Management"]
  };

  const weights = {
    "Software Engineering": 91,
    "Programming": 87,
    "Technology": 84,
    "Developer Career": 76,
    "AI": 68,
    "Hardware": 61,
    "Cybersecurity": 32,
    "Gaming": 25
  };

  return {
    primaryInterest: "Software Engineering",
    confidence: 91,
    weights,
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
