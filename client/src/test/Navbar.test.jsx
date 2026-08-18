import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Navbar from '../components/Navbar.jsx';

describe('Navbar Accessibility & Navigation Controls Tests', () => {
  it('renders branding title and navigation controls', () => {
    render(
      <Navbar
        onRunAnalysis={vi.fn()}
        isAnalyzing={false}
        onOpenManual={vi.fn()}
        isJudgeMode={false}
        onToggleJudgeMode={vi.fn()}
        activeProvider="Local Mock AI"
      />
    );

    expect(screen.getByText(/TECHSCROLL/i)).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('triggers onOpenManual when clicking Manual Input button', () => {
    const handleOpenManual = vi.fn();
    render(
      <Navbar
        onRunAnalysis={vi.fn()}
        isAnalyzing={false}
        onOpenManual={handleOpenManual}
        isJudgeMode={false}
        onToggleJudgeMode={vi.fn()}
        activeProvider="Local Mock AI"
      />
    );

    const manualBtn = screen.getByRole('button', { name: /Open manual reel URL input analyzer/i });
    fireEvent.click(manualBtn);
    expect(handleOpenManual).toHaveBeenCalledTimes(1);
  });

  it('toggles Judge Mode when clicking Judge Mode button', () => {
    const handleToggleJudge = vi.fn();
    render(
      <Navbar
        onRunAnalysis={vi.fn()}
        isAnalyzing={false}
        onOpenManual={vi.fn()}
        isJudgeMode={false}
        onToggleJudgeMode={handleToggleJudge}
        activeProvider="Local Mock AI"
      />
    );

    const judgeBtn = screen.getByRole('button', { name: /Enable Hackathon Judge Mode overlay/i });
    expect(judgeBtn).toHaveAttribute('aria-pressed', 'false');

    fireEvent.click(judgeBtn);
    expect(handleToggleJudge).toHaveBeenCalledTimes(1);
  });

  it('disables RUN AI ANALYSIS button when isAnalyzing is true', () => {
    render(
      <Navbar
        onRunAnalysis={vi.fn()}
        isAnalyzing={true}
        onOpenManual={vi.fn()}
        isJudgeMode={false}
        onToggleJudgeMode={vi.fn()}
        activeProvider="Local Mock AI"
      />
    );

    const runBtn = screen.getByRole('button', { name: /Run multi-reel semantic AI analysis/i });
    expect(runBtn).toBeDisabled();
    expect(runBtn).toHaveAttribute('aria-busy', 'true');
    expect(screen.getByText(/ANALYZING.../i)).toBeInTheDocument();
  });
});
