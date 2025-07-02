import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { SVGIcons } from "@/assets/svg-icons";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import notFound from "@/assets/Image-not-found.png";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  imgSrc?: string;
  description: string;
  href: string;
  cta: string;
  techStack?: ReactNode[];
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] sm:grid-cols-2 lg:grid-cols-3 gap-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  description,
  imgSrc,
  href,
  cta,
  techStack,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col col-span-3 sm:col-span-1 justify-between overflow-hidden rounded-xl h-full",
      // light styles
      "border bg-white/40 shadow-sm",
      className,
    )}
    {...props}
  >
    <div className="absolute w-full [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)]">
      <img
        src={imgSrc ? imgSrc : notFound}
        className="aspect-2/1 h-full object-cover transition-all ease-in-out duration-500 group-hover:scale-110"
      />
    </div>
    <div className="flex flex-col grow lg:grow-0 p-4">
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10 pt-32 lg:pt-38">
        <h3 className="text-xl font-semibold">{name}</h3>
        <div className="flex items-center gap-2">
          {techStack?.map((item) => {
            const IconComponent = SVGIcons[item as keyof typeof SVGIcons];
            if (IconComponent) {
              return (
                <IconComponent className="w-[16px] h-[16px] md:w-[20px] md:h-[20px]" />
              );
            }
          })}
        </div>
        <p className="max-w-lg mt-2 md:mt-4 text-justify text-sm lg:text-base">
          {description}
        </p>
      </div>
      <div className="lg:hidden flex grow" />
      <div
        className={cn(
          "lg:hidden pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
        )}
      >
        <Button
          variant="link"
          asChild
          size="sm"
          className="pointer-events-auto p-0"
        >
          <a href={href}>
            {cta}
            {/* <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" /> */}
          </a>
        </Button>
      </div>
    </div>

    <div className="hidden lg:flex grow" />
    <div
      className={cn(
        "hidden lg:flex pointer-events-none absolute bottom-0 w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <Button
        variant="link"
        asChild
        size="sm"
        className="pointer-events-auto p-0"
      >
        <a href={href}>
          {cta}
          {/* <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" /> */}
        </a>
      </Button>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03]" />
  </div>
);

export { BentoCard, BentoGrid };
