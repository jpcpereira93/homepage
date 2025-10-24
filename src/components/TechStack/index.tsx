"use client";

import { useRef } from "react";
import TechStackItem from "@/components/TechStackItem";
import { useIntersectionObserver } from "@/hooks";
import type { ITechStackItem } from "@/models";

interface TechStackProps {
  items: ITechStackItem[];
  label: string;
}

export const TechStack = ({ items, label }: TechStackProps) => {
  const containerRef = useRef(null);

  const [isVisible, isScrollDown] = useIntersectionObserver(containerRef);

  return (
    <div className="flex flex-col sm:flex-row gap-5 sm:gap-0">
      <div className="w-full sm:w-2/5">
        <h1
          ref={containerRef}
          className={`text-4xl uppercase tracking-tighter font-extrabold ${
            isVisible
              ? isScrollDown
                ? "animate-slide-in-top"
                : "animate-slide-in-bottom"
              : "opacity-0"
          }`}
        >
          {label}
        </h1>
      </div>
      <div className="w-full sm:w-3/5 flex flex-wrap items-center gap-8 sm:gap-10">
        {items.map(({ logo, name }) => (
          <TechStackItem key={name} logo={logo} name={name} />
        ))}
      </div>
    </div>
  );
};
