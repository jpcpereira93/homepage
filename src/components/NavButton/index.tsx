import Link from "next/link";
import type { ReactNode } from "react";

import { IconButton } from "../IconButton";

export interface NavButtonProps {
  active?: boolean;
  children: ReactNode;
  href: string;
  tooltip?: string;
}

export const NavButton = ({
  active,
  children,
  href,
  tooltip,
}: NavButtonProps) => (
  <>
    <IconButton active={active} tooltip={tooltip}>
      <Link href={href}>{children}</Link>
    </IconButton>
  </>
);
