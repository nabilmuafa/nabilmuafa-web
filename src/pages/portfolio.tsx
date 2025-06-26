import { Blocks, Briefcase, Home, Mail } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { HeroSection } from "@/components/sections/hero-section";
import { TechSection } from "@/components/sections/tech-section";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ExperiencesSection } from "@/components/sections/experiences";

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
      <div className="max-w-7xl w-full overflow-hidden">
        <div className="fixed top-4 z-100 inset-x-0 flex justify-center mx-auto">
          <ExpandableTabs observerRefs={observerRefs} tabs={tabs} />
        </div>
        <section
          ref={(el) => {
            observerRefs.current[0] = el;
          }}
          id="home"
          className="pt-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 2.4,
              ease: [0.23, 0.86, 0.39, 0.96],
              opacity: { duration: 1.2 },
            }}
          >
            <HeroSection />
            <TechSection />
          </motion.div>
        </section>
        <section
          ref={(el) => {
            observerRefs.current[1] = el;
          }}
          id="experiences"
          className="min-h-screen w-full pt-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 2.4,
              ease: [0.23, 0.86, 0.39, 0.96],
              opacity: { duration: 1.2 },
            }}
          >
            <ExperiencesSection />
          </motion.div>
        </section>
        <section
          ref={(el) => {
            observerRefs.current[2] = el;
          }}
          id="projects"
          className="h-screen bg-green-100"
        >
          anggap saja ini projects
        </section>
        <section
          ref={(el) => {
            observerRefs.current[3] = el;
          }}
          id="contact"
          className="h-screen bg-blue-100"
        >
          anggap saja ini contact
        </section>
      </div>
    </main>
  );
};

export default PortfolioPage;
