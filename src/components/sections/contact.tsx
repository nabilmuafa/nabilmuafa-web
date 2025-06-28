import { AuroraText } from "../magicui/aurora-text";
import { Mail, Copy, Check } from "lucide-react";
import { useCopyToClipboard } from "usehooks-ts";
import { AnimatedSubscribeButton } from "../magicui/animated-subscribe-button";
import { SmallSquareButton } from "../ui/small-square-button";
import {
  FaXTwitter,
  FaDiscord,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa6";

export const ContactSection = (): React.JSX.Element => {
  const colors = ["#F08080", "#FFA07A", "#20B2AA", "#87CEEB"];
  const [copiedText, copy] = useCopyToClipboard();

  const handleCopy = (text: string) => () => {
    copy(text)
      .then(() => {
        console.log("Copied!", { copiedText });
      })
      .catch((error) => {
        console.error("Failed to copy!", error);
      });
  };

  return (
    <div className="">
      <div className="text-5xl font-bold">
        <span>Let's </span>
        <AuroraText colors={colors}>Connect!</AuroraText>
      </div>
      <div className="flex items-start gap-4 mt-4">
        <div className="border-1 w-36 border-gray-700 mt-3"></div>
        <p className="text-xl">
          If you're looking for project teammates, PWN/OSINT player for CTFs,
          Godot programmer for Game Jams, or probably just hitting me up, feel
          free to contact me through email:
        </p>
      </div>
      <div className="flex items-center gap-4 font-bold text-4xl mt-4">
        <SmallSquareButton href="mailto:contact@nabilmuafa.com" Icon={Mail} />
        <AnimatedSubscribeButton onClick={handleCopy("contact@nabilmuafa.com")}>
          <span>
            <Copy />
          </span>
          <span>
            <Check />
          </span>
        </AnimatedSubscribeButton>
        <p>contact@nabilmuafa.com</p>
      </div>
      <div>
        <p className="text-xl mt-8">Or through my other socials!</p>
        <div className="flex gap-4 mt-4">
          <SmallSquareButton
            href="https://instagram.com/nabilmuafa"
            Icon={FaInstagram}
          />
          <SmallSquareButton
            href="https://linkedin.com/in/nabilmuafa"
            Icon={FaLinkedin}
          />
          <SmallSquareButton
            href="https://x.com/menyebrang"
            Icon={FaXTwitter}
          />
          <SmallSquareButton
            href="https://discordapp.com/users/390455648044843010"
            Icon={FaDiscord}
          />
          <SmallSquareButton
            href="https://github.com/nabilmuafa"
            Icon={FaGithub}
          />
        </div>
      </div>
    </div>
  );
};
