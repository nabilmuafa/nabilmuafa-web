"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import quorumLogo from "@/assets/purple-quorum.png";

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
      className="w-full bg-white dark:bg-neutral-950 md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto text-center px-4 md:px-8 mb-8 lg:px-10">
        <h2 className="text-lg md:text-4xl font-medium text-black dark:text-white">
          My Experiences
        </h2>
      </div>

      <div
        ref={ref}
        className="relative flex flex-col gap-28 max-w-7xl mx-auto py-20"
      >
        {data.map((item, index) => (
          <div key={index} className="flex justify-between md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-sm md:max-w-2xl w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <img
                src={item.image}
                width="64"
                height="64"
                className="hidden md:block border-1 rounded-lg object-cover md:ml-20"
              />
              <div className="hidden md:block flex flex-col md:pl-8">
                <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>
                <h4 className="text-xl md:text-xl font-medium text-neutral-700 dark:text-neutral-500">
                  {item.company}
                </h4>
                <h5 className="text-xl md:text-lg font-medium text-neutral-500 dark:text-neutral-500">
                  {item.period}
                </h5>
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 max-w-xs md:max-w-xl w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          // className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
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
