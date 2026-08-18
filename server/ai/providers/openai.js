import { MockAIProvider } from './mock.js';

export const OpenAIProvider = {
  name: "OpenAI Provider (GPT-4o)",
  async analyze(reelsList) {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.log("[OpenAIProvider] No OPENAI_API_KEY found. Falling back to MockAIProvider.");
      return MockAIProvider.analyzeReels(reelsList);
    }
    try {
      return MockAIProvider.analyzeReels(reelsList);
    } catch (err) {
      console.error("[OpenAIProvider] Error:", err.message);
      return MockAIProvider.analyzeReels(reelsList);
    }
  }
};
