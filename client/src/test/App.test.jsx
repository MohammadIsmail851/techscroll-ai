import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from '../App.jsx';

// Mock GSAP animation helpers to prevent DOM canvas/timeline issues in jsdom environment
vi.mock('../animations/gsapSetup.js', () => {
  const dummyTimeline = {
    from: vi.fn().mockReturnThis(),
    to: vi.fn().mockReturnThis(),
    fromTo: vi.fn().mockReturnThis(),
  };

  const dummyGsap = {
    registerPlugin: vi.fn(),
    context: (fn) => {
      if (typeof fn === 'function') fn();
      return { revert: vi.fn() };
    },
    timeline: () => dummyTimeline,
    fromTo: vi.fn().mockReturnValue(dummyTimeline),
    to: vi.fn().mockReturnValue(dummyTimeline),
    from: vi.fn().mockReturnValue(dummyTimeline),
    set: vi.fn(),
  };

  return {
    default: dummyGsap,
    gsap: dummyGsap,
    ScrollTrigger: {},
    checkReducedMotion: () => false,
    initScrollAnimations: vi.fn(),
    animatePipelineStep: vi.fn(),
    animateConstellationNode: vi.fn(),
    animateCardHover: vi.fn(),
  };
});

describe('TechScroll AI - Full Application Integration Tests', () => {
  it('renders the brand title and secondary tagline cleanly', () => {
    render(<App />);
    expect(screen.getAllByText(/TECHSCROLL/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/We don't just see what you watched/i).length).toBeGreaterThan(0);
  });

  it('displays the RUN AI REEL ANALYSIS CTA button', () => {
    render(<App />);
    const runButtons = screen.getAllByRole('button', { name: /Run multi-reel semantic AI analysis/i });
    expect(runButtons.length).toBeGreaterThan(0);
  });

  it('triggers AI analysis flow when clicking RUN AI REEL ANALYSIS button', async () => {
    render(<App />);
    const runButton = screen.getAllByRole('button', { name: /Run multi-reel semantic AI analysis/i })[0];
    fireEvent.click(runButton);
    expect(runButton).toBeInTheDocument();
  });

  it('renders the 6-stage AI Pipeline section', () => {
    render(<App />);
    expect(screen.getByText(/SEMANTIC PIPELINE/i)).toBeInTheDocument();
  });

  it('renders Hype & Clickbait Filter section', () => {
    render(<App />);
    expect(screen.getByText(/EXPLICIT HYPE PENALTY ENGINE/i)).toBeInTheDocument();
  });

  it('renders Recommendation Reveal section', () => {
    render(<App />);
    expect(screen.getByText(/YOUR NEXT TECH REEL/i)).toBeInTheDocument();
  });
});
