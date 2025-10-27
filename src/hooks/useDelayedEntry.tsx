import { useEffect, useState } from "react";

export const useDelayedEntry = (delay: number) => {
  const [isVisible, setIsVisible] = useState<boolean>(delay === 0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (delay > 0) {
      timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, delay);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [delay]);

  return isVisible;
};
