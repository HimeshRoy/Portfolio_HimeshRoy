export type ExperienceItem = {
  id: string;
  number: string;
  period: string;
  role: string;
  company: string;
  description: string;
  type: string;
};

export const experience: ExperienceItem[] = [
  {
    id: "experience-01",
    number: "01",
    period: "June - July 2026",
    role: "Full Stack Intern",
    company: "Worlds On Network",
    description:
      "Worked as a Full Stack Intern, gaining hands-on experience in developing web applications and working across frontend and backend technologies.",
    type: "INTERNSHIP",
  },
];