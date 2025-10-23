"use client";

import type { ReactNode } from "react";

export interface IconButtonProps {
  active?: boolean;
  children: ReactNode;
  tooltip?: string;
}

export const IconButton = ({ active, children, tooltip }: IconButtonProps) => (
  <button
    className={`group relative text-slate-300 p-1 rounded hover:cursor-pointer 
    before:rounded before:transition-all before:duration-300 before:origin-center
    before:absolute before:opacity-0 before:bg-teal-500 before:top-0 before:left-0
    before:h-full before:w-full before:scale-0 before:z-1
    hover:before:opacity-100 hover:before:scale-100 ${active && "bg-teal-500"}`}
    type="button"
  >
    <div className="relative z-2">{children}</div>
    {tooltip && (
      <span
        className="absolute left-1/2 top-10 z-100 w-fit -translate-x-1/2 
      text-sm font-light h-6 px-2 rounded bg-zinc-800 flex items-center 
      opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-2 
      delay-100 transition-all"
      >
        {tooltip}
      </span>
    )}
  </button>
);
