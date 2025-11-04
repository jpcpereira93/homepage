import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ProjectItemProps {
  description: string;
  img: string;
  name: string;
  url: string;
}

const ProjectItem = ({ description, img, name, url }: ProjectItemProps) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="group relative h-60 w-full rounded-lg p-4 gap-4 flex items-center  hover:bg-zinc-800/40 hover:cursor-pointer animate-move-in-right">
        <button
          className="absolute top-4 right-4 text-teal-400 hover:cursor-pointer"
          type="button"
        >
          <SquareArrowOutUpRight size={18} />
        </button>

        <div className="relative min-w-30 max-w-30 lg:min-w-40 lg:max-w-40 xl:min-w-50 xl:max-w-50 h-30 lg:h-40 xl:h-50 rounded-lg overflow-hidden">
          <Image alt={name} objectFit="cover" src={img} priority fill />
        </div>
        <div className="flex flex-col p-4 gap-2">
          <h1 className="text-3xl text-slate-200 font-bold group-hover:text-teal-500">
            {name}
          </h1>
          <p className="text-sm whitespace-pre-line text-justify overflow-hidden truncate">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default React.memo(ProjectItem);
