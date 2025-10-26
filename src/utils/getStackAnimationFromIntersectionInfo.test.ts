import { getStackAnimationFromIntersectionInfo } from "./getStackAnimationFromIntersectionInfo";

describe("getStackAnimationFromIntersectionInfo", () => {
  test("should handle the container outside the viewport correctly", () => {
    expect(getStackAnimationFromIntersectionInfo("outside")).toBe("opacity-0");
  });

  test("should handle the container getting inside the viewport from a scroll down correctly", () => {
    expect(getStackAnimationFromIntersectionInfo("scroll-down")).toBe(
      "animate-slide-in-top",
    );
  });

  test("should handle the container getting inside the viewport from a scroll up correctly", () => {
    expect(getStackAnimationFromIntersectionInfo("scroll-up")).toBe(
      "animate-slide-in-bottom",
    );
  });
});
