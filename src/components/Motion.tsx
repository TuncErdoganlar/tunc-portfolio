'use client';

import {motion, useReducedMotion} from 'framer-motion';
import type {ReactNode} from 'react';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Scroll'a girince fade-up reveal (whileInView, once). prefers-reduced-motion'da statik.
export function Reveal({
  children,
  className,
  delay = 0
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : {opacity: 0, y: 24}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.2}}
      transition={{duration: 0.55, delay, ease: EASE}}
    >
      {children}
    </motion.div>
  );
}

export const staggerContainer = {
  hidden: {},
  show: {transition: {staggerChildren: 0.12, delayChildren: 0.08}}
};

export const staggerItem = {
  hidden: {opacity: 0, y: 20},
  show: {opacity: 1, y: 0, transition: {duration: 0.6, ease: EASE}}
};

export {motion, useReducedMotion, EASE};
