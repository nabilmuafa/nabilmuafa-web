"use client";

import * as React from "react";
import { AnimatePresence, motion, type Transition } from "motion/react";
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

interface Tab {
  title: string;
  icon: LucideIcon;
  href: string;
  type?: never;
}

interface Separator {
  type: "separator";
  title?: never;
  icon?: never;
}

type TabItem = Tab | Separator;

interface ExpandableTabsProps {
  tabs: TabItem[];
  observerRefs: React.RefObject<Array<HTMLElement | null>>;
  className?: string;
  activeColor?: string;
  onChange?: (index: number | null) => void;
}

const buttonVariants = {
  initial: {
    gap: 0,
    paddingLeft: ".5rem",
    paddingRight: ".5rem",
  },
  animate: (isSelected: boolean) => ({
    gap: isSelected ? ".5rem" : 0,
    paddingLeft: isSelected ? "1rem" : ".5rem",
    paddingRight: isSelected ? "1rem" : ".5rem",
  }),
};

const spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "auto", opacity: 1 },
  exit: { width: 0, opacity: 0 },
};

const transition: Transition = {
  delay: 0.1,
  type: "spring",
  bounce: 0,
  duration: 0.6,
};

export function ExpandableTabs({
  tabs,
  observerRefs,
  className,
  activeColor = "text-primary",
  onChange,
}: ExpandableTabsProps) {
  const [selected, setSelected] = React.useState<number | null>(0);
  const observers = React.useRef<IntersectionObserver[]>([]);

  const isClickScrolling = React.useRef(false);
  const scrollTimeout = React.useRef<NodeJS.Timeout | null>(null);

  const handleSelect = (index: number) => {
    isClickScrolling.current = true;

    setSelected(index);
    onChange?.(index);

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);
  };

  React.useEffect(() => {
    const observerCallback = async (
      e: IntersectionObserverEntry[],
      index: number,
    ) => {
      if (isClickScrolling.current) return;
      if (e[0]?.isIntersecting) {
        setSelected(index);
      }
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    if (observerRefs.current?.length && observers.current) {
      observerRefs.current.forEach((ref, index) => {
        if (ref) {
          const observer = new IntersectionObserver(
            (e) => observerCallback(e, index),
            observerOptions,
          );
          observer.observe(ref);
          observers.current[index] = observer;
        }
      });
    }

    const currentObservers = observers.current;

    return () => {
      currentObservers.forEach((observer) => observer?.disconnect());
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [observerRefs, onChange]);

  const Separator = () => (
    <div className="mx-1 h-[24px] w-[1.2px] bg-border" aria-hidden="true" />
  );

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2 rounded-2xl border bg-white/30 backdrop-blur-xs p-2 shadow-sm",
        className,
      )}
    >
      {tabs.map((tab, index) => {
        if (tab.type === "separator") {
          return <Separator key={`separator-${index}`} />;
        }

        const Icon = tab.icon;
        return (
          <motion.a
            key={tab.title}
            variants={buttonVariants}
            initial={false}
            animate="animate"
            custom={selected === index}
            onClick={() => handleSelect(index)}
            transition={transition}
            href={tab.href}
            className={cn(
              "relative flex items-center rounded-xl px-4 py-2 text-base font-medium cursor-pointer transition-colors duration-300",
              selected === index
                ? cn("bg-muted/70", activeColor)
                : "text-muted-foreground hover:bg-muted/70 hover:text-foreground",
            )}
          >
            <Icon size={24} />
            <AnimatePresence initial={false}>
              {selected === index && (
                <motion.span
                  variants={spanVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={transition}
                  className="overflow-hidden hidden md:block"
                >
                  {tab.title}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.a>
        );
      })}
    </div>
  );
}
