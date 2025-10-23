import { getImagePath } from "./getImagePath";

describe("getImagePath", () => {
  const path = "/test/img.png";

  test("should return the correct prefix", () => {
    vi.stubEnv("PAGES_BASE_PATH", "/prefix");

    expect(getImagePath(path)).toBe(`/prefix${path}`);

    vi.stubEnv("PAGES_BASE_PATH", undefined);
  });

  test("should return an empty prefix", () => {
    expect(getImagePath(path)).toBe(path);
  });
});
