import { describe, it, expect } from 'vitest';
import {
  getFallbackReels,
  getFallbackPipelineResult,
  getFallbackRecommendationData,
  getFallbackGraph
} from '../services/apiClient.js';

describe('TechScroll AI - apiClient Fallback & Core Logic Tests', () => {
  it('should return a non-empty array of reels from getFallbackReels()', () => {
    const reels = getFallbackReels();
    expect(Array.isArray(reels)).toBe(true);
    expect(reels.length).toBeGreaterThan(0);
    
    const sampleReel = reels[0];
    expect(sampleReel).toHaveProperty('id');
    expect(sampleReel).toHaveProperty('title');
    expect(sampleReel).toHaveProperty('watchPercentage');
    expect(sampleReel).toHaveProperty('semanticCategory');
  });

  it('should generate valid pipeline results from getFallbackPipelineResult()', () => {
    const pipeline = getFallbackPipelineResult();
    expect(pipeline).toHaveProperty('success', true);
    expect(pipeline).toHaveProperty('providerUsed');
    expect(pipeline).toHaveProperty('reelsAnalyzedCount');
    expect(pipeline).toHaveProperty('primaryInterest');
    expect(pipeline.primaryInterest).toHaveProperty('title', 'SOFTWARE ENGINEERING');
  });

  it('should compute valid recommendation data with reasoning breakdown', () => {
    const res = getFallbackRecommendationData();
    expect(res).toHaveProperty('success', true);
    expect(res).toHaveProperty('recommendation');
    expect(res.recommendation).toHaveProperty('title');
    expect(res.recommendation).toHaveProperty('creator');
    expect(res.recommendation).toHaveProperty('calculatedScore');
    expect(res.recommendation.calculatedScore).toBeGreaterThanOrEqual(70);
  });

  it('should construct valid node and link constellation graph', () => {
    const graph = getFallbackGraph();
    expect(graph).toHaveProperty('primaryInterest', 'Software Engineering');
    expect(graph).toHaveProperty('constellationNodes');
    expect(graph).toHaveProperty('constellationEdges');
    expect(graph.constellationNodes.length).toBeGreaterThan(0);
  });
});
