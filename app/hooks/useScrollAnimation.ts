import { useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export function useScrollAnimation(threshold = 0.1) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: threshold });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return { ref, controls };
}
