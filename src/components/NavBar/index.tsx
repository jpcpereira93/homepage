import { Briefcase, Home, Mail, Wrench } from "lucide-react";

import { NavButton } from "@/components/NavButton";

export const NavBar = () => {
  const selectedSection = undefined;

  return (
    <nav
      className="sticky left-0 right-0 top-0 mx-auto z-50 animate-slide-in-bottom w-fit 
        bg-zinc-800 rounded-xl flex items-center justify-center px-4 py-2 gap-2"
    >
      <NavButton
        active={!selectedSection || selectedSection === "#about"}
        href="#about"
      >
        <Home />
      </NavButton>
      <NavButton active={selectedSection === "#stack"} href="#stack">
        <Wrench />
      </NavButton>
      <NavButton active={selectedSection === "#experience"} href="#experience">
        <Briefcase />
      </NavButton>
      <NavButton active={selectedSection === "#contact"} href="#contact">
        <Mail />
      </NavButton>
    </nav>
  );
};
