"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { throttle } from "@/utils";

export const HomeScrollDetection = () => {
  const router = useRouter();

  const onScroll = throttle(({ deltaY }: WheelEvent) => {
    if (deltaY > 0) {
      router.push("know-me");
    }
  }, 5000);

  useEffect(() => {
    router.prefetch("know-me");
    window.addEventListener("wheel", onScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", onScroll);
    };
  }, [onScroll, router]);

  return null;
};
