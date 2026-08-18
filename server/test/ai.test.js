import { describe, it, expect } from 'vitest';
import { evaluateHypeScore } from '../ai/hypeDetector.js';
import { runFullPipeline } from '../ai/analyzer.js';

describe('Server AI Module Tests', () => {
  it('should flag clickbait titles with high hypeScore and penalty', () => {
    const clickbaitContent = {
      title: '10 AI Tools That Will Get You a ₹20 Lakh Job in 7 Days!',
      caption: 'Must watch secret AI bot!'
    };
    const result = evaluateHypeScore(clickbaitContent);

    expect(result.isHype).toBe(true);
    expect(result.hypeScore).toBeGreaterThanOrEqual(90);
    expect(result.qualityScore).toBeLessThanOrEqual(10);
    expect(result.filterReason).toContain('Unrealistic career promises');
  });

  it('should assign high qualityScore to legitimate technical content', () => {
    const techContent = {
      title: 'Understanding Database Indexing & B-Trees in PostgreSQL',
      caption: 'Deep dive into database indexing internals.'
    };
    const result = evaluateHypeScore(techContent);

    expect(result.isHype).toBe(false);
    expect(result.qualityScore).toBeGreaterThanOrEqual(80);
  });

  it('should analyze multiple watched reels into structured semantic interests', async () => {
    const mockReels = [
      { id: 'reel-1', title: 'Why your Java app fails at 10k requests/sec', watchPercentage: 98, category: 'Backend' },
      { id: 'reel-2', title: 'How Garbage Collection actually works in JVM', watchPercentage: 100, category: 'JVM Internals' },
      { id: 'reel-3', title: 'Designing scalable microservices architecture', watchPercentage: 88, category: 'System Design' }
    ];

    const analysis = await runFullPipeline(mockReels, 'mock');
    expect(analysis).toHaveProperty('success', true);
    expect(analysis).toHaveProperty('primaryInterest');
    expect(analysis.primaryInterest).toHaveProperty('title');
  });
});
