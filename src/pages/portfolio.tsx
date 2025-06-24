import { motion } from "framer-motion";
import { Blocks, Briefcase, Home, Mail } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { ColorWordRotate } from "@/components/magicui/color-word-rotate";
// import { IconCloud } from "@/components/magicui/icon-cloud";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import Icons from "@/assets/svg-icons";

const PortfolioPage = (): React.JSX.Element => {
  const tabs = [
    { title: "Home", icon: Home },
    { title: "Experiences", icon: Briefcase },
    { title: "Projects", icon: Blocks },
    { title: "Contact", icon: Mail },
  ];
  const slugs = [
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
    <main className="flex justify-center font-instrument">
      <div className="max-w-5xl w-full">
        <div className="flex justify-center mt-4">
          <ExpandableTabs tabs={tabs} />
        </div>
        <motion.div
          initial={{
            opacity: 0,
            y: 150,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 2.4,
            ease: [0.23, 0.86, 0.39, 0.96],
            opacity: { duration: 1.2 },
          }}
          className="flex justify-center mt-28 mb-12"
        >
          <div className="text-center font-medium max-w-3xl">
            <div className="text-6xl">
              <p>Hello there, I'm Nabil!</p>
              <div className="font-bold">
                <ColorWordRotate
                  words={[
                    "CS Student @ UI",
                    "Software Engineer",
                    "Game Developer",
                    "CTF Player",
                    "Cinephile",
                  ]}
                  colors={[
                    ["#FF0080", "#7928CA", "#0070F3", "#38bdf8"],
                    ["#FF5733", "#FF8C00", "#FFC300", "#F9F871"],
                    ["#013220", "#004B23", "#2F855A", "#556B2F"],
                    ["#00BFFF", "#1E90FF", "#0000CD", "#000080"],
                    ["#F08080", "#FFA07A", "#20B2AA", "#87CEEB"],
                  ]}
                />
              </div>
            </div>
            <div className="font-normal text-xl mt-8 text-stone-700">
              Upcoming final year computer science student with a strong passion
              for building robust and scalable systems. A meticulous,
              detailed-to-pixels problem solver, with skills sharpened through
              countless Capture The Flag competitions.
            </div>
          </div>
        </motion.div>
        <div className="flex items-center gap-4">
          {/* <IconCloud images={images} /> */}
          <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
            <OrbitingCircles iconSize={40}>
              {slugs[2].map((slug) => {
                const IconComponent = Icons[slug as keyof typeof Icons];
                if (IconComponent) {
                  return <IconComponent />;
                }
              })}
            </OrbitingCircles>
            <OrbitingCircles iconSize={30} radius={100} reverse>
              {slugs[1].map((slug) => {
                const IconComponent = Icons[slug as keyof typeof Icons];
                if (IconComponent) {
                  return <IconComponent />;
                }
              })}
            </OrbitingCircles>
            <OrbitingCircles iconSize={25} radius={50}>
              {slugs[0].map((slug) => {
                const IconComponent = Icons[slug as keyof typeof Icons];
                if (IconComponent) {
                  return <IconComponent />;
                }
              })}
            </OrbitingCircles>
          </div>
          <div>
            <p className="font-medium text-3xl">| My Tech Stack and Tools</p>
            <p className="text-xl pt-4 text-stone-700">
              Proficient in a wide range of programming languages and
              frameworks, demonstrating high adaptability and flexibility.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PortfolioPage;
