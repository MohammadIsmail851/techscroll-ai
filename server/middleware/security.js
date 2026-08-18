// Security Middleware for Express API Server

// 1. Security Response Headers
export function setSecurityHeaders(req, res, next) {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  next();
}

// 2. In-Memory Rate Limiting
const requestCounts = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 60; // 60 requests per min per IP

export function rateLimiter(req, res, next) {
  const clientIp = req.ip || req.headers['x-forwarded-for'] || '127.0.0.1';
  const now = Date.now();
  
  if (!requestCounts.has(clientIp)) {
    requestCounts.set(clientIp, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return next();
  }

  const record = requestCounts.get(clientIp);

  if (now > record.resetTime) {
    record.count = 1;
    record.resetTime = now + RATE_LIMIT_WINDOW_MS;
    return next();
  }

  record.count += 1;
  if (record.count > MAX_REQUESTS_PER_WINDOW) {
    return res.status(429).json({
      success: false,
      error: 'Too many requests. Please slow down and try again in 1 minute.',
      retryAfterSeconds: Math.ceil((record.resetTime - now) / 1000)
    });
  }

  next();
}

// 3. Input Validation & Sanitization Middleware for /api/analyze
export function validateAnalyzeInput(req, res, next) {
  const { reels, provider } = req.body || {};

  if (reels !== undefined && !Array.isArray(reels)) {
    return res.status(400).json({
      success: false,
      error: 'Invalid input: "reels" must be an array.'
    });
  }

  if (Array.isArray(reels) && reels.length > 50) {
    return res.status(400).json({
      success: false,
      error: 'Invalid input: Maximum 50 reels allowed per analysis request.'
    });
  }

  if (provider && typeof provider !== 'string') {
    return res.status(400).json({
      success: false,
      error: 'Invalid input: "provider" must be a string.'
    });
  }

  next();
}
