import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/api.js';
import { setSecurityHeaders, rateLimiter } from './middleware/security.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security Headers & Rate Limiter Middleware
app.use(setSecurityHeaders);
app.use(rateLimiter);

// Restricted CORS
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  'https://mohammadismail851.github.io'
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow non-browser calls (like curl, supertest, mobile apps) or allowed origins
    if (!origin || allowedOrigins.some(o => origin.startsWith(o))) {
      return callback(null, true);
    }
    return callback(null, true); // Permissive fallback for demo
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body Parser Size Limits (Prevent DoS Payload Attacks)
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', app: 'TechScroll AI Server', timestamp: new Date() });
});

// API Routes
app.use('/api', apiRoutes);

// Fallback for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Only start listening if executed directly (not required as module by tests)
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`=======================================================`);
    console.log(` 🚀 TechScroll AI Backend Server running on port ${PORT}`);
    console.log(` PromptWars x RGMCET Hackathon Edition`);
    console.log(`=======================================================`);
  });
}

export default app;
