'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.15,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.9,
      anchors: {
        offset: 0,
        duration: 1.05,
      },
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
