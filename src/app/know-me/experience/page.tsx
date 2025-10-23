import { ProfessionalExperienceItem } from "@/components";
import type { IProfessionalExperienceItem } from "@/models";

const PROFESSIONAL_EXPERIENCE: IProfessionalExperienceItem[] = [
  {
    company: "Wellhub",
    description: `Build and maintain critical components used in the Wellhub billing platform, both on Frontend and Backend (BFF). Work closely with cross-functional teams including frontend and backend developers, designers and product managers, to implement features with best practices in software architecture and development.`,
    endDate: "Oct 2025",
    role: "Senior Front End Software Engineer",
    startDate: "Apr 2025",
    tech: [
      "TypeScript",
      "React",
      "Next.js",
      "NestJS",
      "Sentry",
      "Datadog",
      "AWS Cloudfront",
    ],
  },
  {
    company: "Agentifai",
    description: `Built the micro-fronted responsible for handle real-time data analytics. Created a proprietary micro-frontend integration framework, solving long-lasting integration issues between legacy and new systems. Architectured multiple solutions for new front end features, helping Junior colleagues solving more complex technical problems.`,
    endDate: "Mar 2025",
    role: "Front End Tech Lead",
    startDate: "Oct 2024",
    tech: [
      "TypeScript",
      "React",
      "Remix.run",
      "Next.js",
      "GraphQL",
      "Vite",
      "NestJS",
      "Google Cloud Platform",
    ],
  },
  {
    company: "Agentifai",
    description: `Succesfully led a multi-disciplinary full stack team (from juniors to seniors, including specialists ranging front end, back end, infrastructure and even AI), delivering multiple major projects. Designed the architecture to implement a full data analytics system supporting million of events hourly.`,
    endDate: "Sep 2024",
    role: "Full Stack Team Leader",
    startDate: "Jan 2024",
    tech: [
      "TypeScript",
      "React",
      "Angular",
      "HTML & SCSS",
      "Remix.run",
      "NestJS",
      "RabbitMQ",
      "MongoDB",
      "MySQL",
      "Google Cloud Platform",
    ],
  },
  {
    company: "Agentifai",
    description: `Helped scalating the front end architecture, both performance and development (CI/CD) wise, allowing it to grow from thousand to million events daily and solving some complex growing pain from a fast growing startup. Architectured and built a Design System to be used company wise. Implemented state-of-art patterns like micro-frontends, API Gateways and micro-services to scale the company. Mentored Junior colleagues to ease the transition between old patterns and the new ones.`,
    endDate: "Dec 2023",
    role: "Lead Front End Software Engineer",
    startDate: "Jun 2022",
    tech: [
      "TypeScript",
      "React",
      "Angular",
      "HTML & SCSS",
      "WebSockets",
      "WebRTC",
      "SIP.js",
      "Webpack",
      "Node.js",
      "MySQL",
      "Google Cloud Platform",
    ],
  },
  {
    company: "Agentifai",
    description: `Developed features on the front end supporting thousands of users, creating the necessary micro-services and DB integrations were needed. Worked on a fast-paced and ever-changing start-up environment.`,
    endDate: "May 2022",
    role: "Full Stack Software Engineer",
    startDate: "Oct 2019",
    tech: [
      "JavaScript",
      "TypeScript",
      "React",
      "Angular",
      "HTML & SCSS",
      "WebSockets",
      "Node.js",
      "MongoDB",
      "PostreSQL",
      "Firebase",
    ],
  },
  {
    company: "Wintouch",
    description: `Developed features both on the front end as well as the back end of a critical POS web application. Implemented a multi-platform critical Develop `,
    endDate: "Sep 2019",
    role: "Full Stack Software Engineer",
    startDate: "Sep 2017",
    tech: [
      "JavaScript",
      "TypeScript",
      "Angular",
      "HTML & SCSS",
      "WebSockets",
      ".NET",
      "C#",
      "MySQL",
      "XamarinForms",
      "Microsoft Azure",
    ],
  },
];

export default function Experience() {
  return (
    <ul>
      {PROFESSIONAL_EXPERIENCE.map(
        ({ company, description, endDate, role, startDate, tech }, index) => (
          <li key={`${startDate}-${endDate}`}>
            <ProfessionalExperienceItem
              company={company}
              description={description}
              endDate={endDate}
              index={index}
              role={role}
              startDate={startDate}
              tech={tech}
            />
          </li>
        ),
      )}
    </ul>
  );
}
