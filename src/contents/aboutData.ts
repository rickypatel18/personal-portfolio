import { AboutEducation, AboutExperience, AboutSkillData } from "@/types";
import { FaCode, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

export const skillsData: AboutSkillData[] = [
  {
    id: 1,
    tech: "Frontend",
    icon: FaCode,
    items: ["HTML / CSS", "JavaScript / TypeScript", "React.js / Next.js"],
    font: "font-[montserrat]",
  },
  {
    id: 2,
    tech: "Basic",
    icon: FaGraduationCap,
    items: ["Java", "Python"],
    font: "font-[montserrat]",
  },
  {
    id: 3,
    tech: "Experience with",
    icon: FaGraduationCap,
    items: [
      "Tailwind / Bootstrap",
      "Shadcn-UI / Hero-UI / Material-UI",
      "Motion / GSAP",
    ],
    font: "font-[montserrat]",
  },
  {
    id: 4,
    tech: "Tools & Other",
    icon: FaGraduationCap,
    items: ["Git / GitHub", "Figma", "D3 chart"],
    font: "font-[montserrat]",
  },
  {
    id: 5,
    tech: "Working with",
    icon: FaGraduationCap,
    items: [ "Next.js", "React.js", "Tailwind CSS"],
    font: "font-[montserrat]",
  },
  {
    id: 6,
    tech: "Backend",
    icon: FaLaptopCode,
    items: ["Haven't Mastery in technology"],
    font: "font-[montserrat]",
  },
  {
    id: 7,
    tech: "Database",
    icon: FaLaptopCode,
    items: ["Prisma", "MongoDB", "MySQL"],
    font: "font-[montserrat]",
  },
];

export const experience: AboutExperience[] = [
  {
    id: 1,
    title: "Frontend Internship",
    company: "Techreale • Jan 2024 - April 2024",
    ul: [
      "Led development of multiple web applications using Reactjs.",
      "Mentored by senior developers and conducted code reviews with them.",
      "Work with RESTful APIs.",
      "Built responsive user interfaces with modern JavaScript frameworks",
      "Experienced Optimized & improving performance.",
    ],
  },
];

export const education: AboutEducation[] = [
  {
    id: 1,
    title: "Computer Engineering",
    college: "GEC Dahod • 2020 - 2024",
    ul: [
      "Graduated with honors. Focused on software engineering and web development.","I wanted to do my post-graduation in AI/ML.",
    ],
  },
];
