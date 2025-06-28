import { motion } from "motion/react";
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
import type { IconType } from "react-icons";

export const ContactSection = (): React.JSX.Element => {
  const colors = ["#F08080", "#FFA07A", "#20B2AA", "#87CEEB"];
  const [copiedText, copy] = useCopyToClipboard();
  const socials: { href: string; Icon: IconType }[] = [
    {
      href: "https://instagram.com/nabilmuafa",
      Icon: FaInstagram,
    },
    {
      href: "https://linkedin.com/in/nabilmuafa",
      Icon: FaLinkedin,
    },
    {
      href: "https://x.com/menyebrang",
      Icon: FaXTwitter,
    },
    {
      href: "https://discordapp.com/users/390455648044843010",
      Icon: FaDiscord,
    },
    {
      href: "https://github.com/nabilmuafa",
      Icon: FaGithub,
    },
  ];

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
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 1.0,
          ease: [0.23, 0.86, 0.39, 0.96],
        }}
        className="text-2xl md:text-5xl font-bold"
      >
        <span>Let's </span>
        <AuroraText colors={colors}>Connect!</AuroraText>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 1.0,
          ease: [0.23, 0.86, 0.39, 0.96],
        }}
        className="flex items-start gap-4 mt-4"
      >
        <div className="border-1 w-36 border-gray-700 mt-3"></div>
        <p className="text-sm text-justify md:text-xl">
          If you're looking for project teammates, PWN/OSINT player for CTFs,
          Godot programmer for Game Jams, or probably just hitting me up, feel
          free to contact me through email:
        </p>
      </motion.div>
      <motion.div
        className="flex items-center gap-4 font-bold text-xl md:text-4xl mt-4"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 1.0,
          ease: [0.23, 0.86, 0.39, 0.96],
        }}
      >
        <SmallSquareButton href="mailto:contact@nabilmuafa.com" Icon={Mail} />
        <AnimatedSubscribeButton
          onClick={handleCopy("contact@nabilmuafa.com")}
          className="hidden md:block"
        >
          <span>
            <Copy />
          </span>
          <span>
            <Check />
          </span>
        </AnimatedSubscribeButton>
        <p>contact@nabilmuafa.com</p>
      </motion.div>
      <div>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 1.0,
            ease: [0.23, 0.86, 0.39, 0.96],
          }}
          className="text-sm md:text-xl mt-8"
        >
          Or through my other socials!
        </motion.p>
        <div className="flex gap-4 mt-4">
          {socials.map(
            (item: { href: string; Icon: React.ElementType }, index) => (
              <SmallSquareButton
                href={item.href}
                Icon={item.Icon}
                delay={index * 0.2}
              />
            ),
          )}
        </div>
      </div>
    </>
  );
};
