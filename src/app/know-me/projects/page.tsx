import { ProjectItem } from "@/components";
import type { IProjectItem } from "@/models";
import { getImagePath } from "@/utils";

const PROJECTS: IProjectItem[] = [
  {
    description:
      "A feather-weight, blazing fast Spotify client. No bloat, no screen pollution.\nJust play and save your favorite tracks, albums and playlists.\n\nMade with React, React-router, Tanstack Query and TawilwindCSS.",
    img: getImagePath("/img/feather-play.png"),
    name: "FeatherPlay",
    url: "https://jpcpereira93.github.io/feather-play/",
  },
];

export default function Projects() {
  return (
    <ul className="h-full xl:overflow-scroll px-5 sm:px-30 xl:pl-0">
      {PROJECTS.map(({ description, img, name, url }) => (
        <ProjectItem
          description={description}
          img={img}
          key={name}
          name={name}
          url={url}
        />
      ))}
    </ul>
  );
}
