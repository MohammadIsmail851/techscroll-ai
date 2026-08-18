export function evaluateHypeScore(content) {
  const title = (content.title || "").toLowerCase();
  const caption = (content.caption || "").toLowerCase();

  let hypeScore = 10;
  let filterReason = "";
  let isHype = false;

  if (title.includes("20 lakh") || title.includes("7 days") || title.includes("secret ai bot")) {
    hypeScore = 94;
    isHype = true;
    filterReason = "Unrealistic career promises, low educational depth, clickbait exaggeration.";
  }

  return {
    hypeScore,
    isHype,
    filterReason,
    qualityScore: 100 - hypeScore
  };
}
