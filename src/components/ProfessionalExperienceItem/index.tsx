"use client";

import { useEffect, useState } from "react";

import { Pill } from "@/components/Pill";

export type ProfessionalExperienceItemProps = {
  company: string;
  description: string;
  endDate: string;
  index: number;
  role: string;
  startDate: string;
  tech: string[];
};

export const ProfessionalExperienceItem = ({
  company,
  description,
  endDate,
  index,
  role,
  startDate,
  tech,
}: ProfessionalExperienceItemProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(index === 0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (index > 0) {
      timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, index * 200);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [index]);

  if (!isVisible) {
    return null;
  }

  return (
    <article
      className={`animate-slide-in-bottom group relative flex flex-col lg:flex-row px-10 py-5 gap-2 lg:gap-8 rounded-xl hover:bg-neutral-800/50 
    ${index === 0 ? "" : "before:absolute before:top-0 before:left-20 before:h-5 before:w-px before:bg-teal-300/30 hover:before:bg-teal-300/60"}
    after:absolute after:top-15 after:bottom-0 after:left-20 after:w-px after:bg-teal-300/30 hover:after:bg-teal-300/60`}
    >
      <div className="h-10 w-50 flex items-center">
        <p className="uppercase text-sm font-medium tracking-tight text-slate-500">
          {startDate} - {endDate}
        </p>
      </div>
      <div className="w-full flex flex-col flex-wrap gap-4">
        <div className="flex flex-col">
          <div className="h-10 flex items-center">
            <h5 className="text-lg font-medium tracking-tight text-slate-300 group-hover:text-teal-300">
              {role} · {company}
            </h5>
          </div>
          <p className="tracking-tight whitespace-pre-wrap text-justify">
            {description}
          </p>
        </div>
        <ul className="flex flex-wrap gap-1">
          {tech.map((value) => (
            <li key={value}>
              <Pill>{value}</Pill>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
