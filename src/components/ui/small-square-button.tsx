import { useState, useEffect } from "react";

interface ButtonProps {
  href: string;
  Icon: React.ElementType;
}

export const SmallSquareButton = ({
  href,
  Icon,
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
  return (
    <a
      href={href}
      className="text-primary-foreground rounded-lg p-2 mt-1 bg-graphite/10 hover:bg-graphite/20 backdrop-blur-xs shadow-sm border transition duration-200"
    >
      <Icon size={size} />
    </a>
  );
};
