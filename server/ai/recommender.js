import { candidateReels } from '../data/candidateReels.js';

export function calculateRecommendationScore(candidate) {
  // Formula:
  // 35% Interest Match
  // 20% Semantic Relevance
  // 15% Educational Value
  // 10% Career Value
  // 10% Engagement Potential
  // 10% Content Quality
  // - Hype Penalty

  const interestScore = candidate.interestMatch * 0.35;
  const semanticScore = candidate.semanticRelevance * 0.20;
  const eduScore = candidate.educationalValue * 0.15;
  const careerScore = candidate.careerValue * 0.10;
  const engagementScore = candidate.engagementPotential * 0.10;
  const qualityScore = candidate.contentQuality * 0.10;
  
  const hypePenalty = candidate.hypeScore > 50 ? candidate.hypeScore * 0.5 : candidate.hypeScore * 0.1;

  const totalScore = (interestScore + semanticScore + eduScore + careerScore + engagementScore + qualityScore) - hypePenalty;

  return {
    ...candidate,
    calculatedScore: Math.max(0, Math.round(totalScore * 10) / 10),
    hypePenaltyApplied: Math.round(hypePenalty * 10) / 10
  };
}

export function rankCandidates() {
  const scored = candidateReels.map(calculateRecommendationScore);
  const filtered = scored.filter(c => !c.isHype).sort((a, b) => b.calculatedScore - a.calculatedScore);
  const hypeFiltered = scored.filter(c => c.isHype);

  return {
    topRecommendation: filtered[0],
    validCandidates: filtered,
    filteredOutHype: hypeFiltered
  };
}
