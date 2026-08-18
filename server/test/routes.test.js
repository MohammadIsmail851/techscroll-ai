import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../index.js';

describe('TechScroll AI - Express API Integration Tests', () => {
  it('GET /health - should return 200 OK with health status', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('status', 'ok');
    expect(res.body).toHaveProperty('app', 'TechScroll AI Server');
  });

  it('GET /api/reels - should return 200 OK with demo reels list', async () => {
    const res = await request(app).get('/api/reels');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(Array.isArray(res.body.reels)).toBe(true);
    expect(res.body.reels.length).toBeGreaterThan(0);
  });

  it('GET /api/demo - should return 200 OK with pre-computed demo pipeline results', async () => {
    const res = await request(app).get('/api/demo');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(res.body).toHaveProperty('demo');
    expect(res.body.demo).toHaveProperty('primaryInterest');
  });

  it('POST /api/analyze - should process valid reels list', async () => {
    const validReels = [
      { id: 'r1', title: 'Java Microservices', watchPercentage: 90 },
      { id: 'r2', title: 'PostgreSQL Indexing', watchPercentage: 95 }
    ];
    const res = await request(app)
      .post('/api/analyze')
      .send({ reels: validReels, provider: 'mock' });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(res.body).toHaveProperty('primaryInterest');
  });

  it('POST /api/analyze - should reject non-array reels input with 400 Bad Request', async () => {
    const res = await request(app)
      .post('/api/analyze')
      .send({ reels: 'not-an-array' });

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('success', false);
    expect(res.body.error).toContain('"reels" must be an array');
  });

  it('POST /api/analyze - should reject overly large reels payload (>50 items) with 400', async () => {
    const tooManyReels = new Array(51).fill({ id: 'r', title: 'Test' });
    const res = await request(app)
      .post('/api/analyze')
      .send({ reels: tooManyReels });

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('success', false);
    expect(res.body.error).toContain('Maximum 50 reels allowed');
  });

  it('POST /api/interests - should return interest constellation graph', async () => {
    const res = await request(app).post('/api/interests').send({});
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(res.body).toHaveProperty('graph');
    expect(res.body.graph).toHaveProperty('constellationNodes');
  });

  it('POST /api/recommend - should return transparent recommendation & hype filtered items', async () => {
    const res = await request(app).post('/api/recommend').send({});
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(res.body).toHaveProperty('recommendation');
    expect(res.body).toHaveProperty('hypeFiltered');
    expect(Array.isArray(res.body.hypeFiltered)).toBe(true);
  });

  it('GET /api/nonexistent - should return 404 Not Found', async () => {
    const res = await request(app).get('/api/nonexistent');
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty('error', 'Endpoint not found');
  });
});
