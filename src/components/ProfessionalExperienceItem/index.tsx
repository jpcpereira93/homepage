import { Pill } from "../Pill";

export type ProfessionalExperienceItemProps = {
  company: string;
  description: string;
  endDate: string;
  role: string;
  startDate: string;
  tech: string[];
};

export const ProfessionalExperienceItem = ({
  company,
  description,
  endDate,
  role,
  startDate,
  tech,
}: ProfessionalExperienceItemProps) => {
  return (
    <article className="group flex flex-col lg:flex-row px-10 py-5 gap-2 lg:gap-8 rounded-xl hover:bg-neutral-800/50">
      <div className="h-10 w-200 flex items-center">
        <p className="uppercase text-sm font-medium tracking-tight text-slate-500">
          {startDate} - {endDate}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <div className="h-10 flex items-center">
            <h5 className="text-lg font-medium tracking-tight text-slate-300 group-hover:text-teal-300">
              {role} · {company}
            </h5>
          </div>
          <p className="tracking-tight whitespace-pre-wrap text-justify">
            {description}
          </p>
        </div>
        <ul className="flex flex-wrap gap-1">
          {tech.map((value) => (
            <li key={value}>
              <Pill>{value}</Pill>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
