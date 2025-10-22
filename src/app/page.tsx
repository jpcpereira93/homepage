import { ArrowDown } from "lucide-react";
import Link from "next/link";

import { HomeScrollDetection } from "@/components";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center gap-8">
      <HomeScrollDetection />
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-5xl font-light text-slate-200 animate-move-in-left">
          Hello, I'm <span className="text-teal-400 font-normal">José</span>.
        </h1>
        <h2 className="text-5xl font-light text-slate-200 animate-move-in-right">
          I'm a full stack web engineer.
        </h2>
      </div>
      <Link href="/know-me">
        <button
          className="flex items-center justify-center gap-2 border-2 
        border-teal-400 text-teal-400 text-xl rounded-sm h-12 w-54 font-light
        animate-move-in-bottom hover:cursor-pointer z-2 hover:h-13 hover:w-55 hover:font-medium
        before:h-12 before:w-54 before:absolute before:border-teal-400 before:border-2 
        before:rounded-sm hover:before:transition-all hover:before:duration-400 hover:before:scale-x-130
        hover:before:scale-y-160 hover:before:blur-xs hover:before:border-transparent
        after:h-12 after:w-54 after:absolute after:border-teal-400 after:border-2 
        after:rounded-sm hover:after:transition-all hover:after:delay-100 
        hover:after:duration-400 hover:after:scale-130
        hover:after:scale-y-160 hover:after:blur-xs hover:after:border-transparent"
          type="button"
        >
          Get to know me
          <ArrowDown size={24} />
        </button>
      </Link>
    </main>
  );
}
