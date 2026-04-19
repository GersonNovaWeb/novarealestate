import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  const heroTl = gsap.timeline({ delay: 0.3 });
  heroTl
    .from('#hero-canvas', { opacity: 0, duration: 1.2, ease: 'power2.out' })
    .from('.hud-tl', { x: -20, opacity: 0, duration: 0.6 }, '-=0.4')
    .from('.hud-tr', { x:  20, opacity: 0, duration: 0.6 }, '<')
    .from('.hud-bl', { x: -20, opacity: 0, duration: 0.6 }, '<')
    .from('.hud-br', { x:  20, opacity: 0, duration: 0.6 }, '<')
    .from('.hero-badge', { y: 24, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.2')
    .from('.hero-h1',    { y: 32, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
    .from('.hero-sub',   { y: 24, opacity: 0, duration: 0.7 }, '-=0.4')
    .from('.hero-cta',   { y: 20, opacity: 0, duration: 0.6 }, '-=0.3');

  gsap.utils.toArray<HTMLElement>('.section-header').forEach((el) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 82%' },
      y: 36,
      opacity: 0,
      duration: 0.85,
      ease: 'power2.out',
    });
  });

  gsap.utils.toArray<HTMLElement>('.feature-card').forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 88%' },
      y: 48,
      opacity: 0,
      duration: 0.7,
      delay: i * 0.13,
      ease: 'power2.out',
    });
  });

  gsap.utils.toArray<HTMLElement>('.property-card').forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 88%' },
      y: 56,
      opacity: 0,
      duration: 0.7,
      delay: i * 0.1,
      ease: 'power2.out',
    });
  });

  gsap.utils.toArray<HTMLElement>('.stat-item').forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 85%' },
      y: 24,
      opacity: 0,
      duration: 0.6,
      delay: i * 0.12,
      ease: 'power2.out',
    });
  });

  const aboutText = document.querySelector('.about-text');
  if (aboutText) {
    gsap.from(aboutText.children, {
      scrollTrigger: { trigger: aboutText, start: 'top 80%' },
      y: 32,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power2.out',
    });
  }

  document.querySelectorAll<HTMLElement>('.about-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: 'top 88%' },
      y: 24,
      opacity: 0,
      duration: 0.6,
      delay: i * 0.15,
      ease: 'power2.out',
    });
  });

  const waitlistInner = document.querySelector('.waitlist-inner');
  if (waitlistInner) {
    gsap.from(waitlistInner.children, {
      scrollTrigger: { trigger: waitlistInner, start: 'top 80%' },
      y: 28,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power2.out',
    });
  }

  document.querySelectorAll<HTMLElement>('.stat-number[data-target]').forEach((el) => {
    const target = parseInt(el.dataset['target'] ?? '0', 10);
    const suffix = el.dataset['suffix'] ?? '';
    const counter = { val: 0 };

    ScrollTrigger.create({
      trigger: el,
      start: 'top 82%',
      once: true,
      onEnter() {
        gsap.to(counter, {
          val: target,
          duration: 2.2,
          ease: 'power1.inOut',
          onUpdate() {
            el.textContent = Math.round(counter.val).toLocaleString() + suffix;
          },
        });
      },
    });
  });
}
