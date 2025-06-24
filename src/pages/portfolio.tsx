import { Blocks, Briefcase, Home, Mail } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { HeroSection } from "@/components/sections/hero-section";
import { TechSection } from "@/components/sections/tech-section";

const PortfolioPage = (): React.JSX.Element => {
  const tabs = [
    { title: "Home", icon: Home },
    { title: "Experiences", icon: Briefcase },
    { title: "Projects", icon: Blocks },
    { title: "Contact", icon: Mail },
  ];
  return (
    <main className="flex justify-center font-instrument">
      <div className="max-w-7xl w-full">
        <div className="flex justify-center mt-4">
          <ExpandableTabs tabs={tabs} />
        </div>
        <HeroSection />
        <TechSection />
        <div className="h-screen bg-red-100">anggap saja ini experiences</div>
        <div className="h-screen bg-green-100">anggap saja ini projects</div>
        <div className="h-screen bg-blue-100">anggap saja ini contact</div>
      </div>
    </main>
  );
};

export default PortfolioPage;
