import { OrbitingCircles } from "../magicui/orbiting-circles";
import { SVGIcons } from "@/assets/svg-icons";

export const TechSection = (): React.JSX.Element => {
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
    <section className="flex items-center gap-4">
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
        <OrbitingCircles iconSize={40}>
          {technologies[2].map((item) => {
            const IconComponent = SVGIcons[item as keyof typeof SVGIcons];
            if (IconComponent) {
              return <IconComponent />;
            }
          })}
        </OrbitingCircles>
        <OrbitingCircles iconSize={30} radius={100} reverse>
          {technologies[1].map((item) => {
            const IconComponent = SVGIcons[item as keyof typeof SVGIcons];
            if (IconComponent) {
              return <IconComponent />;
            }
          })}
        </OrbitingCircles>
        <OrbitingCircles iconSize={25} radius={50}>
          {technologies[0].map((item) => {
            const IconComponent = SVGIcons[item as keyof typeof SVGIcons];
            if (IconComponent) {
              return <IconComponent />;
            }
          })}
        </OrbitingCircles>
      </div>
      <div>
        <p className="font-medium text-3xl">| My Tech Stack and Tools</p>
        <p className="text-xl pt-4 text-stone-700">
          Proficient in a wide range of programming languages and frameworks,
          demonstrating high adaptability and flexibility.
        </p>
      </div>
    </section>
  );
};
