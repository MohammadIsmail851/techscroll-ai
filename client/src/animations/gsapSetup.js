import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

export function checkReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
