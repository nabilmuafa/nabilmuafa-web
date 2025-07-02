import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface ButtonProps {
  href: string;
  Icon: React.ElementType;
  delay?: number;
}

export const SmallSquareButton = ({
  href,
  Icon,
  delay,
}: ButtonProps): React.JSX.Element => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
    return () => window.removeEventListener("resize", handleResize);
  });
  const size = windowWidth < 768 ? 20 : 24;
  return delay != null ? (
    <motion.a
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        type: "tween",
        duration: 1.0,
        delay: delay,
        // ease: "linear",
        ease: [0.23, 0.86, 0.39, 0.96],
      }}
      href={href}
      className="text-primary-foreground rounded-lg p-2 mt-1 bg-graphite/10 hover:bg-graphite/20 backdrop-blur-xs shadow-sm border transition-colors duration-200"
    >
      <Icon size={size} />
    </motion.a>
  ) : (
    <a
      href={href}
      className="text-primary-foreground rounded-lg p-2 mt-1 bg-graphite/10 hover:bg-graphite/20 backdrop-blur-xs shadow-sm border transition duration-200"
    >
      <Icon size={size} />
    </a>
  );
};
