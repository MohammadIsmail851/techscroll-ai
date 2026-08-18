import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ManualReelAnalyzer from '../components/ManualReelAnalyzer.jsx';

describe('ManualReelAnalyzer Accessibility & Form Submission Tests', () => {
  it('does not render when isOpen is false', () => {
    const { container } = render(
      <ManualReelAnalyzer isOpen={false} onClose={vi.fn()} onAnalyzeCustom={vi.fn()} />
    );
    expect(container.firstChild).toBeNull();
  });

  it('renders modal dialog with form inputs when isOpen is true', () => {
    render(
      <ManualReelAnalyzer isOpen={true} onClose={vi.fn()} onAnalyzeCustom={vi.fn()} />
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByLabelText(/INSTAGRAM REEL URL/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/CAPTION \/ TEXT/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/AUDIO TRANSCRIPT/i)).toBeInTheDocument();
  });

  it('calls onClose when pressing Escape key', () => {
    const handleClose = vi.fn();
    render(
      <ManualReelAnalyzer isOpen={true} onClose={handleClose} onAnalyzeCustom={vi.fn()} />
    );

    fireEvent.keyDown(window, { key: 'Escape', code: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('submits form with custom reel data', async () => {
    const handleAnalyzeCustom = vi.fn();
    const handleClose = vi.fn();

    render(
      <ManualReelAnalyzer
        isOpen={true}
        onClose={handleClose}
        onAnalyzeCustom={handleAnalyzeCustom}
      />
    );

    const submitBtn = screen.getByRole('button', { name: /RUN REEL ANALYSIS/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(handleAnalyzeCustom).toHaveBeenCalledWith(
        expect.objectContaining({
          id: 'custom_01',
          platform: 'Instagram'
        })
      );
      expect(handleClose).toHaveBeenCalled();
    }, { timeout: 2000 });
  });
});
