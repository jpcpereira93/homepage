"use client";

import type { ReactNode } from "react";

export interface SocialButtonProps {
  children: ReactNode;
  href: string;
}

export const SocialButton = ({ children, href }: SocialButtonProps) => (
  <a href={href} target="_blank" rel="noopener">
    <button
      className="relative text-slate-300 p-1 hover:cursor-pointer 
    before:rounded before:transition-all before:duration-300 before:origin-center
    before:absolute before:opacity-0 before:bg-teal-500 before:top-0 before:left-0
    before:h-full before:w-full before:scale-0 before:z-1
    hover:before:opacity-100 hover:before:scale-100"
      type="button"
    >
      <div className="relative z-2">{children}</div>
    </button>
  </a>
);
