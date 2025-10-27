"use client";

import { useCallback, useRef } from "react";

import TechStackItem from "@/components/TechStackItem";
import { useDelayedEntry, useIntersectionObserver } from "@/hooks";
import type { ITechStackItem } from "@/models";
import { getStackAnimationFromIntersectionInfo } from "@/utils";

interface TechStackProps {
  index: number;
  items: ITechStackItem[];
  label: string;
}

export const TechStack = ({ index, items, label }: TechStackProps) => {
  const containerRef = useRef(null);

  const intersectionInfo = useIntersectionObserver(containerRef);
  const isVisible = useDelayedEntry(index * 200);

  const getAnimationFromIntersectionInfo = useCallback(
    () => getStackAnimationFromIntersectionInfo(intersectionInfo),
    [intersectionInfo],
  );

  if (!isVisible) {
    return null;
  }

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
