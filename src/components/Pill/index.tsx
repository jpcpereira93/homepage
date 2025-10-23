import type { ReactNode } from "react";

export interface PillProps {
  children: ReactNode;
}

export const Pill = ({ children }: PillProps) => {
  return (
    <div className="w-fit rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
      {children}
    </div>
  );
};
