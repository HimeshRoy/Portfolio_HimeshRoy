export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  year: string;
  featured: boolean;
  technologies: string[];
  image?: string;
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    slug: "locallens",
    number: "01",
    title: "LocalLens",
    category: "FULL STACK WEB APPLICATION",
    description:
      "LocalLens is a full stack web application that helps users discover nearby places, share reviews, ratings and photos, and get recommendations. It includes user authentication, admin management, location-based features, secure APIs, and a responsive user interface.",
    year: "2026",
    featured: true,
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "TypeScript",
      "PostgreSQL",
    ],
    github: "https://github.com/HimeshRoy/LocalLens",
    live: "https://locallensai.in",
  },
  {
    slug: "nbca",
    number: "02",
    title: "NBCA — North Bengal Cloud Academy",
    category: "E-LEARNING PLATFORM",
    description:
      "NBCA — North Bengal Cloud Academy is an online E-learning platform.",
    year: "2026",
    featured: true,
    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "TypeScript",
      "PostgreSQL",
    ],
    github: "https://github.com/North-Bengal-Cloud-Academy",
    live: "https://nbca.co.in",
  },
  {
    slug: "loom",
    number: "03",
    title: "Loom",
    category: "E-COMMERCE",
    description:
      "A responsive e-commerce platform with clean UI, product browsing, and smooth user experience.",
    year: "2025",
    featured: true,
    technologies: [
      "HTML5",
      "Bootstrap",
      "CSS",
    ],
    github: "https://github.com/HimeshRoy/Loom",
    live: "https://himeshroy.github.io/Loom/",
  },
  {
    slug: "personal-portfolio",
    number: "04",
    title: "Personal Portfolio",
    category: "PORTFOLIO",
    description:
      "A modern personal portfolio website built to showcase my projects, skills, and journey as a developer. Designed with clean UI, smooth interactions, and responsive layouts to create an engaging user experience.",
    year: "2026",
    featured: true,
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "HTML5",
      "CSS",
      "Framer Motion",
    ],
    github: "https://github.com/HimeshRoy/portfolio-himeshRoy",
    live: "https://himeshroy.dev/",
  },
  {
    slug: "mirth-maker",
    number: "05",
    title: "Mirth & Maker",
    category: "WEB EXPERIENCE",
    description:
      "An event management website focused on event discovery, clean layouts, and engaging user experience.",
    year: "2025",
    featured: false,
    technologies: [
      "HTML5",
      "Bootstrap",
      "CSS",
    ],
    github: "https://github.com/HimeshRoy/MirthMaker",
    live: "https://himeshroy.github.io/MirthMaker/",
  },
  {
    slug: "erp",
    number: "06",
    title: "ERP",
    category: "ENTERPRISE APPLICATION",
    description:
      "A web-based ERP system designed to manage business processes, user data, and workflow operations efficiently.",
    year: "2025",
    featured: false,
    technologies: [
      "HTML5",
      "Bootstrap",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/HimeshRoy/ERP",
    live: "https://erp-chi-sooty.vercel.app/",
  },
  {
    slug: "banana-review",
    number: "07",
    title: "Banana Review",
    category: "ENTERTAINMENT PLATFORM",
    description:
      "A responsive movie and series review platform with clean UI browsing and smooth user experience.",
    year: "2025",
    featured: false,
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "https://github.com/HimeshRoy/Banana-Review",
    live: "https://banana-review.vercel.app/",
  },
  {
    slug: "stone-paper-scissors",
    number: "08",
    title: "Stone Paper Scissors Game",
    category: "INTERACTIVE WEB",
    description:
      "An interactive Stone Paper Scissors game that lets users play against the computer with instant results. Built with pure JavaScript logic and a clean, responsive interface.",
    year: "2025",
    featured: false,
    technologies: [
      "HTML5",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/HimeshRoy/rockPaperScissors.play",
    live: "https://himeshroy.github.io/rockPaperScissors.play/",
  },
  {
    slug: "craveo",
    number: "09",
    title: "Craveo",
    category: "FOOD DELIVERY",
    description:
      "A responsive food delivery frontend designed with clean UI, modern layouts, and smooth user experience using HTML and CSS.",
    year: "2025",
    featured: false,
    technologies: [
      "HTML5",
      "CSS",
    ],
    github: "https://github.com/HimeshRoy/Craveo",
    live: "https://himeshroy.github.io/Craveo/",
  },
  {
    slug: "cooking-page",
    number: "10",
    title: "Cooking Page",
    category: "RECIPE APPLICATION",
    description:
      "A recipe page website built with React and Tailwind CSS using an API for dynamic data.",
    year: "2025",
    featured: false,
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
    ],
    github: "https://github.com/HimeshRoy/RECIPE-API-CALL",
    live: "https://recipe-page-tau-ochre.vercel.app/",
  },
  {
    slug: "streamify",
    number: "11",
    title: "Streamify",
    category: "MUSIC STREAMING",
    description:
      "A basic music streaming platform with modern UI and responsive design.",
    year: "2025",
    featured: false,
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
    ],
    github: "https://github.com/HimeshRoy/Streamify-",
    live: "https://streamify-in.vercel.app/",
  },
];