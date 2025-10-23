import { TechStack } from "@/components/TechStack";
import type { ITechStackItem } from "@/models";

const BACKEND: ITechStackItem[] = [
  { name: "Node.Js", logo: "node.png" },
  { name: "NestJS", logo: "nest.svg" },
  { name: "Express.Js", logo: "express.png" },
  { name: "Koa.Js", logo: "koajs.png" },
  { name: "Python", logo: "python.png" },
];

const FRONTEND: ITechStackItem[] = [
  { name: "JavaScript", logo: "javascript.png" },
  { name: "TypeScript", logo: "typescript.png" },
  { name: "React", logo: "react.png" },
  { name: "Angular", logo: "angular.png" },
  { name: "Next.Js", logo: "nextjs.png" },
  { name: "Redux", logo: "redux.png" },
  { name: "HTML", logo: "html.png" },
  { name: "CSS", logo: "css.png" },
  { name: "Sass", logo: "sass.png" },
  { name: "GraphQL", logo: "graphql.png" },
];

const TESTING: ITechStackItem[] = [
  { name: "Jest", logo: "jest.png" },
  { name: "Vitest", logo: "vitest.svg" },
];

const DATABASE: ITechStackItem[] = [
  { name: "MySQL", logo: "mysql.svg" },
  { name: "PostreSQL", logo: "postgres.png" },
  { name: "MongoDB", logo: "mongodb.png" },
];

const TOOLS: ITechStackItem[] = [
  { name: "Git", logo: "git.png" },
  { name: "Docker", logo: "docker.svg" },
  { name: "Kubernetes", logo: "kubernetes.png" },
  { name: "Terraform", logo: "terraform.png" },
  { name: "Google Cloud Platform", logo: "gcp.png" },
];

export default function Stack() {
  return (
    <div className="animate-slide-in-bottom flex flex-col gap-20 py-5">
      <TechStack items={FRONTEND} label="Frontend" />
      <TechStack items={BACKEND} label="Backend" />
      <TechStack items={TESTING} label="Testing" />
      <TechStack items={DATABASE} label="Database" />
      <TechStack items={TOOLS} label="Tools" />
    </div>
  );
}
