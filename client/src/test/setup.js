import '@testing-library/jest-dom';

// Global mocks for DOM APIs used in GSAP / Lenis / Recharts
if (typeof window !== 'undefined') {
  window.scrollTo = window.scrollTo || (() => {});
  
  if (!window.matchMedia) {
    window.matchMedia = (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    });
  }

  if (!global.ResizeObserver) {
    global.ResizeObserver = class {
      observe() {}
      unobserve() {}
      disconnect() {}
    };
  }

  if (!global.IntersectionObserver) {
    global.IntersectionObserver = class {
      observe() {}
      unobserve() {}
      disconnect() {}
    };
  }
}
