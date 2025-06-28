import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { OrbitingCircles } from "../magicui/orbiting-circles";
import { SVGIcons } from "@/assets/svg-icons";

export const TechSection = (): React.JSX.Element => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
    return () => window.removeEventListener("resize", handleResize);
  });
  const sizes = {
    icon: windowWidth < 768 ? [20, 25, 30] : [25, 30, 40],
    radius: windowWidth < 768 ? [35, 75, 125] : [50, 100, 160],
  };
  const technologies = [
    ["nginx", "dart", "java", "flutter", "amazonaws", "bun", "mysql"],
    // Less used
    [
      "css3",
      "nodedotjs",
      "express",
      "postgresql",
      "typescript",
      "vercel",
      "cloudflare",
      "html5",
    ],
    // Most used
    [
      "godot",
      "javascript",
      "github",
      "go",
      "react",
      "googlecloud",
      "python",
      "tailwindcss",
      "docker",
      "django",
      "git",
    ],
  ];
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{
        duration: 1.0,
        delay: 0.2,
        ease: [0.23, 0.86, 0.39, 0.96],
      }}
      className="flex flex-col lg:flex-row items-center gap-4 px-8"
    >
      <div className="relative flex h-[350px] lg:h-[400px] w-full flex-col items-center justify-center overflow-hidden">
        <OrbitingCircles iconSize={sizes.icon[2]} radius={sizes.radius[2]}>
          {technologies[2].map((item) => {
            const IconComponent = SVGIcons[item as keyof typeof SVGIcons];
            if (IconComponent) {
              return <IconComponent />;
            }
          })}
        </OrbitingCircles>
        <OrbitingCircles
          iconSize={sizes.icon[1]}
          radius={sizes.radius[1]}
          reverse
        >
          {technologies[1].map((item) => {
            const IconComponent = SVGIcons[item as keyof typeof SVGIcons];
            if (IconComponent) {
              return <IconComponent />;
            }
          })}
        </OrbitingCircles>
        <OrbitingCircles iconSize={sizes.icon[0]} radius={sizes.radius[0]}>
          {technologies[0].map((item) => {
            const IconComponent = SVGIcons[item as keyof typeof SVGIcons];
            if (IconComponent) {
              return <IconComponent />;
            }
          })}
        </OrbitingCircles>
      </div>
      <div className="mb-8">
        <p className="font-medium text-2xl md:text-3xl">
          My Tech Stack and Tools
        </p>
        <p className="text-sm md:text-xl pt-4 text-stone-700">
          Proficient in a wide range of programming languages and frameworks,
          demonstrating high adaptability and flexibility.
        </p>
      </div>
    </motion.div>
  );
};
