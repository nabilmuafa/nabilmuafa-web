"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  company: string;
  period: string;
  image: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 30%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full dark:bg-neutral-950 pl-2 pr-8 md:px-8"
      ref={containerRef}
    >
      <div className="mx-auto border-1 border-neutral-300 w-72"></div>
      <div
        ref={ref}
        className="relative flex flex-col gap-12 md:gap-28 max-w-7xl mx-auto py-8 md:py-20"
      >
        {data.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 1.0,
              ease: [0.23, 0.86, 0.39, 0.96],
            }}
            key={index}
            className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-10"
          >
            <div className="sticky flex z-40 items-center top-40 self-start max-w-2xl w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <img
                src={item.image}
                width="64"
                height="64"
                className="border-1 rounded-lg object-cover ml-16 md:ml-20"
              />
              <div className="flex flex-col pl-4 md:pl-8">
                <h3 className="text-lg md:text-2xl font-bold">{item.title}</h3>
                <h4 className="md:text-xl font-medium text-neutral-700 dark:text-neutral-500">
                  {item.company}
                </h4>
                <h5 className="text-sm md:text-lg font-medium text-neutral-500 dark:text-neutral-500">
                  {item.period}
                </h5>
              </div>
            </div>

            <div className="relative pl-16 text-sm md:text-base text-stone-700 md:pl-4 max-w-2xl md:max-w-xl w-full">
              {item.content}{" "}
            </div>
          </motion.div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent from-0% via-neutral-200 to-transparent to-99% dark:via-neutral-700 [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
