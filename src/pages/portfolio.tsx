import { Blocks, Briefcase, Home, Mail } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { HeroSection } from "@/components/sections/hero-section";
import { TechSection } from "@/components/sections/tech-section";
import { useRef } from "react";

const PortfolioPage = (): React.JSX.Element => {
  const observerRefs = useRef<Array<HTMLElement | null>>([]);
  const tabs = [
    { title: "Home", icon: Home, href: "#home" },
    { title: "Experiences", icon: Briefcase, href: "#experiences" },
    { title: "Projects", icon: Blocks, href: "#projects" },
    { title: "Contact", icon: Mail, href: "#contact" },
  ];

  return (
    <main className="flex justify-center font-instrument">
      <div className="max-w-7xl w-full">
        <div className="fixed top-4 z-10 inset-x-0 flex justify-center mx-auto">
          <ExpandableTabs observerRefs={observerRefs} tabs={tabs} />
        </div>
        <section
          ref={(el) => {
            observerRefs.current[0] = el;
          }}
          id="home"
        >
          <HeroSection />
          <TechSection />
        </section>
        <div
          ref={(el) => {
            observerRefs.current[1] = el;
          }}
          id="experiences"
          className="h-screen bg-red-100"
        >
          anggap saja ini experiences
        </div>
        <div
          ref={(el) => {
            observerRefs.current[2] = el;
          }}
          id="projects"
          className="h-screen bg-green-100"
        >
          anggap saja ini projects
        </div>
        <div
          ref={(el) => {
            observerRefs.current[3] = el;
          }}
          id="contact"
          className="h-screen bg-blue-100"
        >
          anggap saja ini contact
        </div>
      </div>
    </main>
  );
};

export default PortfolioPage;
