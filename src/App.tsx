import { useRef } from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import SocialLink from "./components/links/social-link";
import { Squares } from "@/components/ui/squares-background";

function App() {
  const mainContentRef = useRef(null);

  return (
    <main
      ref={mainContentRef}
      className="relative z-10 flex flex-col justify-between items-center h-screen font-roboto-mono">
      <Squares
        className="fixed inset-0 -z-10"
        direction="diagonal"
        speed={0.5}
        squareSize={40}
        borderColor="#bbb"
        hoverFillColor="#ddd"
        mouseTargetRef={mainContentRef}
      />
      <div className="flex items-center flex-1">
        <div className="flex flex-col gap-4 font-bold text-6xl text-center">
          <p>🏗️ UNDER</p>
          <p>DEVELOPMENT!</p>
          <div className="font-normal">
            <div className="flex flex-col gap-2 text-lg">
              <p>let me cook vro... 🥀</p>
              <p className="pt-16">...check these in the meantime!</p>
            </div>
            <div className="flex justify-center text-base gap-8 mt-2">
              <SocialLink
                href="https://linkedin.com/in/nabilmuafa"
                Icon={FaLinkedin}
                label="in/nabilmuafa"
                ariaLabel="LinkedIn Profile"
              />
              <SocialLink
                href="https://instagram.com/nabilmuafa"
                Icon={FaInstagram}
                label="nabilmuafa"
                ariaLabel="Instagram Profile"
              />
              <SocialLink
                href="https://github.com/nabilmuafa"
                Icon={FaGithub}
                label="nabilmuafa"
                ariaLabel="GitHub Profile"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm mb-4">nabilmuafa.com</p>
      </div>
    </main>
  )
}

export default App
