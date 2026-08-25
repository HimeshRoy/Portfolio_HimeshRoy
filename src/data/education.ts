export type EducationItem = {
  id: string;
  number: string;
  period: string;
  title: string;
  institution: string;
  description: string;
  type: string;
};

export const education: EducationItem[] = [
  {
    id: "education-01",
    number: "01",
    period: "2025 — Present",
    title: "B.Tech in CSE — AI & ML",
    institution: "Geeta University, Panipat",
    description:
      "Pursuing a Bachelor of Technology in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning.",
    type: "DEGREE",
  },
  {
    id: "education-02",
    number: "02",
    period: "Certified",
    title: "C++ Certification",
    institution: "Cisco",
    description:
      "Completed a Cisco certification focused on C++ programming.",
    type: "CERTIFICATION",
  },
  {
    id: "education-03",
    number: "03",
    period: "2023 — 2025",
    title: "Class 12 — Science (PCM)",
    institution: "Nirmaan Vidya Jyoti School, Siliguri",
    description:
      "Completed higher secondary education in the Science stream with Physics, Chemistry, and Mathematics.",
    type: "SCHOOL",
  },
];