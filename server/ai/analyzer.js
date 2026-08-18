import { MockAIProvider } from './providers/mock.js';
import { ClaudeProvider } from './providers/claude.js';
import { OpenAIProvider } from './providers/openai.js';
import { GeminiProvider } from './providers/gemini.js';

export async function runFullPipeline(reelsList, providerChoice = "mock") {
  console.log(`[Analyzer] Executing AI pipeline with provider: ${providerChoice}`);
  
  if (providerChoice === "claude" && process.env.ANTHROPIC_API_KEY) {
    return await ClaudeProvider.analyze(reelsList);
  }
  if (providerChoice === "openai" && process.env.OPENAI_API_KEY) {
    return await OpenAIProvider.analyze(reelsList);
  }
  if (providerChoice === "gemini" && process.env.GEMINI_API_KEY) {
    return await GeminiProvider.analyze(reelsList);
  }

  // Safe default fallback
  return MockAIProvider.analyzeReels(reelsList);
}
