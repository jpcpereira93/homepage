import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = (
  containerRef: React.RefObject<HTMLElement | null>,
) => {
  const currentY = useRef(0);

  const [intersectionInfo, setIntersectionInfo] = useState<
    "outside" | "scroll-down" | "scroll-up"
  >("outside");

  // biome-ignore lint/correctness/useExhaustiveDependencies: Avoid re-rendering
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        const { boundingClientRect, isIntersecting } = entry;

        if (!isIntersecting) {
          setIntersectionInfo("outside");
        } else {
          setIntersectionInfo(
            boundingClientRect.y > currentY.current
              ? "scroll-down"
              : "scroll-up",
          );
        }

        currentY.current = boundingClientRect.y;
      },
      {
        threshold: 0.5,
      },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return intersectionInfo;
};
