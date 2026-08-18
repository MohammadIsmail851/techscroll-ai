import { Router } from 'express';
import { demoReels } from '../data/demoReels.js';
import { runFullPipeline } from '../ai/analyzer.js';
import { inferInterestsFromSignals } from '../ai/interestInference.js';
import { rankCandidates } from '../ai/recommender.js';
import { validateAnalyzeInput } from '../middleware/security.js';

const router = Router();

// GET /api/reels - Return demo reels history
router.get('/reels', (req, res) => {
  res.json({
    success: true,
    reels: demoReels,
    mode: "DEMO_MODE",
    notice: "Using pre-loaded demo reel interactions matching Instagram URLs."
  });
});

// GET /api/demo - Pre-computed pipeline results for quick loading / judge mode
router.get('/demo', async (req, res) => {
  try {
    const pipelineData = await runFullPipeline(demoReels, "mock");
    res.json({
      success: true,
      demo: pipelineData
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/analyze - Run AI analysis on provided reels with security validation
router.post('/analyze', validateAnalyzeInput, async (req, res) => {
  try {
    const { reels, provider } = req.body || {};
    const targetReels = (reels && reels.length > 0) ? reels : demoReels;
    const result = await runFullPipeline(targetReels, provider || "mock");
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST /api/interests - Return interest cluster graph data
router.post('/interests', (req, res) => {
  const { reels } = req.body || {};
  const graphData = inferInterestsFromSignals(reels || demoReels);
  res.json({ success: true, graph: graphData });
});

// POST /api/recommend - Transparent scoring & recommendations
router.post('/recommend', (req, res) => {
  const ranked = rankCandidates();
  res.json({
    success: true,
    recommendation: ranked.topRecommendation,
    hypeFiltered: ranked.filteredOutHype,
    candidates: ranked.validCandidates
  });
});

export default router;
