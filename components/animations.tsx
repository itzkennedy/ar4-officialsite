"use client";

import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "motion/react";
import { useRef, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  duration?: number;
}

export function Reveal({ children, delay = 0, y = 32, className, duration = 0.9 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delay?: number;
}

export function StaggerGroup({ children, className, staggerDelay = 0.08, delay = 0 }: StaggerProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduceMotion ? 0 : staggerDelay,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, y = 28 }: { children: ReactNode; className?: string; y?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduceMotion ? 0 : y },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ImageReveal({ children, className, delay = 0 }: ImageRevealProps) {
  return (
    <Reveal className={className} delay={delay} y={40}>
      {children}
    </Reveal>
  );
}

interface ParallaxProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

export function Parallax({ children, strength = 24, className }: ParallaxProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [strength, -strength]);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}