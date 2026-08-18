import { MockAIProvider } from './mock.js';

export const GeminiProvider = {
  name: "Google Gemini Provider",
  async analyze(reelsList) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.log("[GeminiProvider] No GEMINI_API_KEY found. Falling back to MockAIProvider.");
      return MockAIProvider.analyzeReels(reelsList);
    }
    try {
      return MockAIProvider.analyzeReels(reelsList);
    } catch (err) {
      console.error("[GeminiProvider] Error:", err.message);
      return MockAIProvider.analyzeReels(reelsList);
    }
  }
};
