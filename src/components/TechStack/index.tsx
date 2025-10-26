"use client";

import { useCallback, useRef } from "react";

import TechStackItem from "@/components/TechStackItem";
import { useIntersectionObserver } from "@/hooks";
import type { ITechStackItem } from "@/models";
import { getStackAnimationFromIntersectionInfo } from "@/utils";

interface TechStackProps {
  items: ITechStackItem[];
  label: string;
}

export const TechStack = ({ items, label }: TechStackProps) => {
  const containerRef = useRef(null);

  const intersectionInfo = useIntersectionObserver(containerRef);

  const getAnimationFromIntersectionInfo = useCallback(
    () => getStackAnimationFromIntersectionInfo(intersectionInfo),
    [intersectionInfo],
  );

  return (
    <div className="flex flex-col sm:flex-row gap-5 sm:gap-0">
      <div className="w-full sm:w-2/5">
        <h1
          ref={containerRef}
          className={`text-4xl uppercase tracking-tighter font-extrabold ${getAnimationFromIntersectionInfo()}`}
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
