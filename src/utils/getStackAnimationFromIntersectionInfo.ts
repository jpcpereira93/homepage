export const getStackAnimationFromIntersectionInfo = (
  state: "outside" | "scroll-down" | "scroll-up",
) => {
  if (state === "outside") {
    return "opacity-0";
  }

  return state === "scroll-down"
    ? "animate-slide-in-top"
    : "animate-slide-in-bottom";
};
