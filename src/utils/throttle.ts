export const throttle = (func: (...args: any[]) => void, limit: number) => {
  let inThrottle = false;
  return (...args: unknown[]) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};
