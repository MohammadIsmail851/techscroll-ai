import express from 'express';
import cors from 'cors';
import apiRoutes from '../server/routes/api.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', app: 'TechScroll AI Serverless Backend', timestamp: new Date() });
});

app.use('/api', apiRoutes);

export default app;
