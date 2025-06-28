import { Timeline } from "@/components/ui/timeline";
import quorumLogo from "@/assets/purple-quorum-scaled.png";
import ristekLogo from "@/assets/ristek.jpeg";
import compfestLogo from "@/assets/compfest-16.png";
import fasilkomLogo from "@/assets/fasilkom-logo.jpeg";
import { AuroraText } from "../magicui/aurora-text";

export const ExperiencesSection = (): React.JSX.Element => {
  const data = [
    {
      title: "Software Engineer Intern",
      company: "QuorumAI",
      period: "Mar 2025 - Present",
      image: quorumLogo,
      content: (
        <p>
          Developed a WebSocket-powered chat service that provides a
          near-real-time conversation with DeepSeek's V3 model through Fireworks
          AI in Go.
        </p>
      ),
    },
    {
      title: "Director @ Network, Security, and Operating System SIG",
      company: "RISTEK Fakultas Ilmu Komputer Universitas Indonesia",
      period: "Mar 2025 - Present",
      image: ristekLogo,
      content: (
        <p>
          Led a team of 9 leads and 8 members blablablabla. Lorem ipsum dolor
          sit amet. Skibidi sigma pomni ts pmo sybau.
        </p>
      ),
    },
    {
      title: "Coordinating Teaching Assistant of Platform-Based Programming",
      company: "Fakultas Ilmu Komputer Universitas Indonesia",
      period: "Aug 2024 - Jan 2025",
      image: fasilkomLogo,
      content: (
        <p>
          Led a team of 9 leads and 8 members blablablabla. Lorem ipsum dolor
          sit amet. Skibidi sigma pomni ts pmo sybau.
        </p>
      ),
    },
    {
      title: "Person In Charge of Capture The Flag COMPFEST 16",
      company: "COMPFEST 16",
      period: "Nov 2023 - Dec 2024",
      image: compfestLogo,
      content: (
        <p>
          Led a 12-person division consisting of scientific committees, software
          engineers, and administrational committees. Organized the overall
          execution of the CTF, which got a total of 384 participating teams in
          the qualifications, a 32,8% increase from CTF COMPFEST 15. Organized
          the total of more than 35 challenges (qualifications & finals),
          receiving an average quality rating of 8.5/10 from 128 participants.
        </p>
      ),
    },
  ];

  const colors = ["#00BFFF", "#1E90FF", "#0000CD", "#000080"];

  return (
    <div className="w-full pt-12 bg-white/40 rounded-4xl">
      <div className="max-w-7xl mx-auto text-center px-4 md:px-8 mb-4 lg:px-10">
        <h2 className="text-2xl md:text-4xl font-bold">
          <span>My </span>
          <AuroraText colors={colors}>Experiences</AuroraText>
        </h2>
      </div>
      <Timeline data={data} />
    </div>
  );
};
