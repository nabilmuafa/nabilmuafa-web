import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { AuroraText } from "../magicui/aurora-text";
import escapeFromAShortEscapeThumbnail from "@/assets/efase.png";
import pacilflix from "@/assets/pacilflix.png";
import literasea from "@/assets/literasea.jpeg";
import personalWeb from "@/assets/personal-web.png";

export const ProjectsSection = (): React.JSX.Element => {
  const features = [
    {
      name: "Escape From A Short Escape",
      description:
        'A 2D top-down survival game made in Godot 4.3 for a midterm individual project. My first ever "proper" game, made in roughly two weeks.',
      href: "https://github.com/nabilmuafa/individual-game-jam",
      cta: "GitHub Repository",
      imgSrc: escapeFromAShortEscapeThumbnail,
      className: "",
      techStack: ["godot"],
    },
    {
      name: "Personal Website",
      description: "This website. What else is there to explain...?",
      href: "https://github.com/nabilmuafa/nabilmuafa-web",
      cta: "GitHub Repository",
      imgSrc: personalWeb,
      className: "",
      techStack: [
        "react",
        "typescript",
        "tailwindcss",
        "bun",
        "cloudflare",
        "vercel",
        "html",
      ],
    },
    {
      name: "Pacilflix",
      description:
        "An online streaming service mockup web application for Databases course. Uses raw, secure SQL queries instead of ORM.",
      href: "https://github.com/e4-basdat/e4-pacilflix",
      cta: "GitHub Repository",
      imgSrc: pacilflix,
      className: "",
      techStack: [
        "django",
        "python",
        "postgresql",
        "tailwindcss",
        "html",
        "gcp",
        "docker",
      ],
    },
    {
      name: "Literasea",
      description:
        "A bookstore web app for Platform-Based Programming course midterm group assignment.",
      href: "https://github.com/C05-PBP-2023/literasea",
      cta: "GitHub Repository",
      imgSrc: literasea,
      techStack: ["django", "python", "tailwindcss", "html"],
      className: "",
    },
    {
      name: "Literasea Mobile",
      description:
        "A bookstore mobile app for Platform-Based Programming course midterm group assignment. Integrated with the web app.",
      href: "https://github.com/C05-PBP-2023/literasea",
      cta: "GitHub Repository",
      techStack: ["flutter", "dart"],
      className: "",
    },
  ];

  const colors = ["#013220", "#004B23", "#2F855A", "#556B2F"];

  return (
    <div>
      <div className="max-w-7xl mx-auto text-center px-4 md:px-8 mb-12 lg:px-10">
        <h2 className="text-2xl md:text-4xl font-bold">
          <span>My </span>
          <AuroraText colors={colors}>Projects</AuroraText>
        </h2>
      </div>
      <BentoGrid>
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
};
