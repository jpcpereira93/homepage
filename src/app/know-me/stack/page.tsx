import { TechStack } from "@/components";
import type { ITechStackItem } from "@/models";
import { getImagePath } from "@/utils";

const BACKEND: ITechStackItem[] = [
  { name: "Node.Js", logo: getImagePath("/logos/node.png") },
  { name: "NestJS", logo: getImagePath("/logos/nest.svg") },
  { name: "Express.Js", logo: getImagePath("/logos/express.png") },
  { name: "Koa.Js", logo: getImagePath("/logos/koajs.png") },
  { name: "Python", logo: getImagePath("/logos/python.png") },
];

const FRONTEND: ITechStackItem[] = [
  { name: "JavaScript", logo: getImagePath("/logos/javascript.png") },
  { name: "TypeScript", logo: getImagePath("/logos/typescript.png") },
  { name: "React", logo: getImagePath("/logos/react.png") },
  { name: "Angular", logo: getImagePath("/logos/angular.png") },
  { name: "Next.Js", logo: getImagePath("/logos/nextjs.png") },
  { name: "Redux", logo: getImagePath("/logos/redux.png") },
  { name: "HTML", logo: getImagePath("/logos/html.png") },
  { name: "CSS", logo: getImagePath("/logos/css.png") },
  { name: "Sass", logo: getImagePath("/logos/sass.png") },
  { name: "GraphQL", logo: getImagePath("/logos/graphql.png") },
];

const TESTING: ITechStackItem[] = [
  { name: "Jest", logo: getImagePath("/logos/jest.png") },
  { name: "Vitest", logo: getImagePath("/logos/vitest.svg") },
];

const DATABASE: ITechStackItem[] = [
  { name: "MySQL", logo: getImagePath("/logos/mysql.svg") },
  { name: "PostreSQL", logo: getImagePath("/logos/postgres.png") },
  { name: "MongoDB", logo: getImagePath("/logos/mongodb.png") },
];

const TOOLS: ITechStackItem[] = [
  { name: "Git", logo: getImagePath("/logos/git.png") },
  { name: "Docker", logo: getImagePath("/logos/docker.svg") },
  { name: "Kubernetes", logo: getImagePath("/logos/kubernetes.png") },
  { name: "Terraform", logo: getImagePath("/logos/terraform.png") },
  { name: "Google Cloud Platform", logo: getImagePath("/logos/gcp.png") },
];

export default function Stack() {
  return (
    <div className="animate-slide-in-bottom flex flex-col gap-10 sm:gap-20 py-2 sm:py-5">
      <TechStack index={0} items={FRONTEND} label="Frontend" />
      <TechStack index={1} items={BACKEND} label="Backend" />
      <TechStack index={2} items={TESTING} label="Testing" />
      <TechStack index={3} items={DATABASE} label="Database" />
      <TechStack index={4} items={TOOLS} label="Tools" />
    </div>
  );
}
