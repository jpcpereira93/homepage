import { Github, Linkedin } from "lucide-react";
import Image from "next/image";

import { NavBar, SocialButton } from "@/components";

export default function KnowMeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative w-screen h-screen px-30 py-10 box-border">
      <NavBar />
      <main className="h-full w-full box-border py-12 flex flex-col xl:flex-row gap-10">
        <section
          className="animate-slide-in-bottom h-full xl:w-sm w-full bg-zinc-800 
      rounded-xl py-10 flex flex-col items-center gap-6"
        >
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/img/me.jpeg"
              height={220}
              width={220}
              alt="José Pereira photo"
              priority
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <h1 className="text-4xl text-slate-200 font-extrabold tracking-tight">
              José Pereira
            </h1>
            <h2 className="text-xl tracking-tighter text-slate-300">
              Full Stack Web Engineer
            </h2>
            <h2 className="text-xl tracking-tighter text-slate-300">
              Porto, Portugal
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <SocialButton href="https://github.com/jpcpereira93">
              <Github size={20} />
            </SocialButton>
            <SocialButton href="https://www.linkedin.com/in/jos%C3%A9-pereira-437104139">
              <Linkedin size={20} />
            </SocialButton>
          </div>
        </section>
        <section className="h-full w-full">{children}</section>
      </main>
    </div>
  );
}
