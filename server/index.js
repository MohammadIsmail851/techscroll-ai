import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/api.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

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

app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(` 🚀 TechScroll AI Backend Server running on port ${PORT}`);
  console.log(` PromptWars x RGMCET Hackathon Edition`);
  console.log(`=======================================================`);
});
