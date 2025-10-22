import type { ReactNode } from "react";

import { IconButton } from "../IconButton";

export interface SocialButtonProps {
  children: ReactNode;
  href: string;
}

export const SocialButton = ({ children, href }: SocialButtonProps) => (
  <IconButton>
    <a href={href} target="_blank" rel="noopener">
      {children}
    </a>
  </IconButton>
);
