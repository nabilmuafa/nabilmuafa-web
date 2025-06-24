"use client";

import { AuroraText } from "@/components/magicui/aurora-text";

import { AnimatePresence, motion, type MotionProps } from "motion/react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface WordRotateProps {
  words: string[];
  colors: string[][];
  duration?: number;
  motionProps?: MotionProps;
  className?: string;
}

export function ColorWordRotate({
  words,
  duration = 2500,
  colors,
  motionProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div className="overflow-hidden py-2">
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[index]}
          className={cn(className)}
          {...motionProps}
        >
          <AuroraText colors={colors[index]} speed={2}>
            {words[index]}
          </AuroraText>
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
