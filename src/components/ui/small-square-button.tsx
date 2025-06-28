interface ButtonProps {
  href: string;
  Icon: React.ElementType;
}

export const SmallSquareButton = ({
  href,
  Icon,
}: ButtonProps): React.JSX.Element => {
  return (
    <a
      href={href}
      className="text-primary-foreground rounded-lg p-2 mt-1 bg-graphite/10 hover:bg-graphite/20 backdrop-blur-xs transition duration-200"
    >
      <Icon size={24} />
    </a>
  );
};
