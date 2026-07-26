import { Timeline } from "@/components/ui/timeline";
import quorumLogo from "@/assets/purple-quorum-scaled.png";
import ristekLogo from "@/assets/ristek.jpeg";
import compfestLogo from "@/assets/compfest-16.png";
import digiserveLogo from "@/assets/digiserve.png";
import fasilkomLogo from "@/assets/fasilkom-logo.jpeg";
import itsecLogo from "@/assets/itsec.jpeg";
import openwayLogo from "@/assets/openway.jpeg";
import { AuroraText } from "../magicui/aurora-text";

export const ExperiencesSection = (): React.JSX.Element => {
  const data = [
    {
      title: "Software Engineer Intern",
      company: "PT OpenWay Teknologi Indonesia",
      period: "Jun 2026 - Present",
      image: openwayLogo,
      content: <p>Internship still ongoing, more to come~</p>,
    },
    {
      title: "Cloud Security Intern",
      company: "PT ITSEC Asia Tbk",
      period: "Feb 2026 - April 2026",
      image: itsecLogo,
      content: (
        <p>
          AWS &amp; GCPmaxxing. Learned cloud security practices through
          hands-on cloud security labs such as Pwned Labs, flAWS, or Wiz Cloud
          Security Championship.
        </p>
      ),
    },
    {
      title: "IT Developer Intern",
      company: "Digiserve by Telkom Indonesia",
      period: "Jul 2025 - Jan 2026",
      image: digiserveLogo,
      content: (
        <p>
          Pioneered GitLab CI/CD adoption in company development workflow by
          implementing reusable pipelines with containerization and rollback
          mechanisms, and developing fullstack internal document management web
          app integrated with the company's Azure AD ecosystem (OAuth &amp;
          Graph API for SharePoint).
        </p>
      ),
    },
    {
      title: "Software Engineer Intern",
      company: "QuorumAI",
      period: "Mar 2025 - Jul 2025",
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
      title: "Director of Network, Security, and Operating System SIG",
      company: "RISTEK Fakultas Ilmu Komputer Universitas Indonesia",
      period: "Mar 2025 - Present",
      image: ristekLogo,
      content: (
        <p>
          Led a team of 9 leads and 8 members in the SIG, providing all with
          internal workshops, mentorships, biweekly CTFs, (upcoming) projects,
          and other experiences within the cyber security scope.
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
          Assisted the lecturers in leading and coordinating a team of 25+
          teaching assistants responsible for developing weekly tutorials &
          assignments. Also outlined and developed an additional material for
          the course regarding web security issues.
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
    <div className="w-full py-8 lg:py-12 border bg-white/40 shadow-sm rounded-4xl">
      <div className="max-w-7xl mx-auto text-center px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          <span>My </span>
          <AuroraText colors={colors}>Experiences</AuroraText>
        </h2>
        <div className="mx-auto border-1 border-neutral-300 w-48 md:w-64 lg:w-72 mt-4"></div>
      </div>
      <Timeline data={data} />
    </div>
  );
};
