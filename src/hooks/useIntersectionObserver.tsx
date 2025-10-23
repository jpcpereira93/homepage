import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = (
  containerRef: React.RefObject<HTMLElement | null>,
) => {
  const currentY = useRef(0);

  const [intersectionInfo, setIntersectionInfo] = useState([false, true]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Avoid re-rendering
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        setIntersectionInfo([
          entry.isIntersecting,
          entry.boundingClientRect.y > currentY.current,
        ]);

        currentY.current = entry.boundingClientRect.y;
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
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
