import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import IntelligentPopupModal from '../components/IntelligentPopupModal.jsx';

// Mock GSAP
vi.mock('../animations/gsapSetup.js', () => ({
  gsap: { fromTo: vi.fn() },
}));

describe('IntelligentPopupModal Accessibility & Interaction Tests', () => {
  it('does not render when isOpen is false', () => {
    const { container } = render(
      <IntelligentPopupModal isOpen={false} onClose={vi.fn()} />
    );
    expect(container.firstChild).toBeNull();
  });

  it('renders modal content with role="dialog" and correct title when isOpen is true', () => {
    render(
      <IntelligentPopupModal
        isOpen={true}
        onClose={vi.fn()}
        primaryInterest={{ title: 'DISTRIBUTED SYSTEMS', confidenceScore: 92 }}
      />
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/We noticed something 👀/i)).toBeInTheDocument();
    expect(screen.getByText(/DISTRIBUTED SYSTEMS/i)).toBeInTheDocument();
  });

  it('calls onClose when clicking the close button', () => {
    const handleClose = vi.fn();
    render(
      <IntelligentPopupModal
        isOpen={true}
        onClose={handleClose}
        primaryInterest={{ title: 'SOFTWARE ENGINEERING' }}
      />
    );

    const closeBtn = screen.getByRole('button', { name: /Close assistant modal/i });
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('triggers onClose when pressing Escape key', () => {
    const handleClose = vi.fn();
    render(
      <IntelligentPopupModal
        isOpen={true}
        onClose={handleClose}
        primaryInterest={{ title: 'SOFTWARE ENGINEERING' }}
      />
    );

    fireEvent.keyDown(window, { key: 'Escape', code: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
