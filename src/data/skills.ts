export type SkillGroup = {
  id: string;
  number: string;
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "core-web",
    number: "01",
    title: "Core Web",
    description:
      "The foundations I use to build interfaces and web experiences.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    id: "frontend",
    number: "02",
    title: "Frontend",
    description:
      "Modern frameworks and tools for building responsive digital products.",
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Vite",
      "Bootstrap",
    ],
  },
  {
    id: "backend",
    number: "03",
    title: "Backend",
    description:
      "Server-side technologies for APIs, applications, and backend systems.",
    skills: [
      "Node.js",
      "Express.js",
    ],
  },
  {
    id: "databases",
    number: "04",
    title: "Databases",
    description:
      "Working with relational and document-based data systems.",
    skills: [
      "PostgreSQL",
      "Neon",
      "MongoDB",
    ],
  },
  {
    id: "programming",
    number: "05",
    title: "Programming",
    description:
      "Languages I use for software development, problem solving, and experimentation.",
    skills: [
      "Python",
      "C",
      "C++",
    ],
  },
  {
    id: "creative-tech",
    number: "06",
    title: "Creative Technology",
    description:
      "Interactive graphics, 3D experiences, and visual exploration.",
    skills: [
      "Three.js",
      "Data Visualization",
    ],
  },
  {
    id: "tools",
    number: "07",
    title: "Tools",
    description:
      "Tools that support development, collaboration, design, and analysis.",
    skills: [
      "Git",
      "GitHub",
      "Figma",
      "Canva",
      "Power BI",
    ],
  },
];