import { Blocks, Briefcase, Home, Mail } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { HeroSection } from "@/components/sections/hero-section";
import { TechSection } from "@/components/sections/tech-section";
import { useRef } from "react";
import { motion } from "motion/react";
import { ExperiencesSection } from "@/components/sections/experiences";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { ContactSection } from "@/components/sections/contact";
import { FooterSection } from "@/components/sections/footer";

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

      <main className="text-graphite relative z-10 flex justify-center font-instrument">
        <div className="max-w-7xl w-full overflow-hidden">
          <div className="fixed top-4 z-100 inset-x-0 flex justify-center mx-auto">
            <ExpandableTabs observerRefs={observerRefs} tabs={tabs} />
          </div>
          <section
            ref={(el) => {
              observerRefs.current[0] = el;
            }}
            id="home"
            className="overflow-hidden pt-24"
          >
            <div>
              <HeroSection />
              <TechSection />
            </div>
          </section>
          <section
            ref={(el) => {
              observerRefs.current[1] = el;
            }}
            id="experiences"
            className="overflow-hidden min-h-screen w-full rounded-md pt-12 px-8"
          >
            <motion.div
              initial={{ opacity: 0, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.0,
                ease: [0.23, 0.86, 0.39, 0.96],
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
            className="h-screen pt-24 px-8"
          >
            ini projects
          </section>
          <section
            ref={(el) => {
              observerRefs.current[3] = el;
            }}
            id="contact"
            className="py-8 md:py-16 px-8"
          >
            <ContactSection />
          </section>
        </div>
      </main>
      <FooterSection />
    </>
  );
};

export default PortfolioPage;
