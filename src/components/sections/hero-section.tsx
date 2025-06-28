import { motion } from "motion/react";
import { ColorWordRotate } from "../magicui/color-word-rotate";
import selfPic from "@/assets/selfpic.jpeg";

export const HeroSection = (): React.JSX.Element => {
  const rotatingWords = [
    "CS Student @ UI",
    "Software Engineer",
    "Game Developer",
    "CTF Player",
    "Cinephile",
  ];

  const rotatingColors = [
    ["#FF0080", "#7928CA", "#0070F3", "#38bdf8"],
    ["#FF5733", "#FF8C00", "#FFC300", "#F9F871"],
    ["#013220", "#004B23", "#2F855A", "#556B2F"],
    ["#00BFFF", "#1E90FF", "#0000CD", "#000080"],
    ["#F08080", "#FFA07A", "#20B2AA", "#87CEEB"],
  ];

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{
        duration: 1.0,
        ease: [0.23, 0.86, 0.39, 0.96],
      }}
      className="flex justify-center px-8 mb-4 md:mb-12"
    >
      <div className="flex flex-col justify-center items-center text-center font-medium max-w-3xl">
        <img src={selfPic} className="w-48 h-48 rounded-full my-8" />
        <div className="text-3xl md:text-6xl">
          <p>Hello there, I'm Nabil!</p>
          <div className="font-bold">
            <ColorWordRotate words={rotatingWords} colors={rotatingColors} />
          </div>
        </div>
        <div className="font-normal text-sm md:text-xl mt-4 md:mt-8 text-stone-700">
          Upcoming final year computer science student with a strong passion for
          building robust and scalable systems. A meticulous, detailed-to-pixels
          problem solver, with skills sharpened through countless Capture The
          Flag competitions.
        </div>
      </div>
    </motion.div>
  );
};
