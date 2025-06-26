import { Blocks, Briefcase, Home, Mail } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { HeroSection } from "@/components/sections/hero-section";
import { TechSection } from "@/components/sections/tech-section";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ExperiencesSection } from "@/components/sections/experiences";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const PortfolioPage = (): React.JSX.Element => {
  const observerRefs = useRef<Array<HTMLElement | null>>([]);
  const tabs = [
    { title: "Home", icon: Home, href: "#home" },
    { title: "Experiences", icon: Briefcase, href: "#experiences" },
    { title: "Projects", icon: Blocks, href: "#projects" },
    { title: "Contact", icon: Mail, href: "#contact" },
  ];
  const bgColors = {
    gradientBackgroundStart: "rgb(245, 232, 255)",
    gradientBackgroundEnd: "rgb(223, 248, 255)",
    firstColor: "180, 150, 255",
    secondColor: "255, 190, 235",
    thirdColor: "190, 255, 240",
    fourthColor: "255, 225, 180",
    fifthColor: "255, 245, 160",
    pointerColor: "200, 160, 255",
  };

  return (
    <>
      <BackgroundGradientAnimation
        gradientBackgroundStart={bgColors.gradientBackgroundStart}
        gradientBackgroundEnd={bgColors.gradientBackgroundEnd}
        firstColor={bgColors.firstColor}
        secondColor={bgColors.secondColor}
        thirdColor={bgColors.thirdColor}
        fourthColor={bgColors.fourthColor}
        fifthColor={bgColors.fifthColor}
        pointerColor={bgColors.pointerColor}
        interactive
      />

      <main className="relative z-10 flex justify-center font-instrument">
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
            className="min-h-screen w-full rounded-md pt-12"
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
    </>
  );
};

export default PortfolioPage;
