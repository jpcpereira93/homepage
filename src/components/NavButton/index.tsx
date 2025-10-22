import Link from "next/link";
import type { ReactNode } from "react";

import { IconButton } from "../IconButton";

export interface NavButtonProps {
  active?: boolean;
  children: ReactNode;
  href: string;
}

export const NavButton = ({ active, children, href }: NavButtonProps) => (
  <IconButton active={active}>
    <Link href={href}>{children}</Link>
  </IconButton>
);
