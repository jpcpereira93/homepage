"use client";

import { Briefcase, Home, Mail, Wrench } from "lucide-react";
import { usePathname } from "next/navigation";

import { NavButton } from "@/components/NavButton";

export const NavBar = () => {
  const pathname = usePathname();
  const slugs = pathname.split("/");

  const selectedSection = slugs.length > 2 ? slugs.pop() : undefined;

  return (
    <nav
      className="sticky left-0 right-0 top-0 mx-auto z-50 animate-slide-in-bottom w-fit 
        bg-zinc-800 rounded-xl flex items-center justify-center px-4 py-2 gap-2"
    >
      <NavButton active={!selectedSection} href="/know-me">
        <Home />
      </NavButton>
      <NavButton active={selectedSection === "stack"} href="/know-me/stack">
        <Wrench />
      </NavButton>
      <NavButton
        active={selectedSection === "experience"}
        href="/know-me/experience"
      >
        <Briefcase />
      </NavButton>
      <NavButton active={selectedSection === "contact"} href="/know-me/contact">
        <Mail />
      </NavButton>
    </nav>
  );
};
