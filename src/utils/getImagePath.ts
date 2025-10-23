export const getImagePath = (path: string) =>
  `${process.env.PAGES_BASE_PATH ?? ""}${path}`;
