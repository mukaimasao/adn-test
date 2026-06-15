'use client';

import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    const show = (e: HTMLElement) => e.classList.add('in');

    if (!('IntersectionObserver' in window)) {
      els.forEach(show);
      return;
    }

    const vh = window.innerHeight || 800;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            show(en.target as HTMLElement);
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((e) => {
      if (e.getBoundingClientRect().top < vh * 1.05) show(e);
      else io.observe(e);
    });

    const t = setTimeout(() => els.forEach(show), 1500);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);
}
