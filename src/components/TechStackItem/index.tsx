"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { useIntersectionObserver } from "@/app/hooks";

interface TechStackItemProps {
  logo: string;
  name: string;
}

const TechStackItem = ({ logo, name }: TechStackItemProps) => {
  const containerRef = useRef(null);

  const [isVisible, isScrollDown] = useIntersectionObserver(containerRef);

  return (
    <div className="h-10">
      <div
        className={`h-fit w-fit flex items-center gap-4 ${
          isVisible
            ? isScrollDown
              ? "animate-slide-in-top"
              : "animate-slide-in-bottom"
            : "opacity-0"
        }`}
        ref={containerRef}
      >
        <Image
          alt={name}
          src={`/logos/${logo}`}
          height={35}
          width={35}
          priority
        />
        <span className="text-xl text-slate-300">{name}</span>
      </div>
    </div>
  );
};

export default React.memo(TechStackItem);
