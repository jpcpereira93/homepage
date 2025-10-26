"use client";

import Image from "next/image";
import React, { useCallback, useRef } from "react";

import { useIntersectionObserver } from "@/hooks";
import { getStackAnimationFromIntersectionInfo } from "@/utils";

interface TechStackItemProps {
  logo: string;
  name: string;
}

const TechStackItem = ({ logo, name }: TechStackItemProps) => {
  const containerRef = useRef(null);

  const intersectionInfo = useIntersectionObserver(containerRef);

  const getAnimationFromIntersectionInfo = useCallback(
    () => getStackAnimationFromIntersectionInfo(intersectionInfo),
    [intersectionInfo],
  );

  return (
    <div className="h-10">
      <div
        className={`h-fit w-fit flex items-center gap-4 ${getAnimationFromIntersectionInfo()}`}
        ref={containerRef}
      >
        <Image alt={name} src={logo} height={35} width={35} priority />
        <span className="text-xl text-slate-300">{name}</span>
      </div>
    </div>
  );
};

export default React.memo(TechStackItem);
