import { OrbitingCircles } from "../magicui/orbiting-circles";
import { SVGIcons } from "@/assets/svg-icons";

export const TechSection = (): React.JSX.Element => {
  const isMobile = window.screen.width < 768;
  const sizes = {
    icon: window.screen.width < 768 ? [20, 25, 30] : [25, 30, 40],
    radius: window.screen.width < 768 ? [35, 75, 125] : [50, 100, 160],
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
    <div className="flex flex-col md:flex-row items-center gap-4 px-8">
      <div className="relative flex h-[300px] md:h-[400px] w-full flex-col items-center justify-center overflow-hidden">
        <OrbitingCircles
          iconSize={isMobile ? sizes.icon[2] : sizes.icon[2]}
          radius={isMobile ? sizes.radius[2] : sizes.radius[2]}
        >
          {technologies[2].map((item) => {
            const IconComponent = SVGIcons[item as keyof typeof SVGIcons];
            if (IconComponent) {
              return <IconComponent />;
            }
          })}
        </OrbitingCircles>
        <OrbitingCircles
          iconSize={isMobile ? sizes.icon[1] : sizes.icon[1]}
          radius={isMobile ? sizes.radius[1] : sizes.radius[1]}
          reverse
        >
          {technologies[1].map((item) => {
            const IconComponent = SVGIcons[item as keyof typeof SVGIcons];
            if (IconComponent) {
              return <IconComponent />;
            }
          })}
        </OrbitingCircles>
        <OrbitingCircles
          iconSize={isMobile ? sizes.icon[0] : sizes.icon[0]}
          radius={isMobile ? sizes.radius[0] : sizes.radius[0]}
        >
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
    </div>
  );
};
